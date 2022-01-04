import HeadMeta from "@components/partials/HeadMeta";
import Footer from "@components/parts/Footer";
import Navbar from "@components/parts/Navbar";

import fs from "fs";
import gifs from "@lib/gifs.json";

import { projects } from "@lib/data";
import { Project as ProjectType } from "@lib/types";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";

const Project: InferGetStaticPropsType<typeof getStaticProps> = ({
  data,
  gifUrl,
}: {
  data: ProjectType | undefined;
  gifUrl: string;
}) => {
  return (
    <div className="bg-white dark:bg-[#202124] h-[100vh] font-inter">
      <HeadMeta
        title={`${data?.title} | Abhinav Rajesh`}
        description={data?.description ?? ""}
        image={data?.ogimage ?? ""}
        keywords={data?.tags.join(", ") ?? ""}
        url={`https://abhinavrajesh.com/projects/${data?.repo}`}
      />
      <Navbar />
      <div className="flex flex-col px-4 pt-[46px] text-dark dark:text-text_dark dark:bg-[#202124]">
        <div className="flex flex-col mt-[52px] tablet:max-w-[650px] tablet:mx-auto tablet:w-full items-center">
          <h2 className="font-black text-3xl text-center tablet:text-5xl my-[10px] dark:text-white">
            Page under work
          </h2>
          <p className="text-xl font-semibold">Would be available soon :)</p>
          <span className="mt-[30px] font-bold">
            Until then here is some random gif from giphy
          </span>
          <div className="relative w-full h-[400px]">
            <Image
              layout="responsive"
              src={gifUrl}
              height={270}
              width={480}
              alt="Random fail gifs from Giphy"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data: ProjectType | undefined = projects.find(
    ({ repo }) => params?.projectName === repo
  );

  const giphy = {
    baseURL: "https://api.giphy.com/v1/gifs/",
    apiKey: process.env.NEXT_GIPHY_API,
    tag: "fails",
    type: "random",
    rating: "pg-13",
  };
  let giphyURL = encodeURI(
    giphy.baseURL +
      giphy.type +
      "?api_key=" +
      giphy.apiKey +
      "&tag=" +
      giphy.tag +
      "&rating=" +
      giphy.rating
  );

  let gifUrl = "";
  await fetch(giphyURL)
    .then(async (res) => {
      const data = await res.json();
      gifUrl = data.data?.images?.original?.url;
      const id = gifUrl.split("/")[gifUrl.split("/").length - 2];
      const present = gifs.gifs.find((url) => url.includes(id));
      if (!present) {
        gifs.gifs.push(gifUrl);
        fs.writeFileSync("lib/gifs.json", JSON.stringify(gifs, null, 4));
      }
    })
    .catch((err) => {
      console.log(err);
      gifUrl = gifs.gifs[Math.floor(gifs.gifs.length * Math.random())];
    });

  return {
    props: {
      data,
      gifUrl,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = projects.map(({ repo }) => {
    return {
      params: {
        projectName: repo,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default Project;
