import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-end gap-1.5 font-black tracking-tight"
    >
      <img src="/logo.svg" alt="Logo" />
      <span>ByteSpace</span>
    </Link>
  );
}
