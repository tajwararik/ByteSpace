import Header from "./components/Header";
import { poppins } from "./layout";
import Image from "next/image";

const shapes = [
  { src: "/shapes/squiggle-lime.png", cls: "-left-[1%] top-[18%] w-[14%]" },
  { src: "/shapes/squiggle-white-sm.png", cls: "left-[20%] top-[45%] w-[8%]" },
  { src: "/shapes/ring.png", cls: "left-[18%] bottom-[2%] w-[16%]" },
  { src: "/shapes/Cone.png", cls: "-right-[1%] top-[20%] w-[12%]" },
  { src: "/shapes/triangle-white.png", cls: "right-[15%] top-[42%] w-[9%]" },
  {
    src: "/shapes/squiggle-white-lg.png",
    cls: "right-[19%] top-[65%] w-[13%]",
  },
];

const cards = [
  {
    src: "/cards/card-one.png",
    alt: "UI/UX Design: 200 courses, 1000+ students",
    w: 208,
    h: 70,
    cls: "left-[18%] top-[5%] w-[18%]",
  },
  {
    src: "/cards/card-two.png",
    alt: "Happy students: 4.5 rating, 240 reviews",
    w: 232,
    h: 131,
    cls: "left-[56%] top-[10%] w-[22.5%]",
  },
  {
    src: "/cards/card-three.png",
    alt: "Learning progress: 55%",
    w: 258,
    h: 121,
    cls: "left-[15%] top-[58%] w-[20%]",
  },
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-175 w-full overflow-hidden blue-grid text-center text-white">
      {shapes.map(({ src, cls }) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={400}
          height={400}
          className={`pointer-events-none absolute z-5 hidden h-auto select-none lg:block ${cls}`}
        />
      ))}

      <div className="relative z-10">
        <Header />

        <div className="mt-8">
          <h1 className={`${poppins.className} my-4 text-5xl`}>
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
              className="h-11 w-full rounded-3xl border border-gray-300 bg-white pl-11 text-neutral-500 outline-none placeholder:text-gray-500"
            />
          </div>
          <button className="inline-flex h-10 items-center justify-center rounded-3xl bg-(--lime) px-6 align-middle font-medium text-(--ink) cursor-pointer">
            Search
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 aspect-1149/442 w-full max-w-200 -translate-x-1/2">
        <Image
          src="/Ellipse.svg"
          alt=""
          aria-hidden
          width={1149}
          height={442}
          className="absolute inset-0 h-full w-full"
        />
        <Image
          src="/boy.svg"
          loading="eager"
          alt="Boy image"
          width={722}
          height={515}
          className="absolute bottom-0 left-1/2 z-10 h-auto w-[min(520px,65%)] -translate-x-1/2"
        />

        {cards.map(({ src, alt, w, h, cls }) => (
          <Image
            key={src}
            src={src}
            alt={alt}
            width={w}
            height={h}
            className={`absolute z-20 hidden h-auto drop-shadow-xl md:block ${cls}`}
          />
        ))}
      </div>
    </section>
  );
}
