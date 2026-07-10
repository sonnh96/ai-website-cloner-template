"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface NewsletterFormState {
  parentName: string;
  studentAge: string;
  program: string;
}

const INITIAL_STATE: NewsletterFormState = {
  parentName: "",
  studentAge: "",
  program: "",
};

const PROGRAMS = ["Lớp 1 - 3", "Lớp 4 - 6", "Lớp 7 - 10", "IBDP"];

const inputClassName = cn(
  "w-full rounded-[10px] border-2 border-white/70 bg-white/10 px-4 py-3",
  "font-body text-base text-white placeholder:text-white/60",
  "outline-none transition-colors duration-200",
  "focus:border-white focus:bg-white/15",
);

export function NewsletterSection() {
  const [form, setForm] = useState<NewsletterFormState>(INITIAL_STATE);

  function handleChange(field: keyof NewsletterFormState) {
    return (
      event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No real backend for this clone — mock submit only.
    console.log("CIS tư vấn request submitted:", form);
    setForm(INITIAL_STATE);
  }

  return (
    <section className="grid w-full md:grid-cols-2">
      <div className="flex items-center bg-tas-crimson p-12 md:p-16">
        <div className="w-full max-w-xl">
          <h2 className="font-heading text-[36px] font-bold leading-tight text-white">
            Đăng Ký Tư Vấn Cùng CIS
          </h2>
          <p className="mt-4 font-body text-base text-white/90">
            Hãy để lại thông tin để nhận những cập nhật mới nhất về CIS.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="newsletter-name"
                className="font-body text-sm font-semibold text-white"
              >
                Họ tên của phụ huynh
              </label>
              <input
                id="newsletter-name"
                name="parentName"
                type="text"
                required
                placeholder="Nhập ở đây..."
                value={form.parentName}
                onChange={handleChange("parentName")}
                className={inputClassName}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="newsletter-age"
                className="font-body text-sm font-semibold text-white"
              >
                Tuổi của học sinh
              </label>
              <input
                id="newsletter-age"
                name="studentAge"
                type="text"
                placeholder="Nhập ở đây"
                value={form.studentAge}
                onChange={handleChange("studentAge")}
                className={inputClassName}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="newsletter-program"
                className="font-body text-sm font-semibold text-white"
              >
                Chọn chương trình
              </label>
              <select
                id="newsletter-program"
                name="program"
                value={form.program}
                onChange={handleChange("program")}
                className={cn(inputClassName, "text-white [&>option]:text-tas-ink")}
              >
                <option value="">-- Chọn chương trình --</option>
                {PROGRAMS.map((program) => (
                  <option key={program} value={program}>
                    {program}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className={cn(
                "mt-2 w-fit rounded-[10px] border-2 border-white px-8 py-3",
                "font-body font-bold text-white",
                "transition-colors duration-200 hover:bg-white hover:text-tas-crimson",
              )}
            >
              Gửi
            </button>
          </form>
        </div>
      </div>

      <div className="relative hidden min-h-[420px] md:block">
        <Image
          src="/images/cis-hero-banner.jpg"
          alt="Toàn cảnh khuôn viên trường Quốc Tế CIS"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
