import CourseCard, { type Course } from "./CourseCard";

const author = "purepearl studio";

const courses: Course[] = [
  { title: "Learn Figma from Basic", thumb: "/courses/image-one.png", author },
  {
    title: "Build Digital Asset",
    thumb: "/courses/image-two.png",
    author,
  },
  { title: "The Power of Big Data", thumb: "/courses/image-three.png", author },
  {
    title: "Balancing Productivity and Life",
    thumb: "/courses/image-four.png",
    author,
  },
  {
    title: "Mastering Money Management",
    thumb: "/courses/image-five.png",
    author,
  },
  {
    title: "From Idea to Startup Success",
    thumb: "/courses/image-six.png",
    author,
  },
];

export default function Courses() {
  return (
    <section className="bg-white px-6 pb-20">
      <div className="mx-auto grid max-w-300 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <CourseCard key={c.title} {...c} eager />
        ))}
      </div>
    </section>
  );
}
