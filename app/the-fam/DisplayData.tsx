import Link from "next/link";
import Image from "next/image";

export default function DisplayData({ data }: { data: any[] }) {
  return data.map((d: any, i: number) => (
    <Link
      className="rounded-2xl hover:bg-white hover:bg-opacity-30 hover:scale-105 transition-all duration-100 backdrop-blur flex flex-col w-[192px] items-center text-center gap-4 py-8 px-4"
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
