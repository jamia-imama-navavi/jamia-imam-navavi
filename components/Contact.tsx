"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-transparent py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E6C88C]">
            Contact Us
          </h2>

          <p className="mt-5 text-[#A7D8FF] text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Feel free to contact us for
            admissions, programmes, or any enquiries.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card max-w-4xl mx-auto p-10"
        >

          <div className="grid md:grid-cols-2 gap-10">

            {/* Contact Details */}
            <div>

              <h3 className="text-2xl font-bold text-[#E6C88C] mb-6">
                Get in Touch
              </h3>

              <div className="space-y-5 text-gray-300">

                <p>
                  <span className="text-white font-semibold">📍 Address:</span><br />
                  Jamia Imam Navavi (RA)<br />
                  Thrissur, Kerala, India
                </p>

                <p>
                  <span className="text-white font-semibold">📞 Phone:</span><br />
                  +91 XXXXX XXXXX
                </p>

                <p>
                  <span className="text-white font-semibold">✉️ Email:</span><br />
                  info@example.com
                </p>

              </div>

            </div>

            {/* Contact Form */}
            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl bg-white/5 border border-white/10 p-4 text-white outline-none focus:border-[#E6C88C]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl bg-white/5 border border-white/10 p-4 text-white outline-none focus:border-[#E6C88C]"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-xl bg-white/5 border border-white/10 p-4 text-white outline-none resize-none focus:border-[#E6C88C]"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-[#E6C88C] text-[#08111F] font-bold py-4 transition duration-300 hover:scale-105 hover:shadow-[0_10px_35px_rgba(230,200,140,0.4)]"
              >
                Send Message
              </button>

            </form>

          </div>

        </motion.div>

      </div>
    </section>
  );
}