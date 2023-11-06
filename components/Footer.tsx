"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {

  return (
    <nav className="text-neutral-800 mx-5 my-8 backdrop-blur bg-gradient-to-r from-red-500/10 via-orange-500/10 to-blue-500/10 z-50 border-white border-2 border-opacity-30 rounded-3xl shadow-xl px-10 py-10 lg:px-20 lg:py-20 flex flex-col lg:flex-row space-y-16 lg:space-y-0">
      <div className="grow flex justify-evenly lg:justify-start space-x-5 lg:space-x-10">
        <div className="">
          <Link href="/">
            <Image src="/logo.png" alt="" width={150} height={150} />
          </Link>
        </div>
        <div className="flex flex-col justify-evenly text-md font-bold uppercase min-w-[120px]">
          <Link href="/">Home</Link>
          <Link href="/the-fam">The Fam</Link>
          <Link href="/the-devs">Meet The Devs</Link>
          <Link href="/calendar">Calendar</Link>
        </div>
      </div>
      <div className="grow flex flex-col lg:flex-row justify-evenly lg:justify-end items-center lg:space-x-10 space-y-4 lg:space-y-0">
        <div className="font-bold">Find Us on Social Media!</div>
        <div className="flex space-x-8 text-xl">
          <Link href="https://www.instagram.com/csui.2023/">
            <FaInstagram />
          </Link>
          <Link href="https://www.twitter.com/csui.2023/">
            <FaTwitter />
          </Link>
          <Link href="https://www.youtube.com/@csui.2023/">
            <FaYoutube />
          </Link>
          <Link href="https://www.tiktok.com/@csui.2023/">
            <FaTiktok />
          </Link>
        </div>
      </div>
    </nav>
  );
}
