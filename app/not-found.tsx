import Footer from "./components/Footer";

import Link from "next/link";
import type { Metadata } from "next";
import { poppins } from "./layout";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "404 – Page Not Found",
};

export default function NotFound() {
  return (
    <>
      <section className="w-full blue-grid text-white">
        <Header />

        <div className="mx-auto max-w-300 px-6 pt-8 pb-28 text-center">
          <div className="mx-auto w-fit text-[clamp(120px,27vw,400px)]">
            <p
              className={`${poppins.className} mb-[-0.33em] select-none bg-linear-to-b from-(--lime) from-35% to-transparent bg-clip-text font-semibold leading-none text-transparent`}
            >
              404
            </p>

            <h1
              className={`${poppins.className} relative w-0 min-w-full text-[0.15em] leading-[1.2]`}
            >
              The page you are looking for doesn&rsquo;t exist
            </h1>
          </div>

          <p className="mt-9 text-base text-white/90">
            Try to use a correct url or go back to homepage to start again
          </p>

          <Link
            href="/"
            className="mt-10 inline-flex h-11 items-center justify-center rounded-full bg-(--lime) px-7 font-medium text-(--ink)"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
