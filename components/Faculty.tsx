"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const faculty = [
  {
    name: "AL HAFIZ DR USMAN AHMED AL QASIMI AL AZHARI",
    role: "Principal",
    badge: "Principal",
    image: "/images/principal.jpg",
  },
  {
    name: "AL HAFIZ YASIR NAVAVI",
    role: "Quran",
    badge: "Quran",
    image: "/images/yasir.jpg",
  },
  {
    name: "AL HAFIZ BILAL NAVAVI",
    role: "Doura",
    badge: "Doura",
    image: "/images/bilal.jpg",
  },
  {
    name: "Usthad Name",
    role: "Kithab",
    badge: "Kithab",
    image: "/images/kithab.jpg",
  },
];

export default function Faculty() {
  return (
    <section
      id="faculty"
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
            Our Lecturers
          </h2>

          <p className="mt-5 text-[#A7D8FF] text-lg max-w-3xl mx-auto">
            Dedicated scholars committed to nurturing knowledge,
            character and spiritual excellence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {faculty.map((member, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                glass-card
                transition-all
                duration-700
                hover:-translate-y-4
              "
            >

              {/* Badge */}
              <div className="absolute top-4 right-4 z-20 bg-[#E6C88C] text-[#08111F] text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                {member.badge}
              </div>

              {/* Image */}
              <div className="relative overflow-hidden">

                <Image
                  src={member.image}
                  alt={member.name}
                  width={600}
                  height={600}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              </div>

              {/* Content */}
              <div className="relative z-10 p-7 text-center">

                <h3 className="text-white text-xl md:text-2xl font-bold leading-relaxed transition duration-500 group-hover:text-[#E6C88C]">
                  {member.name}
                </h3>

                <p className="mt-3 text-[#A7D8FF] text-lg font-medium">
                  {member.role}
                </p>

                <div className="flex justify-center mt-5">
                  <div className="h-1 w-16 rounded-full bg-[#E6C88C] transition-all duration-500 group-hover:w-28"></div>
                </div>

                <button className="mt-7 px-6 py-2 rounded-full border border-[#E6C88C] text-[#E6C88C] font-semibold transition duration-300 hover:bg-[#E6C88C] hover:text-[#08111F] hover:scale-105">
                  View Profile
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}