import { Hanken_Grotesk, Anton } from "next/font/google";

export const fontDisp = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-disp",
  display: "swap",
});

export const fontBody = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-body",
  display: "swap",
});

export const fontPoster = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poster",
  display: "swap",
});
