export interface ExperienceJob {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export type TextMessage = {
  id: string;
  role: "user" | "bot";
  type: "text";
  content: string;
};

export type ExperienceMessage = {
  id: string;
  role: "bot";
  type: "experience";
  intro: string;
  jobs: ExperienceJob[];
};

export type Message = TextMessage | ExperienceMessage;

export type Intent =
  | "greeting"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "contact"
  | "resume"
  | "fallback";

export interface IntentResponse {
  id: Intent;
  keywords: string[];
  getResponse: () => string;
  getData?: () => ExperienceJob[];
  followUps: string[];
}

export interface SidebarTopic {
  label: string;
  question: string;
  icon: string;
}
