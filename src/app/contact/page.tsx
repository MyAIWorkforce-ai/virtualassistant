import ContactPage from "./contactClient";

export async function generateMetadata() {
  return {
    title: "contactPage — Smart Calendar & Productivity",
    description:
      "Automatically book, confirm and manage meetings using intelligent automation.",
    keywords:
      "AI Appointment Scheduling, Smart Calendar, Productivity Gains, Meeting Automation, Booking Assistant",
  };
}

export default function IndustriesPage() {
  return <ContactPage />;
}