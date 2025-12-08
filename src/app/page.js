
import Script from "next/script";
import HomeClient from "./HomeClient";

export async function generateMetadata() {
  return {
    title:
      "AI Virtual Receptionist Australia | 24/7 Call Answering & Booking – VirtualAssistant.com.au",
    description:
      "Never miss a call or booking again. VirtualAssistant.com.au delivers Australia’s most advanced AI virtual receptionist—answering calls instantly, securing appointments, managing client messages and driving new revenue for service businesses nationwide.",
    keywords: [
      "best ai virtual receptionist australia",
      "top virtual receptionist service",
      "24/7 ai call answering australia",
      "ai receptionist for small business",
      "booking automation australia",
      "ai receptionist melbourne",
      "ai receptionist sydney",
      "ai receptionist brisbane",
      "ai receptionist perth",
      "ai receptionist adelaide",
      "ai receptionist canberra",
      "ai receptionist hobart",
      "ai receptionist darwin",
    ],
    openGraph: {
      title:
        "Best AI Virtual Receptionist Australia | 24/7 Call Answering, Booking & Automation",
      description:
        "Never miss a call or booking again. VirtualAssistant.com.au delivers Australia’s most advanced AI virtual receptionist—answering calls instantly, securing appointments, managing client messages and driving new revenue for service businesses nationwide.",
      url: "https://virtualassistant.com.au",
      images: [
        {
          url: "/images/card.png",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "AI Virtual Receptionist Australia | 24/7 Call Answering & Booking – VirtualAssistant.com.au",
      description:
        "Never miss a call or booking again. VirtualAssistant.com.au delivers Australia’s most advanced AI virtual receptionist—answering calls instantly, securing appointments, managing client messages and driving new revenue for service businesses nationwide.",
      images: ["/images/card.png"],
    },
  };
}

export default function Home() {
  return (
    <>
      {/* HOMEPAGE WEBPAGE SCHEMA */}
      <Script
        id="homepage-webpage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.virtualassistant.com.au/#home",
            url: "https://www.virtualassistant.com.au/",
            name: "AI Virtual Receptionist Australia",
            isPartOf: { "@id": "https://www.virtualassistant.com.au/#website" },
            about: { "@id": "https://www.virtualassistant.com.au/#organization" },
          }),
        }}
      />

      {/* SERVICE SCHEMA */}
      <Script
        id="homepage-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.virtualassistant.com.au/#features",
            name: "AI Virtual Receptionist & Virtual Assistant",
            provider: { "@id": "https://www.virtualassistant.com.au/#organization" },
            areaServed: { "@type": "Country", name: "Australia" },
          }),
        }}
      />

      {/* PRICING / OFFER SCHEMA */}
      <Script
        id="homepage-offer-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "@id": "https://www.virtualassistant.com.au/#pricing",
            priceCurrency: "AUD",
            price: "300-500",
            availability: "https://schema.org/InStock",
            seller: { "@id": "https://www.virtualassistant.com.au/#organization" },
            itemOffered: { "@id": "https://www.virtualassistant.com.au/#service" },
          }),
        }}
      />

      <HomeClient />
    </>
  );
}
