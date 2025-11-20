import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, countryCode, industry, message } = body;

    if (!fullName || !email || !phone || !industry || !message) {
      return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
body: JSON.stringify({
  from: `${fullName} <${email}>`,  
  to: "anamaziz11066@gmail.com",  
  subject: `New Contact Form Submission from ${fullName}`,
  text: `
Name: ${fullName}
Email: ${email}
Phone: ${countryCode} ${phone}
Industry: ${industry}
Message: ${message}
  `,
})
    });

    if (!response.ok) throw new Error("Failed to send email");

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
