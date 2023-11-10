import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import Chat from "./Chat";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Image
          src={`/assets/images/hero-background.png`}
          alt={"hero-background"}
          width={1920}
          height={1080}
          className="w-screen min-h-[500px] object-cover bg-black/20 shadow-xl"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col space-y-4 lg:space-y-12 justify-center items-center p-4 md:p-10">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white text-center font-clash-display">
            CSUI 2023
          </h1>
          <Link
            className="bg-neutral-800 text-xs md:text-lg text-white py-2 px-3 md:px-6 rounded-lg md:rounded-xl flex justify-center items-center hover:scale-110 transition"
            href="#."
          >
            <FaArrowDown />
            <h1 className="ml-2 md:ml-3">See More</h1>
          </Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 my-20 flex flex-col gap-10">
        <Chat name="Kak Irfan" position="left">
          Halo CSUI 2023! Gue mewakili semua panitia PMB ingin mengucapkan
          selamat telah memiliki website angkatan! Gue harap dari website ini
          kalian bisa mengenal teman-teman kalian yang mungkin belum sempat
          kalian kenal pada tugas mengenal angkatan. Gue juga mau pesen ke
          kalian terapkanlah secara konsisten apa yang kalian pelajari dari
          kegiatan PMB diantaranya budaya fasilkom, bagaimana cara bersikap
          dengan elemen fasilkom lain, adab dalam memakai fasilitas yang ada
          sehingga dapat menciptakan lingkungan fasilkom yang aman dan nyaman
          untuk sesama dan kalian dapat meneruskan budaya baik ini ke
          angkatan-angkatan CSUI yang akan datang. Semangatt CSUI 2023!
        </Chat>
        <Chat name="Enderu" position="right">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          neque laboriosam consectetur itaque? Blanditiis perferendis accusamus
          ullam dicta odio autem ab quas ut, quis excepturi maxime aut aliquid
          vel hic.
        </Chat>
      </div>
    </div>
  );
}
