import Link from "next/link";

export function Footer() {
  return (
    <div className="h-[40px] w-full bg-[#265b4e] text-[#f5f5f5] flex items-center justify-between p-8">
      <span className="font-thin">
        © {new Date().getFullYear()} Solace, Inc.
      </span>
      <span className="flex items-center gap-8 font-thin">
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </span>
    </div>
  );
}
