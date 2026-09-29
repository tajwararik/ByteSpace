import Header from "./components/Header";
import { poppins, satoshi } from "./layout";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate w-screen min-h-175 blue-grid text-center text-white">
      <div className="relative z-10">
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
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 aspect-1149/442 w-full max-w-200 -translate-x-1/2">
        <Image
          src="/Ellipse.svg"
          alt=""
          width={1149}
          height={442}
          className="absolute inset-0 h-full w-full"
        />
        <Image
          src="/boy.svg"
          alt=""
          width={722}
          height={515}
          className="absolute bottom-0 left-1/2 z-10 h-auto w-[min(520px,65%)] -translate-x-1/2"
        />
      </div>
    </section>
  );
}
