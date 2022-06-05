import axios from "axios";
import { stringify } from "querystring";

interface Response {
  success: boolean;
  accessToken: string | null;
  refreshToken?: string | null;
  expiresIn?: string | null;
}

const getAccessToken = async (refreshToken: string): Promise<Response> => {
  const endpoint = "https://accounts.spotify.com/api/token";
  try {
    const { data } = await axios.post(
      endpoint,
      stringify({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
      {
        headers: {
          authorization: `Basic ${new Buffer(
            process.env.SPOTIFY_CLIENT_ID +
              ":" +
              process.env.SPOTIFY_CLIENT_SECRET
          ).toString("base64")}`,
        },
      }
    );
    return {
      success: true,
      accessToken: data?.access_token as string,
      refreshToken:
        data?.refresh_token && data?.refresh_token !== refreshToken
          ? data?.refresh_token
          : null,
      expiresIn: data?.expires_in,
    };
  } catch (error: any) {
    console.log("ERROR getAccessToken >> ", error.response);
    return {
      success: false,
      accessToken: null,
    };
  }
};

export default getAccessToken;
