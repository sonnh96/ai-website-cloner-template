"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Menu, X } from "lucide-react";

import { ChevronDownIcon, SearchIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const TOP_BAR_LINKS = ["Thư viện", "Tuyển dụng"];

type MegaMenuKey = "about" | "admissions";

interface SidebarItem {
  label: string;
  active?: boolean;
}

interface MenuColumn {
  heading: string;
  links: string[];
}

interface MegaMenuContent {
  sidebar: SidebarItem[];
  columns: MenuColumn[];
}

const MEGA_MENUS: Record<MegaMenuKey, MegaMenuContent> = {
  about: {
    sidebar: [
      { label: "Về chúng tôi", active: true },
      { label: "Học thuật" },
      { label: "Đời sống học đường" },
      { label: "Liên hệ" },
    ],
    columns: [
      {
        heading: "Tiểu học",
        links: ["Chương trình lớp 1 - 3", "Chương trình lớp 4 - 6"],
      },
      {
        heading: "Trung học",
        links: [
          "Chương trình lớp 7 - 8",
          "Chương trình lớp 9 - 10",
          "Chương trình Tú tài Quốc tế (IBDP)",
        ],
      },
    ],
  },
  admissions: {
    sidebar: [
      { label: "Tuyển sinh", active: true },
      { label: "Đời sống học đường" },
    ],
    columns: [
      {
        heading: "Tuyển sinh",
        links: ["Tư vấn tuyển sinh", "Học phí", "Câu hỏi thường gặp"],
      },
      {
        heading: "Hệ thống trường",
        links: ["Tiểu học", "Trung học cơ sở", "Trung học phổ thông"],
      },
    ],
  },
};

const MEGA_MENU_LABELS: Record<MegaMenuKey, string> = {
  about: "Về chúng tôi",
  admissions: "Tuyển sinh",
};

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MegaMenuKey | null>(null);
  const [displayedMenu, setDisplayedMenu] = useState<MegaMenuKey>("about");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<MegaMenuKey | null>(
    null
  );

  // Scroll-driven state toggle. No visual style is tied to this today — it's
  // wired up cleanly so a future engineer can hook a shadow/shrink onto it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click-outside + Escape close the open mega-menu / mobile drawer.
  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setActiveMenu(null);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    if (mobileOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [mobileOpen]);

  function toggleMenu(key: MegaMenuKey) {
    setDisplayedMenu(key);
    setActiveMenu((prev) => (prev === key ? null : key));
  }

  function toggleMobileAccordion(key: MegaMenuKey) {
    setMobileAccordion((prev) => (prev === key ? null : key));
  }

  function closeAll() {
    setActiveMenu(null);
    setMobileOpen(false);
    setMobileAccordion(null);
  }

  const menu = MEGA_MENUS[displayedMenu];

  return (
    <header
      ref={headerRef}
      data-scrolled={scrolled}
      className="fixed top-0 left-0 z-50 w-full"
    >
      {/* Top utility bar */}
      <div className="hidden h-[37px] items-center justify-end bg-primary px-6 md:flex lg:px-10 xl:px-16">
        <nav className="flex items-center gap-6 lg:gap-8">
          {TOP_BAR_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="flex items-center gap-1 text-sm text-white transition-colors duration-150 hover:text-accent"
            >
              {label}
              <ChevronDownIcon className="size-3.5" />
            </a>
          ))}
          <span className="h-4 w-px bg-white/30" aria-hidden="true" />
          <button
            type="button"
            aria-label="Chọn ngôn ngữ"
            className="flex size-5 items-center justify-center rounded-full border border-white/40 text-[10px] font-semibold text-white transition-colors duration-150 hover:border-accent hover:text-accent"
          >
            VI
          </button>
          <button
            type="button"
            aria-label="Tìm kiếm"
            className="text-white transition-colors duration-150 hover:text-accent"
          >
            <SearchIcon className="size-4" />
          </button>
        </nav>
      </div>

      {/* Main row */}
      <div className="flex h-[81px] items-center justify-between bg-white px-6 lg:px-10 xl:px-16">
        <Link href="/" className="shrink-0" onClick={closeAll}>
          <Image
            src="/images/cis/logo.png"
            alt="CIS"
            width={90}
            height={64}
            priority
            className="h-16 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex lg:gap-10">
          <Link
            href="/"
            className="border-b-2 border-accent pb-1 text-sm font-medium text-accent"
          >
            Trang chủ
          </Link>

          {(Object.keys(MEGA_MENU_LABELS) as MegaMenuKey[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => toggleMenu(key)}
              aria-expanded={activeMenu === key}
              aria-haspopup="menu"
              className="flex items-center gap-1 text-sm font-medium text-black transition-colors duration-150 hover:text-accent"
            >
              {MEGA_MENU_LABELS[key]}
              <ChevronDownIcon
                className={cn(
                  "size-6 transition-transform duration-150",
                  activeMenu === key && "rotate-180"
                )}
              />
            </button>
          ))}
        </nav>

        <Link
          href="#"
          className="hidden items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition duration-200 hover:bg-accent/90 active:scale-95 md:inline-flex"
        >
          Đăng ký tư vấn
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Mở menu"
          className="-mr-2 flex size-11 items-center justify-center text-primary md:hidden"
        >
          <Menu className="size-6" />
        </button>
      </div>

      {/* Mega-menu panel (desktop) */}
      <div
        className={cn(
          "absolute inset-x-0 top-full hidden border-t border-border bg-white shadow-lg transition-all duration-200 ease-out md:block",
          activeMenu
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <div className="mx-auto flex max-w-[1440px] gap-12 px-6 py-10 lg:px-10 xl:px-16">
          <ul className="w-[220px] shrink-0 space-y-1 border-r border-border pr-8">
            {menu.sidebar.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className={cn(
                    "flex items-center justify-between gap-2 rounded-md px-3 py-2.5 text-sm font-bold transition-colors",
                    item.active
                      ? "text-accent underline underline-offset-4"
                      : "text-primary hover:text-accent"
                  )}
                >
                  {item.label}
                  <ChevronRight className="size-4 shrink-0" />
                </a>
              </li>
            ))}
          </ul>

          <div
            className={cn(
              "grid flex-1 gap-10",
              menu.columns.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
            )}
          >
            {menu.columns.map((col) => (
              <div key={col.heading}>
                <h3 className="mb-4 text-base font-semibold text-accent">
                  {col.heading}
                </h3>
                {col.links.length > 0 && (
                  <ul className="space-y-3">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-base text-primary transition-colors hover:text-accent"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile drawer — stays mounted so open/close can transition instead of popping instantly */}
      <div
        className={cn(
          "fixed inset-0 z-50 transition-opacity duration-300 md:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col overflow-y-auto bg-white p-6 shadow-xl transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
            <div className="flex items-center justify-between">
              <Image
                src="/images/cis/logo.png"
                alt="CIS"
                width={68}
                height={48}
                className="h-12 w-auto"
              />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Đóng menu"
                className="-mr-2 flex size-11 items-center justify-center"
              >
                <X className="size-6 text-primary" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-1">
              <Link
                href="/"
                className="border-b border-border py-3 text-base font-medium text-accent"
                onClick={closeAll}
              >
                Trang chủ
              </Link>

              {(Object.keys(MEGA_MENU_LABELS) as MegaMenuKey[]).map((key) => (
                <div key={key} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => toggleMobileAccordion(key)}
                    aria-expanded={mobileAccordion === key}
                    className="flex w-full items-center justify-between py-3 text-base font-medium text-black"
                  >
                    {MEGA_MENU_LABELS[key]}
                    <ChevronDownIcon
                      className={cn(
                        "size-5 transition-transform duration-150",
                        mobileAccordion === key && "rotate-180"
                      )}
                    />
                  </button>

                  {mobileAccordion === key && (
                    <div className="space-y-4 pb-4 pl-2">
                      <ul className="space-y-2">
                        {MEGA_MENUS[key].sidebar.map((item) => (
                          <li key={item.label}>
                            <a
                              href="#"
                              className={cn(
                                "flex items-center gap-1 text-sm",
                                item.active
                                  ? "font-semibold text-accent"
                                  : "text-primary"
                              )}
                            >
                              <ChevronRight className="size-3.5 shrink-0" />
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                      {MEGA_MENUS[key].columns.map((col) => (
                        <div key={col.heading}>
                          <p className="mb-2 text-sm font-semibold text-accent">
                            {col.heading}
                          </p>
                          {col.links.length > 0 && (
                            <ul className="space-y-2 pl-2">
                              {col.links.map((link) => (
                                <li key={link}>
                                  <a href="#" className="text-sm text-primary">
                                    {link}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="#"
                onClick={closeAll}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition duration-200 hover:bg-accent/90 active:scale-95"
              >
                Đăng ký tư vấn
              </Link>
            </nav>

            <div className="mt-8 flex flex-col border-t border-border pt-2">
              {TOP_BAR_LINKS.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="flex items-center justify-between py-2.5 text-sm text-primary"
                >
                  {label}
                  <ChevronDownIcon className="size-4" />
                </a>
              ))}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  aria-label="Chọn ngôn ngữ"
                  className="flex size-6 items-center justify-center rounded-full border border-primary/30 text-[10px] font-semibold text-primary"
                >
                  VI
                </button>
                <button
                  type="button"
                  aria-label="Tìm kiếm"
                  className="text-primary"
                >
                  <SearchIcon className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
    </header>
  );
}
