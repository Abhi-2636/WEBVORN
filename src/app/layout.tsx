import type { Metadata } from "next";
import { Inter, Space_Mono, Syne } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { FAQS, CONTACT_INFO } from "@/lib/constants";

const SITE_URL = "https://shreeshyamliving-333e8.web.app";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Shree Shyam Living | Premium Student Accommodation Near LPU",
  description:
    "Shree Shyam Living offers premium student accommodation near LPU with fully furnished rooms, high-speed Wi-Fi, meals, laundry, 24/7 security, and modern amenities.",
  keywords: [
    "room near lpu",
    "rooms near lpu",
    "best room near lpu",
    "PG near LPU",
    "shree shyam living",
    "SS LIVING",
    "student housing",
    "paying guest",
    "LPU accommodation",
    "furnished rooms",
    "Phagwara PG",
    "hostel near lovely professional university",
  ],
  authors: [{ name: "Shree Shyam Living" }],
  openGraph: {
    title: "Shree Shyam Living | Premium Student Accommodation Near LPU",
    description:
      "Shree Shyam Living offers premium student accommodation near LPU with fully furnished rooms, high-speed Wi-Fi, meals, laundry, 24/7 security, and modern amenities.",
    url: SITE_URL,
    siteName: "Shree Shyam Living",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shree Shyam Living | Premium Student Accommodation Near LPU",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Shyam Living | Premium Student Accommodation Near LPU",
    description:
      "Shree Shyam Living offers premium student accommodation near LPU with fully furnished rooms, high-speed Wi-Fi, meals, laundry, 24/7 security, and modern amenities.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shree Shyam Living",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "sameAs": [
      "https://www.instagram.com/shree_shyam_living?igsh=bmEwZ2F3OHkyZ3pj&utm_source=qr",
      "https://www.facebook.com/people/Shree-Shyam-Living/61560784594052/",
      "https://wa.me/919142272776"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-91422-72776",
      "contactType": "customer service",
      "email": "ssliving.official@gmail.com"
    }
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Shree Shyam Living",
    "url": SITE_URL
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <html lang="en" data-theme="dark" className={`${syne.variable} ${inter.variable} ${spaceMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (sessionStorage.getItem('ssliving-loaded') === 'true') {
                  document.documentElement.classList.add('loading-done');
                }
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
