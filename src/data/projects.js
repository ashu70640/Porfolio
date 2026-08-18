/**
 * Project entries for the portfolio.
 * Add new projects here to extend the site.
 */
export const projects = [
  {
    id: "1",
    title: "Irecon – Multi-Tenant SaaS Billing & Reconciliation Platform",
    description:
      "Multi-tenant billing and reconciliation platform for a multi-country Airtel-Africa SaaS client, processing 500+ invoices daily at 1K+ requests/day. Owns core billing-calculation logic and reconciliation matching that compares customer-provided billing data against towerco invoices to surface deduction values.",
    techStack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Oracle SQL",
      "Chart.js",
    ],
  },
  {
    id: "2",
    title: "iLease – Tower Lease Management Platform",
    description:
      "Lease-management platform handling tower-lease agreements for towerco clients, supporting 5K+ requests/day. Owned the API layer built on Node.js/Express with a PostgreSQL backend.",
    techStack: ["Node.js", "Express.js", "PostgreSQL", "REST APIs"],
  },
  {
    id: "3",
    title: "JobSphere – Job Tracking Application",
    description:
      "Self-architected microservices job-application tracker with an Nginx reverse proxy, Redis-backed token blacklisting, JWT refresh token rotation, and Google Gemini-powered resume–JD match scoring. Load-tested with K6 across spike, soak, and stress scenarios up to 10K VUs.",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Docker",
      "Nginx",
      "JWT",
      "Google Gemini API",
      "K6",
    ],
    githubUrl: "https://github.com/ashu70640/jobsphere",
    liveUrl: "https://jobsphere-app.onrender.com",
  },
  {
    id: "4",
    title: "CineSpark – Movie Trailer & Info App",
    description:
      "Responsive movie discovery platform with trailer search, ratings-based filtering, and conversational search using the OpenAI API",
    techStack: ["React.js", "Redux", "Firebase", "TMDB API", "OpenAI API"],
    githubUrl: "https://github.com/ashu70640/CineSpark",
    liveUrl: "https://cinespark-7dhm.onrender.com",
  },
];