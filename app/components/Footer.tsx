import Link from "next/link";
import { Logo } from "./Logo";

const columns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-md">
            <Logo />

            <p className="mt-5 text-sm leading-relaxed text-slate-700">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form className="mt-5 flex flex-wrap items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-11 min-w-55 flex-1 rounded-full border border-slate-200 px-5 text-sm outline-none placeholder:text-slate-400 focus:border-(--byte-blue)"
              />
              <button
                type="submit"
                className="inline-flex h-10 items-center justify-center rounded-3xl bg-(--lime) px-6 align-middle font-medium text-(--ink) cursor-pointer"
              >
                Search
              </button>
            </form>

            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-6 sm:grid-cols-3">
            {columns.map((links, i) => (
              <ul key={i} className="space-y-3">
                {links.map((label) => (
                  <li key={label}>
                    <Link
                      href="#"
                      className="text-sm text-slate-700 hover:text-slate-900"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-300 px-6">
        <div className="flex flex-col gap-3 border-t border-slate-200 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
