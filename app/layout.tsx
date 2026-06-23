import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sameeuddin Rashad Syed | Data Analyst Portfolio",
  description:
    "Portfolio of Sameeuddin Rashad Syed, a Data Analyst and MIS Executive skilled in Advanced Excel, Power BI, SQL, KPI reporting, data validation, dashboard development, and workflow automation.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/icon.png?v=2", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png?v=2", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
