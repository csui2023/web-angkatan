import { promises as fs } from "fs";
import Link from "next/link";
import Image from "next/image";

async function fetchData(id: string | undefined, major: string | undefined) {
  const data = JSON.parse(
    await fs.readFile(process.cwd() + "/public/data.json", "utf-8")
  );

  return data.filter(
    (c: any) =>
      (typeof id !== "undefined" ? c.id.includes(id) : c) &&
      (typeof major !== "undefined" ? c.jurusan === major : c)
  );
}

export default async function DisplayData({
  id,
  major,
}: {
  id: string | undefined;
  major: string | undefined;
}) {
  const data = await fetchData(id, major);
  return data.map((d: any, i: number) => (
    <Link
      className="my-2 flex space-x-10 bg-gray-100 p-4"
      href={`/the-fam/${d.id}`}
    >
      <Image
        src={`/pfp/${d.id}.jpg`}
        alt={d.id}
        width={50}
        height={50}
        className="text-xs"
      />
      <h1>{d.namaLengkap}</h1>
    </Link>
  ));
}
