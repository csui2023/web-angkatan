import { Suspense } from "react";
import DisplayData from "./DisplayData";
import SearchFam from "./SearchFam";

export default function TheFam({
  searchParams,
}: {
  searchParams: { id: string | undefined; major: string | undefined };
}) {
  return (
    <div className="mt-10 max-w-7xl px-6 mx-auto">
      <SearchFam />
      <div className="mt-10 flex flex-col">
        <Suspense key={searchParams.id} fallback={<div>Loading...</div>}>
          <DisplayData id={searchParams.id} major={searchParams.major} />
        </Suspense>
      </div>
    </div>
  );
}
