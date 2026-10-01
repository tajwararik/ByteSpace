import Link from "next/link";
import { tabs, type TabKey } from "../data";

// const tabs = [
//   { key: "about", label: "About" },
//   { key: "lessons", label: "Lesson" },
//   { key: "reviews", label: "Reviews" },
// ];

// type TabKey = (typeof tabs)[number]["key"];

export default function CourseTabs({ active }: { active: TabKey }) {
  return (
    <nav>
      <ul className="flex gap-4">
        {tabs.map(({ key, label }) => (
          <li key={key}>
            <Link
              href={`?tab=${key}`}
              scroll={false}
              aria-current={active === key ? "page" : undefined}
              className={`inline-flex h-11 items-center rounded-full px-5 text-base transition-colors ${
                active === key
                  ? "bg-(--lime) font-medium text-(--ink)"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
