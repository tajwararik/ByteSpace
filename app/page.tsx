import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import Categories from "./components/Categories";
import Courses from "./components/Courses";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <Categories />
      <Courses />
    </main>
  );
}
