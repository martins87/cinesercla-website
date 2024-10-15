import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: [
    {
      path: "./assets/fonts/Geist-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/Geist-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./assets/fonts/Geist-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./assets/fonts/Geist-ExtraBold.otf",
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
        className={`${geistSans.variable} antialiased bg-background text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
