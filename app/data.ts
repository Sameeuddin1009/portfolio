export const profile = {
  name: "Sameeuddin Rashad Syed",
  role: "Data & Business Analyst",
  location: "Hyderabad, Telangana",
  email: "rashad100902@gmail.com",
  phone: "+91 7285977299",
  website: "https://sameeuddinrashad.in",
  linkedin: "https://www.linkedin.com/in/sameeuddin-rashad-syed-4b5230234/",
};

export const skillGroups = [
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

export const experience = [
  "Automated MIS reporting workflows using Advanced Excel and Google Sheets, reducing manual reporting effort by 30%.",
  "Developed KPI dashboards, operational reports, and production tracking systems to support management decisions.",
  "Implemented data validation controls and reporting standards to improve data consistency and reliability.",
  "Built an automated checklist and reminder system using Google Apps Script with trigger-based email notifications.",
  "Collaborated with cross-functional teams to deliver actionable business insights and resolve reporting discrepancies.",
];

export const projects = [
  {
    slug: "rostre-quotation-app",
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
    slug: "mis-reporting-automation",
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
    slug: "ipl-performance-analysis",
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
    slug: "zomato-restaurant-analysis",
    title: "Zomato Global Restaurant Data Analysis",
    stack: "Excel, Power Query",
    outcome: "A cleaned, structured analysis of 9,551 restaurant records across 15 countries, built to surface ratings, pricing, and expansion signals.",
    points: [
      "Performed data cleaning, transformation, and validation using Power Query.",
      "Built dashboards to evaluate customer ratings, pricing trends, and expansion opportunities.",
    ],
  },
];

export const focusAreas = [
  "Strengthening SQL and Power BI enough to lead an analysis end to end, not just a piece of one.",
  "Learning by shipping — every dashboard and script I build gets used by a real team.",
  "Turning raw data into a recommendation, not just a report.",
];
