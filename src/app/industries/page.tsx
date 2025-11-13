
import MainIndustry from "./industriesClient";

export async function generateMetadata() {
  return {
    title: "Industries we serve | Virtualassistant.com.au",
    description:
      "Automatically book, confirm and manage meetings using intelligent automation.",
    keywords:
      "AI Appointment Scheduling, Smart Calendar, Productivity Gains, Meeting Automation, Booking Assistant",
  };
}

export default function IndustriesPage() {
  return <MainIndustry />;
}