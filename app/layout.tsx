import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSUI 2023",
  description: "Website Angkatan CSUI 2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={font.className} lang="en">
      <body className="flex justify-center items-center h-screen">
        {children}
      </body>
    </html>
  );
}
