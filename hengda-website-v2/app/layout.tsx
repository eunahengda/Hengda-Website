import type { Metadata } from "next";
import { Work_Sans, Inter, IBM_Plex_Mono, Anton } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { LanguageProvider } from "@/lib/i18n";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
  display: "swap",
});

const heading = Work_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://www.hdhengda.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "H&D Hengda Industries Sdn Bhd | Precision Machining & Metal Fabrication in Johor Bahru",
    template: "%s | H&D Hengda Industries Sdn Bhd",
  },
  description:
    "H&D Hengda Industries Sdn Bhd provides precision conventional lathe, milling, welding, and custom metal fabrication services in Johor Bahru, Malaysia. Over 20 years serving manufacturers with engineering parts, repair, and modification work.",
  keywords: [
    "precision machining Johor Bahru",
    "metal fabrication Malaysia",
    "conventional lathe services",
    "CNC milling Johor",
    "welding fabrication Johor Bahru",
    "engineering parts manufacturing Malaysia",
    "machine repair Johor",
    "keyway milling",
    "Hengda Industries",
  ],
  authors: [{ name: "H&D Hengda Industries Sdn Bhd" }],
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: siteUrl,
    siteName: "H&D Hengda Industries Sdn Bhd",
    title:
      "H&D Hengda Industries Sdn Bhd | Precision Machining & Metal Fabrication",
    description:
      "Precision conventional lathe, milling, welding, and custom metal fabrication in Johor Bahru. Over 20 years serving Malaysian manufacturers.",
    images: ["/images/logo/hd-logo.png"],
  },
  twitter: {
    card: "summary",
    title: "H&D Hengda Industries Sdn Bhd",
    description:
      "Precision machining & metal fabrication in Johor Bahru, Malaysia.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logo/hd-logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "H&D Hengda Industries Sdn Bhd",
  image: `${siteUrl}/images/logo/hd-logo.png`,
  "@id": siteUrl,
  url: siteUrl,
  telephone: "+60167161990",
  email: "hengdarepair@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "65, Jalan Kempas 2/1, Kawasan Perindustrian Tanah Tampoi",
    addressLocality: "Johor Bahru",
    addressRegion: "Johor",
    postalCode: "81200",
    addressCountry: "MY",
  },
  areaServed: "Malaysia",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "17:30",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${anton.variable} ${heading.variable} ${inter.variable} ${mono.variable} font-body`}
      >
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </LanguageProvider>
      </body>
    </html>
  );
}
