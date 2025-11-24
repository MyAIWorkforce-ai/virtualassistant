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
    return <AdvancedDashboard/>
  }