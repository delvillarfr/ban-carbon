import type { Metadata } from "next";
import "./globals.css";
import { atkinson } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: "Retire CO2 Permits",
  description: "Retire CO2 Permits from the Regional Greenhouse Gas Initiative.",
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