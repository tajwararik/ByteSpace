import Image from "next/image";
import { poppins } from "../layout";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const perks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

function Check() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" className="shrink-0">
      <circle cx="11" cy="11" r="11" fill="#0038E0" />
      <path
        d="M6.5 11.3l3 3 6-6.3"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Growth() {
  return (
    <section className="soft-gradient overflow-x-clip px-6 pt-16 pb-8">
      <div className="mx-auto flex max-w-300 flex-col gap-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              className={`${poppins.className} text-4xl leading-[1.2] text-(--ink) lg:text-[44px]`}
            >
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-10 max-w-120 text-[17px] leading-7 text-neutral-600">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <dl className="mt-12 flex gap-14">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <dt
                    className={`${poppins.className} text-4xl text-[#0038E0]`}
                  >
                    {value}
                  </dt>
                  <dd className="mt-1 text-base text-neutral-600">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Image
            src="/posters/poster-one.png"
            alt="A smiling student with headphones and a laptop, next to a course card and a 55% learning progress card"
            loading="eager"
            width={703}
            height={697}
            className="h-auto w-full lg:w-[124%] lg:max-w-none"
          />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Image
            src="/posters/poster-two.png"
            alt="A smiling course creator with headphones and a tablet, next to revenue cards and a happy students card"
            loading="eager"
            width={587}
            height={719}
            className="h-auto w-full max-w-146.75"
          />

          <div>
            <h2
              className={`${poppins.className} text-4xl leading-[1.2] text-(--ink) lg:text-[44px]`}
            >
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="mt-10 max-w-140 text-[17px] leading-7 text-neutral-600">
              <strong className="font-semibold text-(--ink)">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            <ul className="mt-10 space-y-4">
              {perks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-3 text-lg text-neutral-800"
                >
                  <Check />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
