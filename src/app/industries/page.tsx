
import MainIndustry from "./industriesClient";

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
  return <MainIndustry />;
}