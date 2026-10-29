import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontVariables } from "./fonts";

export const metadata: Metadata = {
  title: "A.R. ASCENDANCY — Executive Coaching, Strategic Advisory, Consulting & Mentoring | Berlin",
  description:
    "Konzept 02 — Executive Coaching, Consulting, Mentoring und Strategic Advisory für Führungskräfte, Unternehmer:innen und Teams. Berlin.",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  icons: { icon: "/logo/monogram.svg" },
};

export const viewport: Viewport = {
  themeColor: "#202020",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
