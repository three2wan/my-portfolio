type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack B2C marketplace with product catalogue, cart, payments, and an admin dashboard. Led a team of 5 engineers from architecture to production.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"],
    link: "#",
  },
  {
    title: "DevOps Automation Suite",
    description:
      "Internal tooling to automate CI/CD pipelines, infrastructure provisioning, and deployment workflows — cutting release time from hours to minutes.",
    tags: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Go"],
    link: "#",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description:
      "Live metrics ingestion and visualisation platform handling millions of events per day, with customisable dashboards and alerting.",
    tags: ["React", "GraphQL", "Redis", "AWS Lambda", "TypeScript"],
    link: "#",
  },
];

function Project() {
  return (
    <div className="px-7 py-7">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        <p className="text-gray-500 mt-1">
          A selection of systems I've designed and shipped.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-lg border border-gray-200 bg-white p-5 flex flex-col gap-y-3 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between gap-x-2">
              <h3 className="font-semibold text-gray-900 text-base leading-tight">
                {project.title}
              </h3>
              <a
                href={project.link}
                aria-label={`View ${project.title}`}
                className="flex-shrink-0 text-gray-400 hover:text-gray-700 transition-colors"
              >
                <svg
                  fill="none"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
