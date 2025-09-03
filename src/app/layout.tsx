import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/lib/cart-context";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0064ff',
}

export const metadata: Metadata = {
  title: "Enhanced Games Peptides | Peptides meet Simplicity",
  description: "Revolutionary peptide delivery through innovative pen-cartridge system targeting 18-45 year old athletic males. Peptides meet Simplicity.",
  keywords: "peptides, enhanced games, performance, health, wellness, pen delivery system",
  authors: [{ name: "Enhanced Games Peptides" }],
  creator: "Enhanced Games Peptides",
  publisher: "Enhanced Games Peptides",
  robots: "index, follow",
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Enhanced Games Peptides",
    title: "Enhanced Games Peptides | Peptides meet Simplicity",
    description: "Revolutionary peptide delivery through innovative pen-cartridge system",
    url: "https://enhancedgamespeptides.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Enhanced Games Peptides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enhanced Games Peptides | Peptides meet Simplicity",
    description: "Revolutionary peptide delivery through innovative pen-cartridge system",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`min-h-screen bg-white antialiased ${inter.variable} font-sans`}>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
        
        {/* Age Verification Modal - Would be conditionally rendered */}
        {/* <AgeVerificationModal /> */}
        
        {/* HIPAA Compliance Notice */}
        <div id="hipaa-notice" className="sr-only">
          This website is HIPAA compliant and your health information is protected.
        </div>
      </body>
    </html>
  );
}
