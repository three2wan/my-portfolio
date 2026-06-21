import type { IntentResponse, SidebarTopic } from "../types";
import {
  EXPERIENCE_DATA,
  PROFILE_DATA,
  PROJECTS_DATA,
  SKILLS_DATA,
} from "./portfolio";

export const FALLBACK_TEXT =
  "I'm not sure about that. Try asking about my skills, projects, or experience!";

export const WELCOME_MESSAGE = [
  "Salam sejahtera! Welcome to my portfolio.",
  "",
  `My name is **${PROFILE_DATA.name}**. Ask me anything about my skills, projects, experience or how to get in touch.`,
].join("\n");

export const INITIAL_CHIPS = [
  "Tell me about yourself",
  "What's your tech stack?",
  "Show me your projects",
  "Where have you worked?",
  "How can I reach you?",
];

function buildAbout(): string {
  return [
    "**About Me**",
    "",
    PROFILE_DATA.bio,
    "",
    "A few quick facts:",
    "",
    `- Currently a **${EXPERIENCE_DATA[0].role}** at ${EXPERIENCE_DATA[0].company}`,
    "- Leading and mentoring a team of 4 developers",
    "- Based in Malaysia",
    `- ${PROFILE_DATA.availableForWork ? "Open to new opportunities" : "Not currently looking"}`,
  ].join("\n");
}

function buildSkills(): string {
  const lines = ["I work across the full-stack. Here's a breakdown:"];
  for (const category of SKILLS_DATA) {
    lines.push("", `**${category.title}**`, category.skills.join(" · "));
  }
  return lines.join("\n");
}

function buildProjects(): string {
  const lines = ["Here are a few things I've built:"];
  for (const project of PROJECTS_DATA) {
    lines.push(
      "",
      `**${project.name}**`,
      project.description,
      project.tech.map((t) => `\`${t}\``).join(" · "),
    );
  }
  return lines.join("\n");
}

function buildExperience(): string {
  const lines = ["**Experience**", ""];
  for (const job of EXPERIENCE_DATA) {
    lines.push(`**${job.role}** — ${job.company} (${job.period})`);
    for (const highlight of job.highlights) lines.push(`- ${highlight}`);
    lines.push("");
  }
  return lines.join("\n").trimEnd();
}

function buildContact(): string {
  const linkedinLabel = PROFILE_DATA.linkedin
    .replace(/^https?:\/\/(www\.)?/, "")
    .replace(/\/$/, "");
  const githubLabel = PROFILE_DATA.github
    .replace(/^https?:\/\/(www\.)?/, "")
    .replace(/\/$/, "");
  return [
    "**Get in Touch**",
    "",
    `I'm currently **${PROFILE_DATA.availableForWork ? "available for work" : "not actively looking"}** and happy to connect.`,
    "",
    `- [${PROFILE_DATA.email}](mailto:${PROFILE_DATA.email})`,
    `- [${linkedinLabel}](${PROFILE_DATA.linkedin})`,
    `- [${githubLabel}](${PROFILE_DATA.github})`,
    "- [Download my resume](./Syazwan_Resume.pdf)",
  ].join("\n");
}

function buildResume(): string {
  return [
    "**Resume**",
    "",
    "You can grab my full CV here: [Download Resume (PDF)](./Syazwan_Resume.pdf)",
    "",
    "It covers my experience, skills and education in more detail.",
  ].join("\n");
}

function buildGreeting(): string {
  return [
    "Hi!",
    "",
    "Ask me about my **skills**, **projects**, **experience**, or how to **get in touch** or pick one of the suggestions below.",
  ].join("\n");
}

export const RESPONSES: IntentResponse[] = [
  {
    id: "skills",
    keywords: [
      "skill",
      "skills",
      "tech",
      "stack",
      "language",
      "framework",
      "tool",
      "technology",
      "technologies",
      "expertise",
    ],
    getResponse: buildSkills,
    followUps: [
      "Show me your projects",
      "Where have you worked?",
      "How can I reach you?",
    ],
  },
  {
    id: "projects",
    keywords: [
      "project",
      "projects",
      "built",
      "build",
      "portfolio",
      "apps",
      "application",
    ],
    getResponse: buildProjects,
    followUps: [
      "Tell me about yourself",
      "What's your tech stack?",
      "How can I reach you?",
    ],
  },
  {
    id: "experience",
    keywords: [
      "experience",
      "worked",
      "work history",
      "job",
      "jobs",
      "career",
      "company",
      "companies",
      "role",
      "employment",
    ],
    getResponse: buildExperience,
    getData: () => EXPERIENCE_DATA,
    followUps: [
      "Show me your projects",
      "What's your tech stack?",
      "How can I reach you?",
    ],
  },
  {
    id: "resume",
    keywords: ["resume", "cv", "download"],
    getResponse: buildResume,
    followUps: [
      "How can I reach you?",
      "Where have you worked?",
      "Show me your projects",
    ],
  },
  {
    id: "contact",
    keywords: [
      "contact",
      "email",
      "hire",
      "reach",
      "touch",
      "available",
      "availability",
      "linkedin",
      "github",
      "connect",
      "message",
    ],
    getResponse: buildContact,
    followUps: [
      "Can I see your resume?",
      "Show me your projects",
      "Tell me about yourself",
    ],
  },
  {
    id: "about",
    keywords: [
      "about",
      "yourself",
      "who",
      "bio",
      "background",
      "introduce",
      "you do",
      "story",
    ],
    getResponse: buildAbout,
    followUps: [
      "What's your tech stack?",
      "Show me your projects",
      "Where have you worked?",
    ],
  },
  {
    id: "greeting",
    keywords: [
      "hi",
      "hello",
      "hey",
      "yo",
      "sup",
      "wassap",
      "greetings",
      "howdy",
      "good morning",
      "good evening",
      "salam",
      "selamat pagi",
    ],
    getResponse: buildGreeting,
    followUps: [
      "Tell me about yourself",
      "What's your tech stack?",
      "Show me your projects",
    ],
  },
];

export const FALLBACK_RESPONSE: IntentResponse = {
  id: "fallback",
  keywords: [],
  getResponse: () => FALLBACK_TEXT,
  followUps: [
    "Tell me about yourself",
    "What's your tech stack?",
    "Show me your projects",
    "How can I reach you?",
  ],
};

export const SIDEBAR_TOPICS: SidebarTopic[] = [
  {
    label: "About Me",
    question: "Tell me about yourself",
    icon: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM6 20a6 6 0 0 1 12 0",
  },
  {
    label: "Skills",
    question: "What's your tech stack?",
    icon: "m9 16-4-4 4-4m6 0 4 4-4 4M13 5l-2 14",
  },
  {
    label: "Projects",
    question: "Show me your projects",
    icon: "M4 7a2 2 0 0 1 2-2h3l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z",
  },
  {
    label: "Experience",
    question: "Where have you worked?",
    icon: "M4 8h16v11H4V8Zm5-3h6v3H9V5Zm-5 6h16",
  },
  {
    label: "Contact",
    question: "How can I reach you?",
    icon: "M4 6h16v12H4V6Zm0 1 8 6 8-6",
  },
];
