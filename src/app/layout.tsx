import type { Metadata } from "next";
import { Amiri, Tajawal, Aref_Ruqaa } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const arefRuqaa = Aref_Ruqaa({
  variable: "--font-aref",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
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
        className={`${amiri.variable} ${tajawal.variable} ${arefRuqaa.variable} antialiased bg-cream text-foreground`}
        style={{ fontFamily: 'var(--font-tajawal), "Segoe UI", Tahoma, Arial, sans-serif' }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
