import Image from "next/image";

const filters = [
  { label: "Filter", icon: "/filter.svg" },
  { label: "Level", icon: "/level.svg" },
  { label: "Category", icon: "/category.svg" },
];

const pill =
  "inline-flex h-10.5 cursor-pointer items-center gap-2 rounded-full border border-neutral-300 bg-white px-3 text-base text-(--ink) transition-colors hover:bg-neutral-50";

export default function CourseToolbar() {
  return (
    <section className="bg-white mb-10">
      <div className="mx-auto flex max-w-300 flex-wrap items-center justify-between gap-4 px-6 pt-14">
        <div className="flex flex-wrap gap-4">
          {filters.map(({ label, icon }) => (
            <button key={label} type="button" className={pill}>
              <Image src={icon} alt="" aria-hidden width={24} height={24} />
              {label}
            </button>
          ))}
        </div>

        <button type="button" className={pill}>
          <Image
            src="/sort.svg"
            alt=""
            aria-hidden
            width={24}
            height={24}
          />
          Most relevant
        </button>
      </div>
    </section>
  );
}
