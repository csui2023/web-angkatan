import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaLinkedin, FaLine } from "react-icons/fa";
import data from "../../../data/full.json";

export async function generateStaticParams() {
  return data.map((d) => ({ id: d.id }));
}

export default async function Profile({ params }: { params: { id: string } }) {
  const current: any = data?.find((d: any) => d.id == params.id);

  return (
    <div className="w-full mx-4 md:mx-32 xl:mx-56 py-32">
      <div className="flex justify-start space-x-10 pt-5">
        <div className="flex justfy-center items-center min-w-[100px]">
          <Image
            src={`/pfp/${params.id}.jpg`}
            alt={params.id}
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="grow">
          <div>
            <h2 className="font-bold text-purple-400">{current.jurusan}</h2>
          </div>
          <div className="mt-5">
            <h1 className="font-bold text-3xl lg:text-4xl">
              {current.namaLengkap}
            </h1>
            <h2 className="text-2xl">{current.namaPanggilan}</h2>
          </div>
          <div className="mt-2">
            <h4 className="font-bold">{current.tanggalLahir}</h4>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-5 lg:gap-y-0 lg:grid-cols-2 py-8">
        <div className="p-3">
          <div>
            <h1 className="font-bold text-2xl">Description</h1>
          </div>
          <div className="pt-2">
            <p className="text-lg text-gray-600 text-justify whitespace-pre-line">
              {current.deskripsi}
            </p>
          </div>
        </div>
        <div className="p-3">
          <div>
            <h1 className="font-bold text-2xl">Socials</h1>
          </div>
          <div className="text-lg">
            <Link
              href={`https://www.instagram.com/${current.instagram}`}
              className="flex items-center space-x-2"
            >
              <FaInstagram className="min-w-[18px]" />
              <h2>{current.instagram}</h2>
            </Link>
            <Link
              href={current.linkedin}
              className="flex items-center space-x-2"
            >
              <FaLinkedin className="min-w-[18px]" />
              <h2>{current.linkedin.slice(24)}</h2>
            </Link>
            <Link
              href={`https://www.twitter.com/${current.twitter}/`}
              className="flex items-center space-x-2"
            >
              <FaTwitter className="min-w-[18px]" />
              <h2>{current.twitter}</h2>
            </Link>
            <div className="flex items-center space-x-2">
              <FaLine className="min-w-[18px]" />
              <h2>{current.line}</h2>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div>
            <h1 className="font-bold text-2xl">Message for GAUNG 2023</h1>
          </div>
          <div className="pt-2">
            <p className="text-lg text-gray-600 text-justify whitespace-pre-line">
              {current.message}
            </p>
          </div>
        </div>
        <div className="p-3">
          <div>
            <h1 className="font-bold text-2xl">Interest</h1>
          </div>
          <div>
            <ul className="list-disc pl-5">
              {current?.interests.map((d: any, i: number) => (
                <li key={i} className="text-lg text-gray-600">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
