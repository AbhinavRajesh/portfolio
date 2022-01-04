import { motion } from "framer-motion";
import type { InferGetStaticPropsType } from "next";

import HeadMeta from "@components/partials/HeadMeta";
import Footer from "@components/parts/Footer";
import Navbar from "@components/parts/Navbar";

import { projects } from "@lib/data";
import ProjectCard from "@components/parts/ProjectCard";

const Projects = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="bg-white dark:bg-[#202124] h-[100vh] font-inter">
      <HeadMeta
        title="Projects | Abhinav Rajesh"
        description="This is a collection of websites and web apps that help demonstrate Abhinav's skills and abilities as a web developer."
        image=""
        keywords="abhinav, abhinav rajesh, abhinav rajesh projects, abhinav projects"
        url="https://abhinavrajesh.com/projects"
      />
      <Navbar />
      <div className="flex flex-col px-4 pt-[46px] text-dark dark:text-text_dark dark:bg-[#202124]">
        <div className="flex flex-col mt-[52px] tablet:max-w-[650px] tablet:mx-auto tablet:w-full">
          <motion.h2
            className="text-xl font-bold text-black dark:text-white"
            transition={{
              duration: 0.3,
              delay: 0,
              type: "tween",
            }}
            initial={{
              y: "30px",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
          >
            Projects
          </motion.h2>
          {data.length === 0 ? (
            <div className="flex flex-col mt-[20px]">
              <h3 className="text-base font-semibold">
                Github API Rate limit reached :(
              </h3>
              <p className="text-sm font-medium text-light_gray">
                Please try again after sometime
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-[20px] mt-[20px]">
              {data.map(
                (
                  {
                    name,
                    image,
                    isGroupProject,
                    tagline,
                    createdAt,
                    description,
                    extra,
                    license,
                    live,
                    source,
                    stars,
                    tags,
                    updatedAt,
                  },
                  i
                ) => (
                  <ProjectCard
                    name={name}
                    image={image}
                    isGroupProject={isGroupProject}
                    tagline={tagline}
                    description={extra === null ? description : extra}
                    createdAt={createdAt}
                    updatedAt={updatedAt}
                    license={license}
                    live={live}
                    source={source}
                    stars={stars}
                    tags={tags}
                    key={i}
                  />
                )
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const requests = projects.map(({ user, repo }) =>
      fetch(`https://api.github.com/repos/${user}/${repo}`).then((res) =>
        res.json()
      )
    );
    const jsonData = await Promise.all(requests);
    if (jsonData[0]?.message?.includes("API rate limit")) {
      return {
        props: {
          data: [],
        },
        revalidate: 10,
      };
    }
    const data = jsonData.map((data, i) => ({
      source: data.html_url,
      name: data.name,
      tagline: projects[i].tagline,
      isGroupProject: projects[i].isGroupProject,
      description: data.description,
      extra: projects[i].extra,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
      live: data.homepage,
      stars: data.stargazers_count,
      license: data.license?.name ?? null,
      tags: projects[i].tags,
      image: `https://opengraph.githubassets.com/1/${projects[i].user}/${projects[i].repo}`,
    }));
    return {
      props: {
        data: data,
      },
      revalidate: 1 * 60 * 60,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: [],
      },
    };
  }
}

export default Projects;
