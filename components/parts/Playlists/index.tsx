import SpotifyCard from "@components/ui/SpotifyCard";
import { Spotify } from "@lib/types";

interface Props {
  playlists: Spotify.Playlist[];
}

const Playlists = ({ playlists }: Props) => {
  return (
    <div className="flex flex-col mt-[52px] tablet:max-w-[650px] tablet:mx-auto tablet:w-full">
      <h2 className="text-2xl font-bold">My Playlists</h2>
      <div className="grid gap-[20px] mt-[30px] grid-cols-2 sm:grid-cols-3">
        {playlists.map(
          ({ name, description, imageUrl, numberOfTracks, url }) => (
            <SpotifyCard
              name={name}
              imageUrl={imageUrl}
              url={url}
              description={description}
              numberOfTracks={numberOfTracks}
              key={url}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Playlists;
