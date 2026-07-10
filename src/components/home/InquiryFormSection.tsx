"use client";

import type { HomeContent } from "@/types/content";

const inputClass =
  "w-full bg-muted border border-transparent rounded px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/20";

export function InquiryFormSection({
  content,
}: {
  content: HomeContent["inquiryForm"];
}) {
  const { heading, subheading, fields, submitCta, backgroundSrc } = content;

  return (
    <section
      className="relative py-16 md:py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundSrc})` }}
    >
      <div className="absolute inset-0 bg-cis-navy/80" />
      <div className="relative z-10 max-w-[1170px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="reveal">
          <h2 className="font-heading text-3xl md:text-4xl uppercase font-bold text-white mb-4">
            {heading}
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-md">
            {subheading}
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="reveal bg-white rounded-lg p-6 md:p-8 shadow-xl flex flex-col gap-5"
        >
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              {fields.parentName}
              <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              {fields.studentAge}
            </label>
            <input
              type="text"
              className={inputClass}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              {fields.phone}
              <span className="text-primary">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder={fields.phonePlaceholder}
              className={inputClass}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              {fields.email}
              <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              required
              placeholder={fields.emailPlaceholder}
              className={inputClass}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              {fields.nationality}
            </label>
            <input
              type="text"
              className={inputClass}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              {fields.program}
            </label>
            <select className={inputClass}>
              <option>{fields.programPlaceholder}</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-cis-navy text-white uppercase font-semibold px-8 py-3 rounded self-start transition-all duration-200 hover:-translate-y-0.5 hover:bg-cis-navy/90 hover:shadow-lg active:translate-y-0"
          >
            {submitCta}
          </button>
        </form>
      </div>
    </section>
  );
}
