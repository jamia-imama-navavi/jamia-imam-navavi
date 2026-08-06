import Image from "next/image";

export default function Principal() {
  return (
    <section
      id="principal"
      className="bg-[#08111F] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Principal Image */}
        <div className="flex justify-center">
          <Image
            src="/principal.jpg"
            alt="Principal"
            width={420}
            height={520}
            className="rounded-3xl shadow-2xl object-cover"
          />
        </div>

        {/* Principal Message */}
        <div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#E6C88C]">
            Principal's Message
          </h2>

          <p className="mt-8 text-[#A7D8FF] leading-8 text-lg">
            Welcome to Jamia Imam Navavi (RA). Our mission is to nurture
            students with authentic Islamic knowledge, academic excellence,
            discipline, and noble character rooted in the teachings of the
            Qur'an and Sunnah.
          </p>

          <p className="mt-6 text-gray-300 leading-8">
            We strive to create an environment where students grow
            spiritually, intellectually, and socially, preparing them to
            serve the Ummah with sincerity, wisdom, and compassion.
          </p>

          <div className="mt-10 border-l-4 border-[#E6C88C] pl-6">

            <h3 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              AL HAFIZ DR USMAN AHMED AL QASIMI AL AZHARI
            </h3>

            <p className="mt-2 text-lg text-[#E6C88C] font-semibold">
              Principal
            </p>

            <p className="text-gray-400">
              Jamia Imam Navavi (RA), Thrissur
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}