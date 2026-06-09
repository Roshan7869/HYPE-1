import { Hanken_Grotesk, Anton } from 'next/font/google';

// Primary heading font - bold, modern, luxury feel
export const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken-grotesk',
  weight: ['400', '500', '600', '700', '800'],
});

// Display font - cinematic impact for hero sections
export const anton = Anton({
  subsets: ['latin'],
  variable: '--font-anton',
  weight: ['400'],
});
