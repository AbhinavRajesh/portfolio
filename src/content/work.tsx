import AccentLink from "@/components/ui/accent-link";
import type { WorkEntry } from "@/features/work-list/work-list";

export const work: WorkEntry[] = [
  {
    company: "Google",
    role: "Software Engineer II",
    period: "May 2026 — Present",
    companyUrl: "https://google.com",
    tags: ["Full-time", "Hybrid"],
    summary: <>Joining a new team as a fullstack engineer.</>,
  },
  {
    company: "Victoria's Secret & Co.",
    role: "Frontend Developer",
    period: "Jun 2023 — May 2026",
    companyUrl: "https://www.victoriassecret.com",
    tags: ["Full-time", "Remote"],
    summary: (
      <>
        Shipped accessibility, auth, and analytics across the Victoria&apos;s
        Secret storefront. Most recently a core contributor on the architecture
        team for the UFE (Unified Frontend Experience) initiative.
      </>
    ),
    bullets: [
      <>
        Enhanced accessibility of the main VS website —{" "}
        <span className="text-foreground">10% increase in retention</span> among
        users with disabilities.
      </>,
      <>
        Implemented &quot;Keep me signed in&quot; —{" "}
        <span className="text-foreground">$13.6M annualized impact</span>.
      </>,
      <>
        Integrated OTP-based auth —{" "}
        <span className="text-foreground">$12.6M impact</span>, 27% more
        sign-ins, 84% reduction in forgot-password support, ~4× more account
        creations, and 50%+ users preferring OTP over passwords.
      </>,
      <>
        Core contributor to the architecture team migrating analytics from
        Tealium utag to an{" "}
        <span className="text-foreground">Event-Driven Data Layer (EDDL)</span>{" "}
        — ~$70K annual savings.
      </>,
      <>
        Supported onboarding of frontend devs to EDDL via documentation, code
        reviews, and mentoring.
      </>,
      <>Contributed to the team-wide React 16 → 18 migration.</>,
      <>
        Core contributor on the <span className="text-foreground">UFE</span>{" "}
        initiative — migrating the codebase from React to React Native to share
        a single codebase across web and app.
      </>,
    ],
    stack: [
      "React",
      "React Native",
      "TypeScript",
      "TailwindCSS",
      "NativeWind",
      "GluestackUI",
      "Jest",
    ],
  },
  {
    company: "GitHub",
    role: "Consultant",
    period: "Feb 2026 — Apr 2026",
    companyUrl: "https://github.com",
    tags: ["Freelance", "Remote"],
    summary: (
      <>
        Migrated the{" "}
        <AccentLink href="https://githubuniverse.com">
          GitHub Universe 2025
        </AccentLink>{" "}
        codebase to build the{" "}
        <AccentLink href="https://githubconstellation.com">
          GitHub Constellation India 2026
        </AccentLink>{" "}
        site — a one-day developer event featuring{" "}
        <span className="text-foreground">
          Jay Parikh (EVP, Core AI at Microsoft)
        </span>{" "}
        and <span className="text-foreground">Kyle Daigle (COO, GitHub)</span>.
      </>
    ),
    bullets: [
      <>
        Designed and built session listing, session detail, and registration
        pages.
      </>,
      <>Designed Open Graph images for sessions in Figma.</>,
      <>Added embedded YouTube live keynote streaming support.</>,
      <>
        Ensured accessibility compliance and optimized image assets for
        performance.
      </>,
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Primer",
      "GSAP",
      "Figma",
      "GitHub Actions",
    ],
  },
  {
    company: "GitHub",
    role: "Consultant",
    period: "Jan 2024 — Oct 2024",
    companyUrl: "https://github.com",
    tags: ["Freelance", "Remote"],
    summary: (
      <>
        Led the design and development of{" "}
        <AccentLink href="https://githubconstellation.com">
          GitHub Constellation India 2024
        </AccentLink>{" "}
        — India&apos;s largest open-source developer conference, with a keynote
        by <span className="text-foreground">GitHub CEO Thomas Dohmke</span>.
      </>
    ),
    bullets: [
      <>Built a dynamic Open Graph image generation module for the site.</>,
      <>
        Structured the site as a reusable template, used for{" "}
        <span className="text-foreground">Constellation South Africa 2024</span>
        .
      </>,
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Figma",
      "GitHub Actions",
    ],
  },
  {
    company: "GitHub",
    role: "DevRel Engineer",
    period: "Feb 2022 — Jun 2023",
    companyUrl: "https://github.com",
    tags: ["Internship", "Remote"],
    summary: (
      <>
        Designed and built{" "}
        <AccentLink href="https://githubindia.com">githubindia.com</AccentLink>{" "}
        and{" "}
        <AccentLink href="https://githubbrasil.com">
          githubbrasil.com
        </AccentLink>
        , serving as key hubs for{" "}
        <span className="text-foreground">10M+ developers in India</span> and{" "}
        <span className="text-foreground">3M+ in Brazil</span>.
      </>
    ),
    bullets: [
      <>
        Single-handedly designed and developed both regional sites end-to-end.
      </>,
      <>
        Built a Slack bot for URL shortening and other internal tools that
        reduced manual work for Hubbers by ~5%.
      </>,
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Primer",
      "Jekyll",
      "Ruby",
      "Azure",
      "GitHub API",
    ],
  },
  {
    company: "GrowthCX",
    role: "Software Engineer",
    period: "Mar 2021 — Jan 2022",
    companyUrl: "https://growthcx.com",
    tags: ["Internship", "Remote"],
    summary: (
      <>
        Built the entire frontend of{" "}
        <AccentLink href="https://suitejar.com">SuiteJar</AccentLink> from a
        design, plus marketing and client sites.
      </>
    ),
    bullets: [
      <>Created the full SuiteJar frontend from design to production.</>,
      <>
        Migrated multiple pages to WordPress —{" "}
        <span className="text-foreground">25% increase in manageability</span>{" "}
        and <span className="text-foreground">20% reduction</span> in
        maintenance costs for GrowthCX and clients.
      </>,
    ],
    stack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Redux",
      "Ant Design",
      "WordPress",
      "Node.js",
    ],
  },
];
