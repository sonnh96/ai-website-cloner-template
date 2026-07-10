"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { HomeContent, Locale } from "@/types/content";

const PARTNER_LOGOS = [
  { src: "/images/partners/ib-world-school.png", alt: "IB World School" },
  { src: "/images/partners/collegeboard-ap.png", alt: "College Board AP" },
  { src: "/images/partners/cis-accredited.png", alt: "CIS Accredited" },
  { src: "/images/partners/cognia.png", alt: "Cognia" },
  { src: "/images/partners/wasc.png", alt: "WASC" },
];

const LOCALE_META: Record<Locale, { label: string; flagSrc: string }> = {
  vi: { label: "VI", flagSrc: "/images/asset/flag-vn-small.png" },
  en: { label: "EN", flagSrc: "/images/asset/flag-canada-small.png" },
  kr: { label: "KR", flagSrc: "/images/asset/flag-kr-small.png" },
  zh: { label: "ZH", flagSrc: "/images/asset/flag-zh-small.png" },
};

const ALL_LOCALES: Locale[] = ["vi", "en", "kr", "zh"];

export function Header({ content, locale }: { content: HomeContent; locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY >= 80);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { header } = content;
  const otherLocales = ALL_LOCALES.filter((l) => l !== locale);
  const iconColorClass = scrolled ? "text-[#212529]" : "text-white";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Row 1 */}
      <div
        className={cn(
          "w-full transition-colors duration-300",
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6">
          {/* Left: logo + partner logos */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link href={`/${locale}`} className="shrink-0">
              <Image
                src="/images/logo/cis-logo-color.png"
                alt="CIS Logo"
                width={140}
                height={56}
                className="h-9 w-auto md:h-12 lg:h-14"
                priority
              />
            </Link>
            <div className="hidden items-center gap-4 border-l border-white/30 pl-4 lg:flex">
              {PARTNER_LOGOS.map((logo, i) => (
                <div
                  key={logo.src}
                  className={cn(
                    "flex items-center",
                    i !== 0 && "border-l border-white/30 pl-4"
                  )}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={60}
                    height={40}
                    className="h-8 w-auto object-contain lg:h-10"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA + lang + icons */}
          <div className={cn("flex items-center gap-4 md:gap-5", iconColorClass)}>
            <Link
              href="#inquiry"
              className="hidden shrink-0 rounded-none bg-primary px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-cis-red-dark hover:shadow-md sm:inline-block"
            >
              {header.inquiryCta}
            </Link>

            {/* Language switcher */}
            <div className="relative hidden md:block">
              <button
                type="button"
                onClick={() => setLangOpen((o) => !o)}
                className={cn(
                  "flex items-center gap-1.5 text-sm font-semibold uppercase transition-colors",
                  iconColorClass
                )}
                aria-expanded={langOpen}
                aria-haspopup="true"
              >
                <Image
                  src={content.flagSrc}
                  alt={content.languageLabel}
                  width={20}
                  height={20}
                  className="h-5 w-5 rounded-full object-cover"
                />
                <span>{LOCALE_META[locale]?.label ?? locale.toUpperCase()}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {langOpen && (
                <div className="dropdown-enter absolute right-0 top-full mt-2 w-32 rounded-md border border-border bg-white py-1 text-[#212529] shadow-lg">
                  {otherLocales.map((l) => (
                    <Link
                      key={l}
                      href={`/${l}`}
                      className="flex items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-muted hover:text-primary"
                      onClick={() => setLangOpen(false)}
                    >
                      <Image
                        src={LOCALE_META[l].flagSrc}
                        alt={LOCALE_META[l].label}
                        width={18}
                        height={18}
                        className="h-[18px] w-[18px] rounded-full object-cover"
                      />
                      {LOCALE_META[l].label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              aria-label="Search"
              className="hidden shrink-0 items-center justify-center md:flex"
            >
              <Image
                src="/images/asset/ic-header-searchbox.svg"
                alt=""
                width={20}
                height={20}
                className={cn("h-5 w-5", scrolled ? "" : "brightness-0 invert")}
              />
            </button>

            <button
              type="button"
              aria-label="360 View"
              className="hidden shrink-0 items-center justify-center lg:flex"
            >
              <Image
                src="/images/asset/ic-360.svg"
                alt=""
                width={22}
                height={22}
                className={cn("h-[22px] w-[22px]", scrolled ? "" : "brightness-0 invert")}
              />
            </button>

            <Link
              href="/library"
              className="hidden shrink-0 text-sm font-semibold uppercase tracking-wide transition-colors hover:text-primary lg:inline-block"
            >
              {header.library}
            </Link>

            <Link
              href="/careers"
              className="hidden shrink-0 text-sm font-semibold uppercase tracking-wide transition-colors hover:text-primary lg:inline-block"
            >
              {header.careers}
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((o) => !o)}
              className="flex shrink-0 items-center justify-center md:hidden"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Row 2: nav */}
      <div className="hidden w-full border-b border-border bg-white md:block">
        <nav className="mx-auto flex h-10 max-w-[1400px] items-center justify-center gap-8 px-6">
          {header.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative font-sans text-sm font-semibold uppercase tracking-wide text-[#212529] transition-colors hover:text-primary"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-200 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="dropdown-enter flex flex-col gap-1 border-b border-border bg-white px-6 py-4 md:hidden">
          {header.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-sm font-semibold uppercase tracking-wide text-[#212529] hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="my-2 h-px bg-border" />
          <Link
            href="#inquiry"
            className="w-fit bg-primary px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white"
            onClick={() => setMobileOpen(false)}
          >
            {header.inquiryCta}
          </Link>
          <Link
            href="/library"
            className="py-2 text-sm font-semibold uppercase tracking-wide text-[#212529] hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            {header.library}
          </Link>
          <Link
            href="/careers"
            className="py-2 text-sm font-semibold uppercase tracking-wide text-[#212529] hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            {header.careers}
          </Link>
          <div className="flex items-center gap-3 pt-2">
            {otherLocales.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className="flex items-center gap-1.5 text-sm font-semibold uppercase text-[#212529] hover:text-primary"
              >
                <Image
                  src={LOCALE_META[l].flagSrc}
                  alt={LOCALE_META[l].label}
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px] rounded-full object-cover"
                />
                {LOCALE_META[l].label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
