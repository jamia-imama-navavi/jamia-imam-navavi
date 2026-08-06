"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-transparent text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E6C88C]">
            About Jamia
          </h2>

          <div className="w-24 h-1 bg-[#E6C88C] rounded-full mx-auto mt-5"></div>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-3xl glass-card p-3">

              <Image
                src="/about.jpg"
                alt="Jamia Imam Navavi"
                width={700}
                height={800}
                className="rounded-2xl w-full h-[600px] object-cover hover:scale-105 duration-700"
              />

            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-12"
          >

            <div className="w-16 h-1 bg-[#E6C88C] mb-8 rounded-full"></div>

            <p className="text-gray-300 leading-9 text-justify text-lg">

              Jamia Imam Navavi (RA) is a distinguished centre of Islamic learning dedicated to preserving and propagating the authentic legacy of Ahlussunnathi Wal Jama'ah. Inspired by the Qur'an, the Sunnah of the Noble Prophet ﷺ, and the scholarly tradition of the righteous predecessors, the institution strives to nurture generations of scholars and leaders who combine sound faith, noble character, and academic excellence.

              <br /><br />

              Rooted in the rich heritage of Sunni Islam, Jamia follows the balanced methodology of the scholars of Ahlussunnathi Wal Jama'ah, honouring the legacy of the four recognized schools of Islamic jurisprudence while upholding the creed of the orthodox Sunni tradition. The institution promotes moderation, wisdom, compassion, and intellectual integrity, enabling students to address contemporary challenges while remaining firmly connected to the timeless principles of Islam.

              <br /><br />

              Through a comprehensive curriculum integrating classical Islamic sciences with relevant contemporary knowledge, Jamia Imam Navavi (RA) seeks to produce graduates who are spiritually grounded, ethically responsible, socially committed, and intellectually equipped to serve humanity. The institution aspires to cultivate individuals who embody sincerity, justice, mercy, and excellence, becoming beacons of guidance for society and contributors to a peaceful and harmonious world.

              <br /><br />

              At Jamia Imam Navavi (RA), education is not merely the pursuit of knowledge—it is the cultivation of faith, character, service, and leadership in accordance with the noble path of Ahlussunnathi Wal Jama'ah.

            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}