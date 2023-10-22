import data from "../../public/data.json";

export default function TheFam() {
  return (
    <pre className="whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</pre>
  );
}
