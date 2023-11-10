"use client";

import { Carousel } from "@mantine/carousel";
import { MyCarousel } from "@/components/MyCarousel";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import Chat from "./Chat";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <div className="bg-hero bg-center bg-cover w-screen h-screen flex flex-col space-y-4 lg:space-y-12 justify-center items-center">
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
      <div className="px-4">
        <div className="max-w-6xl mx-auto my-20 flex flex-col gap-10" id=".">
          <Chat
            name="Irfan Satya Hendrasto, Ketua Pelaksana PMB Fasilkom UI 2023"
            position="left"
            pfp="irfan-satya-hendrasto"
          >
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
          <Chat
            name="Andrew Devito Aryo, Ketua Koordinator PMB Fasilkom UI 2023"
            position="right"
            pfp="andrew-devito-aryo"
          >
            Halo Teman-teman CS UI 2023! Selamat telah menjadi bagian dari
            Fasilkom UI 2023 dan Cerita 23 yang begitu panjang dan menyenangkan
            tentunya. Gua juga ingin mengucapkan Terima Kasih kepada kalian yang
            telah berpartisipasi dan aktif dalam kegiatan PMB Fasilkom 2023.
            Tanpa kalian, pekerjaan Gua sebagai Koordinator Angkatan tentunya
            tidak akan mudah. Pesan dari Gua untuk kalian singkat aja, jangan
            lupa untuk selalu menjaga solidaritas antar angkatan, menjaga budaya
            Fasilkom, dan hormat satu sama lain. Akhir kata, Gua mau ucapin
            Terima Kasih kepada kalian karena telah memberikan Gua pengalaman
            yang tak terlupakan selama Gua menjadi Koordinator Angkatan.
            Pengalaman ini akan selalu Gua ingat untuk seumur hidup Gua.
            Berakhirnya masa Koordinator Gua bukan berarti akhir dari CS UI
            2023, melainkan awal baru bagi kita. Semoga kedepannya CS UI 2023
            makin solid! Semangat buat kita semua!
          </Chat>
        </div>
        <div className="min-[500px]:max-w-sm md:max-w-3xl mx-auto">
          <h1 className="text-3xl text-center font-clash-display py-2 px-5 mb-5">
            OUR MOMENTS
          </h1>
          <div className="bg-neutral-200/75 border-white border-2 border-opacity-30 rounded-2xl md:px-4">
            <Carousel
              withIndicators
              slideGap="xl"
              className="mx-4 min-[500px]:max-w-sm md:max-w-3xl"
              loop
            >
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/csui23-back-to-school/1.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/csui23-gathering/1.JPG"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/first-yellow-meet/1.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/last-day-padus-with-pak-dibyo/1.jpg"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
