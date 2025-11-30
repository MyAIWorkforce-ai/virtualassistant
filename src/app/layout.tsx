// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
// import ScrollReset from "@/app/utils/scroll-reset";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Best AI Virtual Receptionist Australia | 24/7 Call Answering, Booking & Automation",
  description:
    "Never miss a call or booking again. VirtualAssistant.com.au delivers Australia’s most advanced AI virtual receptionist—answering calls instantly, securing appointments, managing client messages and driving new revenue for service businesses nationwide.",
  keywords:
    "best ai virtual receptionist australia, top virtual receptionist service, 24/7 ai call answering australia, ai receptionist for small business, booking automation australia, ai receptionist melbourne, ai receptionist sydney, ai receptionist brisbane, ai receptionist perth, ai receptionist adelaide, ai receptionist canberra, ai receptionist hobart, ai receptionist darwin",

  openGraph: {
    title: "Best AI Virtual Receptionist Australia | 24/7 Call Answering, Booking & Automation",
    description:
      "Never miss a call or booking again. VirtualAssistant.com.au delivers Australia’s most advanced AI virtual receptionist—answering calls instantly, securing appointments, managing client messages and driving new revenue for service businesses nationwide.",
    url: "https://www.virtualassistant.com.au",
    siteName: "VirtualAssistant.com.au",
    type: "website",
    images: [
      {
        url: "/image/logo1.png", 
      width: {1200},
        height: {630},
        alt: "AI Virtual Receptionist Preview",
      },
    ],},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager (head) - injected safely for TSX */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WDM9BTM7');`,
          }}
        />

        {/* Microsoft Clarity (head) */}
        <Script
          id="ms-clarity-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "ublhev30pz");`,
          }}
        />

                {/* GLOBAL SCHEMA: Organization + Website */}
        <Script
          id="global-organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VirtualAssistant.com.au",
              url: "https://virtualassistant.com.au/",
              logo: "https://virtualassistant.com.au/logo.png",
              sameAs: [
                "https://www.facebook.com/",
                "https://www.instagram.com/",
                "https://www.linkedin.com/",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "support@virtualassistant.com.au",
                availableLanguage: ["English"],
              },
            }),
          }}
        />

        <Script
          id="global-website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "VirtualAssistant.com.au",
              url: "https://virtualassistant.com.au/",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://virtualassistant.com.au/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* GTM noscript MUST be the first element in the body for no-JS fallback */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WDM9BTM7" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
