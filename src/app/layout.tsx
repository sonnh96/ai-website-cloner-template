import type { Metadata } from "next";
import { Mulish, Shantell_Sans } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const shantellSans = Shantell_Sans({
  variable: "--font-shantell-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Canadian International School (CIS)",
  description:
    "Trường Quốc tế Canada (CIS) tại Phú Mỹ Hưng, TP. Hồ Chí Minh — chương trình học thuật IB, AP được kiểm định bởi Cognia, CoIS và WASC, đồng hành cùng học sinh từ Tiểu học đến Tú tài Quốc tế.",
  icons: {
    icon: "/seo/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${mulish.variable} ${shantellSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
