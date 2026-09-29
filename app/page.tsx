import Header from "./components/Header";
import { poppins, satoshi } from "./layout";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-screen min-h-175 blue-grid text-center text-white">
      <Header />

      <div className="mt-8">
        <h1 className={`${poppins.className} text-5xl my-4`}>
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>
        <p className="my-8 font-normal">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
      </div>

      <div className="mx-auto my-6 flex max-w-1/2 items-center justify-center gap-3">
        <div className="relative inline-block w-full max-w-sm align-middle">
          <Image
            src="/search.svg"
            alt="Search"
            width={24}
            height={24}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            placeholder="Course, topic, creator"
            className="h-11 w-full rounded-3xl border border-gray-300 bg-white pl-11 outline-none placeholder:text-gray-500 text-neutral-500"
          />
        </div>
        <button className="inline-flex h-10 items-center justify-center rounded-3xl bg-(--lime) px-6 text-(--ink) align-middle font-medium">
          Search
        </button>
      </div>
    </section>
  );
}
