import HeadMeta from "@components/partials/HeadMeta";
import CurrentlyPlaying from "@components/parts/CurrentlyPlaying";
import Footer from "@components/parts/Footer";
import Navbar from "@components/parts/Navbar";
import Playlists from "@components/parts/Playlists";
import TopTracks from "@components/parts/TopTracks";
import { APP_URL } from "@lib/data";
import { Spotify } from "@lib/types";
import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { SpotifyResponse } from "./api/data/spotify";
import { SpotifyCurrentlyPlayingResponse } from "./api/data/spotify/currently_playing";

interface Props {
  playlists: Spotify.Playlist[];
  topTracks: Spotify.TopTracks[];
}

interface CachedCurrentlyPlaying extends Spotify.CurrentlyPlaying {
  lastUpdated: string;
}

const About: NextPage<any> = ({ playlists, topTracks }: Props) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isPageLoading, setIsPageLoading] = useState<boolean>(true);
  const [currentlyPlaying, setCurrentlyPlaying] =
    useState<Spotify.CurrentlyPlaying>();

  const getCurrentlyPlayingData = async () => {
    setIsPageLoading(true);
    setIsFetching(true);
    const cachedCurrentlyPlayingString =
      localStorage.getItem("currentlyPlaying");
    const cachedCurrentlyPlaying = cachedCurrentlyPlayingString
      ? ((await JSON.parse(
          cachedCurrentlyPlayingString
        )) as CachedCurrentlyPlaying)
      : null;
    if (
      cachedCurrentlyPlaying &&
      new Date().getTime() / 1000 -
        parseInt(cachedCurrentlyPlaying.lastUpdated) <
        60 * 4
    ) {
      setCurrentlyPlaying(cachedCurrentlyPlaying);
      return;
    }
    const response = await fetch(`/api/data/spotify/currently_playing`, {
      method: "POST",
      body: null,
    });
    const data = (await response.json()) as SpotifyCurrentlyPlayingResponse;

    if (data.success) {
      const { success, ...rest } = data;
      localStorage.setItem(
        "currentlyPlaying",
        JSON.stringify({
          ...rest,
          lastUpdated: new Date().getTime() / 1000,
        })
      );
      setCurrentlyPlaying(rest);
    }
    setIsFetching(false);
    setIsPageLoading(false);
  };

  useEffect(() => {
    if (!isFetching && isPageLoading) {
      getCurrentlyPlayingData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-[100vh] font-inter">
      <HeadMeta
        title="Abhinav Rajesh | Full Stack Developer Portfolio"
        description="This is a collection of websites and web apps that help demonstrate Abhinav's skills and abilities as a web developer."
        image=""
        keywords=""
        url=""
      />
      <Navbar />
      <div className="flex px-4 flex-col pt-[86px] text-black dark:text-white dark:bg-gradient-to-tr dark:from-[#111827] dark:to-black min-h-screen">
        <div className="flex flex-col mt-[52px] tablet:max-w-[650px] tablet:mx-auto tablet:w-full">
          <h1 className="text-5xl font-black text-center">Under Work :(</h1>
          <p className="text-lg font-medium text-center mt-[32px]">
            Meanwhile you can checkout my spotify stats :)
          </p>
        </div>
        {currentlyPlaying?.playing && (
          <CurrentlyPlaying currentlyPlaying={currentlyPlaying} />
        )}
        {playlists.length > 0 && <Playlists playlists={playlists} />}
        {topTracks.length > 0 && <TopTracks topTracks={topTracks} />}
        <Footer />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const { data } = await axios.get<SpotifyResponse>(
      `${APP_URL}/api/data/spotify`,
      {
        headers: {
          api_key: process.env.NEXT_PUBLIC_API_KEY as string,
        },
      }
    );

    if (data.success) {
      return {
        props: {
          playlists: data.playlists as Spotify.Playlist[],
          topTracks: data.topTracks as Spotify.TopTracks[],
        },
        revalidate: 1 * 60 * 60,
      };
    } else {
      return {
        props: {
          playlists: [],
          topTracks: [],
        },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      props: {
        playlists: [],
        topTracks: [],
      },
    };
  }
};

export default About;
