import AdvancedDashboard from "./advancedDashboard"

export async function generateMetadata() {
  return {
    title: "AI Dashboard Australia | Manage Calls, Bookings, Analytics & Client Data | Virtualassistant.com.au",
    description:
      "Access call logs, booking management, client analytics and business insights inside a powerful AI dashboard designed for Australian service businesses.",
    keywords:
      "ai dashboard australia, call analytics australia, booking management dashboard, ai receptionist melbourne, ai receptionist sydney, ai receptionist brisbane, ai receptionist perth, ai receptionist adelaide, ai receptionist canberra, ai receptionist hobart, ai receptionist darwin",
  };
}


export default function OnlineIntegration() {
  const dashboardSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.virtualassistant.com.au/advanced-dashboard#service",
    "url": "https://www.virtualassistant.com.au/advanced-dashboard",
    "name": "AI Dashboard Australia | Manage Calls, Jobs, Analytics & Client Activity",
    "description": "Advanced AI dashboard to manage call logs, job bookings, analytics and client activity for Australian service businesses.",
    "provider": { "@type": "Organization", "name": "VirtualAssistant.com.au" },
    "areaServed": "Australia",
    "serviceType": ["Call tracking and analytics","Booking management analytics","Client activity insights"]
  };
  
    return (<>
    
     <script
        id="advanced-dashboard-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dashboardSchema) }}
      />
    
    
    <AdvancedDashboard/>
    </>); 
  }
