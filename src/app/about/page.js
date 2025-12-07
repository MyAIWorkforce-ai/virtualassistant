import MainAbout from "./MainAbout";



export async function generateMetadata() {
  return {
    title: "About Our AI Virtual Receptionist | Australian-Owned for Service Businesses – VirtualAssistant.com.au",
    description:
      " VirtualAssistant.com.au is an Australian-owned AI receptionist platform built to help local service businesses reduce missed calls, grow bookings and automate admin with cutting-edge AI.",
    keywords:
      "about ai receptionist australia, australian ai receptionist company, virtualassistant.com.au, australian owned ai platform, ai receptionist melbourne, ai receptionist sydney, ai receptionist brisbane, ai receptionist perth, ai receptionist adelaide, ai receptionist canberra, ai receptionist hobart, ai receptionist darwin",
  };
}

export default function HomePage() {
   const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://www.virtualassistant.com.au/about#webpage",
    "url": "https://www.virtualassistant.com.au/about",
    "name": "About Our AI Virtual Receptionist | Australian-Owned for Service Businesses – VirtualAssistant.com.au",
    "description": "Learn about VirtualAssistant.com.au, an Australian-owned AI platform helping service industries automate calls, bookings and client communication.",
    "inLanguage": "en-AU",
    "isPartOf": { "@id": "https://www.virtualassistant.com.au#website" }
  };

  return  (
    <>

      <script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      /> 
        
  <MainAbout/>
        </>);

}
    
