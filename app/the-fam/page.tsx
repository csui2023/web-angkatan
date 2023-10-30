import { Suspense } from "react";
import DisplayData from "./DisplayData";
import SearchFam from "./SearchFam";

export default function TheFam({
  searchParams,
}: {
  searchParams: { id: string | undefined; major: string | undefined };
}) {
  return (
    <div className="mt-36 px-6">
      <h1 className="text-6xl text-center mb-8">Meet Our Family!</h1>
      <SearchFam />
      <div className="mt-16 flex flex-row flex-wrap justify-center gap-4">
        <Suspense key={searchParams.id} fallback={<div>Loading...</div>}>
          <DisplayData id={searchParams.id} major={searchParams.major} />
        </Suspense>
      </div>
    </div>
  );
}
