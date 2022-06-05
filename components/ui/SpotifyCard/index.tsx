import { Spotify } from "@lib/types";
import Image from "next/image";

type Modify<T, R> = Omit<T, keyof R> & R;

type Props = Modify<
  Spotify.Playlist,
  {
    description?: string;
    numberOfTracks?: number;
  }
>;

const SpotifyCard = ({
  description,
  imageUrl,
  name,
  numberOfTracks,
  url,
}: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col group"
    >
      <div className="h-[200px] overflow-hidden w-[200px] relative mb-[15px] rounded-[6px]">
        <div className="h-full w-full rounded-[6px] group-hover:brightness-100 brightness-75 duration-200 transition-all group-hover:scale-110">
          <Image src={imageUrl as string} alt={name} layout="fill" />
        </div>
      </div>
      <h3 className="font-semibold">{name}</h3>
      <p className="font-normal text-gray-300 mt-[5px]">{description}</p>
      <p className="font-normal text-gray-300">{numberOfTracks} tracks</p>
    </a>
  );
};

export default SpotifyCard;
