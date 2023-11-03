import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Image
          src={`/assets/images/hero-background.png`}
          alt={"hero-background"}
          width={1920}
          height={1080}
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col space-y-4 lg:space-y-12 justify-center items-center p-4 md:p-10">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white">
            Welcome, to <pre className="inline text-blue-600">CSUI</pre>{" "}
            <pre className="inline text-red-600">2023</pre>'s Website
          </h1>
          <Link
            className="bg-neutral-800 text-xs md:text-lg text-white py-2 px-3 md:px-6 rounded-lg md:rounded-xl flex justify-center items-center hover:scale-110 transition"
            href="#c"
          >
            <FaArrowDown />
            <h1 className="ml-2 md:ml-3">See More</h1>
          </Link>
        </div>
      </div>
      <div className="h-screen flex justify-center items-center" id="c">
        <h1 className="text-8xl font-bold bg-green-400 rounded-full p-5">WOWWWWW</h1>
      </div>
    </div>
  );
}
