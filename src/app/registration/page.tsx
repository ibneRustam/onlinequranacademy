"use client";

import { useState, useEffect } from "react";
import countries from "@/app/data/countries";
import dialCodes from "@/app/data/dialcode";

export default function BookTrialForm() {
  const [pakistanTime, setPakistanTime] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedTimeZone, setSelectedTimeZone] = useState("");
  const [timezones, setTimezones] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

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

  // ✅ Pakistan time converter
  const convertToPakistanTime = () => {
    try {
      const dateInput = (document.querySelector(
        'input[name="bookingDate"]'
      ) as HTMLInputElement).value;
      const timeInput = (document.querySelector(
        'input[name="localTime"]'
      ) as HTMLInputElement).value;
      if (!dateInput || !timeInput || !selectedCountry) return;

      const tzMap: Record<string, string> = {
        Pakistan: "Asia/Karachi",
        "United States": "America/New_York",
        "United Kingdom": "Europe/London",
        "Saudi Arabia": "Asia/Riyadh",
        "UAE": "Asia/Dubai",
      };

      const userTZ = tzMap[selectedCountry] || "UTC";

      const [year, month, day] = dateInput.split("-").map(Number);
      const [hours, minutes] = timeInput.split(":").map(Number);

      const userDateTime = new Date(Date.UTC(year, month - 1, day, hours, minutes));

      const pkFormatter = new Intl.DateTimeFormat("en-PK", {
        timeZone: "Asia/Karachi",
        dateStyle: "medium",
        timeStyle: "short",
      });

      const userFormatter = new Intl.DateTimeFormat("en-US", {
        timeZone: userTZ,
        dateStyle: "medium",
        timeStyle: "short",
      });

      const formattedPkTime = pkFormatter.format(userDateTime);
      const formattedUserTime = userFormatter.format(userDateTime);

      setPakistanTime(
        `User Time (${selectedCountry}): ${formattedUserTime} → Pakistan Time: ${formattedPkTime}`
      );
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Form submit
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true); // 🔹 Start loading

  const form = e.currentTarget;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  data["pakistanTime"] = pakistanTime;
  data["selectedCountry"] = selectedCountry;

  try {
    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (result.success) {
      setSuccess(true);
    } else {
      alert("Something went wrong! Try again.");
    }
  } catch (err) {
    alert("Error submitting form.");
  } finally {
    setLoading(false); // 🔹 Stop loading
  }
};

  return (
    <section className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg my-16">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        Book Your Free Trial / مفت ٹرائل بک کریں
      </h2>

      {success ? (
        <div className="bg-green-100 text-green-800 p-6 rounded-xl text-center">
          <h3 className="text-xl font-semibold mb-2">✅ Booking Request Received!</h3>
          <p>
            آپ کی بُکنگ کی درخواست کامیابی سے موصول ہو چکی ہے۔ ان شاءاللہ ہم جلد آپ سے رابطہ کریں گے۔
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="font-semibold text-gray-700">Full Name / پورا نام</label>
            <div className="grid md:grid-cols-2 gap-4 mt-1">
              <div>
                <label className="text-sm text-gray-600">First Name / پہلا نام</label>
                <input
                  required
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="p-3 border rounded w-full mt-1"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Last Name / آخری نام</label>
                <input
                  required
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="p-3 border rounded w-full mt-1"
                />
              </div>
            </div>
          </div>

          {/* Email & DOB */}
          <div>
            <label className="font-semibold text-gray-700">Email & Date of Birth / ای میل اور تاریخ پیدائش</label>
            <div className="grid md:grid-cols-2 gap-4 mt-1">
              <div>
                <label className="text-sm text-gray-600">Email / ای میل</label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="p-3 border rounded w-full mt-1"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Date of Birth / تاریخ پیدائش</label>
                <input
                  required
                  type="date"
                  name="dob"
                  className="p-3 border rounded w-full mt-1"
                />
              </div>
            </div>
          </div>

          {/* Gender & Contact */}
          <div>
            <label className="font-semibold text-gray-700">Gender & Contact / صنف اور رابطہ نمبر</label>
            <div className="grid md:grid-cols-2 gap-4 mt-1">
              <div>
                <label className="text-sm text-gray-600">Gender / صنف</label>
                <select required name="studentGender" className="p-3 border rounded w-full mt-1">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600">Contact Number / فون نمبر</label>
                <div className="flex border rounded w-full mt-1">
                  <select required name="countryCode" className="p-3 border-r w-24 bg-gray-50">
                    <option value="">Code</option>
                    {countries.map((country, i) => {
                      const code = dialCodes[country] || "";
                      return (
                        code && (
                          <option key={i} value={code}>
                            {code}
                          </option>
                        )
                      );
                    })}
                  </select>
                  <input
                    required
                    type="tel"
                    name="contact"
                    placeholder="Contact Number"
                    className="p-3 flex-1"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Country & City */}
          <div>
            <label className="font-semibold text-gray-700">Country & City / ملک اور شہر</label>
            <div className="grid md:grid-cols-2 gap-4 mt-1">
              <div>
                <label className="text-sm text-gray-600">Country / ملک</label>
                <select
                  required
                  name="country"
                  className="p-3 border rounded w-full mt-1"
                  onChange={(e) => {
                    const selected = e.target.value;
                    setSelectedCountry(selected);
                    setSelectedTimeZone(timezones[selected] || "");
                  }}
                >
                  <option value="">Select Country</option>
                  {countries.map((country, i) => (
                    <option key={i} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600">City / شہر</label>
                <input
                  required
                  type="text"
                  name="city"
                  placeholder="Enter City"
                  className="p-3 border rounded w-full mt-1"
                />
              </div>
            </div>
          </div>

          {/* Course */}
          <div>
            <label className="font-semibold text-gray-700">Course Selection / منتخب کورس</label>
            <div className="grid md:grid-cols-2 gap-4 mt-1">
              <div>
                <label className="text-sm text-gray-600">Select Course / کورس منتخب کریں</label>
                <select required name="course" className="p-3 border rounded w-full mt-1">
                  <option value="">Select Course</option>
                  {courses.map((course, i) => (
                    <option key={i} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600">Custom Topic / اضافی موضوع</label>
                <input
                  type="text"
                  name="customTopic"
                  placeholder="Add Custom Topic (optional)"
                  className="p-3 border rounded w-full mt-1"
                />
              </div>
            </div>
          </div>

          {/* Booking Date & Time */}
          <div>
            <label className="font-semibold text-gray-700">Booking Date & Time / تاریخ اور وقت</label>
            <div className="grid md:grid-cols-2 gap-4 mt-1">
              <div>
                <label className="text-sm text-gray-600">Booking Date / تاریخ</label>
                <input required type="date" name="bookingDate" className="p-3 border rounded w-full mt-1" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Local Time / مقامی وقت</label>
                <input required type="time" name="localTime" className="p-3 border rounded w-full mt-1" />
              </div>
            </div>
          </div>

          {/* Time Converter */}
          <div>
            <label className="font-semibold text-gray-700">Convert to Pakistan Time / پاکستانی وقت میں تبدیلی</label>
            <div className="grid md:grid-cols-2 gap-4 mt-1">
              <button
                type="button"
                onClick={convertToPakistanTime}
                className="bg-indigo-500 text-white py-3 rounded-md hover:bg-indigo-600 transition"
              >
                Convert to Pakistan Time
              </button>
              <input
                type="text"
                readOnly
                name="pakistanTime"
                value={pakistanTime}
                placeholder="Pakistan Time will appear here"
                className="p-3 border rounded bg-gray-100 w-full"
              />
            </div>
          </div>

          {/* Teacher Gender */}
          <div>
            <label className="font-semibold text-gray-700">Preferred Teacher Gender / استاد کی جنس</label>
            <select required name="teacherGender" className="p-3 border rounded w-full mt-1">
              <option value="">Select Teacher Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Any">Any</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="font-semibold text-gray-700">Special Message / خصوصی پیغام</label>
            <textarea
              name="message"
              placeholder="Write your message (optional)"
              className="p-3 border rounded w-full mt-1"
              rows={4}
            ></textarea>
          </div>

          {/* Submit */}
<button
  type="submit"
  disabled={loading}
  className="bg-indigo-600 text-white px-8 py-3 rounded-full w-full hover:bg-indigo-700 transition disabled:opacity-50"
>
  {loading ? "Submitting..." : "Send Booking Request / بُکنگ کی درخواست بھیجیں"}
</button>
        </form>
      )}
    </section>
  );
}
