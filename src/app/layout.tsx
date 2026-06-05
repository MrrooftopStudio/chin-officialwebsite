import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Monument Grotesk — primary sans (foam's UI typeface)
const monument = localFont({
  variable: "--font-mg",
  src: [
    { path: "../fonts/MonumentGrotesk-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/MonumentGrotesk-Italic.woff2", weight: "400", style: "italic" },
  ],
  fallback: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
});

// Kormelink — editorial serif (welcome prose, italic exhibition titles)
const kormelink = localFont({
  variable: "--font-kormelink",
  src: [
    { path: "../fonts/Kormelink-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Kormelink-Italic.woff2", weight: "400", style: "italic" },
  ],
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const monumentMono = localFont({
  variable: "--font-mg-mono",
  src: [{ path: "../fonts/MonumentGrotesk-Mono.woff2", weight: "400", style: "normal" }],
  fallback: ["ui-monospace", "monospace"],
});

const purpleHaze = localFont({
  variable: "--font-purple-haze",
  src: [{ path: "../fonts/purple-haze.woff2", weight: "100 700", style: "normal" }],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Rooffilm",
  description:
    "Rooffilm（頂樓影視）— a film and image production studio. Selected commercial, portrait and art-direction works.",
  icons: {
    icon: [
      { url: "/seo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/seo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/seo/apple-touch-icon.png",
  },
  openGraph: {
    title: "Rooffilm",
    type: "website",
    images: ["/images/foam/overview_asset_2.jpg"],
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
      className={`${monument.variable} ${kormelink.variable} ${monumentMono.variable} ${purpleHaze.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
