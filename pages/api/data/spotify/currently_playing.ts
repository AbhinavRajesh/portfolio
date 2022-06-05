import getCurrentlyPlaying from "@lib/spotify/getCurrentlyPlaying";
import { Spotify } from "@lib/types";
import { NextApiRequest, NextApiResponse } from "next";

import IORedis from "ioredis";
import getAccessToken from "@lib/spotify/getAccessToken";

export type SpotifyCurrentlyPlayingResponse = SuccessResponse | FailureResponse;

interface SuccessResponse extends Spotify.CurrentlyPlaying {
  success: true;
}

interface FailureResponse {
  success: false;
  message?: string;
}

interface Response {
  success: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SpotifyCurrentlyPlayingResponse>
) {
  if (req.method !== "POST")
    return res.status(404).json({
      success: false,
      message: `${req.method} not allowed`,
    });

  const host =
    process.env.NODE_ENV === "development"
      ? "localhost:3000"
      : "abhinavrajesh.com";

  if (!req.headers.host?.includes(host))
    return res.status(403).json({
      success: false,
      message: `unauthorized`,
    });

  const redis = new IORedis(process.env.REDIS_URL as string);
  try {
    const [accessToken, refreshToken] = await redis.mget(
      "spotify:access_token",
      "spotify:refresh_token"
    );
    let token: string;
    if (!accessToken && refreshToken) {
      // Access token expired, create new access token
      const {
        success,
        accessToken,
        expiresIn,
        refreshToken: newRefreshToken,
      } = await getAccessToken(refreshToken);

      if (success) {
        await redis.set(
          "spotify:access_token",
          accessToken as string,
          "EX",
          expiresIn as string
        );
        token = accessToken as string;
        if (newRefreshToken) {
          await redis.set("spotify:refresh_token", newRefreshToken);
        }
      } else {
        throw new Error("Some error occured while fetching the access token");
      }
    } else if (accessToken) {
      // When access token is valid
      token = accessToken;
    } else {
      // No access or refresh token present in redis
      throw new Error("No access token/refresh token found");
    }
    await redis.quit();

    const data = await getCurrentlyPlaying(token);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error, check logs",
    });
  }
}
