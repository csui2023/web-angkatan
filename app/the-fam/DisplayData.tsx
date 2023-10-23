import Link from "next/link";
import { FetchData } from "./FetchData";
import Image from "next/image";

export default async function DisplayData({
  id,
  major,
}: {
  id: string | undefined;
  major: string | undefined;
}) {
  const data = await FetchData(id, major);
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
