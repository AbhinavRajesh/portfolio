import { useState } from "react";

import HeadMeta from "@components/partials/HeadMeta";
import { Project } from "@lib/types";

interface Props {
  data: Project | undefined;
}

const Loading = ({ data }: Props) => {
  const [dots, setDots] = useState<string>(".");
  setInterval(() => {
    if (dots.length === 3) setDots(".");
    else setDots(dots + ".");
  }, 500);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen font-inter px-[16px] text-center dark:bg-[#202124] dark:text-text_dark">
      {data ? (
        <HeadMeta
          title={`${data?.title} | Abhinav Rajesh`}
          description={data?.description ?? ""}
          image={data?.ogimage ?? ""}
          keywords={data?.tags.join(", ") ?? ""}
          url={`https://abhinavrajesh.com/projects/${data?.repo}`}
        />
      ) : (
        <HeadMeta
          title="404 | Abhinav Rajesh"
          description="This is the 404 page. This page is probably moved, or still being created, or doesn't exist."
          image=""
          keywords="404, abhianv rajesh, abhinav, developer"
          url="https://abhinavrajesh.com/404"
        />
      )}
      <div className="flex flex-col mt-[52px] tablet:max-w-[650px] tablet:mx-auto tablet:w-full items-center">
        <span className="font-black text-5xl my-[10px] dark:text-white">
          Loading{dots}
        </span>
        <h1 className="text-xl font-semibold">Hold on for a second</h1>
      </div>
    </div>
  );
};

export default Loading;
