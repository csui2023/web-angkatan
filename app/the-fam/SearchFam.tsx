"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";

export default function SearchFam() {
  const searchParams = useSearchParams()!;
  const [id, setId] = useState("");
  const [major, setMajor] = useState("Ilmu Komputer");
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex space-x-10">
      <input
        type="text"
        placeholder="Type here"
        className="border px-3 py-1"
        onChange={(e) => {
          setId(e.target.value);
        }}
      ></input>

      <select
        name="major"
        className="px-3 py-1"
        onChange={(e) => {
          setMajor(e.target.value);
        }}
      >
        <option value="Ilmu Komputer">Ilmu Komputer</option>
        <option value="Sistem Informasi">Sistem Informasi</option>
      </select>

      <button
        onClick={() => {
          router.push(
            `/the-fam?${createQueryString("id", id)}&${createQueryString(
              "major",
              major
            )}`
          );
        }}
        className="bg-gray-200 px-3 py-1 border-gray-200"
      >
        Search
      </button>
    </div>
  );
}
