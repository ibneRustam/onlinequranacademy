import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, country } = await req.json();

    if (!name || !email || !phone || !message || !country) {
      return NextResponse.json(
        { success: false, message: "تمام فیلڈز ضروری ہیں" },
        { status: 400 }
      );
    }

    // ✉️ Gmail SMTP Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🌟 Beautiful HTML Email Template
    const html = `
      <div style="
        background-color:#f9fafb;
        padding:20px;
        font-family:Arial, sans-serif;
        color:#333;
        border-radius:10px;
        border:1px solid #ddd;
        max-width:600px;
        margin:auto;
      ">
        <h2 style="text-align:center; color:#0c4a6e;">📩 New Contact Form Submission</h2>
        <table style="width:100%; border-collapse:collapse; margin-top:10px;">
          <tr>
            <td style="padding:8px; font-weight:bold; width:30%;">Name:</td>
            <td style="padding:8px; background:#fff;">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px; font-weight:bold;">Email:</td>
            <td style="padding:8px; background:#fff;">${email}</td>
          </tr>
          <tr>
            <td style="padding:8px; font-weight:bold;">Phone:</td>
            <td style="padding:8px; background:#fff;">${phone}</td>
          </tr>
          <tr>
            <td style="padding:8px; font-weight:bold;">Country:</td>
            <td style="padding:8px; background:#fff;">${country}</td>
          </tr>
          <tr>
            <td style="padding:8px; font-weight:bold; vertical-align:top;">Message:</td>
            <td style="padding:8px; background:#fff; white-space:pre-wrap;">${message}</td>
          </tr>
        </table>
        <p style="text-align:center; color:#555; margin-top:20px; font-size:13px;">
          ✨ Sent automatically from your website contact form
        </p>
      </div>
    `;

    // 📬 Send Email
    await transporter.sendMail({
      from: `"Academy Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📧 New Message from ${name} (${country})`,
      html,
    });

    return NextResponse.json({
      success: true,
      message: "✅ Email sent successfully!",
    });
  } catch (err) {
    console.error("❌ Error sending email:", err);
    return NextResponse.json(
      { success: false, message: "❌ Failed to send email" },
      { status: 500 }
    );
  }
}
