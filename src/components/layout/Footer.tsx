import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon, MailIcon, MapPinIcon, PhoneIcon, ArrowRightIcon } from "@/components/icons";
import type { FooterLink } from "@/types/kadu";

const quickLinksCol1: FooterLink[] = [
  { label: "Contact Us", href: "#" },
  { label: "News & Articles", href: "#" },
  { label: "Coming Soon", href: "#" },
  { label: "About", href: "#" },
  { label: "Instructor", href: "#" },
];

const quickLinksCol2: FooterLink[] = [
  { label: "Gallery", href: "#" },
  { label: "FAQ's", href: "#" },
  { label: "Sign In/Registration", href: "#" },
  { label: "Course", href: "#" },
  { label: "Events", href: "#" },
];

export function Footer() {
  return (
    <footer className="kd-footer-1-area relative overflow-hidden bg-kd-primary text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-8 border-b border-white/15 pb-16 text-center lg:flex-row lg:text-left">
          <div>
            <p className="font-script text-2xl text-kd-secondary">Download App and learn Couses</p>
            <h2 className="mt-2 max-w-xl font-sans text-3xl font-black leading-tight md:text-4xl">
              Grow Personal Financial Security Thinking &amp; Principles
            </h2>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <Image
              src="/images/kadu/2024/06/play-store.webp"
              alt="Get it on Google Play"
              width={168}
              height={50}
              className="h-12 w-auto rounded-xl bg-white/95 p-2"
            />
            <Image
              src="/images/kadu/2024/06/app-store.webp"
              alt="Download on the App Store"
              width={150}
              height={50}
              className="h-12 w-auto rounded-xl bg-black p-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 pt-16 md:grid-cols-3">
          <div>
            <h3 className="font-sans text-xl font-extrabold">Contact Info</h3>
            <ul className="mt-6 space-y-5 text-white/80">
              <li className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/30">
                  <MapPinIcon className="size-4" />
                </span>
                <span>Barid House, 15-19 St Cross St 123, United State Ecin BUW</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/30">
                  <PhoneIcon className="size-4" />
                </span>
                <span>+93 (0)38 3938 393</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/30">
                  <MailIcon className="size-4" />
                </span>
                <span>username@domain.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xl font-extrabold">Quick Links.</h3>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
              {[...quickLinksCol1, ...quickLinksCol2].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-white/80 transition-colors hover:text-kd-secondary"
                >
                  <CheckCircleIcon className="size-4 shrink-0" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-sans text-xl font-extrabold">Subscribe Newsletter</h3>
            <p className="mt-6 text-white/80">
              Awesome Hexagon Themed Stream Pack, You Can Change Hexagon
            </p>
            <form className="mt-5 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your Email"
                className="rounded-full bg-white px-6 py-4 text-sm text-kd-heading placeholder:text-kd-paragraph focus:outline-none"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-kd-secondary px-8 py-4 text-sm font-extrabold uppercase text-[#22281e] transition-colors hover:bg-white"
              >
                Subscribe Now
                <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
            <p className="mt-4 text-sm text-white/60">Get Updates On New Courses And News</p>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/15 py-6 text-center text-sm text-white/70">
        © 2015 – 2024{" "}
        <a href="https://themexriver.com" className="text-kd-secondary">
          Themexriver
        </a>{" "}
        | All Rights Reserved
      </div>
    </footer>
  );
}
