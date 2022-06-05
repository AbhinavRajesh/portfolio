import { Spotify } from "@lib/types";
import axios from "axios";

interface Response {
  success: boolean;
  playlists: Spotify.Playlist[];
}

const getPlaylists = async (
  userId: string,
  accessToken: string
): Promise<Response> => {
  const endpoint = `https://api.spotify.com/v1/users/${userId}/playlists`;
  try {
    const { data } = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const playlists = data?.items?.map((playlist: any) => {
      return {
        name: playlist?.name,
        description: playlist?.description,
        imageUrl: playlist?.images?.[0]?.url ?? "",
        numberOfTracks: playlist?.tracks?.total,
        url: playlist?.external_urls?.spotify,
      } as Spotify.Playlist;
    });

    return {
      success: true,
      playlists: playlists,
    };
  } catch (error: any) {
    console.log("ERROR getPlaylists >> ", error.response);
    return {
      success: false,
      playlists: [],
    };
  }
};

export default getPlaylists;
