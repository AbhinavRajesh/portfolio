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

declare namespace Spotify {
  type TopTracks = {
    artists: {
      name: string;
      profileUrl: string;
    }[];
    url: string;
    name: string;
    imageUrl: string;
    explicit: boolean;
  };

  type Playlist = {
    name: string;
    description: string;
    imageUrl: string;
    url: string;
    numberOfTracks: number;
  };

  type CurrentlyPlaying = {
    playing: boolean;
    song: string | null;
    artist: string | null;
    url: string | null;
    imageUrl: string | null;
    explicit: boolean;
  };
}
