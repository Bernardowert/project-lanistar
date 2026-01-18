import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";


const barlow = Barlow({
  variable: '--font-barlow',
  weight: ['400', '500'],
  display: 'swap',
  style: 'normal',
})

export const metadata: Metadata = {
  title: "Project Lanistar",
  description: "Lanistar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
