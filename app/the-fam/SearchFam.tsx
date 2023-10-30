"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function SearchFam() {
  const searchParams = useSearchParams()!;
  const [id, setId] = useState("");
  const [major, setMajor] = useState("All Majors");
  const router = useRouter();

  const createQueryString = useCallback(
    (values: object) => {
      const params = new URLSearchParams(searchParams);

      for (const [key, value] of Object.entries(values)) {
        params.set(key, value);
      }

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search by Name"
        className="px-3 py-2 rounded-l-md"
        onChange={(e) => {
          setId(e.target.value);
        }}
      ></input>

      <select
        name="major"
        className="px-3 py-2 border-l-2"
        onChange={(e) => {
          setMajor(e.target.value);
        }}
      >
        <option value="All Majors">All Majors</option>
        <option value="Ilmu Komputer">Ilmu Komputer</option>
        <option value="Ilmu Komputer KKI">Ilmu Komputer KKI</option>
        <option value="Sistem Informasi">Sistem Informasi</option>
      </select>

      <button
        onClick={() => {
          router.push(`/the-fam?${createQueryString({ id, major })}`);
        }}
        className="bg-indigo-600 text-white rounded-r-md px-3 py-2"
      >
        <HiMagnifyingGlass />
      </button>
    </div>
  );
}
