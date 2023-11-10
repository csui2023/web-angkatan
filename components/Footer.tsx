"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <nav className="text-neutral-800 mx-5 my-8 backdrop-blur brightness-105 bg-gradient-to-br from-red-400/10 via-blue-400/10 to-cyan-400/10 z-50 border-white border-2 border-opacity-30 rounded-3xl shadow-xl px-10 py-10 lg:px-20 lg:py-20 flex flex-col lg:flex-row space-y-16 lg:space-y-0">
      <div className="grow flex justify-evenly lg:justify-start space-x-5 lg:space-x-10">
        <div className="">
          <Link href="/">
            <Image src="/logo.png" alt="" width={150} height={150} />
          </Link>
        </div>
        <div className="flex flex-col space-y-1 justify-evenly text-md font-bold uppercase min-w-[120px]">
          <Link href="/the-fam">The Fam!</Link>
          <Link href="/the-team">Meet The Team</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/cstudy">CStudy</Link>
        </div>
      </div>
      <div className="grow flex flex-col lg:flex-row justify-evenly lg:justify-end items-center lg:space-x-10 space-y-4 lg:space-y-0">
        <div className="font-bold">Find Us on Social Media!</div>
        <div className="flex space-x-8 text-xl">
          <Link href="https://www.instagram.com/csui.2023/">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </nav>
  );
}
