import Image from "next/image";
import { poppins } from "../../layout";
import Header from "../../components/Header";
import CourseSidebar from "./CourseSidebar";

const stats = [
  { icon: "/course/network.svg", label: "Intermediate" },
  { icon: "/course/star-blue.svg", label: "4.8 (172 reviews)" },
  { icon: "/course/contact.svg", label: "199 Students" },
];

export default function CourseHero() {
  return (
    <section className="w-full blue-grid text-white">
      <Header />

      <div className="mx-auto max-w-300 px-6 pt-16 pb-16 xl:px-0">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1
              className={`${poppins.className} text-3xl leading-[1.2] sm:text-4xl`}
            >
              Build Digital Asset: A Comprehensive Guide
            </h1>
            <p
              className={`${poppins.className} mt-2 text-lg leading-[1.2] sm:text-xl`}
            >
              Unlock the Power of Digital Creation with Expert Guidance
            </p>
            <p className="mt-6 text-base">
              by <span className="text-(--lime)">purepearl studio</span>
            </p>

            <ul className="mt-6 flex flex-wrap gap-4">
              {stats.map(({ icon, label }) => (
                <li
                  key={label}
                  className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-5 text-base text-(--ink)"
                >
                  <Image src={icon} alt="" width={24} height={24} />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-full bg-(--lime) px-5 text-base font-medium text-(--ink)"
          >
            <Image
              src="/course/share.svg"
              alt=""
              aria-hidden
              width={24}
              height={24}
            />
            Share
          </button>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_412px] lg:gap-16">
          <Image
            src="/course/video.png"
            alt="Course preview video"
            width={720}
            height={479}
            priority
            className="h-auto w-full"
          />

          <aside className="lg:relative">
            <CourseSidebar />
          </aside>
        </div>
      </div>
    </section>
  );
}
