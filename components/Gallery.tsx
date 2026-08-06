"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/glct1.jpg",
  "/glct2.jpg",
  "/event1.jpg",
  "/event2.jpg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
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
            Gallery
          </h2>

          <p className="mt-5 text-[#A7D8FF] text-lg">
            Moments from our Campus Life
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {images.map((image, index) => (

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
                glass-card
                overflow-hidden
                rounded-3xl
                hover:-translate-y-3
                duration-500
              "
            >

              <div className="relative overflow-hidden">

                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  width={500}
                  height={350}
                  className="
                    w-full
                    h-64
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}