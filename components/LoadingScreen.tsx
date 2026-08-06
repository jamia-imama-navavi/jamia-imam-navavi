"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617]">

      <div className="text-center animate-pulse">

        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={120}
          className="mx-auto"
        />

        <h2 className="mt-6 text-3xl font-bold text-[#E6C88C]">
          Jamia Imam Navavi (RA)
        </h2>

        <p className="mt-3 text-[#A7D8FF]">
          Where Knowledge Transcends Boundaries
        </p>

      </div>

    </div>
  );
}