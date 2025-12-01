import ASClient from "./ASClient"

export async function generateMetadata() {
  return {
    title: "AI Appointment Scheduling Australia | Automate Bookings, Reminders & Cancellations",
    description:
      "Let AI handle your entire scheduling workflow—new bookings, reschedules, cancellations and reminders—all fully automated for Australian clinics and service businesses.",
    keywords:
      "ai appointment scheduling australia, automated booking software, clinic scheduling ai, ai receptionist melbourne, ai receptionist sydney, ai receptionist brisbane, ai receptionist perth, ai receptionist adelaide, ai receptionist canberra, ai receptionist hobart, ai receptionist darwin",
  };
}

export default function AppointmentScheduling() {
const appointmentSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.virtualassistant.com.au/ai-appointment-scheduling#service",
    "url": "https://www.virtualassistant.com.au/ai-appointment-scheduling",
    "name": "AI Appointment & Job Scheduling Australia | Automated Bookings 24/7",
    "description": "AI-powered appointment and job scheduling for Australian service businesses, including bookings, reschedules, cancellations and reminders.",
    "provider": { "@type": "Organization", "name": "VirtualAssistant.com.au" },
    "areaServed": "Australia",
    "serviceType": ["AI appointment scheduling","AI job scheduling","Automated booking reminders"]
  };

  
  return (

<>
  <script
        id="ai-appointment-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appointmentSchema) }}
      />


    <ASClient/></>
  );}
