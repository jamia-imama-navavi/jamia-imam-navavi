"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* About */}
          <div>

            <h2 className="text-2xl font-bold text-[#E6C88C]">
              Jamia Imam Navavi (RA)
            </h2>

            <p className="mt-5 text-gray-300 leading-7">
              An institution dedicated to authentic Islamic education,
              academic excellence, and character development.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link href="/" className="text-gray-300 hover:text-[#E6C88C] transition">
                Home
              </Link>

              <Link href="#about" className="text-gray-300 hover:text-[#E6C88C] transition">
                About
              </Link>

              <Link href="#facilities" className="text-gray-300 hover:text-[#E6C88C] transition">
                Facilities
              </Link>

              <Link href="#gallery" className="text-gray-300 hover:text-[#E6C88C] transition">
                Gallery
              </Link>

              <Link href="#contact" className="text-gray-300 hover:text-[#E6C88C] transition">
                Contact
              </Link>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-300">

              <p>📍 Thrissur, Kerala, India</p>

              <p>📞 +91 XXXXX XXXXX</p>

              <p>✉️ info@example.com</p>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center">

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Jamia Imam Navavi (RA). All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}