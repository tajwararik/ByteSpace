import Image from "next/image";
import Link from "next/link";
import { poppins } from "../layout";

const shapes = [
  {
    src: "/shapesTwo/cta-lime-squiggle-br.webp",
    cls: "left-[0] top-[0] w-[15%]",
  },
  {
    src: "/shapesTwo/cta-lime-pyramid.webp",
    cls: "right-[15%] top-[0%] w-[10%]",
  },
  { src: "/shapesTwo/cta-lime-ring.webp", cls: "left-[2%] bottom-[0] w-[15%]" },
  {
    src: "/shapesTwo/cta-lime-squiggle-tl.webp",
    cls: "right-[5%] bottom-[0] w-[15%]",
  },
  {
    src: "/shapesTwo/cta-white-cone.webp",
    cls: "left-[0%] top-[42%] w-[8%]",
  },
  {
    src: "/shapesTwo/cta-white-cylinder.webp",
    cls: "right-[0] top-[0] w-[13%]",
  },
  {
    src: "/shapesTwo/cta-white-squiggle.webp",
    cls: "left-[10%] top-[0] w-[9%]",
  },
];

export default function Join() {
  return (
    <section className="blue-grid py-12 text-center text-white relative">
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
      <div className="my-2.5">
        <h2
          className={`${poppins.className} mx-auto mt-2 max-w-2xl text-4xl font-black leading-tight tracking-[-.04em] sm:text-5xl`}
        >
          Unlock Your Potential as a <br /> Creator with ByteSpace
        </h2>
        <p className="max-w-3xl mx-auto mt-5 mb-10 text-sm leading-6 text-blue-100">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-3xl bg-(--lime) px-6 align-middle font-medium text-(--ink) cursor-pointer"
          href="/signup"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
