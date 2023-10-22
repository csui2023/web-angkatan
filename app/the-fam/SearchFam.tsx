"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";

export default function SearchFam() {
  const searchParams = useSearchParams()!;
  const [id, setId] = useState("");
  const [major, setMajor] = useState("Ilmu Komputer");
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
          router.push(`/the-fam?${createQueryString({ id, major })}`);
        }}
        className="bg-gray-200 px-3 py-1 border-gray-200"
      >
        Search
      </button>
    </div>
  );
}
