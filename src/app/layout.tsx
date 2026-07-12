import type { Metadata } from "next";
import { Urbanist, Just_Another_Hand } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const justAnotherHand = Just_Another_Hand({
  variable: "--font-just-another-hand",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "CIS - Online Platform For Education",
  description:
    "CIS is an online learning platform offering courses, events, and educational resources.",
  icons: {
    icon: [
      { url: "/seo/cropped-favicon-32x32.png", sizes: "32x32" },
      { url: "/seo/cropped-favicon-192x192.png", sizes: "192x192" },
    ],
    apple: "/seo/cropped-favicon-180x180.png",
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
      className={`${urbanist.variable} ${justAnotherHand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
