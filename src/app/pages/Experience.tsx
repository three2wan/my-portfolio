type Job = {
  role: string;
  company: string;
  period: string;
  description: string;
};

const jobs: Job[] = [
  {
    role: "Tech Lead",
    company: "Company Name",
    period: "2022 – Present",
    description:
      "Lead a cross-functional engineering team of 8, driving architecture decisions, code quality standards, and delivery of key product features.",
  },
  {
    role: "Senior Software Engineer",
    company: "Company Name",
    period: "2018 – 2022",
    description:
      "Designed and built microservices handling high-traffic workloads, mentored junior engineers, and introduced automated testing practices.",
  },
  {
    role: "Software Engineer",
    company: "Company Name",
    period: "2015 – 2018",
    description:
      "Developed full-stack features across web and API layers, contributed to system design discussions, and improved CI/CD pipelines.",
  },
  {
    role: "Junior Developer",
    company: "Company Name",
    period: "2014 – 2015",
    description:
      "Built and maintained internal tooling, fixed bugs, and contributed to frontend features under close mentorship.",
  },
];

function Experience() {
  return (
    <div className="px-7 py-7">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <p className="text-gray-500 mt-1">
          10+ years across engineering and leadership roles.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-gray-200" />

        <div className="flex flex-col gap-y-6">
          {jobs.map((job, index) => (
            <div key={index} className="relative pl-10">
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-400" />
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-1 mb-2">
                  <div>
                    <span className="font-semibold text-gray-900">{job.role}</span>
                    <span className="text-gray-400 mx-2">·</span>
                    <span className="text-gray-500 text-sm">{job.company}</span>
                  </div>
                  <span className="text-xs font-medium bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
