"use client";

import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps extends LinkProps {
  isActive?: boolean;
  children?: React.ReactNode;
}

function NavLink({ isActive, ...props }: NavLinkProps) {
  return (
    <Link
      {...props}
      className={`py-1.5 px-3 rounded-md bg-opacity-20 hover:bg-opacity-20 text-gray-900 ${
        isActive ? "bg-gray-500" : ""
      } hover:bg-gray-600`}
    />
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    // TODO: Make Navbar responsive
    <nav className="fixed top-2 left-2 right-2 rounded-md backdrop-blur-sm bg-gray-400 z-50 bg-opacity-30 px-10 py-3 border-gray-400 border-opacity-10 border-solid border-2 flex flex-row content-center justify-between items-center">
      <Link href="/">
        <Image src="/logo.png" alt="" width={48} height={49} />
      </Link>
      <div className="flex flex-row gap-2">
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
      </div>
    </nav>
  );
}
