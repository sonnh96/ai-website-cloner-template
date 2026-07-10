import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Smartphone, type LucideProps } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * `lucide-react` no longer ships brand/logo icons (Facebook, Instagram,
 * YouTube, etc. were removed from the core package). These lightweight
 * local replacements match lucide's stroke style so they blend in visually.
 */
function FacebookIcon(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1={17.5} x2={17.51} y1={6.5} y2={6.5} />
    </svg>
  );
}

function YoutubeIcon(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

/**
 * Looks for a real downloaded asset in `public/images` matching one of the
 * given patterns. Returns a public URL path, or `null` if nothing matches
 * so callers can gracefully omit the element instead of 404-ing.
 */
function findAsset(patterns: RegExp[]): string | null {
  try {
    const dir = path.join(process.cwd(), "public", "images");
    const files = fs.readdirSync(dir);
    for (const pattern of patterns) {
      const match = files.find((file) => pattern.test(file));
      if (match) return `/images/${match}`;
    }
  } catch {
    // public/images missing or unreadable — gracefully omit.
  }
  return null;
}

const logoWhiteSrc =
  "/images/67e242f6b9fea32fa11da24e_38a1b495a53a5c8d3ae3db0df69da99f_Logo-White-Landscape.webp";
const waveSrc = findAsset([/wave/i, /union/i]);

interface FooterColumn {
  heading: string;
  links: string[];
}

const footerColumns: FooterColumn[] = [
  {
    heading: "About",
    links: ["About TAS", "Facilities", "School Profile"],
  },
  {
    heading: "Academics",
    links: ["Learning at TAS", "Achievements", "Curriculums", "Resources"],
  },
  {
    heading: "Admission",
    links: ["Admission", "Fees", "Policies", "Procedures", "Enrollment"],
  },
  {
    heading: "Life at TAS",
    links: [
      "Life at TAS",
      "Blog",
      "Mustang Minutes Newspaper",
      "TAS Cafeteria Menu",
    ],
  },
  {
    heading: "Staff",
    links: ["Our Faculty", "Employment"],
  },
];

const socialLinks = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "YouTube", href: "#", Icon: YoutubeIcon },
];

const languages = [
  { label: "EN", active: true },
  { label: "KR", active: false },
  { label: "VN", active: false },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-tas-navy px-6 py-16">
      {waveSrc && (
        <Image
          src={waveSrc}
          alt=""
          fill
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10"
        />
      )}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Logo lockup */}
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          {logoWhiteSrc ? (
            <Image
              src={logoWhiteSrc}
              alt="The American School"
              width={72}
              height={72}
              className="h-16 w-auto"
            />
          ) : (
            <div className="flex size-16 items-center justify-center rounded-full border-2 border-white/70 font-heading text-xl font-bold tracking-wide text-white">
              TAS
            </div>
          )}
          <div>
            <p className="font-heading text-lg font-bold tracking-wide text-white sm:text-xl">
              THE AMERICAN SCHOOL
            </p>
            <p className="mt-1 font-body text-sm text-white/70">
              Developing Academic Excellence and Strength of Character
            </p>
          </div>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="font-heading text-lg font-bold text-white">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="font-body text-[15px] text-white/80 transition-colors hover:text-white hover:underline"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Us */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:admissions@mytas.edu.vn"
                  className="flex items-center gap-2 font-body text-[15px] text-white/80 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0" />
                  admissions@mytas.edu.vn
                </a>
              </li>
              <li>
                <a
                  href="tel:+842835192223"
                  className="flex items-center gap-2 font-body text-[15px] text-white/80 transition-colors hover:text-white"
                >
                  <Phone className="size-4 shrink-0" />
                  028 3519 2223
                </a>
              </li>
              <li>
                <a
                  href="tel:+84909046223"
                  className="flex items-center gap-2 font-body text-[15px] text-white/80 transition-colors hover:text-white"
                >
                  <Smartphone className="size-4 shrink-0" />
                  090 9046 223 (Admissions)
                </a>
              </li>
            </ul>

            <div className="mt-4 flex items-center gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white transition-opacity hover:opacity-70"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>

            <h4 className="mt-6 font-heading text-sm font-bold text-white">
              Location
            </h4>
            <p className="mt-2 font-body text-[15px] text-white/80">
              06 Song Hanh Road, HCM - Long Thanh - Dau Giay Freeway, Binh
              Trung Ward, HCMC, Vietnam
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="font-body text-xs text-white/60">
            © 2024 The American School. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {languages.map((language, index) => (
              <span key={language.label} className="flex items-center gap-3">
                {index > 0 && (
                  <span className="text-white/30" aria-hidden="true">
                    |
                  </span>
                )}
                <button
                  type="button"
                  className={cn(
                    "font-body text-xs font-semibold transition-colors",
                    language.active
                      ? "text-[#a6192e]"
                      : "text-white/60 hover:text-white"
                  )}
                >
                  {language.label}
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
