import type { Metadata } from "next";
import { Geist_Mono, Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ppmondwest = localFont({
  src: "../public/fonts/ppmondwest-regular.otf",
  variable: "--font-ppmondwest",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "clouds",
  description: "A research library for life design content ideas.",
  icons: {
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    title: "clouds",
    capable: true,
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
      className={`${body.variable} ${mono.variable} ${ppmondwest.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
