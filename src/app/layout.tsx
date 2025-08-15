import type { Metadata } from "next";
import "./globals.css";
import { atkinson } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: "Ultra Civic: Buy + Retire Pollution Rights",
  description: `Ultra Civic lets you buy and retire polluters' legal rights to
    emit carbon dioxide.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${atkinson.className}`}>{children}</body>
    </html>
  );
}