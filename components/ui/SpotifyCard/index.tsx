import { Spotify } from "@lib/types";
import Image from "next/image";
import { MdExplicit } from "react-icons/md";

type Modify<T, R> = Omit<T, keyof R> & R;

type Props = Modify<
  Spotify.Playlist,
  {
    description?: string;
    numberOfTracks?: number;
    explicit?: boolean;
  }
>;

const SpotifyCard = ({
  description,
  imageUrl,
  name,
  numberOfTracks,
  url,
  explicit,
}: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col group"
    >
      <div className="aspect-square overflow-hidden w-full relative mb-[15px] rounded-[6px]">
        <div className="aspect-square w-full rounded-[6px] group-hover:brightness-100 brightness-75 duration-200 transition-all group-hover:scale-110">
          <Image
            src={imageUrl as string}
            alt={name}
            layout="fill"
            className="aspect-square"
          />
        </div>
      </div>
      <h3 className="font-semibold">
        {explicit && (
          <MdExplicit className="inline -mt-[3px] mr-1 text-gray-300" />
        )}
        {name} •
        {description && (
          <span className="font-normal text-xs text-gray-400 mt-[5px]">
            {" "}
            {description}
          </span>
        )}
      </h3>
      {numberOfTracks && (
        <p className="font-normal text-xs text-gray-400">
          {numberOfTracks} tracks
        </p>
      )}
    </a>
  );
};

export default SpotifyCard;
