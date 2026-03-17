import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PartsDirect - Find the Best Price on Auto Parts",
  description: "Compare prices across retailers for auto parts. Fast shipping, easy returns.",
  verification: {
    google: "bcZ_Je5hEvkF_9SfrjzTOT8pPpbiMY3oSXzBcPkkJVc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#121212] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
