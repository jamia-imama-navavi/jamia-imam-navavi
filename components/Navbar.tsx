"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#08111F]/80 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">


        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/logo.png"
            alt="Jamia Imam Navavi RA"
            width={55}
            height={55}
            className="rounded-full"
          />

          <div>
            <h1 className="text-white font-bold text-lg">
              Jamia Imam Navavi
            </h1>

            <p className="text-[#E6C88C] text-xs">
              Where Knowledge Transcends Boundaries
            </p>
          </div>

        </Link>



        {/* Menu */}

        <div className="hidden md:flex items-center gap-8">

          <Link
            href="/"
            className="text-white hover:text-[#E6C88C] transition"
          >
            Home
          </Link>


          <Link
            href="/about"
            className="text-white hover:text-[#E6C88C] transition"
          >
            About
          </Link>


          <Link
            href="/departments"
            className="text-white hover:text-[#E6C88C] transition"
          >
            Departments
          </Link>


          <Link
            href="/facilities"
            className="text-white hover:text-[#E6C88C] transition"
          >
            Facilities
          </Link>


          <Link
            href="/contact"
            className="px-5 py-2 rounded-full border border-[#E6C88C] text-[#E6C88C] hover:bg-[#E6C88C] hover:text-[#08111F] transition"
          >
            Contact
          </Link>


        </div>


      </div>

    </nav>
  );
}