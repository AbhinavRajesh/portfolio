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
}
