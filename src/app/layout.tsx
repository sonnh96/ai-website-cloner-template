import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trường Quốc Tế CIS - The Canadian International School",
  description:
    "CIS - Trường Quốc tế Canada mang đến chương trình giáo dục toàn diện cho học sinh từ Lớp 1 đến Lớp 12, với chương trình Tú tài Quốc tế (IB Diploma) được công nhận toàn cầu.",
  icons: {
    icon: "/seo/favicon-32.png",
    apple: "/seo/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
