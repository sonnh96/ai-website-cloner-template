"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { BookOpen, Clock, Users } from "lucide-react";
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type TabId = "webdev" | "marketing" | "it";

interface Course {
  price: string;
  title: string;
  lessons: number;
  weeks: number;
  students: number;
  image: string;
}

const TABS: { id: TabId; label: string }[] = [
  { id: "webdev", label: "Web Development" },
  { id: "marketing", label: "Marketing" },
  { id: "it", label: "IT & Technology" },
];

const COURSE_IMAGES = [
  "/images/kadu/2024/06/design-400x235.webp",
  "/images/kadu/2024/06/design-1-400x235.webp",
  "/images/kadu/2024/06/development-400x235.webp",
  "/images/kadu/2024/06/digital-marketing-400x235.webp",
  "/images/kadu/2024/06/it0-400x235.webp",
  "/images/kadu/2024/06/program-400x235.webp",
  "/images/kadu/2024/06/soft-400x235.webp",
  "/images/kadu/2024/06/education-400x235.webp",
  "/images/kadu/2024/06/creativity-ideas-design-thought-bubble-icon-concept-400x235.webp",
];

const COURSE_BASE: Omit<Course, "image">[] = [
  { price: "$15", title: "Graphic Design Master Class Learn GREAT", lessons: 1, weeks: 1, students: 3 },
  { price: "$59", title: "Become a Certified Web Developer: HTML,", lessons: 1, weeks: 1, students: 0 },
  { price: "Free", title: "Pixel Art Mastery Course: Beginner To", lessons: 0, weeks: 0, students: 59 },
  { price: "$139", title: "100 Days Of Code – 2024", lessons: 0, weeks: 0, students: 0 },
  { price: "$29", title: "The Full Stack Web Development MERN", lessons: 0, weeks: 0, students: 0 },
  { price: "$49", title: "IT Fundamentals – Everything you need", lessons: 0, weeks: 0, students: 0 },
  { price: "$29", title: "Digital Marketing Masterclass + AI and", lessons: 0, weeks: 0, students: 0 },
  { price: "Free", title: "Graphic Design Master Class – Learn", lessons: 0, weeks: 0, students: 14 },
  { price: "Free", title: "The Complete Graphic Design Theory for", lessons: 0, weeks: 0, students: 16 },
  { price: "$89", title: "Full Stack Web Dev with React", lessons: 0, weeks: 0, students: 0 },
];

const COURSES: Course[] = COURSE_BASE.map((course, i) => ({
  ...course,
  image: COURSE_IMAGES[i % COURSE_IMAGES.length],
}));

function CourseCard({ course, index }: { course: Course; index: number }) {
  return (
    <div
      data-course-card
      className="kd-reveal group flex w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] sm:w-[320px]"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="relative aspect-[400/235] w-full shrink-0 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 90vw, 320px"
          className="object-cover transition-transform duration-500 group-hover:[transform:perspective(600px)_rotateX(0.06deg)_scale(1.15)]"
        />
        <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-sm font-bold text-kd-heading shadow">
          {course.price}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <h3 className="line-clamp-2 min-h-[3em] text-lg font-bold text-kd-heading">{course.title}</h3>

        <div className="flex items-center gap-4 border-b border-black/5 pb-4 text-sm text-kd-paragraph">
          <span className="flex items-center gap-1.5">
            <BookOpen className="size-4 text-kd-primary" />
            {course.lessons} {course.lessons === 1 ? "Lesson" : "Lessons"}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-4 text-kd-primary" />
            {course.weeks} {course.weeks === 1 ? "Week" : "Weeks"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-kd-heading/10 text-xs font-bold text-kd-heading">
            MV
          </span>
          <span className="text-xs text-kd-paragraph">
            posted by <span className="font-semibold text-kd-heading">Marina Valentine</span>
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-sm text-kd-paragraph">
            <Users className="size-4 text-kd-primary" />
            {course.students} Students
          </span>
          <span className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="size-3.5 fill-kd-secondary text-kd-secondary" />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

export function CoursesSection() {
  const [activeTab, setActiveTab] = useState<TabId>("webdev");
  const scrollRefs = useRef<Record<TabId, HTMLDivElement | null>>({
    webdev: null,
    marketing: null,
    it: null,
  });

  const scroll = (tab: TabId, direction: 1 | -1) => {
    const el = scrollRefs.current[tab];
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-course-card]");
    const distance = (card?.offsetWidth ?? 320) + 24;
    el.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  return (
    <section className="bg-white px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="kd-subtitle-ani-1 font-script text-3xl text-kd-primary">Get To Know Us</span>
          <h2 className="kd-split-text kd-title-ani text-[32px] font-black leading-tight text-kd-heading sm:text-[40px]">
            Most Popular Courses
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              aria-pressed={activeTab === tab.id}
              className={cn(
                "rounded-full px-6 py-2 text-sm font-bold uppercase tracking-wide transition-colors duration-300",
                activeTab === tab.id
                  ? "bg-kd-heading text-white"
                  : "text-kd-paragraph hover:text-kd-heading"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative mt-12">
          {TABS.map((tab) => (
            <div
              key={tab.id}
              aria-hidden={activeTab !== tab.id}
              className={cn(
                "transition-opacity duration-300",
                activeTab === tab.id
                  ? "relative opacity-100"
                  : "pointer-events-none absolute inset-0 top-0 opacity-0"
              )}
            >
              <div
                ref={(el) => {
                  scrollRefs.current[tab.id] = el;
                }}
                data-kd-autoplay="5000"
                className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {COURSES.map((course, i) => (
                  <CourseCard key={i} course={course} index={i} />
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center gap-3">
                <button
                  type="button"
                  aria-label="Previous courses"
                  onClick={() => scroll(tab.id, -1)}
                  className="flex size-11 items-center justify-center rounded-full border border-black/10 text-kd-heading transition-colors hover:bg-kd-heading hover:text-white"
                >
                  <ArrowLeftIcon className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next courses"
                  onClick={() => scroll(tab.id, 1)}
                  className="flex size-11 items-center justify-center rounded-full border border-black/10 text-kd-heading transition-colors hover:bg-kd-heading hover:text-white"
                >
                  <ArrowRightIcon className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-kd-paragraph">
          We Help Your find the prefect tutor. it&apos;s completely free.{" "}
          <a
            href="#"
            className="font-bold text-kd-heading underline-offset-4 hover:text-kd-primary hover:underline"
          >
            Explore all Courses
          </a>
        </p>
      </div>
    </section>
  );
}
