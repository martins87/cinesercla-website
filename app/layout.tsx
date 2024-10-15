import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

const helveticaNeue = localFont({
  src: "./fonts/HelveticaNeueLTStdRoman.otf",
  variable: "--font-helvetica-neue",
});

const geistSans = localFont({
  src: [
    {
      path: "./fonts/Geist-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Geist-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Geist-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Geist-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Cinesercla | Home",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helveticaNeue.variable} ${geistSans.variable} antialiased bg-background text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
