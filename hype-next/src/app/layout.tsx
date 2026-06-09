import type { Metadata } from "next";
import { fontDisp, fontBody, fontPoster } from "@/lib/fonts";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "HYPE — Bid. Win. Repeat.",
  description:
    "India's first live auction marketplace for hype culture. Authentic sneakers, streetwear, and collectibles.",
  keywords: [
    "auction",
    "sneakers",
    "streetwear",
    "hype",
    "India",
    "live bidding",
    "collectibles",
  ],
  openGraph: {
    title: "HYPE — Bid. Win. Repeat.",
    description: "India's first live auction marketplace for hype culture.",
    type: "website",
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
      className={`${fontDisp.variable} ${fontBody.variable} ${fontPoster.variable}`}
    >
      <body className="bg-sand font-body text-ink antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
