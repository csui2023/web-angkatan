import { promises as fs } from "fs";
import Image from "next/image";

async function getData() {
  const string = await fs.readFile(
    process.cwd() + "/public/data.json",
    "utf-8"
  );

  return JSON.parse(string);
}

export default async function Profile({ params }: { params: { id: string } }) {
  const data = await getData();

  return (
    <>
      <Image
        src={`/pfp/${params.id}.jpg`}
        alt={params.id}
        width={256}
        height={256}
      />
      <pre className="whitespace-pre-wrap">
        {JSON.stringify(
          data?.find((d: any) => d.id == params.id),
          null,
          2
        )}
      </pre>
    </>
  );
}
