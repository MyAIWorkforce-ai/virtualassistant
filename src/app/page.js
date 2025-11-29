import HomeClient from "./HomeClient";
import Script from "next/script";

export async function generateMetadata() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VirtualAssistant.com.au",
    "url": "https://virtualassistant.com.au",
    "logo": "https://virtualassistant.com.au/images/logo.png",
    "sameAs": [
      "https://www.facebook.com/VirtualAssistantAU",
      "https://www.linkedin.com/company/virtualassistant-au",
      "https://twitter.com/VirtualAssistantAU"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+61-400-000-000",
        "contactType": "customer service",
        "areaServed": "AU",
        "availableLanguage": ["English"]
      }
    ],
    "description": "Never miss a call or booking again. VirtualAssistant.com.au delivers Australia’s most advanced AI virtual receptionist—answering calls instantly, securing appointments, managing client messages and driving new revenue for service businesses nationwide."
  };

  return {
    title: "Best AI Virtual Receptionist Australia | 24/7 Call Answering, Booking & Automation",
    description: "Never miss a call or booking again. VirtualAssistant.com.au delivers Australia’s most advanced AI virtual receptionist—answering calls instantly, securing appointments, managing client messages and driving new revenue for service businesses nationwide.",
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
      "ai receptionist darwin"
    ],
    openGraph: {
      title: "Best AI Virtual Receptionist Australia | 24/7 Call Answering, Booking & Automation",
      description: "Never miss a call or booking again. VirtualAssistant.com.au delivers Australia’s most advanced AI virtual receptionist—answering calls instantly, securing appointments, managing client messages and driving new revenue for service businesses nationwide.",
      url: "https://virtualassistant.com.au",
      images: [
        {
          url: "/images/card.png",
          width: 1200,
          height: 630,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Best AI Virtual Receptionist Australia | 24/7 Call Answering, Booking & Automation",
      description: "Never miss a call or booking again. VirtualAssistant.com.au delivers Australia’s most advanced AI virtual receptionist—answering calls instantly, securing appointments, managing client messages and driving new revenue for service businesses nationwide.",
      images: ["/images/card.png"],
    },
    other: [
      {
        type: "application/ld+json",
        content: JSON.stringify(schema),
      }
    ],
  };
}

export default function Home() {
  return (
    <>     <HomeClient />  
    </>
  );
}
