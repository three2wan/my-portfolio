export interface ProfileData {
  name: string;
  tagline: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  availableForWork: boolean;
}

export interface SkillCategory {
  title: string;
  color: "blue" | "emerald" | "purple" | "amber" | "rose";
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  highlight?: string;
}

export const PROFILE_DATA: ProfileData = {
  name: "Syazwan Jamil",
  tagline: "Lead Engineer",
  bio: "A software developer with experience designing, implementing and supporting interactive application technologies through understanding of consumer behavior and interpreting research, from initiation to completion. Proven leadership capabilities in guiding and mentoring team members, fostering collaboration, and ensuring the delivery of high-quality software solutions.",
  email: "syazwan_jamil88@yahoo.com",
  github: "https://github.com/three2wan",
  linkedin: "https://www.linkedin.com/in/syazwanjamil/",
  availableForWork: true,
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Frontend",
    color: "blue",
    skills: ["React", "TypeScript", "jQuery", "Tailwind CSS", "HTML / CSS"],
  },
  {
    title: "Backend",
    color: "emerald",
    skills: [
      "Node.js",
      "Laravel",
      "Codeigniter",
      ".NET / C#",
      "REST APIs",
      "RabbitMQ",
      "MySQL",
      "SQL Server",
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "purple",
    skills: [
      "AWS",
      "Microsoft Azure",
      "AliCloud",
      "Docker",
      "CI/CD",
      "BitBucket",
      "Git",
      "Linux",
      "Jira",
      "Postman",
    ],
  },
  {
    title: "Leadership",
    color: "amber",
    skills: [
      "Team Management",
      "Code Reviews",
      "System Design",
      "Agile / Scrum",
      "Mentoring",
      "Architecture",
    ],
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "Lead Engineer",
    company: "Dapat Vista(M) Sdn Bhd",
    period: "Jan 2023 - Present",
    highlights: [
      "Leading the development of centralized bail payment system and multi-channel communication platform, overseeing code quality, architecture, and delivery planning",
      "Managing a cross-functional team of 4 developers, with a focus on mentorship, performance growth and knowledge sharing",
      "Collaborating with stakeholders to translate business needs into scalable, maintainable technical solutions",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Dapat Vista(M) Sdn Bhd",
    period: "Mar 2020 - Jan 2023",
    highlights: [
      "Developed a multi-channel communication platform using Node.js and React to efficiently process thousands of SMS broadcasting requests daily via portal and API",
      "Developed a user-friendly interface for an online bail payment application using Laravel, TypeScript with React and Tailwind CSS",
      "Integrated payment gateway with bank partners through APIs and host-to-host (H2H) technologies",
    ],
  },
  {
    role: "Software Engineer",
    company: "Twistcode Technologies Sdn Bhd",
    period: "Nov 2017 - Mar 2020",
    highlights: [
      "Built a training simulation system on Microsoft HoloLens using Unity game engine to predict and respond to potential damage conditions in industrial equipment",
      "Designed and developed a backend API using .NET and MSSQL Server, ensuring high code quality through rigorous testing and best practices",
    ],
  },
  {
    role: "Application Support Analyst",
    company: "DHL IT Services (Asia-Pacific) Sdn Bhd",
    period: "Oct 2016 - Oct 2017",
    highlights: [
      "Provide 2nd level support for eCommerce application at DHL IT Services",
      "Ensure that SLA metrics are met, all incidents are resolved according to the best practices of incident management and resolved within agreed time frames",
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    name: "Online Bail Payment Platform",
    description:
      "A user-friendly platform for processing court bail payments online, built end to end with a Laravel backend and a TypeScript + React frontend.",
    tech: ["Laravel", "React", "TypeScript", "Tailwind", "MySQL"],
  },
  {
    name: "Multi Channel Communication Messaging & Broadcast Platform",
    description:
      "A multi channel communication messaging platform that processes thousands of broadcasting requests and powers on-demand information services for users.",
    tech: ["React", "Node.js", "RabbitMQ", "MySQL"],
  },
  {
    name: "Bank Payment Gateway Integration",
    description:
      "Integrations with bank partners through public APIs and host-to-host (H2H) technologies to settle payments under a strict service window.",
    tech: [
      "REST APIs",
      "Host-to-Host",
      "Laravel",
      "Encryption",
      "Authentication",
    ],
  },
];
