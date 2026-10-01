import Image from "next/image";
import { poppins } from "../../layout";
import { course } from "../data";

const { reviews } = course;

export default function ReviewsTab() {
  return (
    <>
      <h2
        className={`${poppins.className} text-xl leading-[1.2] text-(--ink) mt-10`}
      >
        What Learners Are Saying
      </h2>
      <p className="mt-6 text-base leading-relaxed text-neutral-600">
        {reviews.intro}
      </p>

      <div className="mt-6 flex flex-col gap-6 rounded-2xl border border-neutral-200 p-6 sm:flex-row sm:items-center sm:p-10">
        <div className="flex h-35 w-32 shrink-0 flex-col items-center justify-center rounded-lg bg-(--lime) text-(--ink)">
          <span className="text-xs">Ratings</span>
          <span
            className={`${poppins.className} mt-1 text-[32px] leading-none`}
          >
            {reviews.average}
          </span>
        </div>

        <ul className="flex-1 space-y-1.5">
          {reviews.breakdown.map(({ stars, count, pct }, i) => (
            <li key={i} className="flex items-center gap-5">
              <div className="h-1.5 flex-1 rounded-full bg-neutral-200">
                <div
                  className="h-full rounded-full bg-(--lime)"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="flex w-33 shrink-0 gap-0.5">
                {Array.from({ length: stars }).map((_, s) => (
                  <Image
                    key={s}
                    src="/course/star.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                ))}
              </div>
              <span className="w-9 shrink-0 text-right text-sm text-neutral-600">
                {count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <h2
        className={`${poppins.className} text-xl leading-[1.2] text-(--ink) mt-6`}
      >
        Individual Reviews:
      </h2>

      <ul className="mt-6 flex flex-wrap gap-4">
        {reviews.filters.map((f, i) => (
          <li key={f}>
            <button
              type="button"
              className={`inline-flex h-10 cursor-pointer items-center gap-1.5 rounded-full px-4 text-sm transition-colors ${
                i === 0
                  ? "bg-(--lime) font-medium text-(--ink)"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              {i !== 0 && (
                <Image src="/course/star.svg" alt="" width={20} height={20} />
              )}
              {f}
            </button>
          </li>
        ))}
      </ul>

      <ul className="mt-8 space-y-6">
        {reviews.items.map(({ name, role, avatar, when, text }) => (
          <li
            key={name}
            className="rounded-3xl border border-neutral-200 p-6 sm:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <Image src={avatar} alt="" width={52} height={52} />
                <div>
                  <p className="text-base leading-6 text-(--ink)">{name}</p>
                  <p className="text-sm leading-6 text-neutral-500">{role}</p>
                </div>
              </div>
              <p className="shrink-0 text-sm leading-6 text-neutral-500">
                {when}
              </p>
            </div>

            <div className="mt-6 flex gap-0.5" role="img">
              {Array.from({ length: 5 }).map((_, s) => (
                <Image
                  key={s}
                  src="/course/star.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              ))}
            </div>

            <p className="mt-6 text-sm leading-6 text-neutral-600">{text}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
