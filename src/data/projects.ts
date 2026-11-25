export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  websiteUrl?: string;
  appStoreUrl?: string;
  screenshots?: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  }[];
};

export const projects: Project[] = [
  {
    title: "What’s The Move",
    description:
      "Built and deployed event ticketing with Stripe checkout and vendor management. Migrated the WordPress site to a full-stack application on AWS, and added features and fixed bugs in the existing iOS app.",
    technologies: ["TypeScript", "Supabase", "Stripe", "AWS", "Swift", "Xcode"],
    websiteUrl: "https://wtmofficial.com/",
  },
  {
    title: "Weight Tracker 4000",
    description:
      "Multi-user Android app for logging weight and calories, setting goals, and visualizing progress. SQLite keeps logs and goals separate by account, and SMS notifications mark milestones.",
    technologies: ["Java", "Android SDK", "SQLite"],
    screenshots: [
      {
        src: "/ProjectPictures/weightTracker4000weightscreen.png",
        alt: "Android weight log with controls to set a goal and add an entry",
        caption: "Weight log and goals",
        width: 373,
        height: 807,
      },
      {
        src: "/ProjectPictures/weightTracker4000trends.png",
        alt: "Android trends screen with a graph of weight measurements over time",
        caption: "Weight trends",
        width: 379,
        height: 839,
      },
    ],
    githubUrl: "https://github.com/Travasauras/CS499-ePortfolio-TravisErwin",
  },
  {
    title: "Astra Pugna",
    description:
      "Native Android real-time strategy game built with a custom OpenGL ES renderer. It features touch-based unit controls, A* pathfinding, fog of war, and AI opponents that gather resources, advance their technology, and attack in waves.",
    technologies: ["C++17", "OpenGL ES 3.0", "Android NDK"],
    screenshots: [
      {
        src: "/ProjectPictures/AstraPugna.png",
        alt: "Astra Pugna match with units, base structures, and barracks controls",
        caption: "Base building and unit production",
        width: 850,
        height: 383,
      },
    ],
    githubUrl: "https://github.com/Travasauras/AstraPugna-android",
  },
  {
    title: "Pirate Treasure Maze",
    description:
      "Deep Q-Network agent that learns to navigate a maze and find treasure. Training uses experience replay, epsilon-greedy exploration, and a target network.",
    technologies: ["Python", "TensorFlow", "Keras", "Deep Reinforcement Learning"],
    screenshots: [
      {
        src: "/ProjectPictures/PirateMazeEfficientTraining.png",
        alt: "Notebook output showing the maze agent reaching a 100% win rate at epoch 245",
        caption: "Training run reached a 100% win rate at epoch 245.",
        width: 951,
        height: 364,
      },
    ],
    githubUrl: "https://github.com/Travasauras/CS370-MachineLearning",
  },
  {
    title: "Developer Portfolio",
    description:
      "This responsive portfolio uses reusable React components and mobile-friendly layouts. GitHub and AWS Amplify automate deployments.",
    technologies: ["React", "Next.js", "TypeScript", "AWS Amplify"],
    githubUrl: "https://github.com/Travasauras/travis-portfolio",
  },
];
