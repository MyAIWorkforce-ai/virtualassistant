import OIClient from "./OIClient";

export async function generateMetadata() {
  return {
    title: "AI Integrations Australia | Connect Calendars, Websites, CRMs and Booking Systems",
    description:
      "Connect your booking platform, calendar, CRM, website and business tools to our AI receptionist for seamless automation across your service business.",
    keywords:
      "ai software integrations australia, connect booking systems, crm ai integration, ai receptionist melbourne, ai receptionist sydney, ai receptionist brisbane, ai receptionist perth, ai receptionist adelaide, ai receptionist canberra, ai receptionist hobart, ai receptionist darwin",
  };
}

export default function OnlineIntegration() {
  const integrationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.virtualassistant.com.au/online-integration#service",
    "url": "https://www.virtualassistant.com.au/online-integration",
    "name": "AI Integrations Australia | Connect Calendar, CRM, Website & Booking Tools",
    "description": "Integration services that connect booking platforms, CRMs, calendars and websites to the AI receptionist for full automation.",
    "provider": { "@type": "Organization", "name": "VirtualAssistant.com.au" },
    "areaServed": "Australia",
    "serviceType": ["Calendar integration","CRM integration","Booking system integration","Website automation"]
  };
  
  return (<>
  
        <script
        id="online-integration-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(integrationSchema) }}
      />
  
  
  
  <OIClient/>
  </>);}
