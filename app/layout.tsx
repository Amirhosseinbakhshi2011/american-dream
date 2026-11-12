import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amirhossein Bakhshi | American Dream",
  description:
    "16-year-old Full-Stack Developer from Iran. Building the future. Next stop: United States of America.",
  keywords: [
    "Amirhossein Bakhshi",
    "Full Stack Developer",
    "Next.js",
    "American Dream",
    "Silicon Valley",
    "Iran to USA",
  ],
  authors: [{ name: "Amirhossein Bakhshi" }],
  openGraph: {
    title: "Amirhossein Bakhshi — American Dream",
    description: "From Iran to Silicon Valley. Full-Stack. Math. Ambition.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="font-sans antialiased bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
