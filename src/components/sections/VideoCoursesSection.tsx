"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon, PlayIcon } from "@/components/icons";

interface Trainer {
  id: string;
  avatar: string;
  name: string;
  role: string;
  videos: string[];
}

const trainers: Trainer[] = [
  {
    id: "courtney-henry",
    avatar: "/images/kadu/2024/05/vc-author-1.webp",
    name: "Courtney Henry",
    role: "Behavioral Science",
    videos: [
      "/images/kadu/2024/05/vc-img-1.webp",
      "/images/kadu/2024/05/vc-img-2.webp",
    ],
  },
  {
    id: "wiliam-kerry",
    avatar: "/images/kadu/2024/05/vc-author-2.webp",
    name: "Wiliam Kerry",
    role: "WordPress Developer",
    videos: [
      "/images/kadu/2024/05/vc-img-3.webp",
      "/images/kadu/2024/05/vc-img-4.webp",
    ],
  },
  {
    id: "smith-henry",
    avatar: "/images/kadu/2024/05/vc-author-3.webp",
    name: "Smith Henry",
    role: "Graphic Designer",
    videos: [
      "/images/kadu/2024/05/vc-img-5.webp",
      "/images/kadu/2024/05/vc-img-6.webp",
    ],
  },
];

const SCROLL_AMOUNT = 424; // card width (400px) + gap (24px)
const FADE_DURATION = 300;

export function VideoCoursesSection() {
  const [activeId, setActiveId] = useState(trainers[0].id);
  const [visible, setVisible] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeTrainer =
    trainers.find((trainer) => trainer.id === activeId) ?? trainers[0];

  function handleTrainerSelect(id: string) {
    if (id === activeId) return;
    setVisible(false);
    window.setTimeout(() => {
      setActiveId(id);
      setVisible(true);
      scrollRef.current?.scrollTo({ left: 0, behavior: "auto" });
    }, FADE_DURATION);
  }

  function scrollByAmount(direction: 1 | -1) {
    scrollRef.current?.scrollBy({
      left: direction * SCROLL_AMOUNT,
      behavior: "smooth",
    });
  }

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <span className="kd-subtitle-ani-1 font-script text-2xl text-kd-secondary md:text-3xl">
            Video Course
          </span>
          <h2 className="kd-split-text kd-title-ani mt-2 max-w-2xl font-sans text-3xl font-black leading-tight text-kd-heading md:text-4xl lg:text-5xl">
            Online Video Courses
          </h2>
        </div>

        <div className="kd-reveal mt-12 flex flex-wrap items-start justify-center gap-8 sm:gap-12">
          {trainers.map((trainer) => {
            const isActive = trainer.id === activeId;
            return (
              <button
                key={trainer.id}
                type="button"
                onClick={() => handleTrainerSelect(trainer.id)}
                className="group flex flex-col items-center gap-3 focus:outline-none"
                aria-pressed={isActive}
              >
                <span
                  className={cn(
                    "relative block size-14 overflow-hidden rounded-full transition-all duration-300",
                    isActive
                      ? "ring-2 ring-kd-primary ring-offset-2"
                      : "ring-2 ring-transparent ring-offset-2 group-hover:ring-kd-primary/50"
                  )}
                >
                  <Image
                    src={trainer.avatar}
                    alt={trainer.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </span>
                <span className="flex flex-col items-center">
                  <span
                    className={cn(
                      "font-sans text-sm transition-colors duration-300",
                      isActive
                        ? "font-bold text-kd-heading"
                        : "font-medium text-kd-paragraph group-hover:text-kd-heading"
                    )}
                  >
                    {trainer.name}
                  </span>
                  <span className="text-xs text-kd-paragraph">
                    {trainer.role}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative mt-14">
          <div
            ref={scrollRef}
            data-kd-autoplay="5000"
            className={cn(
              "flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 transition-opacity ease-in-out",
              visible ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDuration: `${FADE_DURATION}ms` }}
          >
            {activeTrainer.videos.map((video, index) => (
              <div
                key={`${activeTrainer.id}-${video}-${index}`}
                className="group relative aspect-[4/3] w-[85%] shrink-0 snap-start overflow-hidden rounded-3xl sm:w-[400px]"
              >
                <Image
                  src={video}
                  alt={`${activeTrainer.name} video course preview ${index + 1}`}
                  fill
                  sizes="(min-width: 640px) 400px, 85vw"
                  className="object-cover transition-transform duration-500 group-hover:[transform:perspective(600px)_rotateX(0.06deg)_scale(1.15)]"
                />
                <button
                  type="button"
                  aria-label="Play video"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="kd-plybtn flex size-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <PlayIcon className="size-6 text-kd-primary" />
                  </span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous videos"
              onClick={() => scrollByAmount(-1)}
              className="flex size-12 items-center justify-center rounded-full border border-kd-heading/15 text-kd-heading transition-colors duration-300 hover:bg-kd-primary hover:text-white"
            >
              <ArrowLeftIcon className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next videos"
              onClick={() => scrollByAmount(1)}
              className="flex size-12 items-center justify-center rounded-full border border-kd-heading/15 text-kd-heading transition-colors duration-300 hover:bg-kd-primary hover:text-white"
            >
              <ArrowRightIcon className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
