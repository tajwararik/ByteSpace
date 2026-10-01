import Image from "next/image";
import { poppins } from "../../layout";
import { course } from "../data";

export default function LessonsTab() {
  return (
    <>
      <h2
        className={`${poppins.className} text-xl leading-[1.2] text-(--ink) mt-10`}
      >
        Explore the Modules
      </h2>
      <p className="mt-6 text-base leading-relaxed text-neutral-600">
        Immerse yourself in the course content as we break down each module into
        comprehensive lessons, providing practical insights and hands-on
        experiences.
      </p>

      <h2
        className={`${poppins.className} text-xl leading-[1.2] text-(--ink) mt-6`}
      >
        Lesson List
      </h2>
      <ul className="mt-6 space-y-6">
        {course.modules.map(({ title, text }) => (
          <li key={title} className="flex items-center gap-3">
            <Image
              src="/course/camera.svg"
              alt=""
              width={72}
              height={72}
              className="size-18 shrink-0"
            />
            <div>
              <h3 className="text-base leading-relaxed text-(--ink)">
                {title}
              </h3>
              <p className="text-base leading-relaxed text-neutral-600">
                {text}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <h2
        className={`${poppins.className} text-xl leading-[1.2] text-(--ink) mt-6`}
      >
        Lesson Content
      </h2>
      <p className="mt-6 text-base leading-relaxed text-neutral-600">
        Engage with each lesson through captivating video content, detailed
        textual explanations, and interactive elements. Download resources,
        complete assignments, and test your understanding with quizzes.
      </p>

      <h2
        className={`${poppins.className} text-xl leading-[1.2] text-(--ink) mt-6`}
      >
        Lesson Progress Tracking
      </h2>
      <p className="mt-6 text-base leading-relaxed text-neutral-600">
        Witness your growth as you complete lessons, with an intuitive progress
        tracking feature guiding you through your learning journey.
      </p>

      <div className="mt-6 rounded-2xl border border-neutral-200 p-4">
        <p className="text-sm text-(--ink)">Learning Progress</p>
        <p
          className={`${poppins.className} mt-2 text-[32px] leading-[1.2] text-(--ink)`}
        >
          55%
        </p>
        <div
          role="progressbar"
          className="mt-3 h-2 w-full rounded-full bg-neutral-200"
        >
          <div className="h-full w-[55%] rounded-full bg-(--lime)" />
        </div>
      </div>
    </>
  );
}
