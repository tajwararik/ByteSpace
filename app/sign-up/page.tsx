import Image from "next/image";
import Link from "next/link";
import { poppins } from "../layout";

export default function SignUpPage() {
  return (
    <section className="blue-grid min-h-screen px-4 py-8 md:px-8 md:py-10">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-10 lg:grid-cols-2">
        <section className="relative text-white">
          <Link href="/" className="mb-10 inline-flex items-center gap-2">
            <img src="/logo.svg" alt="logo" />
          </Link>

          <h3
            className={`${poppins.className} max-w-md text-4xl font-extrabold leading-tight md:text-2xl`}
          >
            Sign up and come in
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85 md:text-base">
            The registration process is straightforward, uncomplicated, and
            efficient, allowing users to sign up quickly, easily, and at no
            cost.
          </p>

          <div className="relative mt-10 max-w-lg">
            <Image
              src="/auth.svg"
              alt="Featured courses preview"
              width={560}
              height={480}
              className="relative z-10 h-auto w-full drop-shadow-2xl"
              priority
            />
          </div>
        </section>

        <section className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md rounded-[28px] bg-white p-8 shadow-2xl md:p-10">
            <p className="text-sm font-normal text-(--blue)">
              Create an Account
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              Welcome to ByteSpace
            </h2>

            <form className="mt-8 space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </span>
                <input
                  type="text"
                  placeholder="Jamie Davis"
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none placeholder:text-slate-400 focus:border-(--byte-blue)"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="designer@example.com"
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none placeholder:text-slate-400 focus:border-(--byte-blue)"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </span>
                <input
                  type="password"
                  placeholder="********"
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none placeholder:text-slate-400 focus:border-(--byte-blue)"
                />
              </label>

              <div className="flex justify-end pt-2 mt-10">
                <button
                  type="submit"
                  className="rounded-4xl bg-(--lime) px-8 py-3 text-sm text-black hover:brightness-95"
                >
                  Continue
                </button>
              </div>
            </form>

            <p className="mt-8 text-center text-sm text-slate-600">
              Already have an account?{" "}
              <Link href="/log-in" className="font-normal text-(--blue)">
                Login
              </Link>
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
