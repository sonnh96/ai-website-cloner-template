import Link from "next/link";
import {
  HomeIcon,
  MailIcon,
  PhoneIcon,
  SearchIcon,
  ChevronDownIcon,
  ArrowRightIcon,
} from "@/components/icons";
import { Logo } from "@/components/layout/Logo";
import type { NavItem } from "@/types/kadu";

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Home – 01", href: "/" },
      { label: "Home – 02", href: "/" },
      { label: "Home – 03", href: "/" },
      { label: "Home – 04", href: "/" },
    ],
  },
  {
    label: "Pages",
    href: "#",
    children: [
      { label: "About", href: "#" },
      { label: "About One", href: "#" },
      { label: "About Two", href: "#" },
      { label: "About Three", href: "#" },
      { label: "Instructor", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Blog Grid", href: "#" },
      { label: "Blog Single", href: "#" },
      { label: "Gallery", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "404", href: "#" },
    ],
  },
  {
    label: "Courses",
    href: "#",
    children: [
      { label: "Courses 1", href: "#" },
      { label: "Courses 2", href: "#" },
      { label: "Courses 3", href: "#" },
      { label: "Course Details", href: "#" },
    ],
  },
  {
    label: "Event",
    href: "#",
    children: [
      { label: "Event", href: "#" },
      { label: "Event Details", href: "#" },
    ],
  },
  { label: "Contact Us", href: "#" },
];

export function Header() {
  return (
    <header className="kd-header-1-area">
      <div className="hidden items-center justify-between border-b border-black/5 px-6 py-3 md:flex lg:px-12">
        <div className="flex items-center gap-8 text-sm text-kd-paragraph">
          <span className="kd-jello-hover flex items-center gap-2">
            <span className="kd-jello-target flex size-9 items-center justify-center rounded-full bg-kd-heading text-white">
              <MailIcon className="size-4" />
            </span>
            <span>
              Email Us Anytime
              <br />
              <a href="mailto:info@example.com" className="font-bold text-kd-heading">
                info@example.com
              </a>
            </span>
          </span>
          <span className="kd-jello-hover flex items-center gap-2">
            <span className="kd-jello-target flex size-9 items-center justify-center rounded-full bg-kd-heading text-white">
              <PhoneIcon className="size-4" />
            </span>
            <span>
              Call Us Anytime
              <br />
              <a href="tel:+00012345698" className="font-bold text-kd-heading">
                +(000) 1235 56958
              </a>
            </span>
          </span>
        </div>
        <Link
          href="#"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-kd-secondary px-8 py-4 text-sm font-extrabold uppercase text-[#22281e] transition-colors duration-300 ease-[cubic-bezier(.57,.21,.69,1.25)] hover:bg-kd-primary hover:text-white"
        >
          <span className="relative block overflow-hidden">
            <span className="block transition-transform duration-500 group-hover:-translate-y-full group-hover:opacity-0">
              Apply Now
            </span>
            <span className="absolute inset-0 block translate-y-full opacity-0 transition-transform duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              Let&apos;s Talk
            </span>
          </span>
          <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="flex items-center justify-between bg-kd-primary px-6 py-4 lg:px-12">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-1">
            <Logo className="text-white" />
          </Link>
          <span className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white">
            <HomeIcon className="size-4" />
          </span>
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-bold text-white/90 transition-colors hover:text-kd-secondary"
                >
                  {item.label}
                  {item.children && <ChevronDownIcon className="size-3.5" />}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full z-20 w-56 translate-y-2 rounded-xl bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2 text-sm text-kd-paragraph transition-colors hover:bg-kd-primary/5 hover:text-kd-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
        <button
          type="button"
          aria-label="Search"
          className="flex size-11 items-center justify-center rounded-full bg-white text-kd-heading transition-colors hover:bg-kd-secondary"
        >
          <SearchIcon className="size-4" />
        </button>
      </div>
    </header>
  );
}
