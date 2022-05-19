import { GetStaticProps } from "next";
import Link from "next/link";
import fs from "fs";

import gifs from "@lib/gifs.json";
import Image from "next/image";
import HeadMeta from "@components/partials/HeadMeta";

const Custom404 = ({ gifUrl }: any) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen font-inter px-[16px] text-center dark:bg-[#202124] dark:text-text_dark">
      <HeadMeta
        title="404 | Abhinav Rajesh"
        description="This is the 404 page. This page is probably moved, or still being created, or doesn't exist."
        image=""
        keywords="404, abhianv rajesh, abhinav, developer"
        url="https://abhinavrajesh.com/404"
      />
      <div className="flex flex-col mt-[52px] tablet:max-w-[650px] tablet:mx-auto tablet:w-full items-center">
        <h1 className="text-xl font-semibold">Uhh... This is awkward</h1>
        <span className="font-black text-5xl my-[10px] dark:text-white">
          404
        </span>
        <p>
          This page is probably moved, or still being created, or doesn&apos;t
          exist.
        </p>
        <div className="flex space-x-5 mt-[20px]">
          <Link href="/">
            <a className="text-primary_light">Return to Home</a>
          </Link>
          <a
            className="text-primary_light"
            href="https://blog.abhinavrajesh.com"
          >
            Visit Blog
          </a>
        </div>
        <span className="mt-[30px] mb-[10px] font-bold">
          Or just watch some random gif from giphy
        </span>
        <div className="relative mx-auto w-full h-[400px]">
          <Image
            layout="responsive"
            height={270}
            width={480}
            src={gifUrl}
            alt="Random fail gifs from Giphy"
          />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
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

  let gifUrl: string | null = "";
  await fetch(giphyURL)
    .then(async (res) => {
      const data = await res.json();
      gifUrl = data.data?.images?.original?.url;
      const id = gifUrl?.split("/")?.[gifUrl?.split("/")?.length - 2];
      const present = gifs.gifs.find((url) => url?.includes(id ?? ""));
      if (present) throw Error("Duplicate");
      gifs.gifs.push(gifUrl);
      fs.writeFileSync("lib/gifs.json", JSON.stringify(gifs, null, 4));
    })
    .catch((err) => {
      console.log(err);
      gifUrl = gifs?.gifs?.[Math.floor(gifs?.gifs?.length * Math.random())];
    });

  return {
    props: {
      gifUrl,
    },
  };
};

export default Custom404;
