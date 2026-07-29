import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
          Technical Skills
        </h2>

        <p className="mx-auto mb-12 max-w-3xl text-center text-gray-600">
          Technologies and concepts I've developed through coursework,
          personal projects, and continuous learning.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((category) => (
            <div
              key={category.category}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-5 text-xl font-bold text-gray-900">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}