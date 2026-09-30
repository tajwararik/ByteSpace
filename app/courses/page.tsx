import Image from "next/image";
import { poppins } from "../layout";
import Header from "../components/Header";
import CourseToolbar from "../components/CourseToolbar";

export default function CoursesPage() {
  return (
    <>
      <section className="w-full blue-grid text-white">
        <Header />

        <div className="mx-auto max-w-300 px-6 pt-10 pb-16 text-center">
          <h1 className={`${poppins.className} text-[32px] leading-tight`}>
            Find Your Next Course
          </h1>

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
                placeholder="Search"
                className="h-11 w-full rounded-3xl border border-gray-300 bg-white pl-11 text-neutral-500 outline-none placeholder:text-gray-500"
              />
            </div>
            <button className="inline-flex h-10 items-center justify-center rounded-3xl bg-(--lime) px-6 align-middle text-(--ink) cursor-pointer">
              Courses
              <Image
                src="/drop-down.svg"
                alt=""
                aria-hidden
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </section>

      <CourseToolbar />
    </>
  );
}
