import { Project, ProjectInDepth } from "./types";

export const projects: Project[] = [
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
    title: "Aura - See your mood in a whole new light",
    description:
      "We know our mood changes throughout the days. But what if you could see it? Introducing Aura, an easy to use mood tracking app.",
    ogimage: "https://aura-ar.vercel.app/ogimage.jpg",
    wip: true,
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
    title: "Chatbotish - Increase user engagement with your website",
    description:
      "Chatbotish is an easy to use widget to add to your amazing web apps to increase user engagement.",
    ogimage: "https://chatbotish.vercel.app/logo192.png",
    wip: true,
  },
  {
    user: "Nodet-org",
    repo: "Sahaay",
    tagline: "A helping hand for people in need",
    extra: "Over 1.5k+ page visits",
    isGroupProject: true,
    tags: ["JavaScript", "React", "Firebase", "AntD", "TailwindCSS", "Vercel"],
    title: "Sahaay - A helping hand for people in need",
    description:
      "A webapp for helping people in India to find the resources required such as Oxygen, Beds, Ventilators, etc. during this COVID-19 pandemic",
    ogimage: "https://sahaay.xyz/ogimage.jpg",
    wip: true,
  },
  {
    user: "AbhinavRajesh",
    repo: "CryptoStack",
    tagline: "Decentralized Q&A Platform and NFT Marketplace",
    extra: "Got 2nd prize in ByteSynergy Hackathon",
    isGroupProject: true,
    tags: [
      "JavaScript",
      "NextJS",
      "React",
      "Solidity",
      "CELO",
      "Blockchain",
      "IPFS",
      "TailwindCSS",
      "Truffle",
    ],
    title: "Sahaay - A helping hand for people in need",
    description:
      "A webapp for helping people in India to find the resources required such as Oxygen, Beds, Ventilators, etc. during this COVID-19 pandemic",
    ogimage: "https://sahaay.xyz/ogimage.jpg",
    wip: true,
  },
];

export const projectsData: { [projectName: string]: ProjectInDepth } = {
  aura: {
    liveLink: "https://aura-ar.tk",
    sourceCode: "https://github.com/AbhinavRajesh/Aura",
    mainImage: "",
    projectContent: [
      <div key="0" className="mt-[30px]">
        Aura, an easy to use mood tracking app that takes your daily life&apos;s
        mood into account. It allows you to understand yourself better and helps
        you maintain an even mood throughout the day. The app has various
        features such as graphs, statistics, insights, and ambience sounds to
        improve your mood.
      </div>,
    ],
    status: "Working on v2",
    subImages: [],
  },
};
