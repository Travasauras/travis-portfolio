export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Let&apos;s Build Something
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-600">
            I&apos;m currently seeking software engineering internships and
            entry-level development opportunities. I&apos;d be glad to discuss
            my projects, experience, or how I could contribute to your team.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:Travis.Erwin@snhu.edu"
              className="rounded-xl bg-black px-7 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-lg"
            >
              Send Me an Email
            </a>

            <a
              href="https://www.linkedin.com/in/travis-erwin-20049a3bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/travasauras"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
            >
              GitHub
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Wichita, Kansas • Open to remote and relocation opportunities
          </p>
        </div>
      </div>
    </section>
  );
}