const profile = {
  name: "Sameeuddin Rashad Syed",
  role: "Aspiring Data Analyst & Business Analyst",
  location: "Hyderabad, Telangana",
  email: "rashad100902@gmail.com",
  phone: "+91 7285977299",
  website: "https://sameeuddinrashad.in",
  linkedin: "https://www.linkedin.com/in/sameeuddin-rashad-syed-4b5230234/",
};

const skillGroups = [
  {
    title: "Excel",
    items: ["Advanced Excel", "Pivot Tables", "XLOOKUP", "VLOOKUP", "Power Query", "Data Validation"],
  },
  {
    title: "Analytics",
    items: ["Data Cleaning", "KPI Reporting", "Dashboards", "Data Visualization", "Trend Analysis"],
  },
  {
    title: "Tools",
    items: ["Power BI", "SQL", "MySQL", "Google Sheets", "Google Apps Script"],
  },
  {
    title: "Automation",
    items: ["Workflow Automation", "MIS Reporting", "Process Improvement", "Python"],
  },
];

const experience = [
  "Automated MIS reporting workflows using Advanced Excel and Google Sheets, reducing manual reporting effort by 30%.",
  "Developed KPI dashboards, operational reports, and production tracking systems to support management decisions.",
  "Implemented data validation controls and reporting standards to improve data consistency and reliability.",
  "Built an automated checklist and reminder system using Google Apps Script with trigger-based email notifications.",
  "Collaborated with cross-functional teams to deliver actionable business insights and resolve reporting discrepancies.",
];

