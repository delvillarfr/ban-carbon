import type { Metadata } from "next";
import "./globals.css";
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: "Ban carbon emissions",
  description: "Burn the legal permits that polluters need to emit CO2. Take direct action against climate change by destroying carbon emission allowances from the Regional Greenhouse Gas Initiative.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <link rel="shortcut icon" href="/favicon-dark.svg" type="image/x-icon"/>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}