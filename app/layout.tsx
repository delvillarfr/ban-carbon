import type { Metadata } from "next";
import "./globals.css";
import { atkinson } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: "burn burn - Burn CO2 Permits",
  description: "Burn the legal permits that polluters need to emit CO2. Take direct action against climate change by destroying carbon emission allowances from the Regional Greenhouse Gas Initiative.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <link rel="shortcut icon" href="/icon.svg" type="image/x-icon"/>
      <body className={`${atkinson.className}`}>{children}</body>
    </html>
  );
}