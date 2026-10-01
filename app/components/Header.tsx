import Link from "next/link";
import { Logo } from "./Logo";

export default function Header() {
  return (
    <header className="w-[90%] flex justify-between items-center px-2.5 py-6 mx-auto">
      <Logo />

      <nav className="flex items-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/creators">Creators</Link>
      </nav>

      <div className="flex items-center gap-8">
        <Link href="/login">Sign In</Link>
        <Link href="/signup">Join Us</Link>
        <Link href="/course-details">
          <img src="/cart.svg" alt="Cart" />
        </Link>
      </div>
    </header>
  );
}
