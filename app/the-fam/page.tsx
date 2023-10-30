import { Suspense } from "react";
import DisplayData from "./DisplayData";
import SearchFam from "./SearchFam";

export default function TheFam({
  searchParams,
}: {
  searchParams: { id: string | undefined; major: string | undefined };
}) {
  return (
    <div className="mt-24 px-6">
      <SearchFam />
      <div className="mt-10 flex flex-row flex-wrap justify-center gap-4">
        <Suspense key={searchParams.id} fallback={<div>Loading...</div>}>
          <DisplayData id={searchParams.id} major={searchParams.major} />
        </Suspense>
      </div>
    </div>
  );
}
