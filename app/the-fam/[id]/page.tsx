import data from "../../../public/data.json";
import Image from "next/image";

export default function Profile({ params }: { params: { id: string } }) {
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
          data.find((d) => d.id == params.id),
          null,
          2
        )}
      </pre>
    </>
  );
}
