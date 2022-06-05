import getAccessToken from "@lib/spotify/getAccessToken";
import getCurrentlyPlaying from "@lib/spotify/getCurrentlyPlaying";
import getPlaylists from "@lib/spotify/getPlaylists";
import getTopTracks from "@lib/spotify/getTopTracks";
import { Spotify } from "@lib/types";
import type { NextApiRequest, NextApiResponse } from "next";

import IORedis from "ioredis";

interface SuccessResponse {
  success: true;
  playlists: Spotify.Playlist[];
  topTracks: Spotify.TopTracks[];
  currentlyPlaying: Spotify.CurrentlyPlaying;
}

interface FailResponse {
  success: false;
  message: string;
}
export type SpotifyResponse = SuccessResponse | FailResponse;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SpotifyResponse>
) {
  const redis = new IORedis(process.env.REDIS_URL as string);
  const userId = "1btozxcm2gj1kzu1t2kctpasn";
  const { api_key } = req.headers;

  if (api_key !== process.env.NEXT_PUBLIC_API_KEY)
    return res.status(403).json({
      success: false,
      message: "Invalid API Key",
    });

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
    const responses = await Promise.all([
      getPlaylists(userId, token),
      getTopTracks(token),
      getCurrentlyPlaying(token),
    ]);

    return res.status(200).json({
      success: true,
      playlists: responses[0].success ? responses[0]?.playlists : [],
      topTracks: responses[1].success ? responses[1]?.topTracks : [],
      currentlyPlaying: responses[2],
    });
  } catch (error) {
    console.log(error);
    console.log("ERROR /api/data/spotify >>", error);
    return res.status(500).json({
      success: false,
      message: "Some error occured, check logs.",
    });
  }
}
