import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const helveticaNeue = localFont({
  src: "./fonts/HelveticaNeueLTStdRoman.otf",
  variable: "--font-helvetica-neue",
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
      <body className={`${helveticaNeue.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
