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
 const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.virtualassistant.com.au/#home",
    "url": "https://www.virtualassistant.com.au/",
    "name": "Best AI Virtual Receptionist Australia | 24/7 Call Answering & Job Booking Automation",
    "description": "VirtualAssistant.com.au provides Australia’s leading AI virtual receptionist for service industries, trades, wellness, hospitality and professional services.",
    "inLanguage": "en-AU",
    "isPartOf": { "@id": "https://www.virtualassistant.com.au#website" },
    "about": [
      { "@type": "Thing", "name": "AI virtual receptionist Australia" },
      { "@type": "Thing", "name": "24/7 call answering" },
      { "@type": "Thing", "name": "booking automation for service businesses" }
    ],
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://www.virtualassistant.com.au/wp-content/uploads/hero-image.jpg"
    }
  };

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.virtualassistant.com.au/pricing#webpage",
    "url": "https://www.virtualassistant.com.au/pricing",
    "name": "AI Receptionist Pricing Australia | Affordable 24/7 Automation for Service Businesses",
    "description": "Transparent AI receptionist pricing for Australian service businesses with unlimited calls, bookings and automation.",
    "inLanguage": "en-AU",
    "isPartOf": { "@id": "https://www.virtualassistant.com.au#website" },
    "mainEntity": {
      "@type": "OfferCatalog",
      "name": "AI Receptionist Plans",
      "itemListElement": [
        { "@type": "Offer", "name": "Starter AI Receptionist Plan", "category": "Service", "areaServed": "Australia" },
        { "@type": "Offer", "name": "Growth AI Receptionist Plan", "category": "Service", "areaServed": "Australia" },
        { "@type": "Offer", "name": "Scale AI Receptionist Plan", "category": "Service", "areaServed": "Australia" }
      ]
    }
  };

  
  return (
    <>    
    
     <script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />

       <script
        id="pricing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
    
    
    <HomeClient />  
    </>
  );
}
