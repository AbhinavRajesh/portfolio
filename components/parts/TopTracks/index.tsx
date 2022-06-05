import SpotifyCard from "@components/ui/SpotifyCard";
import { Spotify } from "@lib/types";

interface Props {
  topTracks: Spotify.TopTracks[];
}

const TopTracks = ({ topTracks }: Props) => {
  return (
    <div className="flex flex-col mt-[52px] tablet:max-w-[650px] tablet:mx-auto tablet:w-full">
      <h2 className="text-2xl font-bold">Favourite songs</h2>
      <p>
        Below is an up-to-date collection of my favourite song from the past ~4
        weeks
      </p>
      <div className="grid gap-[20px] mt-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {topTracks.map(({ name, artists, imageUrl, url }) => (
          <SpotifyCard
            name={name}
            imageUrl={imageUrl}
            url={url}
            description={artists?.map(({ name }) => name)?.join(", ") ?? ""}
            key={url}
          />
        ))}
      </div>
    </div>
  );
};

export default TopTracks;
