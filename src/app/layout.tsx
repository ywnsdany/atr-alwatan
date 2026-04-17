import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "عطر الوطن | سافر عبر الرائحة",
  description: "عطور مستوحاة من مناطق المملكة العربية السعودية - سافر عبر الرائحة داخل وطنك",
  keywords: ["عطور", "السعودية", "عطر الوطن", "عطور سعودية", "تراث"],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "عطر الوطن | سافر عبر الرائحة",
    description: "عطور مستوحاة من مناطق المملكة العربية السعودية",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} antialiased bg-cream text-foreground`}
        style={{ fontFamily: 'var(--font-geist-sans), "Segoe UI", Tahoma, Arial, sans-serif' }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
