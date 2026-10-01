import Image from "next/image";
import Link from "next/link";
import { poppins } from "../../layout";

const lessons = [
  { n: "01", title: "Introduction to Digital Assets", mins: 12 },
  { n: "02", title: "Design Principles for Impacts", mins: 21 },
  { n: "03", title: "Advanced Techniques in Digital Creation", mins: 16 },
];

const includes = [
  { icon: "/course/resource.svg", label: "Learning Resources" },
  { icon: "/course/record.svg", label: "Quality Lesson Videos" },
  { icon: "/course/info.svg", label: "Certificate of Completion" },
  { icon: "/course/consult.svg", label: "Private Consultation" },
];

export default function CourseSidebar() {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 text-(--ink) sm:p-10 lg:absolute lg:inset-x-0 lg:top-0 lg:z-10">
      <h2 className={`${poppins.className} text-xl leading-[1.2] text-(--ink)`}>
        112 Lessons (24 hours)
      </h2>

      <ol className="mt-6 space-y-3">
        {lessons.map(({ n, title, mins }) => (
          <li key={n} className="flex items-start gap-3 text-sm leading-[1.35]">
            <span className="w-5 shrink-0 text-neutral-500">{n}</span>
            <span className="flex-1">{title}</span>
            <span className="shrink-0 text-[#0038E0]">{mins} mins</span>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-sm text-neutral-500">99 more videos</p>

      <p className="mt-8 max-w-72 text-sm leading-6.5 text-neutral-500">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      <p className="mt-6 flex items-baseline gap-0.5">
        <span
          className={`${poppins.className} text-[32px] leading-none text-[#0038E0]`}
        >
          $25
        </span>
        <span className="text-xs text-neutral-400">/lifetime</span>
      </p>

      <button
        type="button"
        className="mt-6 h-11.5 w-full cursor-pointer rounded-full bg-(--lime) text-base font-medium text-(--ink)"
      >
        Enroll Now
      </button>

      <h3
        className={`${poppins.className} text-xl leading-[1.2] text-(--ink) mt-6`}
      >
        This course include
      </h3>
      <ul className="mt-5 space-y-3.5">
        {includes.map(({ icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-2 text-[15px] text-neutral-600"
          >
            <Image src={icon} alt="" aria-hidden width={24} height={24} />
            {label}
          </li>
        ))}
      </ul>

      <hr className="mt-6 border-neutral-200" />

      <div className="mt-6 flex items-center gap-3">
        <Image
          src="/course/profile-five.png"
          alt="PurePearl Studio"
          width={52}
          height={52}
        />
        <div>
          <p className="text-base text-(--ink)">PurePearl Studio</p>
          <p className="text-sm text-neutral-500">Professional Creator</p>
        </div>
      </div>

      <p className="mt-6 max-w-72 text-sm leading-6.5 text-neutral-500">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      <Link
        href="/creators"
        className="mt-6 inline-flex h-9 items-center rounded-full border border-neutral-300 px-4 text-sm text-(--ink) transition-colors hover:bg-neutral-50"
      >
        See Full Profile
      </Link>
    </div>
  );
}
