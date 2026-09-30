import Image from "next/image";

export type Course = {
  id?: number;
  title: string;
  thumb: string;
  author: string;
  eager?: boolean;
};

export default function CourseCard({
  title,
  thumb,
  author,
  eager = false,
}: Course) {
  return (
    <article className="rounded-3xl border border-neutral-200 bg-white p-4 text-left transition-shadow hover:shadow-lg">
      <Image
        src={thumb}
        alt={`${title} course preview: 17 lessons, 2 hours 16 minutes, 59 comments`}
        width={341}
        height={196}
        loading={eager ? "eager" : "lazy"}
        className="h-auto w-full rounded-2xl"
      />

      <div className="mt-4 flex items-center justify-between gap-2">
        <h3 className="min-w-0 truncate text-xl font-semibold text-(--ink)">
          {title}
        </h3>
        <Image
          src="/courses/rating.png"
          alt="Rated 4.5 out of 5"
          width={51}
          height={28}
          className="h-7 w-auto shrink-0"
        />
      </div>

      <p className="text-xs text-neutral-400">
        by <span className="text-[#0038E0]">{author}</span>
      </p>

      <Image
        src="/courses/label.png"
        alt="Beginner level, 26+ students enrolled"
        width={237}
        height={32}
        className="mt-4 h-8 w-auto"
      />

      <Image
        src="/courses/price.png"
        alt="$25 lifetime access"
        width={78}
        height={24}
        className="mt-3 h-6 w-auto"
      />
    </article>
  );
}
