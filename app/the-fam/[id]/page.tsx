import { promises as fs } from "fs";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaLine,
} from "react-icons/fa";
import data from "../../../data/full.json";

export async function generateStaticParams() {
  return data.map(d => ({ id: d.id }));
}

export default async function Profile({ params }: { params: { id: string } }) {
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
            <h2 className="font-bold text-purple-400">
              {JSON.stringify(
                data?.find((d: any) => d.id == params.id)?.jurusan,
                null,
                2
              ).replace(/['"]+/g, "")}
            </h2>
          </div>
          <div className="mt-5">
            <h1 className="font-bold text-3xl lg:text-4xl">
              {JSON.stringify(
                data?.find((d: any) => d.id == params.id)?.namaLengkap,
                null,
                2
              ).replace(/['"]+/g, "")}
            </h1>
            <h2 className="text-2xl">
              {JSON.stringify(
                data?.find((d: any) => d.id == params.id)?.namaPanggilan,
                null,
                2
              ).replace(/['"]+/g, "")}
            </h2>
          </div>
          <div className="mt-2">
            <h4 className="font-bold">
              {JSON.stringify(
                data?.find((d: any) => d.id == params.id)?.tanggalLahir,
                null,
                2
              ).replace(/['"]+/g, "")}
            </h4>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-5 lg:gap-y-0 lg:grid-cols-2 py-8">
        <div className="p-3">
          <div>
            <h1 className="font-bold text-2xl">Description</h1>
          </div>
          <div className="pt-2">
            <p className="text-lg text-gray-600 text-justify lg:text-start">
              {JSON.stringify(
                data?.find((d: any) => d.id == params.id)?.deskripsi,
                null,
                2
              ).replace(/['"]+/g, "")}
            </p>
          </div>
        </div>
        <div className="p-3">
          <div>
            <h1 className="font-bold text-2xl">Socials</h1>
          </div>
          <div className="text-lg">
            <Link
              href={`https://www.instagram.com/${JSON.stringify(
                data?.find((d: any) => d.id == params.id)?.instagram,
                null,
                2
              ).replace(/['"]+/g, "")}/`}
              className="flex items-center space-x-2"
            >
              <FaInstagram className="min-w-[18px]" />
              <h2>
                {JSON.stringify(
                  data?.find((d: any) => d.id == params.id)?.instagram,
                  null,
                  2
                ).replace(/['"]+/g, "")}
              </h2>
            </Link>
            <Link
              href={JSON.stringify(
                data?.find((d: any) => d.id == params.id)?.linkedin,
                null,
                2
              ).replace(/['"]+/g, "")}
              className="flex items-center space-x-2"
            >
              <FaLinkedin className="min-w-[18px]" />
              <h2>
                {JSON.stringify(
                  data?.find((d: any) => d.id == params.id)?.linkedin,
                  null,
                  2
                )
                  .replace(/['"]+/g, "")
                  .slice(12)}
              </h2>
            </Link>
            <Link
              href={`https://www.twitter.com/${JSON.stringify(
                data?.find((d: any) => d.id == params.id)?.twitter,
                null,
                2
              ).replace(/['"]+/g, "")}/`}
              className="flex items-center space-x-2"
            >
              <FaTwitter className="min-w-[18px]" />
              <h2>
                {JSON.stringify(
                  data?.find((d: any) => d.id == params.id)?.twitter,
                  null,
                  2
                ).replace(/['"]+/g, "")}
              </h2>
            </Link>
            <div className="flex items-center space-x-2">
              <FaLine className="min-w-[18px]" />
              <h2>
                {JSON.stringify(
                  data?.find((d: any) => d.id == params.id)?.line,
                  null,
                  2
                ).replace(/['"]+/g, "")}
              </h2>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div>
            <h1 className="font-bold text-2xl">Message for GAUNG 2023</h1>
          </div>
          <div className="pt-2">
            <p className="text-lg text-gray-600 text-justify lg:text-start">
              {JSON.stringify(
                data?.find((d: any) => d.id == params.id)?.message,
                null,
                2
              ).replace(/['"]+/g, "")}
            </p>
          </div>
        </div>
        <div className="p-3">
          <div>
            <h1 className="font-bold text-2xl">Interest</h1>
          </div>
          <div>
            <ul className="list-disc pl-5">
              {data?.find((d: any) => d.id == params.id)?.interests.map((d: any, i: number) => (
                  <li className="text-lg text-gray-600">{d}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
