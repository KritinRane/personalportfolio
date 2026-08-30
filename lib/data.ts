export const profile = {
  name: "Kritin Rane",
  title: "Software Engineer",
  location: "New Jersey, USA",
  email: "ranekritin@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/kritin-rane",
    github: "https://github.com/KritinRane",
  },
  about:
    "Computer Science student (AI & ML concentration). I build clean, useful products — backend infra, data pipelines, and AI tooling. I joined NerdsToGo, a tech consultancy, in summer 2026, and I'm actively looking for AI/ML, software engineering, and technical PM roles.",
};

export type Experience = {
  role: string;
  org: string;
  location: string;
  period: string;
  current: boolean;
  description: string;
  tags: string[];
};

export const experiences: Experience[] = [
  {
    role: "AI Systems Fellow",
    org: "CodePath",
    location: "Remote",
    period: "Aug 2026 — Present",
    current: true,
    description:
      "Facilitating technical instruction in AI agent design, prompt engineering, and safety guardrails for a 130-student cohort.",
    tags: ["AI Agents", "Education"],
  },
  {
    role: "Software Engineering Intern",
    org: "NerdsToGo",
    location: "Princeton, NJ",
    period: "Jun 2026 — Aug 2026",
    current: false,
    description:
      "Built an automated daily lead-generation pipeline in Python that scraped municipal and school district portals for IT contract opportunities and emailed new leads.",
    tags: ["Python", "Automation"],
  },
  {
    role: "Quantitative Research Developer",
    org: "Stevens Student Managed Investment Fund",
    location: "Hoboken, NJ",
    period: "Mar 2026 — Present",
    current: true,
    description:
      "Building an automated sector-forecasting pipeline with FastAPI and ClickHouse that supports a $1.2M equity portfolio and cut manual analysis effort by 75%.",
    tags: ["FastAPI", "ClickHouse", "Python"],
  },
  {
    role: "Head of Operations",
    org: "Stevens Software Engineer Club",
    location: "Hoboken, NJ",
    period: "Mar 2026 — Present",
    current: true,
    description:
      "Directing a university-wide hackathon and the SDLC across 5 concurrent club software projects, shipping 3 MVPs with 4+ partner clubs.",
    tags: ["Leadership", "Agile"],
  },
  {
    role: "Full-Stack Developer",
    org: "Blueprint",
    location: "Hoboken, NJ",
    period: "Sep 2025 — Jan 2026",
    current: false,
    description:
      "Built schema-mapping and file-upload workflows in React and TypeScript for an open-source tool standardizing service data for Open Referral.",
    tags: ["React", "TypeScript", "Docker"],
  },
  {
    role: "Product Management Intern",
    org: "SharpStakes",
    location: "Ontario, Canada",
    period: "Nov 2024 — Mar 2025",
    current: false,
    description:
      "Automated client-record processing with Python and SQL and built analytics dashboards to track user retention trends.",
    tags: ["Python", "SQL", "Analytics"],
  },
];

export type Project = {
  name: string;
  period: string;
  description: string;
  tags: string[];
  badge?: string;
  url?: string;
};

export const projects: Project[] = [
  {
    name: "Production RAG System",
    period: "Jul 2026 — Present",
    description:
      "Production RAG pipeline over unstructured campus reviews using ChromaDB and Llama 3.3 via Groq, with grounded generation and an evaluation framework for retrieval precision.",
    tags: ["Python", "ChromaDB", "Groq"],
    url: "https://github.com/KritinRane/ai201-project1-unofficial-guide-starter",
  },
  {
    name: "Hitch",
    period: "Mar 2026 — Present",
    description:
      "Full-stack safety platform matching students with verified travel companions using geospatial (Haversine) matching and a Google Gemini AI safety companion.",
    tags: ["Next.js", "Node.js", "Snowflake", "Gemini AI"],
    badge: "2nd Place — University-Wide Hackathon",
    url: "https://github.com/AaravL/QuackHacks-HomeSafely",
  },
  {
    name: "Snooze",
    period: "Dec 2025 — Present",
    description:
      "Sleep-optimization platform generating personalized schedules from circadian-rhythm algorithms, backed by a Flask API and Chart.js visualizations.",
    tags: ["React", "Python", "Flask", "Chart.js"],
  },
  {
    name: "DuckFitnessPal",
    period: "Nov 2025 — Mar 2026",
    description:
      "Macro-tracking app ingesting 13,000+ Stevens dining items via the DineOnCampus API, with a Python sync pipeline and a real-time TDEE-based dashboard.",
    tags: ["Next.js", "TypeScript", "Prisma", "Python"],
    url: "https://github.com/KritinRane/DuckFitnessPal",
  },
  {
    name: "Algorithmic Trading Backtester",
    period: "Sep 2025 — Oct 2025",
    description:
      "Full-stack app for configuring and visualizing algorithmic trading backtests, with a FastAPI backend for trade simulation and a React frontend for real-time analytics.",
    tags: ["Python", "FastAPI", "React", "JavaScript"],
    url: "https://github.com/KritinRane/Fullstack-Backtester",
  },
];
