export const projects: {
  user: string;
  repo: string;
  tagline: string;
  extra: string | null;
  isGroupProject: boolean;
  tags: string[];
}[] = [
  {
    user: "AbhinavRajesh",
    repo: "Aura",
    tagline: "See your mood in a whole new light",
    extra: "600+ users, 1.4k+ page visits and over 100 upvotes on product hunt",
    isGroupProject: false,
    tags: [
      "TypeScript",
      "React",
      "Clerk.dev",
      "Chart.js",
      "AntD",
      "Firestore",
      "TailwindCSS",
      "Vercel",
    ],
  },
  {
    user: "AbhinavRajesh",
    repo: "Chatbotish",
    tagline: "Increase user engagement with Chatbotish",
    extra: null,
    isGroupProject: false,
    tags: [
      "TypeScript",
      "React",
      "NextJS",
      "Auth0",
      "GeistUI",
      "TailwindCSS",
      "Vercel",
    ],
  },
  {
    user: "Nodet-org",
    repo: "Sahaay",
    tagline: "A helping hand for people in need",
    extra: "Over 1.5k+ page visits",
    isGroupProject: true,
    tags: ["JavaScript", "React", "Firebase", "AntD", "TailwindCSS", "Vercel"],
  },
  {
    user: "AbhinavRajesh",
    repo: "Classroom",
    tagline: "Google Classroom Clone",
    extra: null,
    isGroupProject: false,
    tags: ["JavaScript", "React", "ExpressJS", "NodeJS"],
  },
];
