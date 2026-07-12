"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

/**
 * Exact port of the Kadu theme's animation layer
 * (themes/kadu/assets/js/main.js + plugins/kadu-plugin/assets/js/core.js).
 * All values (durations, eases, trigger points, staggers) match the source.
 * See docs/research/themexriver.com/ANIMATIONS.md for the full inventory.
 */
export function AnimationProvider() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    gsap.config({ nullTargetWarn: false });
    if (process.env.NODE_ENV !== "production") {
      (window as unknown as Record<string, unknown>).kdGsap = gsap;
    }

    // Lenis smooth scroll — new Lenis({ duration: 1.2 })
    const lenis = new Lenis({ duration: 1.2 });
    lenis.on("scroll", ScrollTrigger.update);
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Mouse parallax — .txa-mm-elm, translate(clientX*value/250)
    const parallax = (e: MouseEvent) => {
      document.querySelectorAll<HTMLElement>(".txa-mm-elm").forEach((move) => {
        const value = Number(move.getAttribute("data-value") || 1);
        const x = (e.clientX * value) / 250;
        const y = (e.clientY * value) / 250;
        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };
    document.addEventListener("mousemove", parallax);

    // Carousel autoplay — Swiper `autoplay.delay` equivalent for scroll-snap tracks
    const autoplayTimers: ReturnType<typeof setInterval>[] = [];
    document.querySelectorAll<HTMLElement>("[data-kd-autoplay]").forEach((track) => {
      const delay = Number(track.dataset.kdAutoplay || 5000);
      autoplayTimers.push(
        setInterval(() => {
          const step = (track.firstElementChild as HTMLElement | null)?.offsetWidth || 320;
          const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - step / 2;
          if (atEnd) {
            track.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            track.scrollBy({ left: step, behavior: "smooth" });
          }
        }, delay),
      );
    });

    // Defer GSAP setup to fonts.ready — matches the theme's `window.on('load')` timing,
    // gives SplitText correct metrics, and (with the cancel guard) survives React
    // StrictMode's mount→cleanup→mount cycle without double-splitting the headings.
    let cancelled = false;
    let ctx: gsap.Context | undefined;
    // ctx.revert() does not un-split SplitText targets, so track instances and
    // revert them ourselves on cleanup — otherwise StrictMode's second mount
    // splits the already-split DOM (nested spans, broken char tweens).
    const splitInstances: SplitText[] = [];
    document.fonts.ready.then(() => {
      if (cancelled) return;
      ctx = createAnimations();
      ScrollTrigger.refresh();
      // Hero slide staged entrance — the original adds swiper-slide-active, which
      // its CSS transitions key off; our equivalent hook class is .is-active.
      // Force a reflow first so initial transition states are committed.
      void document.body.offsetHeight;
      document
        .querySelectorAll<HTMLElement>(".kd-hero-1-item")
        .forEach((slide) => slide.classList.add("is-active"));
    });

    const createAnimations = () => gsap.context(() => {
      // Section titles — .kd-split-text.kd-title-ani (SplitText char sweep)
      document.querySelectorAll<HTMLElement>(".kd-split-text").forEach((el) => {
        const split = new SplitText(el, {
          type: "lines,words,chars",
          linesClass: "split-line",
        });
        splitInstances.push(split);
        gsap.set(el, { perspective: 400 });
        if (el.classList.contains("kd-title-ani")) {
          gsap.set(split.chars, { opacity: 1, color: "#005e4f", x: 50 });
        }
        gsap.to(split.chars, {
          scrollTrigger: { trigger: el, start: "top 90%" },
          x: 0,
          y: 0,
          color: "inherit",
          opacity: 1,
          duration: 1,
          stagger: 0.02,
        });
      });

      // Hero H1 — chars {opacity:0, y:50}, ease "back", duration .5, delay 1, stagger .05
      document.querySelectorAll<HTMLElement>(".kd-hero-title").forEach((el) => {
        const split = new SplitText(el, { type: "words,chars" });
        splitInstances.push(split);
        gsap.from(split.chars, {
          opacity: 0,
          y: 50,
          ease: "back",
          duration: 0.5,
          delay: 1,
          stagger: { from: "start", each: 0.05 },
          onComplete: () => split.revert(),
        });
      });

      // .txaa-fade-right — {autoAlpha:0, x:50} → 1s, top 85%, play/reverse
      gsap.utils.toArray<HTMLElement>(".txaa-fade-right").forEach((box) => {
        const anim = gsap.fromTo(
          box,
          { autoAlpha: 0, x: 50 },
          { duration: 1, autoAlpha: 1, x: 0 },
        );
        ScrollTrigger.create({
          trigger: box,
          start: "top 85%",
          animation: anim,
          toggleActions: "play none none reverse",
        });
      });

      // .txaa-fade-left — {autoAlpha:0, x:-50}
      gsap.utils.toArray<HTMLElement>(".txaa-fade-left").forEach((box) => {
        const anim = gsap.fromTo(
          box,
          { autoAlpha: 0, x: -50 },
          { duration: 1, autoAlpha: 1, x: 0 },
        );
        ScrollTrigger.create({
          trigger: box,
          start: "top 85%",
          animation: anim,
          toggleActions: "play none none reverse",
        });
      });

      // .txaa-slide-right — {xPercent:100}
      gsap.utils.toArray<HTMLElement>(".txaa-slide-right").forEach((box) => {
        const anim = gsap.fromTo(box, { xPercent: 100 }, { duration: 1, xPercent: 0 });
        ScrollTrigger.create({
          trigger: box,
          start: "top 85%",
          animation: anim,
          toggleActions: "play none none reverse",
        });
      });

      // .txaa-scale-up — {scale:.5}
      gsap.utils.toArray<HTMLElement>(".txaa-scale-up").forEach((box) => {
        const anim = gsap.fromTo(box, { scale: 0.5 }, { duration: 1, scale: 1 });
        ScrollTrigger.create({
          trigger: box,
          start: "top 85%",
          animation: anim,
          toggleActions: "play none none reverse",
        });
      });

      // .txaa-scalex-up — {scaleX:0}, duration 3
      gsap.utils.toArray<HTMLElement>(".txaa-scalex-up").forEach((box) => {
        const anim = gsap.fromTo(
          box,
          { scaleX: 0, transformOrigin: "center" },
          { duration: 3, scaleX: 1 },
        );
        ScrollTrigger.create({
          trigger: box,
          start: "top 85%",
          animation: anim,
          toggleActions: "play none none reverse",
        });
      });

      // .txaa-slide-down-1 — items {opacity:0, yPercent:100} stagger .2 circ.out
      gsap.utils.toArray<HTMLElement>(".txaa-slide-down-1").forEach((container) => {
        const items = container.querySelectorAll(".txaa-slide-down-1-item");
        if (!items.length) return;
        gsap
          .timeline({
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          })
          .from(items, { opacity: 0, yPercent: 100, stagger: 0.2, duration: 1, ease: "circ.out" });
      });

      // .txaa-roteted-1 — img rotate 360 → 0, scrubbed
      gsap.utils.toArray<HTMLElement>(".txaa-roteted-1").forEach((container) => {
        const images = container.querySelectorAll("img");
        if (!images.length) return;
        gsap
          .timeline({
            scrollTrigger: {
              trigger: container,
              scrub: 1,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          })
          .from(images, { rotate: 360, duration: 1, ease: "circ.out" });
      });

      // .kd-img-ani-1 — img {opacity:0, yPercent:-100, blur(30px)} circ.out
      gsap.utils.toArray<HTMLElement>(".kd-img-ani-1").forEach((container) => {
        const images = container.querySelectorAll("img");
        if (!images.length) return;
        gsap
          .timeline({
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          })
          .from(images, {
            opacity: 0,
            yPercent: -100,
            filter: "blur(30px)",
            duration: 1,
            ease: "circ.out",
          });
      });

      // .kd-subtitle-ani-1 — eyebrow star icon rotate 360, scrubbed top 80% → top 0%
      gsap.utils.toArray<HTMLElement>(".kd-subtitle-ani-1").forEach((container) => {
        const icons = container.querySelectorAll("img, svg");
        if (!icons.length) return;
        gsap
          .timeline({
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              end: "top 0%",
              scrub: 1,
              toggleActions: "play none none reverse",
            },
          })
          .from(icons, { rotate: 360, duration: 1, ease: "circ.out" });
      });

      // .kd-reveal — WOW.js fadeInUp equivalent (scroll-triggered, was mount-triggered CSS)
      gsap.utils.toArray<HTMLElement>(".kd-reveal").forEach((box) => {
        const anim = gsap.fromTo(
          box,
          { autoAlpha: 0, y: 40 },
          { duration: 0.8, autoAlpha: 1, y: 0, ease: "power2.out" },
        );
        ScrollTrigger.create({
          trigger: box,
          start: "top 90%",
          animation: anim,
          toggleActions: "play none none none",
        });
      });
    });

    return () => {
      cancelled = true;
      ctx?.revert();
      splitInstances.forEach((s) => s.revert());
      document
        .querySelectorAll<HTMLElement>(".kd-hero-1-item.is-active")
        .forEach((slide) => slide.classList.remove("is-active"));
      document.removeEventListener("mousemove", parallax);
      autoplayTimers.forEach(clearInterval);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
