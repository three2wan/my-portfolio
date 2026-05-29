type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: string[];
};

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    color: "bg-blue-50 border-blue-100",
    icon: (
      <svg fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-blue-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    skills: ["React", "TypeScript", "Vue.js", "Next.js", "Tailwind CSS", "HTML / CSS"],
  },
  {
    title: "Backend",
    color: "bg-emerald-50 border-emerald-100",
    icon: (
      <svg fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-emerald-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    skills: ["Node.js", "Java", ".NET / C#", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    color: "bg-purple-50 border-purple-100",
    icon: (
      <svg fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-purple-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "GitHub Actions", "Linux"],
  },
  {
    title: "Leadership",
    color: "bg-amber-50 border-amber-100",
    icon: (
      <svg fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-amber-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    skills: ["Team Management", "Code Reviews", "System Design", "Agile / Scrum", "Mentoring", "Architecture"],
  },
];

function Skill() {
  return (
    <div className="px-7 py-7">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
        <p className="text-gray-500 mt-1">
          Technologies and practices I've worked with across 10+ years.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className={`rounded-lg border p-4 ${cat.color} transition-all hover:shadow-md`}
          >
            <div className="flex items-center gap-x-2 mb-3">
              {cat.icon}
              <span className="font-semibold text-gray-800">{cat.title}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-white border border-gray-200 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
