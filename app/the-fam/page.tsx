"use client";

import Image from "next/image";
import { useState } from "react";
import names from "../../data/name-major.json";
import ProfileCard from "@/components/ProfileCard";

export default function TheFam() {
  const [id, setId] = useState("");
  const [major, setMajor] = useState("");

  const profiles = names.filter(
    (c: any) =>
      (id ? c.id.includes(id) : true) && (major ? c.jurusan === major : true)
  );

  return (
    <div className="mt-40">
      <div className="relative w-full min-[400px]:w-screen z-0">
        <Image
          src={"/assets/elements/the-fam/1.png"}
          alt={"1"}
          width={180}
          height={180}
          className="absolute top-0 left-0"
        />
        <Image
          src={"/assets/elements/the-fam/2.png"}
          alt={"1"}
          width={180}
          height={180}
          className="absolute top-[50vh] left-0"
        />
        <Image
          src={"/assets/elements/the-fam/3.png"}
          alt={"1"}
          width={180}
          height={180}
          className="absolute top-[200vh] left-0"
        />
        <Image
          src={"/assets/elements/the-fam/4.png"}
          alt={"1"}
          width={180}
          height={180}
          className="absolute top-0 right-0"
        />
        <Image
          src={"/assets/elements/the-fam/5.png"}
          alt={"1"}
          width={180}
          height={180}
          className="absolute top-[50vh] right-0"
        />
        <Image
          src={"/assets/elements/the-fam/6.png"}
          alt={"1"}
          width={180}
          height={180}
          className="absolute top-[200vh] right-0"
        />
      </div>
      <div className="flex flex-col items-center px-6">
        <div className="flex flex-col items-center px-24">
          <h1 className="z-10 text-7xl font-clash-display text-center mb-8">Meet Our Family!</h1>
          <div className="inline-flex flex-col md:flex-row justify-center shadow-sm">
            <input
              type="text"
              placeholder="Search by Name"
              className="px-3 py-2 rounded-t-md md:rounded-l-md bg-opacity-50 bg-white backdrop-blur"
              defaultValue={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />

            <select
              name="major"
              className="px-3 py-2 rounded-b-md md:rounded-r-md border-t-2 md:border-l-2 bg-opacity-50 bg-white backdrop-blur"
              defaultValue={major}
              onChange={(e) => {
                setMajor(e.target.value);
              }}
            >
              <option value="">All Majors</option>
              <option value="Ilmu Komputer">Ilmu Komputer</option>
              <option value="Ilmu Komputer KKI">Ilmu Komputer KKI</option>
              <option value="Sistem Informasi">Sistem Informasi</option>
            </select>
          </div>
        </div>
        <div className="mt-16 flex max-w-5xl flex-row flex-wrap justify-center gap-4">
          {profiles.map((profile, i) => <ProfileCard key={i} profile={profile} />)}
        </div>
      </div>
    </div>
  );
}
