"use client";

import { useState, useEffect } from "react";
import countries from "@/app/data/countries";
import dialCodes from "@/app/data/dialcode";

export default function BookTrialForm() {
  const [pakistanTime, setPakistanTime] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedTimeZone, setSelectedTimeZone] = useState("");
  const [timezones, setTimezones] = useState<Record<string, string>>({});

  // Load timezones.json dynamically (fixes public import error)
  useEffect(() => {
    fetch("/timezones.json")
      .then((res) => res.json())
      .then((data) => setTimezones(data))
      .catch((err) => console.error("Timezone load error:", err));
  }, []);

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

  const times = Array.from({ length: 24 }, (_, i) => {
    const gmtLabel = `GMT ${i.toString().padStart(2, "0")}:00`;
    return gmtLabel;
  });

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

      <form action="/api/register" method="POST" className="space-y-5">
        {/* Name + Email */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            required
            type="text"
            name="firstName"
            placeholder="First Name"
            className="p-3 border rounded w-full"
          />
          <input
            required
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="p-3 border rounded w-full"
          />
        </div>

        <input
          required
          type="email"
          name="email"
          placeholder="Email Address"
          className="p-3 border rounded w-full"
        />

        {/* DOB + Gender */}
        <div className="grid md:grid-cols-2 gap-4">
          <input required type="date" name="dob" className="p-3 border rounded w-full" />
          <select required name="studentGender" className="p-3 border rounded w-full">
            <option value="">Student Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Country + Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            required
            name="country"
            className="p-3 border rounded"
            onChange={(e) => {
              const country = e.target.value;
              setSelectedCountry(country);
              setSelectedTimeZone(timezones[country] || "Not found");
            }}
          >
            <option value="">Select Country</option>
            {countries.map((country, i) => {
              const code = dialCodes[country] || "";
              return (
                <option key={i} value={country}>
                  {country} {code && `(${code})`}
                </option>
              );
            })}
          </select>

          <input
            required
            type="tel"
            name="contact"
            placeholder="Contact Number"
            className="p-3 border rounded"
          />
        </div>

        {/* Timezone (auto update) */}
        {selectedCountry && (
          <p className="text-sm text-gray-600">
            Timezone: <span className="font-semibold">{selectedTimeZone}</span>
          </p>
        )}

        {/* Preferred Time + Pakistan Time */}
        <div className="grid md:grid-cols-2 gap-4">
          <select
            required
            name="preferredTimeGMT"
            onChange={handleTimeChange}
            className="p-3 border rounded w-full"
          >
            <option value="">Preferred Time (GMT)</option>
            {times.map((t, i) => (
              <option key={i} value={t}>
                {t}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="pakistanTime"
            value={pakistanTime}
            readOnly
            placeholder="Pakistan Time"
            className="p-3 border rounded bg-gray-100 w-full"
          />
        </div>

        {/* Teacher Gender */}
        <select required name="teacherGender" className="p-3 border rounded w-full">
          <option value="">Preferred Teacher Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Any">Any</option>
        </select>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Special Message (optional)"
          className="p-3 border rounded w-full"
          rows={4}
        ></textarea>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition w-full"
        >
          Send Booking Request
        </button>
      </form>
    </section>
  );
}
