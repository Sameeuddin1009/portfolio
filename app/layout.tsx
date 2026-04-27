import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sameeuddin Rashad Syed | Data Analyst Portfolio",
  description:
    "Portfolio of Sameeuddin Rashad Syed, a Data Analyst and MIS Executive skilled in SQL, Excel, Power BI, Python, Google Sheets, and reporting automation.",
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
