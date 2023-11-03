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
      className={`py-1.5 px-3 rounded-md hover:bg-opacity-20 text-gray-900 ${
        isActive ? "bg-gray-200" : ""
      } hover:bg-gray-600`}
    />
  );
}

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    // TODO: Make Navbar responsive
    <nav className="fixed left-0 right-0 md:backdrop-blur bg-white bg-opacity-75 shadow-md z-50 px-10 py-3 10 flex flex-row content-center justify-between items-center">
      <Link href="/">
        <Image src="/logo.png" alt="" width={48} height={49} />
      </Link>
      <div onClick={() => setOpen(false)} className={`${open ? "left-0" : "-left-full"} fixed md:static w-screen md:w-auto z-50 top-0 left-0 h-screen md:h-auto flex flex-col md:flex-row backdrop-blur md:backdrop-blur-0 md:bg-opacity-0 bg-white bg-opacity-75 justify-center items-center gap-4 md:gap-2`}>
        <h1 className="md:hidden text-4xl mb-20">CSUI 2023</h1>

        <NavLink isActive={pathname === "/the-fam"} href="/the-fam">
          The Fam!
        </NavLink>
        <NavLink isActive={pathname === "/the-devs"} href="/the-devs">
          Meet the Devs
        </NavLink>
        <NavLink isActive={pathname === "/gallery"} href="/gallery">
          Gallery
        </NavLink>
        <NavLink href="#">CStudy</NavLink>

        <button className="md:hidden rounded-full mt-20 bg-black text-white p-3 text-xl">
          <HiXMark />
        </button>
      </div>
      <button className="md:hidden hover:bg-opacity-20 hover:bg-gray-600 p-2.5 rounded-full" onClick={() => setOpen(!open)}>
        <HiBars3 />
      </button>
    </nav>
  );
}
