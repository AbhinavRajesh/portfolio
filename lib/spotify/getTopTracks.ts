import { Spotify } from "@lib/types";
import axios from "axios";
import { stringify } from "querystring";

interface Response {
  success: boolean;
  topTracks: Spotify.TopTracks[];
}

const getTopTracks = async (accessToken: string): Promise<Response> => {
  const endpoint = "https://api.spotify.com/v1/me/top/tracks?";
  try {
    const { data } = await axios.get(
      endpoint + stringify({ time_range: "short_term", limit: "20" }),
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const tracks = data?.items;
    const topTracks: Spotify.TopTracks[] = tracks?.map((track: any) => {
      const artists = track?.artists?.map((artist: any) => {
        return {
          name: artist?.name,
          profileUrl: artist?.external_urls?.spotify,
        };
      });
      return {
        artists: artists,
        name: track?.name,
        url: track?.external_urls?.spotify,
        imageUrl: track?.album?.images?.[0]?.url ?? "",
      } as Spotify.TopTracks;
    });
    return {
      success: true,
      topTracks: topTracks,
    };
  } catch (error: any) {
    console.log("ERROR getTopTracks >> ", error.response);
    return {
      success: false,
      topTracks: [],
    };
  }
};

export default getTopTracks;
