import localFont from "next/font/local";

export const geist = localFont({
  src: "../public/fonts/Geist.ttf",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

export const jakarta = localFont({
  src: "../public/fonts/PlusJakartaSans.ttf",
  variable: "--font-jakarta",
  weight: "200 800",
  display: "swap",
});

export const fontVariables = `${geist.variable} ${jakarta.variable}`;
