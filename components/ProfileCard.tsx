import Image from "next/image";
import Link from "next/link";

export interface ProfileCardProps {
  profile: {
    id: string;
    namaLengkap: string;
  };
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Link
      className="rounded-2xl hover:bg-white hover:bg-opacity-30 hover:scale-105 transition-all duration-100 backdrop-blur flex flex-col w-[192px] items-center text-center gap-4 py-8 px-4"
      href={`/the-fam/${profile.id}`}
    >
      <Image
        src={`/pfp/${profile.id}.jpg`}
        alt={profile.id}
        width={128}
        height={128}
        className="text-xs rounded-full"
      />
      <h1 className="break-words">{profile.namaLengkap}</h1>
    </Link>
  );
}
