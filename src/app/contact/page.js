import MainContact from "./MainContact";





export async function generateMetadata() {
  return {
    title: "Contact Us | Book a Demo of Our AI Virtual Receptionist – VirtualAssistant.com.au",
    description:
      "Get in touch with our Australian support team, request a demo or ask questions about using our 24/7 AI receptionist for your clinic, trade business or service-based practice.",
    keywords:
      "contact ai receptionist australia, ai demo australia, ai receptionist support, virtualassistant contact, ai receptionist melbourne, ai receptionist sydney, ai receptionist brisbane, ai receptionist perth, ai receptionist adelaide, ai receptionist canberra, ai receptionist hobart, ai receptionist darwin",
  };
}


export default function ContactPage() {
    const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://www.virtualassistant.com.au/contact#webpage",
    "url": "https://www.virtualassistant.com.au/contact",
    "name": "Contact Us | Book a Demo of Our AI Virtual Receptionist – VirtualAssistant.com.au",
    "description": "Contact VirtualAssistant.com.au to request a demo, ask questions or get support for your AI receptionist.",
    "inLanguage": "en-AU",
    "isPartOf": { "@id": "https://www.virtualassistant.com.au#website" },
    "mainEntity": { "@type": "Organization", "name": "VirtualAssistant.com.au" }
  };
 
  return (
    <>
      <script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <MainContact />
    </>
  );
}
