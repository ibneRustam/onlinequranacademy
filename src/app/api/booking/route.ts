import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const {
      firstName,
      lastName,
      email,
      dob,
      studentGender,
      countryCode,
      contact,
      country,
      city,
      course,
      customTopic,
      bookingDate,
      localTime,
      pakistanTime,
      teacherGender,
      message,
    } = data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const html = `
      <div style="
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        max-width:650px;
        margin:auto;
        background-color:#f9fafb;
        padding:25px;
        border-radius:12px;
        border:1px solid #ddd;
        color:#222;
      ">
        <h1 style="text-align:center; color:#1d4ed8; margin-bottom:15px;">🚀 New Booking Request!</h1>
        <p style="text-align:center; color:#555; font-size:15px; margin-bottom:25px;">
          A <strong>NEW TRIAL BOOKING</strong> has been submitted via your website form.
        </p>

        <table style="width:100%; border-collapse:collapse; background:#fff; border-radius:8px; overflow:hidden;">
          <tr style="background:#e0f2fe;">
            <td style="padding:12px; font-weight:bold; width:35%;">Name</td>
            <td style="padding:12px;">${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td style="padding:12px; font-weight:bold;">Email</td>
            <td style="padding:12px;">${email}</td>
          </tr>
          <tr style="background:#f0f9ff;">
            <td style="padding:12px; font-weight:bold;">Date of Birth</td>
            <td style="padding:12px;">${dob}</td>
          </tr>
          <tr>
            <td style="padding:12px; font-weight:bold;">Gender</td>
            <td style="padding:12px;">${studentGender}</td>
          </tr>
          <tr style="background:#f0f9ff;">
            <td style="padding:12px; font-weight:bold;">Contact</td>
            <td style="padding:12px;">${countryCode} ${contact}</td>
          </tr>
          <tr>
            <td style="padding:12px; font-weight:bold;">Country / City</td>
            <td style="padding:12px;">${country} / ${city}</td>
          </tr>
          <tr style="background:#f0f9ff;">
            <td style="padding:12px; font-weight:bold;">Course</td>
            <td style="padding:12px;">${course} ${customTopic ? `(${customTopic})` : ""}</td>
          </tr>
          <tr>
            <td style="padding:12px; font-weight:bold;">Booking Date & Time</td>
            <td style="padding:12px;">${bookingDate} ${localTime} (${country})</td>
          </tr>
          <tr style="background:#f0f9ff;">
            <td style="padding:12px; font-weight:bold;">Pakistan Time</td>
            <td style="padding:12px;">${pakistanTime}</td>
          </tr>
          <tr>
            <td style="padding:12px; font-weight:bold;">Preferred Teacher Gender</td>
            <td style="padding:12px;">${teacherGender}</td>
          </tr>
          <tr style="background:#f0f9ff;">
            <td style="padding:12px; font-weight:bold; vertical-align:top;">Message</td>
            <td style="padding:12px; white-space:pre-wrap;">${message || "N/A"}</td>
          </tr>
        </table>

        <p style="text-align:center; color:#555; margin-top:20px; font-size:13px;">
          ⚡ This is an automated notification from your website. Please respond promptly!
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Academy Booking" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `🚀 New Trial Booking from ${firstName} ${lastName}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: (err as Error).message });
  }
}
