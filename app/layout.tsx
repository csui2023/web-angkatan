import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles/globals.scss";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const clashDisplay = localFont({
  src: "./ClashDisplay-Medium.woff2",
  variable: "--font-clash-display",
});

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
    <html
      lang="en"
      className={`scroll-smooth ${clashDisplay.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <MantineProvider>
          <div className='min-h-screen bgMesh relative before:content-[""] before:-z-999 before:absolute before:w-full before:h-full before:bg-[#ffffff86] before:backdrop-blur-md'>
            <div className="scrollbar overflow-auto">
              <Navbar />
              <div className="relative overflow-hidden">
                <div className="flex justify-center items-center">
                  {children}
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
