import Image from "next/image";
import { poppins } from "@/app/layout";

const sneakPeek = [
  "/course/sneak-peak-one.png",
  "/course/sneak-peak-two.png",
  "/course/sneak-peak-three.png",
  "/course/sneak-peak-four.png",
];

const keyPoints = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

function Check() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      aria-hidden
      className="shrink-0"
    >
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

export default function AboutTab() {
  return (
    <>
      <h2
        className={`${poppins.className} text-xl leading-[1.2] text-(--ink) mt-10`}
      >
        Description
      </h2>
      <div className="mt-6 space-y-6 text-base leading-relaxed text-neutral-600">
        <p>
          Embark on an enlightening exploration into the world of digital
          creation with our comprehensive course, “Build Digital Asset: A
          Comprehensive Guide.” This transformative learning experience invites
          you to delve deep into the intricacies of crafting impactful digital
          content. From laying the groundwork with foundational concepts to
          mastering advanced techniques, this guide is meticulously curated to
          empower you with the skills essential for navigating the dynamic
          landscape of digital asset creation.
        </p>

        <p>
          In the initial modules, you’ll establish a solid foundation by
          immersing yourself in the foundational concepts that form the backbone
          of digital asset creation. Understand the fundamental elements that
          constitute compelling digital content and gain proficiency in
          leveraging these elements to communicate effectively in the digital
          realm.
        </p>

        <p>
          As you progress through the course, you’ll ascend to higher levels of
          expertise, delving into the nuances of design principles that drive
          impactful creations. Uncover the secrets behind effective visual
          communication, exploring color theory, typography, and layout
          strategies that elevate your digital assets to new heights. Engage in
          hands-on exercises that reinforce your understanding, allowing you to
          apply these principles in practical scenarios.
        </p>
      </div>

      <h2
        className={`${poppins.className} text-xl leading-[1.2] text-(--ink) mt-6`}
      >
        Sneak Peak
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {sneakPeek.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`Course sneak peek ${i + 1}`}
            width={167}
            height={125}
            className="h-auto w-full"
          />
        ))}
      </div>

      <h2
        className={`${poppins.className} text-xl leading-[1.2] text-(--ink) mt-6`}
      >
        Key Points
      </h2>
      <ul className="mt-6 space-y-3.5">
        {keyPoints.map((point) => (
          <li
            key={point}
            className="flex items-center gap-2 text-base text-neutral-600"
          >
            <Check />
            {point}
          </li>
        ))}
      </ul>
    </>
  );
}
