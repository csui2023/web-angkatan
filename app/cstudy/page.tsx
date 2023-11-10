import Link from "next/link";

export default function CStudy() {
  return (
    <div className="pt-32 pb-10 w-full max-w-sm md:max-w-7xl px-3">
      <div className="py-6">
        <h1 className="text-7xl font-clash-display text-center mb-8">CStudy</h1>
      </div>
      <div className="py-6 grid md:grid-cols-3 space-y-10 md:space-y-0 justify-center">
        <Link
          href="https://drive.google.com/drive/folders/1TgGbVuUF7adfoep8e9AFvtemibhoZlhK"
          className="shadow-lg hover:shadow-2xl transition p-5 w-[240px] lg:w-[320px] xl:w-[360px] h-[240px] lg:h-[320px] xl:h-[360px] bg-gradient-to-b from-purple-500 via-purple-400 to-white flex justify-center items-center rounded-2xl"
        >
          <h2 className="text-2xl lg:text-4xl text-white font-bold text-center">
            Computer Science
          </h2>
        </Link>
        <Link
          href="https://drive.google.com/drive/folders/1TgGbVuUF7adfoep8e9AFvtemibhoZlhK"
          className="shadow-lg hover:shadow-2xl transition p-5 w-[240px] lg:w-[320px] xl:w-[360px] h-[240px] lg:h-[320px] xl:h-[360px] bg-gradient-to-b from-cyan-300 via-blue-300 to-blue-200 flex justify-center items-center rounded-2xl"
        >
          <h2 className="text-2xl lg:text-4xl text-white font-bold text-center">
            Information System
          </h2>
        </Link>
        <Link
          href="https://drive.google.com/drive/folders/1TgGbVuUF7adfoep8e9AFvtemibhoZlhK"
          className="shadow-lg hover:shadow-2xl transition p-5 w-[240px] lg:w-[320px] xl:w-[360px] h-[240px] lg:h-[320px] xl:h-[360px] bg-gradient-to-b from-pink-200 via-pink-300 to-blue-200 flex justify-center items-center rounded-2xl"
        >
          <h2 className="text-2xl lg:text-4xl text-white font-bold text-center">
            International Compsci
          </h2>
        </Link>
      </div>
    </div>
  );
}
