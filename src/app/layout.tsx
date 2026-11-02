import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rankmoor — Makes You The Brand | Amazon & TikTok Shop Growth Agency",
  description:
    "Rankmoor is an elite e-commerce growth house engineering category dominance for Amazon sellers and TikTok Shop pioneers. Listing SEO, A+ Creative Content, PPC & DSP Management, and Global Sourcing.",
  keywords: [
    "Amazon Agency",
    "TikTok Shop Agency",
    "Amazon Listing Optimization",
    "Amazon A+ Content",
    "Amazon PPC Management",
    "TikTok Shop Creator Network",
    "Amazon DSP",
    "E-Commerce Growth",
    "Mian Hassan",
    "Rankmoor"
  ],
  authors: [{ name: "Mian Hassan", url: "https://rankmoor.com" }],
  creator: "Rankmoor",
  openGraph: {
    title: "Rankmoor — Makes You The Brand | E-Commerce Growth Agency",
    description:
      "Engineering category dominance for high-growth Amazon sellers and TikTok Shop pioneers. $20M+ verified marketplace sales.",
    url: "https://rankmoor.com",
    siteName: "Rankmoor",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rankmoor — Makes You The Brand",
    description: "Scale your Amazon & TikTok Shop brand with elite SEO, A+ Creatives, and PPC science.",
  },
  icons: {
    icon: "/assets/logo/rankmoor-symbol.png",
    apple: "/assets/logo/rankmoor-symbol.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FAFAFC] text-slate-900 flex flex-col antialiased selection:bg-[#FF6B00] selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
