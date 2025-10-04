"use client";

import { useState } from "react";

export default function BookTrialForm() {
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

  const countries = [
    "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina",
    "Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados",
    "Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana",
    "Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon",
    "Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo",
    "Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica",
    "Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia",
    "Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana",
    "Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary",
    "Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan",
    "Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon",
    "Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi",
    "Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico",
    "Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar",
    "Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea",
    "North Macedonia","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea",
    "Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis",
    "Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe",
    "Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia",
    "Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan",
    "Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste",
    "Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine",
    "United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City",
    "Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
  ];

  const times = Array.from({ length: 24*2 }, (_, i) => {
    const h = Math.floor(i/2);
    const m = i % 2 === 0 ? "00" : "30";
    const hour = h % 12 === 0 ? 12 : h % 12;
    const ampm = h < 12 ? "AM" : "PM";
    return `${hour}:${m} ${ampm}`;
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg my-16">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Book Your Free Trial</h2>
      <form 
        action="https://formsubmit.co/taallumulquranacademy@gmail.com" 
        method="POST"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input required type="text" name="firstName" placeholder="First Name" className="p-3 border rounded" />
          <input required type="text" name="lastName" placeholder="Last Name" className="p-3 border rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input required type="email" name="email" placeholder="Email" className="p-3 border rounded" />
          <input required type="tel" name="contact" placeholder="Contact Number" className="p-3 border rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <select required name="course" className="p-3 border rounded">
            <option value="">Choose Course</option>
            {courses.map((c,i)=><option key={i} value={c}>{c}</option>)}
          </select>
          <input required type="text" name="subject" placeholder="Subject / Topic" className="p-3 border rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <select required name="country" className="p-3 border rounded">
            <option value="">Select Country</option>
            {countries.map((c,i)=><option key={i} value={c}>{c}</option>)}
          </select>
          <select required name="preferredTime" className="p-3 border rounded">
            <option value="">Preferred Time</option>
            {times.map((t,i)=><option key={i} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input required type="date" name="dob" className="p-3 border rounded" />
          <select required name="gender" className="p-3 border rounded">
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Any">Any</option>
          </select>
        </div>
        <div className="mb-4">
          <textarea name="message" placeholder="Special Message (optional)" className="p-3 border rounded w-full" rows={4}></textarea>
        </div>
        <button type="submit" className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition w-full">
          Book Your Free Trial
        </button>
      </form>
    </section>
  );
}
