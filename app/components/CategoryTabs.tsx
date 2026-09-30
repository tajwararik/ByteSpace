"use client";

import { useState } from "react";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export default function CategoryTabs() {
  const [active, setActive] = useState("Featured");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-300 px-6 pt-7">
        <ul className="flex w-full justify-between gap-3 overflow-x-auto pb-2 scrollbar-none [&::-webkit-scrollbar]:hidden">
          {categories.map((name) => (
            <li key={name} className="shrink-0">
              <button
                type="button"
                aria-pressed={active === name}
                onClick={() => setActive(name)}
                className={`cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors ${
                  active === name
                    ? "bg-(--lime) font-medium text-(--ink)"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
