import Link from "next/link";
import { Logo } from "./Logo";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0">
      <div className="container-site flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link className="transition hover:text-lime" href="/">
            Home
          </Link>
          <Link
            className="inline-flex items-center gap-1 transition hover:text-lime"
            href="#paths"
          >
            Courses
          </Link>
          <Link className="transition hover:text-lime" href="#about">
            Creators
          </Link>
        </nav>
        <div className="hidden items-center gap-4 sm:flex">
          <Link className="text-sm font-semibold hover:text-lime" href="/login">
            Log in
          </Link>
          <Link className="btn-lime !px-5 !py-2.5" href="/signup">
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
