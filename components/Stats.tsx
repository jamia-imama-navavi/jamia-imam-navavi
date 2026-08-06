"use client";

const stats = [
  {
    number: "10+",
    title: "Years of Excellence",
  },
  {
    number: "1200+",
    title: "Students",
  },
  {
    number: "250+",
    title: "Huffaz",
  },
  {
    number: "30+",
    title: "Scholars",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-[#08111F]">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Achievements
          </h2>

          <p className="mt-5 text-gray-300 max-w-3xl mx-auto">
            A legacy of academic excellence, Islamic values, and community service.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="group rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10 text-center transition-all duration-500 hover:-translate-y-3 hover:border-[#E6C88C] hover:shadow-[0_20px_60px_rgba(230,200,140,0.35)]"
            >

              <h3 className="text-5xl font-extrabold text-[#E6C88C]">
                {item.number}
              </h3>

              <div className="mt-5 h-1 w-16 bg-[#E6C88C] rounded-full mx-auto group-hover:w-24 transition-all duration-500"></div>

              <p className="mt-6 text-white text-lg">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}