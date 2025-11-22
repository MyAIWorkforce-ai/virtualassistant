import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, countryCode, assistantTeam, industry, message } = body;


    const industryValue = assistantTeam || industry;

   
    if (!fullName || !email || !phone || !industryValue || !message) {
      return NextResponse.json(
        { success: false, message: "All required fields must be filled" },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL,
        to: process.env.RESEND_TO_EMAIL,
        subject: `VirtualAssistant.com.au`,
        text: `
Name: ${fullName}
Email: ${email}
Phone: ${countryCode} ${phone}
Industry: ${industryValue}
Message: ${message}

New inquiry from VirtualAssistant.com.au
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.log("Resend Error:", errorText);
      throw new Error("Failed to send email");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Server Error:", err);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
