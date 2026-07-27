export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-lg font-medium text-blue-600">
        Hello, I'm
      </p>

      <h1 className="text-6xl font-extrabold tracking-tight">
        Travis Erwin
      </h1>

      <h2 className="mt-4 text-2xl text-gray-500">
        Software Engineer • Full Stack Developer • Game Developer
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
        I build software ranging from web applications and Android apps
        to Unreal Engine games while continuously learning modern
        technologies.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-black px-6 py-3 text-white transition hover:scale-105"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="rounded-lg border px-6 py-3 transition hover:bg-gray-100"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}