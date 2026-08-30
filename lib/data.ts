export const profile = {
  name: "Kritin Rane",
  title: "Software Engineer",
  tagline: "AI Systems Fellow @ CodePath",
  location: "New Jersey, USA",
  email: "ranekritin@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/kritin-rane",
    github: "https://github.com/KritinRane",
  },
  about:
    "I build AI systems and full-stack products — from retrieval pipelines and multi-agent tooling to student-facing platforms used by thousands. Currently teaching AI agent design and safety guardrails to a 130-student cohort at CodePath.",
};

export type Experience = {
  role: string;
  org: string;
  location: string;
  period: string;
  type: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    role: "AI Systems Fellow",
    org: "CodePath",
    location: "Remote",
    period: "Aug 2026 — Present",
    type: "Internship",
    bullets: [
      "Facilitate technical instruction across AI agent design, prompt engineering, and safety guardrail concepts for a 130-student cohort.",
      "Lead study halls supporting students through hands-on assignments, reviewing technical material ahead of each session to maintain fluency across AI system architecture and model evaluation topics.",
      "Track student progress and technical blockers across 5 breakout groups, syncing weekly with the Instructional Program Manager to surface recurring gaps and improve session delivery.",
    ],
  },
  {
    role: "AI Engineering Fellow",
    org: "CodePath",
    location: "Remote",
    period: "May 2026 — Present",
    type: "Internship",
    bullets: [
      "Built a production RAG pipeline using ChromaDB and all-MiniLM-L6-v2 to ingest and recursively chunk unstructured campus reviews, optimizing semantic retrieval accuracy.",
      "Engineered multi-tool AI agents and safety layers via Groq (Llama 3.3), implementing strict system prompt guardrails to enforce zero-shot data restrictions and eliminate hallucinations.",
      "Mastered large-scale codebase navigation and open-source workflows, tracing complex multi-service dependencies to debug systemic issues and submit formalized merge requests.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Stevens Student Management System",
    location: "Hoboken, NJ",
    period: "Stevens Institute of Technology",
    type: "Project",
    bullets: [
      "Deployed a centralized career dashboard for 1,200+ Stevens students, consolidating live opportunity data from 10+ distinct sources into a single, low-latency interface.",
    ],
  },
];

export const skills: string[] = [
  "Python",
  "Java",
  "React.js",
  "HTML/CSS",
  "Postgres",
  "Prisma",
  "Bash",
  "Data Analysis",
  "UI/UX Design",
  "Product Management",
  "Communications",
  "Excel/Numbers/Sheets",
  "Adobe Photoshop",
];
