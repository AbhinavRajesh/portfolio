import HeadMeta from "@components/partials/HeadMeta";
import Footer from "@components/parts/Footer";
import Navbar from "@components/parts/Navbar";

import { projects, projectsData } from "@lib/data";
import { Project as ProjectType, ProjectInDepth } from "@lib/types";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Loading from "@components/parts/Loading";
import { createElement } from "react";

interface Data extends ProjectType, Omit<ProjectInDepth, "projectContent"> {
  projectContent: string;
}

const Project: InferGetStaticPropsType<typeof getStaticProps> = ({
  data,
}: {
  data: Data | undefined;
}) => {
  const router = useRouter();
  if (router.isFallback) return <Loading data={data} />;

  const content: any[] = JSON?.parse(data?.projectContent ?? "[]");

  return (
    <div className="h-[100vh] font-inter">
      <HeadMeta
        title={`${data?.title} | Abhinav Rajesh`}
        description={data?.description ?? ""}
        image={data?.ogimage ?? ""}
        keywords={data?.tags.join(", ") ?? ""}
        url={`https://abhinavrajesh.com/projects/${data?.repo}`}
      />
      <Navbar />
      <div className="h-full flex px-4 flex-col pt-[46px] text-black dark:text-white dark:bg-gradient-to-tr dark:from-[#111827] dark:to-black">
        <div className="flex flex-col mt-[52px] tablet:max-w-[650px] tablet:mx-auto tablet:w-full items-center">
          <h2 className="font-black text-3xl text-left tablet:text-4xl my-[10px] dark:text-white">
            {data?.title}
          </h2>
          {data?.ogimage && (
            <div className="mt-6 relative h-auto w-full">
              <Image
                src={data?.ogimage ?? ""}
                alt={data?.title + " image"}
                width={800}
                height={400}
                layout="responsive"
                quality={100}
                objectFit={content.length === 0 ? "contain" : "cover"}
                className="rounded-[10px]"
              />
            </div>
          )}
          {content.length !== 0 ? (
            content?.map((item: any) =>
              createElement(
                item.type,
                { key: item.key, className: item.props.className },
                item.props.children
              )
            )
          ) : (
            <div key="0" className="mt-[30px]">
              {data?.description ?? ""}
            </div>
          )}
          {data?.wip && (
            <p className="text-xl font-semibold mt-[60px]">
              Updating the page, would be available soon:{")"}
            </p>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data: ProjectType | undefined = projects.find(({ repo }) => {
    return (
      (params?.projectName as string)?.toLowerCase() === repo.toLowerCase()
    );
  });
  if (!data) {
    return {
      redirect: {
        destination: "/404",
        statusCode: 404,
      },
      props: {
        data: {},
      },
    };
  }

  const projectName: string = (params?.projectName as string)?.toLowerCase();
  const projectData = projectsData[projectName];
  if (projectData) {
    return {
      props: {
        data: {
          ...data,
          ...projectData,
          projectContent: JSON.stringify(projectData?.projectContent),
        },
      },
    };
  } else {
    return {
      props: {
        data: {
          ...data,
          wip: true,
        },
      },
    };
  }
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
    fallback: true,
  };
};

export default Project;
