import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const buildMailBody = () => {
    return encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
  };

  const handleSend = () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name}`
    );

    const mailtoLink = `mailto:chriswakar@gmail.com?subject=${subject}&body=${buildMailBody()}`;

    // FIX: ensure navigation happens
    window.location.assign(mailtoLink);
  };

  const handleGmail = () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name}`
    );

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=chriswakar@gmail.com&su=${subject}&body=${buildMailBody()}`;

    window.open(gmailLink, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-[#020617] to-[#050B1E] py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact
          </h2>
          <p className="text-gray-400 text-lg">
            Have a question or want to work together? Send a message.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10">
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg bg-[#020617] border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg bg-[#020617] border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                className="w-full resize-none rounded-lg bg-[#020617] border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="button"
                onClick={handleSend}
                className="flex items-center justify-center gap-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 px-6 py-3 text-sm font-medium text-black transition"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>

              <button
                type="button"
                onClick={handleGmail}
                className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:border-cyan-400/40 transition"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                Write via Gmail
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
