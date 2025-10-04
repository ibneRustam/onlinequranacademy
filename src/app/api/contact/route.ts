// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const html = `
      <h2>📩 New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <div style="white-space: pre-wrap; border-left:2px solid #eee; padding-left:8px;">${message}</div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: "📩 New Contact Form Submission",
      html,
    });

    return NextResponse.json({ success: true, message: "✅ Email sent successfully!" });
  } catch (err) {
    console.error("❌ Error sending email:", err);
    return NextResponse.json({ success: false, message: "❌ Failed to send email" }, { status: 500 });
  }
}
