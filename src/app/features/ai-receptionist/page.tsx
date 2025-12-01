import AIReceptionistClient from "./AIReceptionistClient";

export async function generateMetadata() {
  return {
    title: "AI Receptionist Australia | Complete 24/7 Call Answering & Booking Automation",
    description:
      "Experience instant call answering, automated appointment scheduling and intelligent client messaging with Australia’s most advanced AI receptionist—built for high-demand service industries.",
    keywords:
      "ai receptionist australia, virtual receptionist australia, automated call answering, ai booking automation australia, ai receptionist melbourne, ai receptionist sydney, ai receptionist brisbane, ai receptionist perth, ai receptionist adelaide, ai receptionist canberra, ai receptionist hobart, ai receptionist darwin",
  };
}


export default function AiReceptionist() {

  const aiReceptionistSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.virtualassistant.com.au/ai-receptionist#service",
    "url": "https://www.virtualassistant.com.au/ai-receptionist",
    "name": "AI Receptionist Australia | 24/7 Call Answering & Automated Client Handling",
    "description": "AI receptionist for Australian service industries that answers calls, books jobs and manages client communication 24/7.",
    "provider": { "@type": "Organization", "name": "VirtualAssistant.com.au", "url": "https://www.virtualassistant.com.au" },
    "areaServed": ["Australia","Melbourne","Sydney","Brisbane","Perth","Adelaide","Canberra","Hobart","Darwin"],
    "serviceType": ["AI call answering","Booking automation","Client messaging automation"]
  };
  
    return (
      <>
      
         <script
        id="ai-receptionist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiReceptionistSchema) }}
      />

          <AIReceptionistClient/>
      </>);
      
      
    }
