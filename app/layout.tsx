import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles/globals.scss";
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
    <html
      className={font.className}
      lang="en"
      style={{ scrollBehavior: "smooth" }}
    >
      <body>
        <div className='min-h-screen bgMesh relative before:content-[""] before:-z-999 before:absolute before:w-full before:h-full before:bg-[#ffffff86] before:backdrop-blur-md'>
          <div className="scrollbar overflow-auto">
            <Navbar />
            <div className="relative">
              <div className="flex justify-center items-center">
                {children}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
