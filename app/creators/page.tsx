import Image from "next/image";
import Header from "../components/Header";
import { poppins } from "../layout";

const creator = {
  name: "PurePearl Studio",
  role: "Passionate UI/UX, Web designer",
  avatar: "/profiles/profile-four.png",
  bio: [
    "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
    "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  ],
  stats: [
    { value: 3, label: "Products" },
    { value: 12, label: "Followers" },
  ],
};

export default function CreatorsPage() {
  return (
    <section className="w-full blue-grid text-white">
      <Header />

      <div className="mx-auto max-w-300 px-6 pt-10 pb-20">
        <div className="flex items-center gap-6">
          <Image
            src={creator.avatar}
            alt={`${creator.name} profile photo`}
            width={96}
            height={96}
            priority
            className="size-24 shrink-0"
          />

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className={`${poppins.className} text-3xl`}>
                {creator.name}
              </h1>
              <span className="rounded-full bg-(--lime) px-4 py-1.5 text-sm text-(--ink)">
                Creator
              </span>
            </div>
            <p className="mt-1 text-base text-white/90">{creator.role}</p>
          </div>
        </div>

        <div className="mt-10 space-y-1 text-base leading-[1.7] text-white/95">
          {creator.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <ul className="flex flex-wrap gap-4">
            {creator.stats.map(({ value, label }) => (
              <li
                key={label}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-base text-(--ink)"
              >
                <span className="text-[#0038E0]">{value}</span>
                {label}
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="inline-flex h-11 cursor-pointer items-center justify-center rounded-full bg-(--lime) px-7 font-medium text-(--ink)"
          >
            Follow
          </button>
        </div>
      </div>
    </section>
  );
}
