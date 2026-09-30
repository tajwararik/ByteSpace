import Image from "next/image";

type Props = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

export default function TestimonialCard({ name, role, image, quote }: Props) {
  return (
    <article className="rounded-[28px] bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
      <Image
        src={image}
        alt={name}
        width={64}
        height={64}
        className="h-16 w-16 rounded-full object-cover"
      />
      <h3 className="mt-5 text-lg font-bold text-slate-900">{name}</h3>
      <p className="mt-1 text-sm font-medium text-(--byte-blue)">{role}</p>
      <p className="mt-5 text-sm leading-relaxed text-slate-600">"{quote}"</p>
    </article>
  );
}
