import data from "../../../public/data.json";
import Image from "next/image";

export default function Profile({ params }: { params: { id: string } }) {
  return (
    <>
      <Image
        src={`/pfp/${params.id}.png`}
        alt={params.id}
        width={512}
        height={512}
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
