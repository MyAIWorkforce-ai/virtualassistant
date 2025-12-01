import PSClient from "./PSClient";

export async function generateMetadata() {
  return {
    title: "AI Post‑Session Tools | Automatic Notes, Summaries & Follow-Up For Clinics",
    description:
      "Save hours every week with AI-generated clinical notes, summaries, follow-up messages and post-session workflows designed for Australian practitioners.",
    keywords:
      "ai clinical notes australia, ai follow up tools, automated clinic workflows, ai receptionist melbourne, ai receptionist sydney, ai receptionist brisbane, ai receptionist perth, ai receptionist adelaide, ai receptionist canberra, ai receptionist hobart, ai receptionist darwin",
  };
}


export default function PostSection() {
const postSessionSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.virtualassistant.com.au/post-session-tools#service",
    "url": "https://www.virtualassistant.com.au/post-session-tools",
    "name": "AI Post-Session Tools | Automatic Notes, Summaries & Follow-Ups",
    "description": "AI tools that generate post-session notes, summaries, follow-up messages and workflows for Australian service providers.",
    "provider": { "@type": "Organization", "name": "VirtualAssistant.com.au" },
    "areaServed": "Australia",
    "serviceType": ["AI notes automation","Client follow-up automation","Post-session workflow automation"]
  };
  
    return (<>
          <script
        id="post-session-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postSessionSchema) }}
      />
    
    
    <PSClient/>
    </>);}
