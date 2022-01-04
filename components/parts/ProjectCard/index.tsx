import Bubble from "@components/ui/Bubble";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  name: string;
  image: string;
  isGroupProject: boolean;
  tagline: string;
  createdAt: string;
  description: string;
  license: string;
  live: string;
  source: string;
  stars: string;
  tags: string[];
  updatedAt: string;
}

const ProjectCard = ({
  image,
  name,
  isGroupProject,
  tagline,
  description,
  createdAt,
  license,
  live,
  source,
  stars,
  tags,
  updatedAt,
}: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/${name}`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div className="flex flex-col shadow dark:shadow-[#eeeeee3b] rounded-[20px]">
        <div className="relative w-full">
          <Image
            src={image}
            alt={name}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            height={600}
            width={1200}
            className="rounded-t-[20px] shadow"
          />
          {isGroupProject && (
            <div className="text-white absolute bottom-[20px] right-[10px]">
              <Bubble text="Group Project" />
            </div>
          )}
          <div className="absolute top-[10px] right-[10px]">
            <Bubble text={`Stars: ${stars}`} />
          </div>
        </div>
        <div className="p-[20px]">
          <div className="flex justify-between items-center">
            <h3 className="text-base font-semibold">{name}</h3>
            <span className="text-xs">
              {new Date(createdAt).toLocaleDateString()} -{" "}
              {new Date(updatedAt).toLocaleDateString()}
            </span>
          </div>
          <p className="text-light_gray text-sm font-medium">{tagline}</p>
          <div className="flex flex-wrap mt-[10px]">
            {tags.map((tag, i) => (
              <Bubble text={tag} key={i} />
            ))}
          </div>
          {description && (
            <p className="text-light_gray text-sm font-medium leading-[20px] mt-[10px]">
              {description}
            </p>
          )}
          <div className="mt-[20px]">
            <a
              href={live}
              target="_blank"
              rel="noopenner noreferrer"
              className="text-sm text-primary_light font-semibold mr-[10px]"
            >
              Live App
            </a>
            <a
              href={source}
              target="_blank"
              rel="noopenner noreferrer"
              className="text-sm text-primary_light font-semibold"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
