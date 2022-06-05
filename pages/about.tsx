import HeadMeta from "@components/partials/HeadMeta";
import CurrentlyPlaying from "@components/parts/CurrentlyPlaying";
import Footer from "@components/parts/Footer";
import Navbar from "@components/parts/Navbar";
import Playlists from "@components/parts/Playlists";
import TopTracks from "@components/parts/TopTracks";
import { APP_URL } from "@lib/data";
import { Spotify } from "@lib/types";
import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import { SpotifyResponse } from "./api/data/spotify";

interface Props {
  playlists: Spotify.Playlist[];
  topTracks: Spotify.TopTracks[];
  currentlyPlaying: Spotify.CurrentlyPlaying;
}

const About: NextPage<any> = ({
  playlists,
  topTracks,
  currentlyPlaying,
}: Props) => {
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
      {/* text-dark dark:text-text_dark */}
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

export const getServerSideProps: GetServerSideProps = async () => {
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
          playlists: data.playlists,
          topTracks: data.topTracks,
          currentlyPlaying: data.currentlyPlaying,
        },
      };
    } else {
      return {
        props: {},
      };
    }
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};

export default About;
