"use client";

import { useRef, useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { Play, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ScrollHintArrowIcon } from "@/components/icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const VIDEO_SRC = "/videos/hero-video.mp4";
const WORDMARK_TEXT = "CIS";
const HANDWRITING_TEXT = "TRƯỜNG QUỐC TẾ CIS";
const WORDMARK_MASK_ID = "hero-wordmark-mask";

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

/** Maps global scroll progress `p` into a local 0..1 progress within [start, end]. */
function stageProgress(p: number, start: number, end: number) {
  if (end <= start) return p >= end ? 1 : 0;
  return clamp01((p - start) / (end - start));
}

function lerp(from: number, to: number, t: number) {
  return from + (to - from) * t;
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textIntroRef = useRef<HTMLDivElement>(null);
  const introLineRef = useRef<HTMLParagraphElement>(null);
  const wordmarkRef = useRef<HTMLHeadingElement>(null);
  const wordmarkMaskTextRef = useRef<SVGTextElement>(null);
  const handwritingRef = useRef<HTMLHeadingElement>(null);
  const maskedVideoRef = useRef<HTMLVideoElement>(null);
  const fullVideoRef = useRef<HTMLVideoElement>(null);
  const watchButtonRef = useRef<HTMLButtonElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [mobileVisible, setMobileVisible] = useState(false);
  // Falls back to a solid-color wordmark until the masked video has actually
  // decoded a frame — on a slow connection (or this becomes the first paint),
  // `text-transparent` with an unloaded video behind it would otherwise just
  // render as blank, invisible text instead of "CIS" in any form.
  const [videoReady, setVideoReady] = useState(false);

  useGSAP(
    () => {
      // The SVG mask's <text> must land exactly where the real (invisible) <h1>
      // renders so the video shows through in the right place. The <h1> sits
      // inside a centered flex column alongside the intro line and tagline, so
      // it is NOT at the literal viewport center — measure its actual box and
      // position the mask text to match, in pixels relative to the section.
      const syncMaskPosition = () => {
        const h1 = wordmarkRef.current;
        const section = sectionRef.current;
        const textEl = wordmarkMaskTextRef.current;
        if (!h1 || !section || !textEl) return;
        const h1Rect = h1.getBoundingClientRect();
        const sectionRect = section.getBoundingClientRect();
        textEl.setAttribute("x", String(h1Rect.left - sectionRect.left + h1Rect.width / 2));
        textEl.setAttribute("y", String(h1Rect.top - sectionRect.top + h1Rect.height / 2));
      };

      syncMaskPosition();
      document.fonts?.ready?.then(syncMaskPosition);

      // ResizeObserver catches every layout change that can move the <h1>
      // — window resizes, orientation changes, and (crucially) the mobile
      // <-> desktop breakpoint switch itself, which doesn't reliably fire a
      // plain `resize` event in every environment (e.g. some automated/CDP
      // window resizes skip it, even though the media query still re-matches).
      let resizeObserver: ResizeObserver | undefined;
      if (typeof ResizeObserver !== "undefined" && sectionRef.current) {
        resizeObserver = new ResizeObserver(() => syncMaskPosition());
        resizeObserver.observe(sectionRef.current);
      } else {
        window.addEventListener("resize", syncMaskPosition);
      }

      // Scroll-jacking (`pin: true` below) is the single most disorienting
      // motion on the page for vestibular-sensitive users. Skip the whole
      // scrubbed sequence and land directly on its settled end-state instead.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setMobileVisible(true);
        gsap.set(maskedVideoRef.current, { opacity: 1, scale: 1 });
        gsap.set(fullVideoRef.current, { opacity: 1, scale: 1, borderRadius: 0 });
        gsap.set(introLineRef.current, { opacity: 1 });
        gsap.set(handwritingRef.current, { opacity: 1, y: 0 });
        gsap.set(watchButtonRef.current, { opacity: 1 });
        gsap.set(scrollHintRef.current, { opacity: 1 });
        return () => {
          resizeObserver?.disconnect();
          window.removeEventListener("resize", syncMaskPosition);
        };
      }

      ScrollTrigger.matchMedia({
        // Desktop / tablet: the wordmark is a transparent cutout with the video
        // playing behind it (visible only inside the "CIS" letterforms) from the
        // very first frame. Scrolling zooms the wordmark toward the viewer while
        // it fades away, crossfading into the full-bleed video underneath.
        "(min-width: 768px)": () => {
          syncMaskPosition();
          gsap.set(fullVideoRef.current, {
            opacity: 0,
            scale: 1,
            borderRadius: 0,
          });
          gsap.set(maskedVideoRef.current, { opacity: 1, scale: 1 });
          gsap.set(watchButtonRef.current, { opacity: 0 });
          gsap.set(introLineRef.current, { opacity: 1 });
          gsap.set(handwritingRef.current, { opacity: 1, y: 0 });
          gsap.set(scrollHintRef.current, { opacity: 1 });

          const st = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "+=2000",
            pin: true,
            scrub: 1,
            onUpdate: (self) => {
              const p = self.progress;

              // Intro line + scroll hint fade out almost immediately.
              gsap.set(introLineRef.current, {
                opacity: 1 - stageProgress(p, 0, 0.12),
              });
              gsap.set(scrollHintRef.current, {
                opacity: 1 - stageProgress(p, 0, 0.1),
              });

              // The video-filled wordmark zooms toward the viewer and dissolves,
              // as if scrolling straight through the letters.
              const zoom = stageProgress(p, 0, 0.45);
              gsap.set(maskedVideoRef.current, {
                scale: lerp(1, 2.6, zoom),
                opacity: 1 - stageProgress(p, 0.25, 0.5),
              });

              // Tagline fades and drifts up along with the wordmark, gone by the
              // time the wordmark has fully dissolved.
              const taglineOut = stageProgress(p, 0.05, 0.4);
              gsap.set(handwritingRef.current, {
                opacity: 1 - taglineOut,
                y: -taglineOut * 40,
              });

              // Full-bleed unmasked video crossfades in as the wordmark disappears,
              // so the video is continuously visible — never a blank frame.
              const fullVideoIn = stageProgress(p, 0.2, 0.55);
              gsap.set(fullVideoRef.current, { opacity: fullVideoIn });

              // Watch-film button appears once the video is dominant.
              gsap.set(watchButtonRef.current, {
                opacity: stageProgress(p, 0.4, 0.6),
              });

              // Late settle: video eases into a rounded inline box just before the
              // pin releases, for a smooth handoff into the next section.
              const settle = stageProgress(p, 0.8, 1);
              gsap.set(fullVideoRef.current, {
                scale: lerp(1, 0.92, settle),
                borderRadius: lerp(0, 24, settle),
                opacity: lerp(fullVideoIn, 1, settle),
              });
              gsap.set(watchButtonRef.current, {
                opacity: lerp(stageProgress(p, 0.4, 0.6), 0, settle),
              });
            },
          });

          return () => {
            st.kill();
          };
        },

        // Mobile: same video-behind-transparent-wordmark zoom-and-disappear
        // concept as desktop, but WITHOUT pin — scroll-jacking (pin: true) is
        // unreliable on mobile browsers (iOS Safari's collapsing address bar
        // throws off pinned-height calculations). Instead the effect is tied
        // to the section's own natural scroll-out, via scrub with no pin.
        "(max-width: 767.98px)": () => {
          syncMaskPosition();
          gsap.set(fullVideoRef.current, {
            opacity: 0,
            scale: 1,
            borderRadius: 0,
          });
          gsap.set(maskedVideoRef.current, { opacity: 1, scale: 1 });
          gsap.set(watchButtonRef.current, { opacity: 0 });
          gsap.set(introLineRef.current, { opacity: 1 });
          gsap.set(handwritingRef.current, { opacity: 1, y: 0 });
          gsap.set(scrollHintRef.current, { opacity: 1 });

          // Entrance fade-up the first time the hero scrolls into view.
          const el = sectionRef.current;
          let disconnectObserver: (() => void) | undefined;
          if (el && typeof IntersectionObserver !== "undefined") {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  setMobileVisible(true);
                  observer.disconnect();
                }
              },
              { threshold: 0.2 },
            );
            observer.observe(el);
            disconnectObserver = () => observer.disconnect();
          } else {
            setMobileVisible(true);
          }

          const st = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            onUpdate: (self) => {
              const p = self.progress;

              gsap.set(introLineRef.current, {
                opacity: 1 - stageProgress(p, 0, 0.25),
              });
              gsap.set(scrollHintRef.current, {
                opacity: 1 - stageProgress(p, 0, 0.15),
              });

              const zoom = stageProgress(p, 0, 0.6);
              gsap.set(maskedVideoRef.current, {
                scale: lerp(1, 2.2, zoom),
                opacity: 1 - stageProgress(p, 0.4, 0.7),
              });

              const taglineOut = stageProgress(p, 0.1, 0.55);
              gsap.set(handwritingRef.current, {
                opacity: 1 - taglineOut,
                y: -taglineOut * 30,
              });

              const fullVideoIn = stageProgress(p, 0.3, 0.75);
              gsap.set(fullVideoRef.current, { opacity: fullVideoIn });

              gsap.set(watchButtonRef.current, {
                opacity: stageProgress(p, 0.55, 0.8),
              });
            },
          });

          return () => {
            st.kill();
            disconnectObserver?.();
          };
        },
      });

      return () => {
        resizeObserver?.disconnect();
        window.removeEventListener("resize", syncMaskPosition);
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-white md:h-screen"
    >
      {/* Hidden SVG defs: mask used to reveal the video only within the wordmark's
          letterforms during Stage B. Matches the visible <h1>'s font/weight/size. */}
      <svg
        width="0"
        height="0"
        style={{ position: "absolute" }}
        aria-hidden="true"
      >
        <defs>
          <mask
            id={WORDMARK_MASK_ID}
            maskUnits="objectBoundingBox"
            maskContentUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="100%" height="100%" fill="black" />
            <text
              ref={wordmarkMaskTextRef}
              x="0"
              y="0"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                fontSize: "clamp(3rem, 10vw, 9rem)",
              }}
            >
              {WORDMARK_TEXT}
            </text>
          </mask>
        </defs>
      </svg>

      <div className="video-container-wrapper relative min-h-screen w-full md:h-full">
        {/* Full-bleed video — hidden at rest, crossfades in as the masked
            wordmark zooms away so the video is always on screen somewhere.
            Visible on all breakpoints (mobile uses scroll-scrub, no pin). */}
        <video
          ref={fullVideoRef}
          src={VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />

        {/* Video masked to the wordmark letterforms — visible from the first
            frame, on all breakpoints. This IS the visible "CIS" wordmark: the
            real <h1> below is rendered fully transparent, so the video shows
            through the letter shapes against the white page background. */}
        <video
          ref={maskedVideoRef}
          src={VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoReady(true)}
          className="absolute inset-0 z-20 h-full w-full object-cover"
          style={{
            WebkitMaskImage: `url(#${WORDMARK_MASK_ID})`,
            maskImage: `url(#${WORDMARK_MASK_ID})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />

        {/* Wordmark block */}
        <div
          ref={textIntroRef}
          className={`text-intro relative z-10 flex h-full flex-col items-center justify-center gap-4 px-4 text-center transition-all duration-700 md:absolute md:inset-0 ${
            mobileVisible
              ? "opacity-100"
              : "opacity-0 translate-y-8 md:opacity-100 md:translate-y-0"
          }`}
        >
          <p
            ref={introLineRef}
            className="text-[clamp(1.1rem,2vw,1.5rem)] font-medium text-[#941B1A]"
          >
            Chào mừng quý Phụ huynh đến với
          </p>
          <h1
            ref={wordmarkRef}
            className={`font-sans font-extrabold leading-none transition-colors duration-500 ${
              videoReady ? "text-transparent" : "text-[#941B1A]"
            }`}
            style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
          >
            {WORDMARK_TEXT}
          </h1>
          <h2
            ref={handwritingRef}
            className="font-handwriting text-[#D9660A]"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            {HANDWRITING_TEXT}
          </h2>
        </div>

        {/* Watch-full-film button — visible on all breakpoints */}
        <button
          type="button"
          ref={watchButtonRef}
          onClick={() => setModalOpen(true)}
          className="video-watching-full absolute bottom-16 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-white/10 text-white backdrop-blur-sm transition-colors group-hover:bg-white/20">
            <Play className="h-5 w-5 translate-x-px fill-white" />
          </span>
          <span className="text-sm font-semibold text-white drop-shadow">
            Xem trọn vẹn bộ phim
          </span>
        </button>
      </div>

      {/* Scroll hint — purely decorative, fades out as scroll begins */}
      <div
        ref={scrollHintRef}
        className="scroll-to absolute inset-x-0 bottom-10 z-40 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-medium tracking-wide text-[#941B1A]">
          Cuộn để khám phá
        </span>
        <ScrollHintArrowIcon className="h-[30px] w-auto animate-hero-scroll-bounce text-[#D9660A]" />
      </div>

      <style jsx>{`
        @keyframes hero-scroll-bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(6px);
          }
        }
        :global(.animate-hero-scroll-bounce) {
          animation: hero-scroll-bounce 1.5s ease-in-out infinite;
        }
      `}</style>

      <Dialog.Root open={modalOpen} onOpenChange={setModalOpen}>
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm" />
          <Dialog.Popup className="fixed left-1/2 top-1/2 z-[101] w-[min(90vw,1100px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-black p-2 shadow-2xl outline-none">
            <Dialog.Close
              aria-label="Đóng"
              className="absolute -top-10 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Dialog.Close>
            <video
              src={VIDEO_SRC}
              controls
              autoPlay
              className="aspect-video w-full rounded-xl"
            />
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
