import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { LOCALES, isLocale } from "@/content";
import "../globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

const gotham = localFont({
  variable: "--font-gotham",
  src: [
    {
      path: "../../../public/fonts/gotham/SVN-GothamBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Canadian International School (CIS)",
  description:
    "The Canadian International School (CIS) offers a comprehensive education program for students from Grade 1 to Grade 12. With a focus on holistic development, CIS provides academically rigorous programs while nurturing critical thinking, creativity, and global citizenship. Students benefit from internationally recognized curricula, including the IB Diploma, which prepare them for top universities worldwide.",
  icons: {
    icon: [
      { url: "/seo/favicon-32.png", sizes: "32x32" },
      { url: "/seo/favicon-192.png", sizes: "192x192" },
    ],
  },
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      className={`${montserrat.variable} ${gotham.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
