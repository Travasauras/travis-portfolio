import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  title,
  description,
  technologies,
  screenshots,
  githubUrl,
  websiteUrl,
  appStoreUrl,
}: Project) {
  const links = [
    { url: githubUrl, label: "View source on GitHub" },
    { url: websiteUrl, label: "Visit website" },
    { url: appStoreUrl, label: "View on the App Store" },
  ].filter(({ url }) => url);

  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <h3 className="text-2xl font-bold transition-colors group-hover:text-blue-600">
        {title}
      </h3>

      <p className="mt-3 text-gray-600">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {screenshots && (
        <div className={`mt-6 grid gap-3 ${screenshots.length > 1 ? "grid-cols-2" : ""}`}>
          {screenshots.map(({ src, alt, caption, width, height }) => (
            <figure key={src} className="min-w-0">
              <a
                href={src}
                aria-label={`View full-size screenshot. ${alt}`}
                className="flex justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50 focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  sizes={screenshots.length > 1 ? "(min-width: 768px) 150px, 40vw" : "(min-width: 768px) 500px, 90vw"}
                  className="h-auto max-h-80 w-auto max-w-full object-contain"
                />
              </a>
              <figcaption className="mt-2 text-sm text-gray-600">
                {caption}
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      {links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {links.map(({ url, label }) => (
            <a
              key={label}
              href={url}
              aria-label={`${label} for ${title}`}
              className="text-sm font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-900"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
