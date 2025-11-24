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
  return <ASClient/>}