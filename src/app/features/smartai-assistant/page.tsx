import SAIAClient from "./SAIAClient";

export async function generateMetadata() {
  return {
    title: "AI Client Messaging | Automated Responses, Booking Links & Support 24/7",
    description:
      "Deliver instant AI-powered client messaging that answers questions, sends booking links, shares availability and supports customers every hour of the day.",
    keywords:
      "ai client messaging australia, automated customer support ai, ai sms responses australia, ai receptionist melbourne, ai receptionist sydney, ai receptionist brisbane, ai receptionist perth, ai receptionist adelaide, ai receptionist canberra, ai receptionist hobart, ai receptionist darwin",
  };
}


export default function SmartAIassistant() {
const smartAISchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.virtualassistant.com.au/smart-ai-assistant#service",
    "url": "https://www.virtualassistant.com.au/smart-ai-assistant",
    "name": "AI Client Messaging Australia | Automated Replies & Booking Links",
    "description": "AI client messaging assistant that sends automated replies, booking links and support messages for Australian service businesses.",
    "provider": { "@type": "Organization", "name": "VirtualAssistant.com.au" },
    "areaServed": "Australia",
    "serviceType": ["AI client messaging","Automated customer support","Booking link automation"]
  };
  
  return(<>
  
    <script
        id="smart-ai-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(smartAISchema) }}
      />
  
  
  
  <SAIAClient/>
  </>); }
