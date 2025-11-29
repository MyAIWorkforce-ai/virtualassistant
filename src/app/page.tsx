import HomeClient from "./HomeClient";

export async function generateMetadata() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VirtualAssistant.com.au",
    url: "https://virtualassistant.com.au",
    logo: "https://virtualassistant.com.au/images/logo.png",
    sameAs: [
      "https://www.facebook.com/VirtualAssistantAU",
      "https://www.linkedin.com/company/virtualassistant-au",
      "https://twitter.com/VirtualAssistantAU",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+61-400-000-000",
        contactType: "customer service",
        areaServed: "AU",
        availableLanguage: ["English"],
      },
    ],
    description:
      "Never miss a call or booking again. VirtualAssistant.com.au delivers Australia’s most advanced AI virtual receptionist—answering calls instantly, securing appointments, managing client messages and driving new revenue for service businesses nationwide.",
  };

  return {
    title: "Best AI Virtual Receptionist Australia | 24/7 Call Answering, Booking & Automation",
    description: schema.description,
    keywords: [
      "best ai virtual receptionist australia",
      "top virtual receptionist service",
      "24/7 ai call answering australia",
      "ai receptionist for small business",
      "booking automation australia",
    ],
    other: [
      {
        type: "application/ld+json",
        content: JSON.stringify(schema),
      },
    ],
  };
}

export default function HomePage() {
  return <HomeClient />;
}
