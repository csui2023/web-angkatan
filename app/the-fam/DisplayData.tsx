import { promises as fs } from "fs";
import Link from "next/link";
import Image from "next/image";

async function fetchData(id: string | undefined, major: string | undefined) {
  const data = JSON.parse(
    await fs.readFile(process.cwd() + "/public/data.json", "utf-8")
  );

  return data.filter(
    (c: any) =>
      (id ? c.id.includes(id) : true) && (major ? c.jurusan === major : true)
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
      className="rounded-md hover:bg-white hover:bg-opacity-30 hover:scale-105 transition-all duration-100 backdrop-blur flex flex-col w-[192px] items-center text-center gap-4 py-8 px-4"
      href={`/the-fam/${d.id}`}
    >
      <Image
        src={`/pfp/${d.id}.jpg`}
        alt={d.id}
        width={128}
        height={128}
        className="text-xs rounded-full"
      />
      <h1 className="break-words">{d.namaLengkap}</h1>
    </Link>
  ));
}
