
import PrivacyPolicy from "./privacyPolicyClient";

export async function generateMetadata() {
  return {
    title: "Privacy Policy — Smart Calendar & Productivity",
    description:
      "Automatically book, confirm and manage meetings using intelligent automation.",
    keywords:
      "AI Appointment Scheduling, Smart Calendar, Productivity Gains, Meeting Automation, Booking Assistant",
  };
}

export default function IndustriesPage() {
  return <PrivacyPolicy/>;
}
