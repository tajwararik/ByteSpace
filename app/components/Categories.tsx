"use client";

import { useState } from "react";
import { poppins } from "../layout";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export default function Categories() {
  const [active, setActive] = useState("Featured");

  return (
    <section className="bg-white px-6 py-20 text-center">
      <h2
        className={`${poppins.className} text-4xl leading-tight text-(--ink)`}
      >
        Discover Your Passion,
        <br />
        Build Your Skills
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-neutral-400">
        At Bytespace Courses, we bring you closer to life-changing knowledge.
        Explore a variety of courses across different fields, from technology to
        the arts, and make a difference in your career and life.
      </p>

      <div className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-3">
        {categories.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => setActive(name)}
            className={`cursor-pointer rounded-full px-4 py-2 text-sm transition-colors ${
              active === name
                ? "bg-(--lime) font-medium text-(--ink)"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            {name}
          </button>
        ))}

        <button
          type="button"
          className="cursor-pointer px-2 text-sm text-[#0038E0] hover:underline"
        >
          + More
        </button>
      </div>
    </section>
  );
}
