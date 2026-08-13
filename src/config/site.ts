const githubRepository = process.env.GITHUB_REPOSITORY;

export const siteConfig = {
  title: "Developer Master Handbook",
  shortTitle: "Master Handbook",
  description:
    "A comprehensive, continuously growing library of programming, DevOps, AI, productivity, and software engineering handbooks.",
  tagline: "Learn. Build. Practice. Master.",
  community: {
    slogan: "Share knowledge. Grow knowledge.",
    promise:
      "Learn freely, use what helps, improve what can be better, and pass it forward for the next generation.",
    contentLicense: {
      name: "CC BY-SA 4.0",
      url: "https://creativecommons.org/licenses/by-sa/4.0/"
    },
    codeLicense: {
      name: "MIT",
      url: "https://opensource.org/license/mit"
    }
  },
  github: {
    repositoryUrl: githubRepository ? `https://github.com/${githubRepository}` : "",
    branch: "master"
  },
  content: {
    rootDirectory: "assets/handbook",
    excludedDirectories: [
      ".git",
      ".github",
      ".astro",
      ".cache",
      "node_modules",
      "dist",
      "build",
      "coverage",
      "public",
      "scripts",
      "src"
    ],
    excludedFiles: ["agents.md", "AGENTS.md", "README.md", "CONTRIBUTING.md", "CHANGELOG.md"]
  },
  features: {
    search: true,
    darkMode: true,
    readingProgress: true,
    tableOfContents: true,
    editOnGitHub: true
  }
} as const;

export type SiteConfig = typeof siteConfig;
