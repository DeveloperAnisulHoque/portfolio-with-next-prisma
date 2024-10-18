import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { connectToDatabase } from "@/helpers/connectToDatabase";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title:
    "Anisul Hoque | Full-Stack Web Developer - Next.js, Nest.js, React, Go",
  description:
    "I'm highly skilled full-stack developer specializing in Next.js, React.js, Nest.js, Go (Golang), and JavaScript. Explore projects showcasing expertise in web development and modern technologies . Hire me to help you govern your IT company even more effectively",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await connectToDatabase();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
      >
        <Toaster />

        {children}
      </body>
    </html>
  );
}
