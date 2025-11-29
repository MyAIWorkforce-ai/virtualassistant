import MainIndustry from "./industriesClient";
import Script from "next/script";

export async function generateMetadata() {
  return {
    title: "AI Receptionist for Clinics, Tradies & Service Professionals Australia | Virtualassistant.com.au",
    description:
      "Trusted by Australian physios, psychologists, beauty clinics, tradies and service professionals—our AI receptionist boosts bookings, answers every call and automates admin so businesses run smoother 24/7.",
    keywords:
      "ai receptionist industries australia, ai receptionist for healthcare, ai for physiotherapists australia, ai receptionist for psychologists, trades business automation, virtual receptionist clinics australia, ai receptionist melbourne, ai receptionist sydney, ai receptionist brisbane, ai receptionist perth, ai receptionist adelaide, ai receptionist canberra, ai receptionist hobart, ai receptionist darwin",
  };
}

export default function IndustriesPage() {
  const industriesSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.virtualassistant.com.au/industries#webpage",
    "url": "https://www.virtualassistant.com.au/industries",
    "name": "AI Receptionist for Service Industries Australia | Trades, Wellness, Professional & Hospitality",
    "description": "AI virtual receptionist for Australian trades, wellness, professional services, hospitality, beauty, fitness, childcare and other service-based industries.",
    "inLanguage": "en-AU",
    "isPartOf": {
      "@id": "https://www.virtualassistant.com.au#website"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "Service", "name": "AI receptionist for trades" },
        { "@type": "Service", "name": "AI receptionist for wellness & allied health" },
        { "@type": "Service", "name": "AI receptionist for professional services" },
        { "@type": "Service", "name": "AI receptionist for hospitality & venues" },
        { "@type": "Service", "name": "AI receptionist for beauty & personal care" },
        { "@type": "Service", "name": "AI receptionist for sports, fitness & gyms" },
        { "@type": "Service", "name": "AI receptionist for childcare & education" }
      ]
    }
  };

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <Script id="industries-schema" type="application/ld+json">
        {JSON.stringify(industriesSchema)}
      </Script>

      {/* Main Industries Component */}
      <MainIndustry />
    </>
  );
}
