import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";



const barlow = Barlow({
  variable: '--font-barlow',
  weight: ['300','400', '500', '600'],
  display: 'swap',
  style: 'normal',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Project Lanistar",
  description: "Lanistar",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang='en'>
      <body
        className={`${barlow.variable} antialiased`}
      >
         <Header/>
          {children}
          <Footer/>
      </body>
    </html>
  );
}
