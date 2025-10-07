"use client";

import { useState, useEffect, useMemo } from "react";
import { DateTime } from "luxon";

// ✅ Complete Country Data with Dial Codes
const countriesWithDialCodes = [
  { name: "Afghanistan", code: "+93", flag: "🇦🇫" },
  { name: "Albania", code: "+355", flag: "🇦🇱" },
  { name: "Algeria", code: "+213", flag: "🇩🇿" },
  { name: "Andorra", code: "+376", flag: "🇦🇩" },
  { name: "Angola", code: "+244", flag: "🇦🇴" },
  { name: "Argentina", code: "+54", flag: "🇦🇷" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Austria", code: "+43", flag: "🇦🇹" },
  { name: "Azerbaijan", code: "+994", flag: "🇦🇿" },
  { name: "Bahrain", code: "+973", flag: "🇧🇭" },
  { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
  { name: "Belgium", code: "+32", flag: "🇧🇪" },
  { name: "Brazil", code: "+55", flag: "🇧🇷" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "China", code: "+86", flag: "🇨🇳" },
  { name: "Denmark", code: "+45", flag: "🇩🇰" },
  { name: "Egypt", code: "+20", flag: "🇪🇬" },
  { name: "Finland", code: "+358", flag: "🇫🇮" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "Greece", code: "+30", flag: "🇬🇷" },
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "Indonesia", code: "+62", flag: "🇮🇩" },
  { name: "Iran", code: "+98", flag: "🇮🇷" },
  { name: "Iraq", code: "+964", flag: "🇮🇶" },
  { name: "Ireland", code: "+353", flag: "🇮🇪" },
  { name: "Italy", code: "+39", flag: "🇮🇹" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
  { name: "Jordan", code: "+962", flag: "🇯🇴" },
  { name: "Kuwait", code: "+965", flag: "🇰🇼" },
  { name: "Lebanon", code: "+961", flag: "🇱🇧" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾" },
  { name: "Maldives", code: "+960", flag: "🇲🇻" },
  { name: "Nepal", code: "+977", flag: "🇳🇵" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱" },
  { name: "New Zealand", code: "+64", flag: "🇳🇿" },
  { name: "Nigeria", code: "+234", flag: "🇳🇬" },
  { name: "Norway", code: "+47", flag: "🇳🇴" },
  { name: "Oman", code: "+968", flag: "🇴🇲" },
  { name: "Pakistan", code: "+92", flag: "🇵🇰" },
  { name: "Philippines", code: "+63", flag: "🇵🇭" },
  { name: "Qatar", code: "+974", flag: "🇶🇦" },
  { name: "Russia", code: "+7", flag: "🇷🇺" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "South Africa", code: "+27", flag: "🇿🇦" },
  { name: "South Korea", code: "+82", flag: "🇰🇷" },
  { name: "Spain", code: "+34", flag: "🇪🇸" },
  { name: "Sri Lanka", code: "+94", flag: "🇱🇰" },
  { name: "Sweden", code: "+46", flag: "🇸🇪" },
  { name: "Switzerland", code: "+41", flag: "🇨🇭" },
  { name: "Syria", code: "+963", flag: "🇸🇾" },
  { name: "Thailand", code: "+66", flag: "🇹🇭" },
  { name: "Turkey", code: "+90", flag: "🇹🇷" },
  { name: "UAE", code: "+971", flag: "🇦🇪" },
  { name: "UK", code: "+44", flag: "🇬🇧" },
  { name: "USA", code: "+1", flag: "🇺🇸" },
  { name: "Yemen", code: "+967", flag: "🇾🇪" },
  { name: "Zimbabwe", code: "+263", flag: "🇿🇼" }
];

export default function BookTrialForm() {
  const [pakistanTime, setPakistanTime] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Phone Code Search State
  const [phoneSearch, setPhoneSearch] = useState("");
  const [selectedPhoneCode, setSelectedPhoneCode] = useState("+92");
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);

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

  // ✅ Filtered Countries for Phone Search
  const filteredPhoneCountries = useMemo(() => {
    if (!phoneSearch) return countriesWithDialCodes;
    return countriesWithDialCodes.filter(country =>
      country.name.toLowerCase().includes(phoneSearch.toLowerCase()) ||
      country.code.includes(phoneSearch)
    );
  }, [phoneSearch]);

  // ✅ Complete Timezone Mapping
  const getTimezoneForCountry = (country: string): string => {
    const timezoneMap: Record<string, string> = {
      "Afghanistan": "Asia/Kabul",
      "Albania": "Europe/Tirane",
      "Algeria": "Africa/Algiers",
      "Andorra": "Europe/Andorra",
      "Angola": "Africa/Luanda",
      "Argentina": "America/Argentina/Buenos_Aires",
      "Australia": "Australia/Sydney",
      "Austria": "Europe/Vienna",
      "Azerbaijan": "Asia/Baku",
      "Bahrain": "Asia/Bahrain",
      "Bangladesh": "Asia/Dhaka",
      "Belgium": "Europe/Brussels",
      "Brazil": "America/Sao_Paulo",
      "Canada": "America/Toronto",
      "China": "Asia/Shanghai",
      "Denmark": "Europe/Copenhagen",
      "Egypt": "Africa/Cairo",
      "Finland": "Europe/Helsinki",
      "France": "Europe/Paris",
      "Germany": "Europe/Berlin",
      "Greece": "Europe/Athens",
      "India": "Asia/Kolkata",
      "Indonesia": "Asia/Jakarta",
      "Iran": "Asia/Tehran",
      "Iraq": "Asia/Baghdad",
      "Ireland": "Europe/Dublin",
      "Italy": "Europe/Rome",
      "Japan": "Asia/Tokyo",
      "Jordan": "Asia/Amman",
      "Kuwait": "Asia/Kuwait",
      "Lebanon": "Asia/Beirut",
      "Malaysia": "Asia/Kuala_Lumpur",
      "Maldives": "Indian/Maldives",
      "Nepal": "Asia/Kathmandu",
      "Netherlands": "Europe/Amsterdam",
      "New Zealand": "Pacific/Auckland",
      "Nigeria": "Africa/Lagos",
      "Norway": "Europe/Oslo",
      "Oman": "Asia/Muscat",
      "Pakistan": "Asia/Karachi",
      "Philippines": "Asia/Manila",
      "Qatar": "Asia/Qatar",
      "Russia": "Europe/Moscow",
      "Saudi Arabia": "Asia/Riyadh",
      "Singapore": "Asia/Singapore",
      "South Africa": "Africa/Johannesburg",
      "South Korea": "Asia/Seoul",
      "Spain": "Europe/Madrid",
      "Sri Lanka": "Asia/Colombo",
      "Sweden": "Europe/Stockholm",
      "Switzerland": "Europe/Zurich",
      "Syria": "Asia/Damascus",
      "Thailand": "Asia/Bangkok",
      "Turkey": "Europe/Istanbul",
      "UAE": "Asia/Dubai",
      "UK": "Europe/London",
      "USA": "America/New_York",
      "Yemen": "Asia/Aden",
      "Zimbabwe": "Africa/Harare"
    };

    return timezoneMap[country] || "UTC";
  };

  // ✅ Timezone Conversion Function
  const convertToPakistanTime = () => {
    const dateInput = (document.querySelector('input[name="bookingDate"]') as HTMLInputElement)?.value;
    const timeInput = (document.querySelector('input[name="localTime"]') as HTMLInputElement)?.value;

    if (!dateInput || !timeInput || !selectedCountry) {
      setPakistanTime("");
      return;
    }

    try {
      const userTZ = getTimezoneForCountry(selectedCountry);
      const userDateTime = DateTime.fromISO(`${dateInput}T${timeInput}`, { zone: userTZ });
      const pkTime = userDateTime.setZone("Asia/Karachi");

      if (!userDateTime.isValid || !pkTime.isValid) {
        setPakistanTime("Invalid date/time selected");
        return;
      }

      setPakistanTime(
        `User (${selectedCountry}) Local Time: ${userDateTime.toFormat("dd-MM-yyyy hh:mm a")} → Pakistan Time: ${pkTime.toFormat("dd-MM-yyyy hh:mm a")}`
      );
    } catch (error) {
      setPakistanTime("Error converting time");
    }
  };

  useEffect(() => {
    convertToPakistanTime();
  }, [selectedCountry]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data["pakistanTime"] = pakistanTime;
    data["selectedCountry"] = selectedCountry;
    data["countryCode"] = selectedPhoneCode;

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
      setLoading(false);
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
          <p>آپ کی بُکنگ کی درخواست کامیابی سے موصول ہو چکی ہے۔ ان شاءاللہ ہم جلد آپ سے رابطہ کریں گے۔</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="font-semibold text-gray-700">Full Name / پورا نام</label>
            <div className="grid md:grid-cols-2 gap-4 mt-1">
              <div>
                <label className="text-sm text-gray-600">First Name / پہلا نام</label>
                <input required type="text" name="firstName" placeholder="First Name" className="p-3 border rounded w-full mt-1" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Last Name / آخری نام</label>
                <input required type="text" name="lastName" placeholder="Last Name" className="p-3 border rounded w-full mt-1" />
              </div>
            </div>
          </div>

          {/* Email & DOB */}
          <div>
            <label className="font-semibold text-gray-700">Email & Date of Birth / ای میل اور تاریخ پیدائش</label>
            <div className="grid md:grid-cols-2 gap-4 mt-1">
              <div>
                <label className="text-sm text-gray-600">Email / ای میل</label>
                <input required type="email" name="email" placeholder="Email Address" className="p-3 border rounded w-full mt-1" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Date of Birth / تاریخ پیدائش</label>
                <input required type="date" name="dob" className="p-3 border rounded w-full mt-1" />
              </div>
            </div>
          </div>

          {/* Gender & Contact - UPDATED */}
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
              
              {/* ✅ Modern Phone Input with Search */}
              <div>
                <label className="text-sm text-gray-600">Contact Number / فون نمبر</label>
                <div className="flex border rounded w-full mt-1 relative">
                  {/* Phone Code Selector */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
                      className="p-3 border-r bg-gray-50 hover:bg-gray-100 w-32 flex items-center justify-between"
                    >
                      <span>{selectedPhoneCode}</span>
                      <span>▼</span>
                    </button>
                    
                    {/* Dropdown with Search */}
                    {isPhoneDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white border rounded-lg shadow-lg z-50 max-h-80 overflow-hidden">
                        {/* Search Input */}
                        <div className="p-2 border-b">
                          <input
                            type="text"
                            placeholder="Search country or code..."
                            value={phoneSearch}
                            onChange={(e) => setPhoneSearch(e.target.value)}
                            className="w-full p-2 border rounded"
                            autoFocus
                          />
                        </div>
                        
                        {/* Countries List */}
                        <div className="overflow-y-auto max-h-60">
                          {filteredPhoneCountries.map((country, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => {
                                setSelectedPhoneCode(country.code);
                                setIsPhoneDropdownOpen(false);
                                setPhoneSearch("");
                              }}
                              className="w-full p-3 text-left hover:bg-gray-100 flex items-center gap-3"
                            >
                              <span className="text-xl">{country.flag}</span>
                              <span className="flex-1">{country.name}</span>
                              <span className="text-gray-600">{country.code}</span>
                            </button>
                          ))}
                          
                          {filteredPhoneCountries.length === 0 && (
                            <div className="p-3 text-center text-gray-500">
                              No countries found
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Phone Number Input */}
                  <input 
                    required 
                    type="tel" 
                    name="contact" 
                    placeholder="Phone Number" 
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
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  value={selectedCountry}
                >
                  <option value="">Select Country</option>
                  {countriesWithDialCodes.map((country, i) => (
                    <option key={i} value={country.name}>{country.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600">City / شہر</label>
                <input required type="text" name="city" placeholder="Enter City" className="p-3 border rounded w-full mt-1" />
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
                    <option key={i} value={course}>{course}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600">Custom Topic / اضافی موضوع</label>
                <input type="text" name="customTopic" placeholder="Add Custom Topic (optional)" className="p-3 border rounded w-full mt-1" />
              </div>
            </div>
          </div>

          {/* Booking Date & Time */}
          <div>
            <label className="font-semibold text-gray-700">Booking Date & Time / تاریخ اور وقت</label>
            <div className="grid md:grid-cols-2 gap-4 mt-1">
              <div>
                <label className="text-sm text-gray-600">Booking Date / تاریخ</label>
                <input 
                  required 
                  type="date" 
                  name="bookingDate" 
                  className="p-3 border rounded w-full mt-1" 
                  onChange={convertToPakistanTime} 
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Local Time / مقامی وقت</label>
                <input 
                  required 
                  type="time" 
                  name="localTime" 
                  className="p-3 border rounded w-full mt-1" 
                  onChange={convertToPakistanTime} 
                />
              </div>
            </div>
          </div>

          {/* Time Converter Display */}
          <div>
            <label className="font-semibold text-gray-700">Pakistan Time / پاکستانی وقت</label>
            <input
              type="text"
              readOnly
              name="pakistanTime"
              value={pakistanTime}
              placeholder="Select country, date and time to see Pakistan time"
              className="p-3 border rounded bg-gray-100 w-full mt-1 text-center font-medium"
            />
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
            <textarea name="message" placeholder="Write your message (optional)" className="p-3 border rounded w-full mt-1" rows={4}></textarea>
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