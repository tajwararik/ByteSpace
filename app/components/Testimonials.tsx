import { poppins } from "../layout";
import TestimonialCard from "./TestimonialCard";

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "/profiles/profile-one.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: "/profiles/profile-two.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: "/profiles/profile-three.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function Testimonials() {
  return (
    <section className="soft-gradient-right relative overflow-hidden bg-[#f7f8fb] py-20">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <h2
            className={`${poppins.className} max-w-md text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl`}
          >
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
