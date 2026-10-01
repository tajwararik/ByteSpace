import type { ReactNode } from "react";
import Footer from "../components/Footer";

export default function CourseDetails({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
