export interface Project {
  user: string;
  repo: string;
  tagline: string;
  extra: string | null;
  isGroupProject: boolean;
  tags: string[];
  description: string;
  title: string;
  ogimage: string;
  wip: boolean;
}

export interface ProjectInDepth {
  mainImage: string;
  subImages: string[];
  liveLink: string;
  sourceCode: string;
  status: string;
  projectContent: string[] | JSX.Element[] | JSX.Element;
}
