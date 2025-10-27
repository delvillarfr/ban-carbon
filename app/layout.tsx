import type { Metadata } from "next";
import "./globals.css";
import { inter } from '@/app/ui/fonts';
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Ban carbon emissions",
  description: "Burn the permits polluters need to emit CO2.",
  icons: {
    icon: "/favicon-dark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
