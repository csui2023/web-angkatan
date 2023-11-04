'use client';

import { useState } from "react";
import DisplayData from "./DisplayData";
import names from '../../data/name-major.json';

export default function TheFam() {
  const [id, setId] = useState("");
  const [major, setMajor] = useState("");

  return (
    <div className="mt-36 px-6 flex flex-col items-center">
      <h1 className="text-6xl text-center mb-8">Meet Our Family!</h1>
      <div className="inline-flex justify-center shadow-sm">
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
          className="px-3 py-2 rounded-r-md border-l-2 bg-opacity-50 bg-white backdrop-blur"
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
      <div className="mt-16 flex max-w-5xl flex-row flex-wrap justify-center gap-4">
        <DisplayData
          data={names.filter((c: any) =>
            (id ? c.id.includes(id) : true) && (major ? c.jurusan === major : true)
          )}
        />
      </div>
    </div>
  );
}
