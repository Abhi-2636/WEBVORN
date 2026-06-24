import type { Metadata } from "next";
import { Inter, Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { FAQS, CONTACT_INFO } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webvorn.com"),
  title: "Webvorn — Building Digital Experiences That Drive Growth",
  description:
    "Webvorn is a premium digital agency in India specializing in web development, UI/UX design, mobile apps, AI integration, and branding. Transform your ideas into powerful digital products.",
  keywords: [
    "digital agency India",
    "web development",
    "UI/UX design",
    "mobile app development",
    "AI integration",
    "React",
    "Next.js",
    "startup website",
    "premium web design",
    "Webvorn",
  ],
  authors: [{ name: "Webvorn" }],
  openGraph: {
    title: "Webvorn — Building Digital Experiences That Drive Growth",
    description:
      "Premium digital agency helping startups and businesses grow with world-class web development, design, and AI solutions.",
    url: "https://webvorn.com",
    siteName: "Webvorn",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 1200,
        alt: "Webvorn — Building Digital Experiences That Drive Growth",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webvorn — Building Digital Experiences That Drive Growth",
    description:
      "Premium digital agency helping startups and businesses grow with world-class web development, design, and AI solutions.",
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
    "name": "Webvorn",
    "url": "https://webvorn.com",
    "logo": "https://webvorn.com/favicon.ico",
    "sameAs": [
      CONTACT_INFO.linkedin,
      CONTACT_INFO.instagram,
      CONTACT_INFO.github
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": CONTACT_INFO.phoneRaw,
      "contactType": "customer service",
      "email": CONTACT_INFO.email
    }
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Webvorn",
    "url": "https://webvorn.com"
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
    <html lang="en" data-theme="dark" className={`${inter.variable} ${spaceGrotesk.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (sessionStorage.getItem('webvorn-loaded') === 'true') {
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