const projects = [
  {
    title: "Automated MIS Reporting & Checklist Automation System",
    stack: "Google Sheets, Apps Script, Excel",
    outcome: "A reporting workflow that improves monitoring, accuracy, and follow-up discipline for operations teams.",
    points: [
      "Designed automated MIS reporting workflows for operational monitoring and management reporting.",
      "Developed trigger-based checklist automation and email notification workflows.",
      "Built KPI dashboards and validation controls to improve reporting accuracy.",
    ],
  },
  {
    title: "IPL Team Performance & Auction Strategy Analysis",
    stack: "SQL, Excel",
    outcome: "A sports analytics project using historical IPL data to evaluate performance trends and auction strategy signals.",
    points: [
      "Analyzed 10+ IPL seasons using SQL joins, CTEs, and window functions.",
      "Identified high-impact players and performance patterns across teams and seasons.",
      "Built Excel dashboards to support trend analysis and data-driven auction decisions.",
    ],
  },
  {
    title: "Zomato Global Restaurant Data Analysis",
    stack: "Excel, Power Query",
    outcome: "A cleaned and structured analysis of global restaurant data for ratings, pricing, and expansion signals.",
    points: [
      "Analyzed 9,551 restaurant records across 15 countries.",
      "Performed data cleaning, transformation, and validation using Power Query.",
      "Built dashboards to evaluate customer ratings, pricing trends, and expansion opportunities.",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090b] text-[#f4f1e8]">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#07090b]/88 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-sm font-black tracking-[0.26em] text-white">
            SR
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-white/58 md:flex">
            <a href="#profile" className="transition hover:text-white">
              Profile
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-[#d9f66f] px-4 py-2 text-sm font-bold text-[#071007] transition hover:bg-white"
          >
            Contact
          </a>
        </nav>
      </header>

      <section id="home" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="rounded-[8px] border border-white/10 bg-[#10161a] p-6 shadow-2xl shadow-black/30 md:p-10">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <div className="mb-6 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#d9f66f]" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d9f66f]">{profile.role}</p>
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/44">{profile.name}</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.04] text-white sm:text-5xl lg:text-6xl">
                Data analyst in progress, building useful business insights.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
                I work with Excel, SQL, Power BI, and reporting automation to clean data, build dashboards, and support
                decisions with clear analysis.
              </p>
            </div>

            <div className="rounded-[8px] border border-white/10 bg-[#0b0f12] p-5">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d9f66f]">Open to roles</p>
              <p className="mt-3 text-2xl font-black leading-tight text-white">Data Analyst & Business Analyst</p>
              <div className="mt-6 grid gap-3 text-sm font-semibold text-white/72">
                <p className="rounded-[8px] border border-white/10 bg-white/[0.03] p-3">{profile.location}</p>
                <p className="rounded-[8px] border border-white/10 bg-white/[0.03] p-3">{profile.email}</p>
                <p className="rounded-[8px] border border-white/10 bg-white/[0.03] p-3">sameeuddinrashad.in</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center">
            <div className="flex flex-wrap gap-2">
              {["Advanced Excel", "Power BI", "SQL", "Data Validation"].map((item) => (
                <span key={item} className="rounded-full bg-[#1d2921] px-3 py-1 text-sm font-bold text-[#daf88a]">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-[#236a5b] px-6 py-3 text-sm font-black text-white transition hover:bg-[#2d806d]"
              >
                View work
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/16 px-6 py-3 text-sm font-black text-white transition hover:border-[#d9f66f] hover:text-[#d9f66f]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="profile" className="border-y border-white/10 bg-[#0d1114]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#d9f66f]">About me</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
                I am building my career around data analysis, business insight, and continuous learning.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/66">
                My MIS experience has given me hands-on exposure to operational data, reporting workflows, validation,
                and automation. I want to use that foundation to grow into Data Analyst and Business Analyst roles where
                I can analyze problems, create clear dashboards, and support better decisions.
              </p>
            </div>

            <div className="rounded-[8px] border border-white/10 bg-[#10161a] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d9f66f]">I am focused on</p>
              <div className="mt-5 space-y-4">
                {[
                  "Strengthening SQL, Power BI, Excel, and business analysis skills.",
                  "Learning new tools and improving my analytical thinking continuously.",
                  "Turning raw data into clear reports, insights, and recommendations.",
                ].map((item) => (
                  <p key={item} className="border-t border-white/10 pt-4 text-base leading-7 text-white/68">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-9 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#d9f66f]">Technical skills</p>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Practical tools for reporting, validation, dashboards, and automation.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-[8px] border border-white/10 bg-[#10161a] p-6">
              <h3 className="text-xl font-black text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-[#1d2921] px-3 py-1 text-sm font-semibold text-[#daf88a]">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="border-y border-white/10 bg-[#10161a]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#d9f66f]">Experience</p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">MIS Executive</h2>
            <p className="mt-4 text-lg font-semibold text-white/74">Rostre Spaces, Hyderabad</p>
            <p className="mt-2 text-white/48">Dec 2025 - Present</p>
          </div>
          <div className="space-y-3">
            {experience.map((item, index) => (
              <div key={item} className="grid gap-4 rounded-[8px] border border-white/10 bg-[#0b0f12] p-5 sm:grid-cols-[2.5rem_1fr]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d9f66f] text-sm font-black text-[#071007]">
                  {index + 1}
                </span>
                <p className="text-base leading-7 text-white/72">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-9 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#d9f66f]">Selected projects</p>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Project work built around real reporting and analysis workflows.
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="flex flex-col rounded-[8px] border border-white/10 bg-[#10161a] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d9f66f]">{project.stack}</p>
              <h3 className="mt-4 text-2xl font-black leading-tight text-white">{project.title}</h3>
              <p className="mt-4 text-base leading-7 text-white/66">{project.outcome}</p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-white/66">
                {project.points.map((point) => (
                  <li key={point} className="border-t border-white/10 pt-3">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d1114]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#d9f66f]">Education</p>
            <h2 className="mt-4 text-3xl font-black">B.Tech in Computer Science and Business Systems</h2>
            <p className="mt-4 text-lg leading-8 text-white/66">G. Pulla Reddy Engineering College, Kurnool</p>
            <p className="mt-2 font-semibold text-white/62">2020 - 2024 | CGPA: 7.18 / 10</p>
          </div>
          <div className="rounded-[8px] border border-white/10 bg-[#10161a] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d9f66f]">Current focus</p>
            <p className="mt-4 text-2xl font-black leading-snug">
              Growing into Data Analyst and Business Analyst roles by strengthening analytics, visualization, and business problem-solving skills.
            </p>
            <p className="mt-4 text-base leading-7 text-white/62">
              I want to keep learning as much as I can, upgrade myself continuously, and build new skills that help me
              turn data into clearer decisions.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-[8px] border border-white/10 bg-[#236a5b] p-8 text-white md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/62">Contact</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
            Need cleaner reporting, dashboards, or workflow automation?
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-black text-[#236a5b] transition hover:bg-[#d9f66f] hover:text-[#071007]"
            >
              {profile.email}
            </a>
            <a
              href={profile.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-black text-white transition hover:bg-white/10"
            >
              sameeuddinrashad.in
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-black text-white transition hover:bg-white/10"
            >
              LinkedIn
            </a>
            <a
              href="tel:+917285977299"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-black text-white transition hover:bg-white/10"
            >
              {profile.phone}
            </a>
          </div>
          <p className="mt-6 text-white/72">{profile.location} | Open to Data Analyst and Business Analyst roles</p>
        </div>
      </section>
    </main>
  );
}
