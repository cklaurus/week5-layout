import Card from "../components/Card";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <div className="px-6 py-8 lg:px-10">
      <section className="mb-8">
        <p className="mb-3 text-sm font-semibold tracking-widest text-[#25C2FF]">
          WELCOME TO PIXEL PEAK
        </p>

        <h1 className="mb-4 text-4xl font-bold leading-tight lg:text-5xl">
          Your Adventure Starts Here
        </h1>

        <p className="max-w-2xl text-base leading-6 text-[#CBD5E1]">
          Join a friendly, community-driven ARK: Survival Ascended
          cluster built around adventure, creativity, and unforgettable
          experiences.
        </p>

        <a
          href="#projects"
          className="mt-5 inline-flex rounded-lg bg-[#25C2FF] px-6 py-3 font-semibold text-[#080D1A] transition hover:bg-[#7DDDFF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25C2FF]"
        >
          Explore the Cluster
        </a>
      </section>

      <section id="projects" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="mb-6 text-[28px] font-bold leading-9">
          Pixel Peak Tools
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}