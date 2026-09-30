import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import Categories from "./components/Categories";
import Courses from "./components/Courses";
import Paths from "./components/Paths";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <Categories />
      <Courses />
      <Paths />
    </main>
  );
}
