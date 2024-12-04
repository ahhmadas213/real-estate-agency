import type { Metadata } from "next";
// import { Cairo } from "next/font/google"
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from 'next/font/local'

// Font files can be colocated inside of `app`
const cairo = localFont({
  src: './fonts/Cairo-Font.ttf',
  display: 'swap',
})


export const metadata: Metadata = {
  title: "AL-Rawia",
  description: "Saudian Real Estate Agency",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
