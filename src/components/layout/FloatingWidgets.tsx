"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const contactButtons = [
  {
    label: "Contact",
    icon: "/images/asset/ic-headerwidget-headphone.svg",
  },
  {
    label: "Book a tour",
    icon: "/images/asset/calendar.svg",
  },
  {
    label: "Chat",
    icon: "/images/asset/mess.svg",
  },
]

export function FloatingWidgets() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setShowBackToTop(window.scrollY > 400)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function handleBackToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <div className="fixed right-4 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-3">
        {contactButtons.map((button) => (
          <button
            key={button.label}
            type="button"
            aria-label={button.label}
            className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full shadow-lg transition-transform duration-200 hover:scale-110 hover:shadow-xl md:h-14 md:w-14"
          >
            <Image
              src={button.icon}
              alt=""
              width={56}
              height={56}
              className="h-full w-full object-cover"
              aria-hidden="true"
            />
          </button>
        ))}
      </div>

      <button
        type="button"
        aria-label="Back to top"
        onClick={handleBackToTop}
        className={`fixed right-6 bottom-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 ease-out hover:scale-110 hover:shadow-xl ${
          showBackToTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <Image
          src="/images/asset/ic-backtotop.png"
          alt=""
          width={20}
          height={20}
          className="h-5 w-5"
          aria-hidden="true"
        />
      </button>
    </>
  )
}
