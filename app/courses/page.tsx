import Image from "next/image";
import { poppins } from "../layout";
import Header from "../components/Header";
import CourseToolbar from "../components/CourseToolbar";
import CategoryTabs from "../components/CategoryTabs";
import CourseCard, { type Course } from "../components/CourseCard";
import Footer from "../components/Footer";

const author = "purepearl studio";

const courses: Course[] = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    thumb: "/courses/image-one.png",
    author,
  },
  {
    id: 2,
    title: "Build Digital Asset",
    thumb: "/courses/image-two.png",
    author,
  },
  {
    id: 3,
    title: "The Power of Big Data",
    thumb: "/courses/image-three.png",
    author,
  },
  {
    id: 4,
    title: "Balancing Productivity and Life",
    thumb: "/courses/image-four.png",
    author,
  },
  {
    id: 5,
    title: "Mastering Money Management",
    thumb: "/courses/image-five.png",
    author,
  },
  {
    id: 6,
    title: "From Idea to Startup Success",
    thumb: "/courses/image-six.png",
    author,
  },
  {
    id: 7,
    title: "Learn Figma from Basic",
    thumb: "/courses/image-one.png",
    author,
  },
  {
    id: 8,
    title: "Build Digital Asset",
    thumb: "/courses/image-two.png",
    author,
  },
  {
    id: 9,
    title: "The Power of Big Data",
    thumb: "/courses/image-three.png",
    author,
  },
  {
    id: 10,
    title: "Balancing Productivity and Life",
    thumb: "/courses/image-four.png",
    author,
  },
  {
    id: 11,
    title: "Mastering Money Management",
    thumb: "/courses/image-five.png",
    author,
  },
  {
    id: 12,
    title: "From Idea to Startup Success",
    thumb: "/courses/image-six.png",
    author,
  },
  {
    id: 13,
    title: "Learn Figma from Basic",
    thumb: "/courses/image-one.png",
    author,
  },
  {
    id: 14,
    title: "Build Digital Asset",
    thumb: "/courses/image-two.png",
    author,
  },
  {
    id: 15,
    title: "The Power of Big Data",
    thumb: "/courses/image-three.png",
    author,
  },
  {
    id: 16,
    title: "Balancing Productivity and Life",
    thumb: "/courses/image-four.png",
    author,
  },
  {
    id: 17,
    title: "Mastering Money Management",
    thumb: "/courses/image-five.png",
    author,
  },
  {
    id: 18,
    title: "From Idea to Startup Success",
    thumb: "/courses/image-six.png",
    author,
  },
];

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
      <CategoryTabs />

      <section className="bg-white px-6 py-10">
        <div className="mx-auto grid max-w-300 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.id} {...c} eager />
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex max-w-300 items-center justify-center gap-3 px-6 pt-12 pb-18">
          <Image
            src="/previous.svg"
            alt="Previous page"
            width={56}
            height={48}
          />

          <ul className="flex items-center text-base font-semibold text-(--ink)">
            <li className="flex size-9 items-center justify-center text-neutral-300">
              1
            </li>
            <li className="flex size-9 items-center justify-center">2</li>
            <li className="flex size-9 items-center justify-center">3</li>
            <li className="flex size-9 items-center justify-center">4</li>
            <li className="flex size-9 items-center justify-center">5</li>
          </ul>

          <Image src="/next.svg" alt="Next page" width={56} height={48} />
        </div>
      </section>

      <Footer />
    </>
  );
}
