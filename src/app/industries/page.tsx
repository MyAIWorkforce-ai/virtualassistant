
import IndustriesClient from "./IndustriesClient";

export async function generateMetadata() {
  return {
    title: "AI Appointment Scheduling — Smart Calendar & Productivity",
    description:
      "Automatically book, confirm and manage meetings using intelligent automation.",
    keywords:
      "AI Appointment Scheduling, Smart Calendar, Productivity Gains, Meeting Automation, Booking Assistant",
  };
}

export default function IndustriesPage() {
  return <IndustriesClient />;
}
