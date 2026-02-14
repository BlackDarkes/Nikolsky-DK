import type { Metadata } from "next";
import { Inria_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";

const inriaSerif = Inria_Serif({
  variable: "--font-inria-serif",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Никольский ДК",
  description: "Сайт Никольский ДК",
  keywords: "Nikolsky DK, Никольский ДК",
  authors: [{ name: "Daniil Gordeev", url: "https://github.com/BlackDarkes" }],
  icons: {
    icon: "/favicon.png",
  },  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inriaSerif.variable} ${instrumentSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
