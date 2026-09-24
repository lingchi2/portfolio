export const siteConfig = {
  name: "Maxim Tselichshev",
  email: "maxim@example.com",
  github: "https://github.com/lingchi2",
  telegram: "https://t.me",
  resumeUrl: "/resume.pdf",
  /** Static to avoid SSR/client year mismatches. */
  year: 2026,
} as const;

export const credentials = {
  education: {
    label: "Education",
    title: "Software Engineering",
    detail: "Astana IT University second year student · Backend focus",
  },
  experience: {
    label: "Experience",
    title: "1+ year",
    detail: "Building APIs, databases & backend systems",
  },
} as const;

export const techStack = {
  backend: ["Java", "Spring Boot", "Python", "C++", "PostgreSQL"],
  tools: ["Arch Linux", "Neovim", "Docker", "Git"],
} as const;

/** Flat list for the always-visible skills grid. */
export const allSkills = [
  ...techStack.backend,
  ...techStack.tools,
] as const;

export type ProjectSize = "large" | "medium" | "small";

export type ProjectMedia = {
  src: string;
  type: "image" | "video";
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  size: ProjectSize;
  /**
   * Optional rotating photos/videos from `/public`.
   * Example: `{ src: "/projects/gym/1.webp", type: "image" }`
   *          `{ src: "/projects/gym/demo.mp4", type: "video" }`
   */
  media?: ProjectMedia[];
};

export const projects: Project[] = [
  {
    id: "gym-api",
    title: "Gym & Workout Tracking API",
    description:
      "Used Java and Spring Boot to build a REST API for workout logging, integrating an external nutrition API for calorie calculation and persisting sessions and metrics in PostgreSQL.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "External APIs"],
    size: "large",
    media: [
      // Drop files into public/projects/gym/ then uncomment:
      // { src: "/projects/gym/1.webp", type: "image" },
      // { src: "/projects/gym/2.webp", type: "image" },
      // { src: "/projects/gym/demo.mp4", type: "video" },
    ],
  },
  {
    id: "finance-cli",
    title: "Algorithm Benchmarking Suite",
    description:
      "Used Java and Python to build a performance benchmarking suite that executes time-complexity tests on core sorting algorithms and generates visual execution metrics for large datasets.",
    tags: ["Java", "Python", "Algorithms", "Benchmarking"],
    size: "medium",
    media: [
      { src: "/projects/benchmark/1_time_vs_n.png", type: "image" },
      { src: "/projects/benchmark/2_depth_vs_n.png", type: "image" },
      { src: "/projects/benchmark/3_ratio_vs_n.png", type: "image" },
    ],
  },
  {
    id: "auction-db",
    title: "Auction Platform Schema",
    description:
      "Designed a PostgreSQL database architecture in 3NF for an auction platform—modeling users, listings, bids, and transactions for integrity and scalable querying.",
    tags: ["PostgreSQL", "3NF", "Data Modeling"],
    size: "medium",
    media: [],
  },
  {
    id: "library-system",
    title: "University Library System",
    description:
      "Used Java and JDBC to build a university library management system with transactional persistence for books, loans, and user records.",
    tags: ["Java", "JDBC"],
    size: "small",
    media: [],
  },
];
