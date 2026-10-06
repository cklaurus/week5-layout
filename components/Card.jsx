export default function Card({ project }) {
  return (
    <article className="flex min-h-[180px] flex-col gap-4 rounded-xl border border-[#273554] bg-[#111A2E] p-6 shadow-lg transition duration-200 hover:border-[#25C2FF] motion-safe:hover:-translate-y-1">
      <h3 className="text-2xl font-bold leading-8 text-[#F8FAFC]">
        {project.title}
      </h3>

      <p className="text-base font-medium leading-6 text-[#25C2FF]">
        Category: {project.category}
      </p>

      <p className="text-base leading-6 text-[#CBD5E1]">
        Difficulty: {project.difficulty}
      </p>
    </article>
  );
}