import Image from "next/image";

const logos = [
  { src: "/logos/frame-one.svg", w: 167, h: 41 },
  { src: "/logos/frame-two.svg", w: 168, h: 41 },
  { src: "/logos/frame-three.svg", w: 170, h: 41 },
  { src: "/logos/frame-four.svg", w: 170, h: 41 },
  { src: "/logos/frame-five.svg", w: 169, h: 42 },
];

export default function LogoStrip() {
  return (
    <section className="bg-[#F5F5F6] py-13">
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-6 px-6 lg:justify-between">
        {logos.map(({ src, w, h }) => (
          <li key={src}>
            <Image
              src={src}
              alt="Partner logo"
              width={w}
              height={h}
              className="h-10 w-auto"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
