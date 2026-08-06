"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Astronomy() {
  return (
    <section className="bg-[#08111F] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
          Jamia imam navavi [RA] Aerial Observatory
          </h2>

          <p className="text-[#A7D8FF] mt-5 text-lg">
            Exploring the Wonders of Allah's Creation through Astronomy,
            Moon Sighting and Scientific Observation.
          </p>
        </motion.div>

        {/* Image / Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <Image
            src="/astronomy.jpg"
            alt="Astronomy Observatory"
            width={1400}
            height={800}
            className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
          />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 max-w-5xl mx-auto text-center"
        >
          <p className="text-gray-300 text-lg leading-8">
            The Jamia imam navavi [RA] Aerial Observatory is dedicated to astronomical
            observation, moon sighting, and educational research. Students gain
            practical knowledge while appreciating the signs of Allah's creation
            through scientific exploration combined with Islamic tradition.
          </p>

          <button className="mt-8 px-8 py-3 rounded-full bg-[#E6C88C] text-[#08111F] font-bold hover:scale-105 transition duration-300">
            Learn More
          </button>
        </motion.div>

      </div>
    </section>
  );
}