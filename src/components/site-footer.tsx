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

function LinkedinIcon(props: LucideProps) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width={4} height={12} x={2} y={9} />
      <circle cx={4} cy={4} r={2} />
    </svg>
  );
}

function MessengerIcon(props: LucideProps) {
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
      <path d="M12 2C6.48 2 2 6.14 2 11.25c0 2.9 1.46 5.49 3.76 7.19V22l3.44-1.89c.9.25 1.85.39 2.8.39 5.52 0 10-4.14 10-9.25S17.52 2 12 2z" />
      <path d="m7 13 3.5-3.5L13 12l3.5-3.5" />
    </svg>
  );
}

function ZaloIcon(props: LucideProps) {
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
      <rect width={20} height={20} x={2} y={2} rx={6} />
      <path d="M8 15V9h2.5a2 2 0 1 1 0 4H8" />
      <path d="M13 9h3v6" />
      <path d="M13 15h3" />
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

const logoWhiteSrc = "/images/cis-logo.png";
const waveSrc = findAsset([/wave/i, /union/i]);

interface FooterColumn {
  heading: string;
  links: string[];
}

const footerColumns: FooterColumn[] = [
  { heading: "Về Chúng Tôi", links: ["Về Chúng Tôi"] },
  { heading: "Học Thuật", links: ["Học Thuật"] },
  { heading: "Tuyển Sinh", links: ["Tuyển Sinh"] },
  { heading: "Đời Sống Học Đường", links: ["Đời Sống Học Đường"] },
  { heading: "Khác", links: ["Thư Viện", "Tuyển Dụng"] },
];

const socialLinks = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "YouTube", href: "#", Icon: YoutubeIcon },
  { label: "Messenger", href: "#", Icon: MessengerIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedinIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "Zalo", href: "#", Icon: ZaloIcon },
];

const languages = [{ label: "VN", active: true }];

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
            <div className="rounded-lg bg-white/95 px-4 py-3">
              <Image
                src={logoWhiteSrc}
                alt="CIS - The Canadian International School"
                width={110}
                height={45}
                className="h-12 w-auto"
              />
            </div>
          ) : (
            <div className="flex size-16 items-center justify-center rounded-full border-2 border-white/70 font-heading text-xl font-bold tracking-wide text-white">
              CIS
            </div>
          )}
          <div>
            <p className="font-heading text-lg font-bold tracking-wide text-white sm:text-xl">
              TRƯỜNG TIỂU HỌC - TRUNG HỌC CƠ SỞ - TRUNG HỌC PHỔ THÔNG QUỐC TẾ CANADA
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
              Liên Hệ
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:enquiry@cis.edu.vn"
                  className="flex items-center gap-2 font-body text-[15px] text-white/80 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0" />
                  enquiry@cis.edu.vn
                </a>
              </li>
              <li>
                <a
                  href="tel:1900255636"
                  className="flex items-center gap-2 font-body text-[15px] text-white/80 transition-colors hover:text-white"
                >
                  <Phone className="size-4 shrink-0" />
                  1900 255 636
                </a>
              </li>
              <li>
                <a
                  href="tel:+842854123456"
                  className="flex items-center gap-2 font-body text-[15px] text-white/80 transition-colors hover:text-white"
                >
                  <Smartphone className="size-4 shrink-0" />
                  (028) 54 123 456 (Hotline tuyển dụng)
                </a>
              </li>
            </ul>

            <div className="mt-4 flex flex-wrap items-center gap-4">
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
              Địa Chỉ
            </h4>
            <p className="mt-2 font-body text-[15px] text-white/80">
              07 Đường Số 23, Phường Tân Mỹ, TP. Hồ Chí Minh
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="font-body text-xs text-white/60">
            CANADA INTERNATIONAL PRIMARY SCHOOL-SECONDARY SCHOOL-HIGH SCHOOL
            JOINT STOCK COMPANY
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
