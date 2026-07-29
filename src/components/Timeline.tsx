"use client";

import { useEffect, useRef, useState } from "react";
import { journey } from "@/data/journey";

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const wheelLocked = useRef(false);

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? journey.length - 1 : currentIndex - 1
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === journey.length - 1 ? 0 : currentIndex + 1
    );
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const handleWheel = (event: WheelEvent) => {
      // Stop the page from scrolling while the pointer is over the Rolodex.
      event.preventDefault();
      event.stopPropagation();

      if (wheelLocked.current || Math.abs(event.deltaY) < 10) {
        return;
      }

      wheelLocked.current = true;

      if (event.deltaY > 0) {
        setActiveIndex((currentIndex) =>
          currentIndex === journey.length - 1 ? 0 : currentIndex + 1
        );
      } else {
        setActiveIndex((currentIndex) =>
          currentIndex === 0 ? journey.length - 1 : currentIndex - 1
        );
      }

      window.setTimeout(() => {
        wheelLocked.current = false;
      }, 450);
    };

    carousel.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      carousel.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }

    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }
  };

  const getPosition = (index: number) => {
    const previousIndex =
      activeIndex === 0 ? journey.length - 1 : activeIndex - 1;

    const nextIndex =
      activeIndex === journey.length - 1 ? 0 : activeIndex + 1;

    if (index === activeIndex) {
      return 0;
    }

    if (index === previousIndex) {
      return -1;
    }

    if (index === nextIndex) {
      return 1;
    }

    return null;
  };

  return (
    <section id="journey" className="overflow-hidden py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
          Career Journey
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-center leading-relaxed text-gray-600">
          Each chapter of my career has strengthened skills that I now bring to
          software engineering, including leadership, logistics, operations,
          communication, problem solving, and continuous learning.
        </p>

        <p className="mb-4 text-center text-sm text-gray-500">
          Scroll over the cards, use the arrow keys, or select a button
        </p>

        <div
          ref={carouselRef}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          className="relative mx-auto h-[540px] max-w-3xl cursor-ns-resize overflow-hidden rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          style={{
            perspective: "1200px",
            overscrollBehavior: "contain",
          }}
          aria-label="Career journey carousel"
        >
          {journey.map((item, index) => {
            const position = getPosition(index);

            if (position === null) {
              return null;
            }

            let transform = "translateY(-50%)";
            let opacity = 1;
            let zIndex = 30;

            if (position === -1) {
              transform =
                "translateY(calc(-50% - 170px)) scale(0.88) rotateX(-18deg)";
              opacity = 0.35;
              zIndex = 10;
            }

            if (position === 1) {
              transform =
                "translateY(calc(-50% + 170px)) scale(0.88) rotateX(18deg)";
              opacity = 0.35;
              zIndex = 10;
            }

            return (
              <article
                key={`${item.title}-${item.year}`}
                aria-hidden={position !== 0}
                className={`absolute left-4 right-4 top-1/2 rounded-2xl border border-gray-200 bg-white p-8 shadow-xl transition-all duration-500 ${
                  position === 0
                    ? "pointer-events-auto"
                    : "pointer-events-none"
                }`}
                style={{
                  transform,
                  opacity,
                  zIndex,
                }}
              >
                <span className="mb-4 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
                  {item.year}
                </span>

                <h3 className="text-3xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-1 text-lg font-medium text-gray-500">
                  {item.role}
                </p>

                <p className="mt-5 leading-relaxed text-gray-700">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="relative z-50 mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={showPrevious}
            className="cursor-pointer rounded-full border border-gray-300 bg-white px-5 py-2 font-medium text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 hover:shadow-md"
          >
            Previous
          </button>

          <span className="min-w-16 text-center text-sm font-medium text-gray-500">
            {activeIndex + 1} of {journey.length}
          </span>

          <button
            type="button"
            onClick={showNext}
            className="cursor-pointer rounded-full border border-gray-300 bg-white px-5 py-2 font-medium text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 hover:shadow-md"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}