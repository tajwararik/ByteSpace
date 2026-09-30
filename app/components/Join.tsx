import Link from "next/link";
import { poppins } from "../layout";

export default function Join() {
  return (
    <section className="blue-grid py-12 text-center text-white">
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
