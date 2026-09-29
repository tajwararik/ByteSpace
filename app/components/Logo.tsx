import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-1.5 font-black tracking-[-0.03em]"
    >
      <img src="/logo.svg" alt="Logo" />
      <span className="translate-y-1">ByteSpace</span>
    </Link>
  );
}
