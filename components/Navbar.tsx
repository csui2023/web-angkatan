"use client";

import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

interface NavLinkProps extends LinkProps {
  isActive?: boolean;
  children?: React.ReactNode;
}

function NavLink({ isActive, ...props }: NavLinkProps) {
  return (
    <Link
      {...props}
      className={`py-1.5 px-4 rounded-full transition text-gray-900 ${
        isActive ? "bg-white shadow-md" : ""
      } hover:shadow-lg transition font-semibold text-neutral-800`}
    />
  );
}

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    // TODO: Make Navbar responsive
    <nav className="fixed left-5 right-5 top-5 backdrop-blur bg-gradient-to-r from-red-500/10 via-orange-500/10 to-blue-500/10 border-white border-2 border-opacity-30 shadow-xl rounded-3xl z-50 px-10 py-3 10 flex flex-row content-center justify-between items-center">
      <Link href="/">
        <Image src="/logo.png" alt="" width={48} height={49} />
      </Link>
      <div className={`${open ? "bottom-0" : "-bottom-full"} duration-100 left-0 fixed md:static h-screen w-screen md:w-auto z-50 md:h-auto flex flex-col md:flex-row backdrop-blur md:backdrop-blur-0 justify-center items-center gap-4 md:gap-2`}>
        <h1 className="md:hidden text-4xl mb-20">CSUI 2023</h1>

        <NavLink isActive={pathname === "/the-fam/"} href="/the-fam">
          The Fam!
        </NavLink>
        <NavLink isActive={pathname === "/the-devs/"} href="/the-devs">
          Meet the Devs
        </NavLink>
        <NavLink isActive={pathname === "/gallery/"} href="/gallery">
          Gallery
        </NavLink>
        <NavLink isActive={pathname === "/cstudy/"} href="/cstudy">
          CStudy
        </NavLink>

        <button className="md:hidden rounded-full mt-20 bg-black text-white p-3 text-xl" onClick={() => setOpen(false)}>
          <HiXMark />
        </button>
      </div>
      <button className="md:hidden hover:bg-opacity-20 hover:bg-gray-600 p-2.5 rounded-full" onClick={() => setOpen(!open)}>
        <HiBars3 />
      </button>
    </nav>
  );
}
