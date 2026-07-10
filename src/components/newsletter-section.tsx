"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface NewsletterFormState {
  name: string;
  email: string;
  phone: string;
}

const INITIAL_STATE: NewsletterFormState = {
  name: "",
  email: "",
  phone: "",
};

const inputClassName = cn(
  "w-full rounded-[10px] border-2 border-white/70 bg-white/10 px-4 py-3",
  "font-body text-base text-white placeholder:text-white/60",
  "outline-none transition-colors duration-200",
  "focus:border-white focus:bg-white/15",
);

export function NewsletterSection() {
  const [form, setForm] = useState<NewsletterFormState>(INITIAL_STATE);

  function handleChange(field: keyof NewsletterFormState) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No real backend for this clone — mock submit only.
    console.log("Newsletter tour request submitted:", form);
    setForm(INITIAL_STATE);
  }

  return (
    <section className="grid w-full md:grid-cols-2">
      <div className="flex items-center bg-tas-crimson p-12 md:p-16">
        <div className="w-full max-w-xl">
          <h2 className="font-heading text-[36px] font-bold leading-tight text-white">
            Book a school tour with us!
          </h2>
          <p className="mt-4 font-body text-base text-white/90">
            Be the first to know about exciting school updates, events, and
            achievements.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="newsletter-name"
                className="font-body text-sm font-semibold text-white"
              >
                Your Name
              </label>
              <input
                id="newsletter-name"
                name="name"
                type="text"
                required
                placeholder="Enter Your Name Here"
                value={form.name}
                onChange={handleChange("name")}
                className={inputClassName}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="newsletter-email"
                className="font-body text-sm font-semibold text-white"
              >
                Email
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="youremail@gmail.com"
                value={form.email}
                onChange={handleChange("email")}
                className={inputClassName}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="newsletter-phone"
                className="font-body text-sm font-semibold text-white"
              >
                Phone number
              </label>
              <input
                id="newsletter-phone"
                name="phone"
                type="tel"
                required
                placeholder="Enter Phone Number Here"
                value={form.phone}
                onChange={handleChange("phone")}
                className={inputClassName}
              />
            </div>

            <button
              type="submit"
              className={cn(
                "mt-2 w-fit rounded-[10px] border-2 border-white px-8 py-3",
                "font-body font-bold text-white",
                "transition-colors duration-200 hover:bg-white hover:text-tas-crimson",
              )}
            >
              Book a tour
            </button>
          </form>
        </div>
      </div>

      <div className="relative hidden min-h-[420px] md:block">
        <Image
          src="/images/newsletter-campus-aerial.avif"
          alt="Aerial view of The American School campus"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
