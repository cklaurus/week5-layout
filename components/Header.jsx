import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-[#273554] bg-[#111A2E]">
      <div className="mx-auto flex min-h-[88px] max-w-[1440px] items-center justify-between gap-6 px-6">
        <Link
          href="/"
          className="rounded text-2xl font-bold text-[#F8FAFC] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25C2FF]"
        >
          PIXEL <span className="text-[#25C2FF]">PEAK</span>
        </Link>

        <p className="hidden text-sm tracking-widest text-[#CBD5E1] sm:block">
          ARK ASCENDED COMMUNITY
        </p>
      </div>
    </header>
  );
}