import SpotifyCard from "@components/ui/SpotifyCard";
import { Spotify } from "@lib/types";
import Image from "next/image";

interface Props {
  currentlyPlaying: Spotify.CurrentlyPlaying;
}

const CurrentlyPlaying = ({ currentlyPlaying }: Props) => {
  return (
    <div className="flex flex-col mt-[52px] tablet:max-w-[650px] tablet:mx-auto tablet:w-full">
      <h1 className="text-xl font-black text-center border-b mx-auto">
        Currently Playing
      </h1>
      <div className="grid gap-[20px] mt-[30px] grid-cols-2 sm:grid-cols-3">
        <div className="col-start-1 sm:col-start-2 rounded-[6px]">
          <SpotifyCard
            imageUrl={currentlyPlaying.imageUrl as string}
            name={currentlyPlaying.song as string}
            url={currentlyPlaying.url as string}
            description={currentlyPlaying.artist as string}
            explicit={currentlyPlaying.explicit}
          />
        </div>
        {/* <div className="flex justify-center items-center"> 
        <a
          href={currentlyPlaying.url as string}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-200 ease-in-out mt-[30px] md:min-w-[500px] flex items-start p-[30px] dark:hover:bg-white/10 bg-gradient-to-tr from-blue-100 dark:from-white/5 to-blue-700/5 dark:to-white/5 border border-black rounded-[6px] shadow"
        >
          <div className="relative rounded-[6px] overflow-hidden h-[150px] w-[150px]">
            <div className="h-[150px] w-[150px] rounded-[6px] group-hover:brightness-100 brightness-75 duration-200 transition-all group-hover:scale-110">
              <Image
                src={currentlyPlaying.imageUrl as string}
                layout="fill"
                alt={currentlyPlaying.song as string}
              />
            </div>
          </div>
          <div className="flex flex-col px-[20px]">
            <h3 className="text-lg font-semibold">{currentlyPlaying.song}</h3>
            <p className="text-sm">{currentlyPlaying.artist}</p>
          </div>
        </a> 
        </div> */}
      </div>
    </div>
  );
};

export default CurrentlyPlaying;
