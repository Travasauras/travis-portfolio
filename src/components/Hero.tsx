export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        Travis Erwin
      </h1>

      <h2 className="mt-4 text-xl text-gray-500 sm:text-2xl">
        Software Engineer • Full Stack Developer • Game Developer
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
        I build software ranging from web applications and Android apps
        to Unreal Engine games while continuously learning modern
        technologies.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4">
        <a
          href="#projects"
          className="rounded-xl bg-black px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-xl"
        >
          View Projects
        </a>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
          >
            Contact Me
          </a>

          <a
            href="/Travis_Erwin_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
          >
            📄 Resumé
          </a>
        </div>
      </div>
    </section>
  );
}