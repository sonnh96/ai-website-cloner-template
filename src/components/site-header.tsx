"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#" },
  { label: "Academics", href: "#" },
  { label: "Admission", href: "#" },
  { label: "Our Faculty", href: "#" },
  { label: "TAS Life", href: "#" },
];

const LANGUAGES = [
  { code: "EN", active: true },
  { code: "KR", active: false },
  { code: "VN", active: false },
];

const LOGO_SRC =
  "/images/67e242f6b9fea32fa11da24e_38a1b495a53a5c8d3ae3db0df69da99f_Logo-White-Landscape.webp";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        {/* Logo */}
        <Link href="#" className="shrink-0" aria-label="The American School home">
          <Image
            src={LOGO_SRC}
            alt="The American School - Developing Academic Excellence and Strength of Character"
            width={283}
            height={48}
            priority
            className="h-10 w-auto lg:h-12"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDesktopDropdown(item.label)}
              onMouseLeave={() =>
                setOpenDesktopDropdown((current) => (current === item.label ? null : current))
              }
            >
              <button
                type="button"
                className="flex items-center gap-1 font-sans text-[16px] font-bold text-white transition-colors hover:text-white/80"
                onClick={() =>
                  setOpenDesktopDropdown((current) => (current === item.label ? null : item.label))
                }
                aria-expanded={openDesktopDropdown === item.label}
              >
                {item.label}
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform",
                    openDesktopDropdown === item.label && "rotate-180"
                  )}
                />
              </button>

              {openDesktopDropdown === item.label && (
                <div className="absolute top-full left-0 z-30 mt-3 min-w-[180px] rounded-lg bg-white py-2 shadow-lg">
                  <Link
                    href="#"
                    className="block px-4 py-2 font-sans text-sm font-bold text-tas-ink hover:bg-tas-surface"
                  >
                    {item.label}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA + language switcher */}
        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="#"
            className="rounded-[10px] bg-tas-crimson px-6 py-3 font-sans text-[15px] font-bold text-white transition-colors hover:bg-tas-crimson-dark"
          >
            Enroll Now
          </Link>
          <div className="flex items-center gap-1.5 font-sans text-sm">
            {LANGUAGES.map((lang) => (
              <Link
                key={lang.code}
                href="#"
                className={cn(
                  lang.active
                    ? "font-bold text-tas-crimson underline"
                    : "text-white/80 hover:text-white"
                )}
              >
                {lang.code}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex items-center justify-center lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
        >
          <Menu className="size-8 text-tas-crimson-dark" strokeWidth={2.5} />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-tas-navy transition-opacity duration-300 lg:hidden",
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
          <Link href="#" className="shrink-0" onClick={() => setMobileMenuOpen(false)}>
            <Image
              src={LOGO_SRC}
              alt="The American School - Developing Academic Excellence and Strength of Character"
              width={283}
              height={48}
              className="h-10 w-auto"
            />
          </Link>
          <button
            type="button"
            className="flex items-center justify-center"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="size-8 text-white" strokeWidth={2.5} />
          </button>
        </div>

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col overflow-y-auto px-6">
          <div className="flex items-center gap-2 pb-6 font-sans text-sm">
            {LANGUAGES.map((lang) => (
              <Link
                key={lang.code}
                href="#"
                className={cn(
                  "px-1",
                  lang.active
                    ? "font-bold text-tas-crimson underline"
                    : "text-white/80 hover:text-white"
                )}
              >
                {lang.code}
              </Link>
            ))}
          </div>

          <div className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-white/10">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-5 text-left font-sans text-[28px] font-bold text-white"
                  onClick={() =>
                    setOpenAccordion((current) => (current === item.label ? null : item.label))
                  }
                  aria-expanded={openAccordion === item.label}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "size-6 shrink-0 transition-transform",
                      openAccordion === item.label && "rotate-180"
                    )}
                  />
                </button>
                {openAccordion === item.label && (
                  <div className="pb-4">
                    <Link
                      href="#"
                      className="block py-2 font-sans text-base font-bold text-white/80"
                    >
                      {item.label}
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto flex flex-col items-center gap-6 py-8">
            <Link
              href="#"
              className="w-full rounded-[10px] bg-tas-crimson px-6 py-3 text-center font-sans text-[15px] font-bold text-white transition-colors hover:bg-tas-crimson-dark"
              onClick={() => setMobileMenuOpen(false)}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
