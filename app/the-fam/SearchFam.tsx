"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function SearchFam() {
  const searchParams = useSearchParams()!;
  const router = useRouter();

  const defaultMajor = searchParams.get("major") || "";
  const defaultId = searchParams.get("id") || "";

  if (
    !["Ilmu Komputer", "Ilmu Komputer KKI", "Sistem Informasi", ""].includes(
      defaultMajor
    )
  ) {
    const searchParams = new URLSearchParams({ id: defaultId });
    router.push(`/the-fam?${searchParams}`);
  }

  const [id, setId] = useState(defaultId || "");
  const [major, setMajor] = useState(defaultMajor || "");

  const createQueryString = useCallback(
    (id: string, major: string) => {
      const params = new URLSearchParams(searchParams);
      params.set("id", id);
      params.set("major", major);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <form
      className="inline-flex justify-center shadow-sm"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="Search by Name"
        className="px-3 py-2 rounded-l-md bg-opacity-50 bg-white backdrop-blur"
        defaultValue={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      ></input>

      <select
        name="major"
        className="px-3 py-2 border-l-2 bg-opacity-50 bg-white backdrop-blur"
        defaultValue={major}
        onChange={(e) => {
          setMajor(e.target.value);
        }}
      >
        <option>All Majors</option>
        <option value="Ilmu Komputer">Ilmu Komputer</option>
        <option value="Ilmu Komputer KKI">Ilmu Komputer KKI</option>
        <option value="Sistem Informasi">Sistem Informasi</option>
      </select>

      <button
        onClick={() => {
          router.push(`/the-fam?${createQueryString(id, major)}`);
        }}
        className="text-black rounded-r-md px-3 py-2 bg-indigo-300 hover:bg-indigo-400 duration-100 bg-opacity-90 backdrop-blur"
      >
        <HiMagnifyingGlass />
      </button>
    </form>
  );
}
