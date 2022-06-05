// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { stringify } from "querystring";

const generateRandomString = function (length: number) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const scopes =
    "user-read-currently-playing user-read-recently-played user-library-read user-follow-read";
  const state = generateRandomString(16);
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      stringify({
        response_type: "code",
        client_id: process.env.SPOTIFY_CLIENT_ID,
        scope: scopes,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
        state: state,
      })
  );
}
