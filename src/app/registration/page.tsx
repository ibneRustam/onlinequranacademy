"use client";

import { useState } from "react";
import countries from "@/app/data/countries";  

export default function BookTrialForm() {
  const [pakistanTime, setPakistanTime] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    course: "",
    subject: "",
    country: "",
    preferredTime: "",
    dob: "",
    gender: "",
    message: "",
  });

  const courses = [
    "Noorani Qaida",
    "Nazira with Tajweed",
    "Hifz with Tajweed",
    "Complete Tajweed",
    "Qiraat & Lahjat",
    "Darse Nizami Books",
    "Islamic Lectures & Guidance",
    "Fiqh & Islamic Rulings",
  ];

  // Generate proper 24-hour slots with GMT
  const times = Array.from({ length: 24 }, (_, i) => {
    const gmtLabel = `GMT ${i.toString().padStart(2, "0")}:00`;
    return gmtLabel;
  });

  // Convert GMT slot into Pakistan Time
  const convertToPakistanTime = (gmt: string) => {
    try {
      const hour = parseInt(gmt.split(" ")[1].split(":")[0]); 
      const date = new Date(Date.UTC(2023, 0, 1, hour));
      const formatter = new Intl.DateTimeFormat("en-PK", {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      return formatter.format(date);
    } catch {
      return "";
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    const pkTime = convertToPakistanTime(selected);
    setPakistanTime(pkTime);
  };

  return (
    <section className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg my-16">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        Book Your Free Trial
      </h2>
      <form
        action="https://formsubmit.co/taallumulquranacademy@gmail.com"
        method="POST"
        className="space-y-4"
      >
        <input type="hidden" name="pakistanTime" value={pakistanTime} />

        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input required type="text" name="firstName" placeholder="First Name" className="p-3 border rounded" />
          <input required type="text" name="lastName" placeholder="Last Name" className="p-3 border rounded" />
        </div>

        {/* Email */}
        <input required type="email" name="email" placeholder="Email" className="p-3 border rounded w-full" />

        {/* Student Gender + DOB */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select required name="studentGender" className="p-3 border rounded">
            <option value="">Student Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input required type="date" name="dob" className="p-3 border rounded" />
        </div>

        {/* Teacher Gender */}
        <select required name="teacherGender" className="p-3 border rounded w-full">
          <option value="">Preferred Teacher Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Any">Any</option>
        </select>

        {/* Contact */}
        <input required type="tel" name="contact" placeholder="Contact Number" className="p-3 border rounded w-full" />

        {/* Course + Subject */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select required name="course" className="p-3 border rounded">
            <option value="">Choose Course</option>
            {courses.map((c, i) => <option key={i} value={c}>{c}</option>)}
          </select>
          <input required type="text" name="subject" placeholder="Subject / Topic" className="p-3 border rounded" />
        </div>

        {/* Country + Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select required name="country" className="p-3 border rounded">
            <option value="">Select Country</option>
            {countries.map((c, i) => <option key={i} value={c}>{c}</option>)}
          </select>
          <select required name="preferredTimeGMT" className="p-3 border rounded" onChange={handleTimeChange}>
            <option value="">Preferred Time (GMT)</option>
            {times.map((t, i) => <option key={i} value={t}>{t}</option>)}
          </select>
        </div>

        {pakistanTime && (
          <div className="text-sm text-gray-600">
            <strong>In Pakistan: </strong>{pakistanTime}
          </div>
        )}

        {/* Special Message */}
        <textarea name="message" placeholder="Special Message (optional)" className="p-3 border rounded w-full" rows={4}></textarea>

        <button type="submit" className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition w-full">
          Book Your Free Trial
        </button>
      </form>
    </section>
  );
}
