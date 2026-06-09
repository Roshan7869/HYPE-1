import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import { hankenGrotesk, anton } from "@/lib/fonts";
import { LenisProvider } from "@/components/providers/lenis-provider";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HYPE - Luxury Auction Marketplace",
  description: "Premium auctions for exclusive collections. Discover, bid, and own extraordinary pieces on the world's most prestigious auction platform.",
  keywords: ["auctions", "luxury", "bidding", "marketplace", "collections"],
  openGraph: {
    title: "HYPE - Luxury Auction Marketplace",
    description: "Premium auctions for exclusive collections",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0f0806",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${anton.variable} ${geistMono.variable} h-full antialiased bg-background`}
    >
      <body className="min-h-screen flex flex-col">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
