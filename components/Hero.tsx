"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden flex items-center justify-center bg-transparent"
    >
      {/* Animated Background */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <Image
          src="/building.jpg"
          alt="Campus"
          fill
          priority
          className="object-cover object-top opacity-60"
        />
      </motion.div>

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/70 via-[#08111F]/75 to-[#0B1730]/90"></div>

      {/* Gold Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#08111F]/80"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl px-6">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight px-4"
        >
          Jamia Imam Navavi (RA)
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-5 text-[#A7D8FF] text-base sm:text-lg md:text-2xl px-4"
        >
          Where Knowledge Transcends Boundaries
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4 px-4"
        >
          <button className="bg-[#E6C88C] text-[#08111F] px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_40px_rgba(230,200,140,0.45)] w-full sm:w-auto">
            Explore
          </button>

          <button className="border-2 border-[#E6C88C] text-[#E6C88C] px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-[#E6C88C] hover:text-[#08111F] hover:scale-110 w-full sm:w-auto">
            Contact
          </button>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="animate-bounce text-[#E6C88C] text-4xl">
          ⌄
        </div>
      </motion.div>
    </section>
  );
}