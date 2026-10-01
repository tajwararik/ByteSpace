import CourseHero from "./_components/CourseHero";
import CourseTabs from "./_components/CourseTabs";
import AboutTab from "./_components/AboutTab";
import LessonsTab from "./_components/LessonsTab";
import ReviewsTab from "./_components/ReviewsTab";
import { tabs, type TabKey } from "./data";

export default async function CoursePage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;
  const active: TabKey = tabs.find((t) => t.key === tab)?.key ?? "about";

  return (
    <>
      <CourseHero />

      <section className="bg-white lg:min-h-130">
        <div className="mx-auto max-w-300 px-6 pt-16 pb-16 xl:px-0">
          <div className="lg:max-w-[calc(100%-476px)]">
            <CourseTabs active={active} />

            {active === "about" && <AboutTab />}
            {active === "lessons" && <LessonsTab />}
            {active === "reviews" && <ReviewsTab />}
          </div>
        </div>
      </section>
    </>
  );
}
