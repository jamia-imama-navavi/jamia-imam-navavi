"use client";

import { motion } from "framer-motion";

const facilities = [
  {
    title: "Grand Library",
    description:
      "A comprehensive collection of Islamic and academic resources for students and researchers.",
  },
  {
    title: "Smart Classrooms",
    description:
      "Modern classrooms equipped with advanced technology for effective learning.",
  },
  {
    title: "Darul Swalath Qur'an Academy",
    description:
      "Dedicated programmes for Qur'an memorization, recitation, and Islamic studies.",
  },
  {
    title: "Darul Swalath Aerial Observatory",
    description:
      "A specialized observatory for moon sighting and astronomical studies.",
  },
  {
    title: "Boys Hostel",
    description:
      "Comfortable and secure accommodation for students.",
  },
  {
    title: "Girls Hostel",
    description:
      "Safe and well-maintained residential facilities for female students.",
  },
  {
    title: "Dining Hall",
    description:
      "Clean and spacious dining facilities serving nutritious meals.",
  },
  {
    title: "Central Masjid",
    description:
      "A peaceful environment for prayers, worship, and spiritual development.",
  },
];

export default function Facilities() {
  return (
    <section
      id="facilities"
      className="py-24 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E6C88C]">
            Our Facilities
          </h2>

          <p className="mt-5 text-[#A7D8FF] text-lg max-w-3xl mx-auto">
            Exceptional facilities designed to support academic excellence,
            spiritual growth, and comfortable campus life.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {facilities.map((facility, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group glass-card p-8 text-center hover:-translate-y-3 duration-500"
            >

              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#E6C88C]/10 flex items-center justify-center text-3xl">
                ✦
              </div>

              <h3 className="text-white text-xl font-bold transition duration-300 group-hover:text-[#E6C88C]">
                {facility.title}
              </h3>

              <p className="text-gray-300 mt-4 leading-7 text-sm">
                {facility.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}