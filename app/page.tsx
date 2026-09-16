import Image from "next/image";

const profile = {
  name: "Sameeuddin Rashad Syed",
  role: "Data & Business Analyst",
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
    featured: true,
    title: "Rostre Quotation App",
    stack: "Next.js, Supabase, Vercel",
    outcome:
      "An internal quotation management tool the Rostre Spaces sales team runs on to create and track quotes, replacing a slower manual process.",
    points: [
      "Co-built and maintain a production web app end to end — schema, UI, and deployment.",
      "Ship new features and fixes on an ongoing basis as the sales team's workflow changes.",
      "Handles real quoting activity for the business, not a portfolio exercise.",
    ],
  },
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
    outcome: "A cleaned, structured analysis of 9,551 restaurant records across 15 countries, built to surface ratings, pricing, and expansion signals.",
    points: [
      "Performed data cleaning, transformation, and validation using Power Query.",
      "Built dashboards to evaluate customer ratings, pricing trends, and expansion opportunities.",
    ],
  },
];

const focusAreas = [
  "Strengthening SQL and Power BI enough to lead an analysis end to end, not just a piece of one.",
  "Learning by shipping — every dashboard and script I build gets used by a real team.",
  "Turning raw data into a recommendation, not just a report.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-30 border-b border-rule bg-paper">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="font-serif text-lg font-semibold text-ink">
            Sameeuddin Rashad Syed
          </a>
          <div className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
            <a href="#profile" className="transition hover:text-ink">
              Profile
            </a>
            <a href="#skills" className="transition hover:text-ink">
              Skills
            </a>
            <a href="#experience" className="transition hover:text-ink">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-ink">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-ink">
              Contact
            </a>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-sm bg-accent-warm px-4 py-2 text-sm font-medium text-paper transition hover:opacity-90"
          >
            Contact
          </a>
        </nav>
      </header>

      <section id="home" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <p className="text-sm text-ink-soft">{profile.role}</p>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-[1.12] text-ink sm:text-5xl">
              I turn scattered operational data into tools people rely on.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft">
              MIS Executive at Rostre Spaces — I build the dashboards, automations, and internal software that keep
              reporting honest and decisions fast.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-rule pt-6 font-mono text-sm text-ink-soft">
              {["Advanced Excel", "Power BI", "SQL", "Data Validation"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper transition hover:opacity-85"
              >
                View work
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-sm border border-ink px-6 py-3 text-sm font-medium text-ink transition hover:bg-ink hover:text-paper"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <div className="relative aspect-square w-full max-w-[220px] overflow-hidden border border-ink bg-panel">
                <Image
                  src="/photo.jpg"
                  alt={profile.name}
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
              <div className="mt-2 max-w-[220px] border-t border-rule pt-2 font-mono text-xs text-ink-soft">
                {profile.name}
                <br />
                {profile.location}
              </div>
            </div>

            <div className="border border-rule bg-panel/50 p-5">
              <p className="font-mono text-xs text-ink-soft">Status</p>
              <p className="mt-1 font-serif text-xl font-semibold text-ink">Open to roles</p>
              <div className="mt-5 space-y-3 border-t border-rule pt-4 text-sm">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-ink-soft">Role</span>
                  <span className="text-right">{profile.role}</span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-ink-soft">Based in</span>
                  <span className="text-right">{profile.location}</span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-ink-soft">Email</span>
                  <a href={`mailto:${profile.email}`} className="text-right text-accent hover:underline">
                    {profile.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="profile" className="border-y border-rule">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm text-ink-soft">About</p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight text-ink">
              My work turns raw operational data into decisions people can act on.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-ink-soft">
              My MIS role has put me inside real reporting workflows — validating data, building dashboards, and
              shipping the internal tools that operations and sales teams use every day. I want to bring that same
              rigor to full-time Data Analyst and Business Analyst work: framing the right question, finding the
              signal in messy data, and presenting it so someone can act on it in the same meeting.
            </p>
          </div>

          <div className="border border-rule bg-panel/40 p-6">
            <p className="font-mono text-xs text-ink-soft">Currently focused on</p>
            <div className="mt-5 space-y-4">
              {focusAreas.map((item) => (
                <p key={item} className="border-t border-rule pt-4 text-base leading-7 text-ink-soft first:border-0 first:pt-0">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-9 max-w-2xl">
          <p className="text-sm text-ink-soft">Skills</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink">
            Practical tools for reporting, validation, dashboards, and automation.
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="bg-paper p-6">
              <h3 className="font-serif text-lg font-semibold text-ink">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-ink-soft">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="border-y border-rule bg-panel/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm text-ink-soft">Experience</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-ink">MIS Executive</h2>
            <p className="mt-4 text-base text-ink-soft">Rostre Spaces, Hyderabad</p>
            <p className="mt-1 font-mono text-sm text-ink-soft">Dec 2025 – Present</p>
          </div>
          <div className="space-y-4">
            {experience.map((item) => (
              <div key={item} className="flex gap-4 border-t border-rule pt-4 first:border-0 first:pt-0">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                <p className="text-base leading-7 text-ink-soft">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-9 max-w-2xl">
          <p className="text-sm text-ink-soft">Selected work</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink">
            Case studies from real reporting and analysis work.
          </h2>
        </div>
        <div>
          {projects.map((project) => (
            <article key={project.title} className="border-t border-rule py-10 first:border-0 first:pt-0">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-xs text-ink-soft">{project.stack}</p>
                {project.featured && (
                  <span className="bg-accent-warm px-2 py-0.5 font-mono text-xs text-paper">Featured</span>
                )}
              </div>
              <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight text-ink">{project.title}</h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">{project.outcome}</p>
              <ul className="mt-5 max-w-2xl space-y-2">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-ink-soft">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-rule bg-panel/30">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm text-ink-soft">Education</p>
            <h2 className="mt-4 font-serif text-2xl font-semibold text-ink sm:text-3xl">
              B.Tech in Computer Science and Business Systems
            </h2>
            <p className="mt-4 text-base text-ink-soft">G. Pulla Reddy Engineering College, Kurnool</p>
            <p className="mt-1 font-mono text-sm text-ink-soft">2020 – 2024 · CGPA 7.18 / 10</p>
          </div>
          <div className="border border-rule bg-paper p-6">
            <p className="font-mono text-xs text-ink-soft">What I&apos;m doing next</p>
            <p className="mt-4 font-serif text-xl font-semibold leading-snug text-ink">
              Deepening SQL and Power BI enough to own an analysis end to end.
            </p>
            <p className="mt-4 text-base leading-7 text-ink-soft">
              I want to keep learning by building things real people use, and get sharper at turning data into a
              clear recommendation, not just a clean chart.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-16">
        <div className="border border-ink bg-ink p-8 text-paper md:p-12">
          <p className="text-sm text-paper/60">Contact</p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Need cleaner reporting, dashboards, or workflow automation?
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center rounded-sm bg-accent-warm px-6 py-3 text-sm font-medium text-paper transition hover:opacity-90"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-paper/40 px-6 py-3 text-sm font-medium text-paper transition hover:bg-paper/10"
            >
              LinkedIn
            </a>
            <a
              href="tel:+917285977299"
              className="inline-flex items-center justify-center rounded-sm border border-paper/40 px-6 py-3 text-sm font-medium text-paper transition hover:bg-paper/10"
            >
              {profile.phone}
            </a>
          </div>
          <p className="mt-6 font-mono text-sm text-paper/60">
            {profile.location} · Open to Data Analyst and Business Analyst roles
          </p>
        </div>
      </section>
    </main>
  );
}
