import Image from "next/image";
import Link from "next/link";
import { poppins } from "../layout";

const paths = [
  { label: "Design", icon: "/categories/design.svg" },
  { label: "Development", icon: "/categories/development.svg" },
  { label: "IT & Software", icon: "/categories/it.svg" },
  { label: "Business", icon: "/categories/business.svg" },
  { label: "Marketing", icon: "/categories/marketing.svg" },
  { label: "Photography", icon: "/categories/photography.svg" },
];

export default function Paths() {
  return (
    <section className="bg-white px-6 pb-28 text-center">
      <h2 className={`${poppins.className} text-3xl text-(--ink)`}>
        Explore Diverse Learning Paths at Bytespace
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-neutral-400">
        At Bytespace, we believe in empowering individuals through knowledge.
        Our diverse range of courses spans various fields, ensuring there&apos;s
        something for everyone. Unleash your potential and explore our carefully
        curated categories.
      </p>

      <ul className="mx-auto mt-14 grid max-w-300 grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10">
        {paths.map(({ label, icon }) => (
          <li key={label}>
            <Link
              href="#"
              className="flex aspect-square flex-col items-center justify-center gap-4 rounded-3xl border border-neutral-200 bg-white text-neutral-700 transition hover:border-(--lime) hover:shadow-lg"
            >
              <Image src={icon} alt="" width={60} height={60} />
              <span className="text-base">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
