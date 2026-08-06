export default function Admission() {
  return (
    <section
      id="admission"
      className="bg-[#08111F] py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="bg-gradient-to-r from-[#0F1F35] to-[#132844] rounded-3xl p-10 md:p-16 shadow-2xl border border-[#E6C88C]/20">

          <div className="text-center">

            <h2 className="text-3xl md:text-5xl font-bold text-[#E6C88C]">
              Admissions Open
            </h2>

            <p className="mt-6 text-[#A7D8FF] text-lg max-w-3xl mx-auto">
              Join Jamia Imam Navavi (RA) and begin your journey towards
              Islamic excellence, academic brilliance and noble character.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

              <button className="bg-[#E6C88C] text-[#08111F] px-8 py-4 rounded-full font-bold hover:scale-105 duration-300">
                Apply Now
              </button>

              <button className="border-2 border-[#E6C88C] text-[#E6C88C] px-8 py-4 rounded-full hover:bg-[#E6C88C] hover:text-[#08111F] duration-300">
                Download Prospectus
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}