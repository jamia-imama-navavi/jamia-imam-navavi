"use client";

const features = [
  {
    title: "Authentic Islamic Education",
    description:
      "A curriculum rooted in the principles of Ahlu Sunnathi Wal Jama'ath, combining traditional Islamic sciences with academic excellence.",
  },
  {
    title: "Experienced Scholars",
    description:
      "Learn under qualified scholars dedicated to nurturing knowledge, faith, and character.",
  },
  {
    title: "Modern Learning Environment",
    description:
      "Smart classrooms, digital resources, and a peaceful campus designed for effective learning.",
  },
  {
    title: "Holistic Student Development",
    description:
      "Develop spiritually, intellectually, morally, and socially through comprehensive education.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-[#0B1628]">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Why Choose
            <span className="text-[#E6C88C]"> Jamia Imam Navavi (RA)</span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-300 leading-8">
            We combine authentic Islamic knowledge with modern education,
            preparing students to become scholars, leaders, and responsible
            members of society.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#E6C88C] hover:shadow-[0_20px_60px_rgba(230,200,140,0.35)]"
            >
              <h3 className="text-2xl font-bold text-white group-hover:text-[#E6C88C] transition-colors">
                {item.title}
              </h3>

              <div className="mt-4 h-1 w-16 bg-[#E6C88C] rounded-full group-hover:w-24 transition-all duration-500"></div>

              <p className="mt-6 text-gray-300 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}