// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import IORedis from "ioredis";
import request from "request";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const redis = new IORedis(process.env.REDIS_URL as string);
  const code = req.query.code || null;

  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        new Buffer(
          process.env.SPOTIFY_CLIENT_ID +
            ":" +
            process.env.SPOTIFY_CLIENT_SECRET
        ).toString("base64"),
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token,
        refresh_token = body.refresh_token,
        expires_in = body.expires_in;

      const options = {
        url: "https://api.spotify.com/v1/me",
        headers: { Authorization: "Bearer " + access_token },
        json: true,
      };

      // use the access token to access the Spotify Web API
      request.get(options, async (error, response, body) => {
        if (body.id !== "1btozxcm2gj1kzu1t2kctpasn")
          throw new Error(
            `${body.display_name} is not allowed to authenticate for this app`
          );
        await redis.set("spotify:refresh_token", refresh_token);
        await redis.set(
          "spotify:access_token",
          access_token as string,
          "EX",
          expires_in as string
        );
      });
      res.redirect("/about");
    } else {
      res.redirect("/");
    }
  });
}
