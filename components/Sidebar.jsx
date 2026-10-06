import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="border-b border-[#273554] bg-[#111A2E] p-6 lg:w-[260px] lg:shrink-0 lg:border-r lg:border-b-0">
      <nav aria-label="Main navigation">
        <Link
          href="/"
          aria-current="page"
          className="block rounded-lg bg-[#172A45] px-4 py-3 font-medium text-[#25C2FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25C2FF]"
        >
          Home
        </Link>
      </nav>
    </aside>
  );
}