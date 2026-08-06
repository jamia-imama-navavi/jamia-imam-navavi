export default function Departments() {
  const departments = [
    {
      title: "Hifz-ul-Qur'an",
      desc: "Memorization of the Holy Qur'an with Tajweed.",
      icon: "",
    },
    {
      title: "Islamic Studies",
      desc: "Qur'an, Hadith, Fiqh and Aqeedah.",
      icon: "",
    },
    {
      title: "Arabic Language",
      desc: "Classical and Modern Arabic Language.",
      icon: "",
    },
    {
      title: "Academic Education",
      desc: "Modern education integrated with Islamic values.",
      icon: "",
    },
    {
      title: "Research Centre",
      desc: "Advanced Islamic research and publications.",
      icon: "",
    },
    {
      title: "Moral Development",
      desc: "Building character through Islamic ethics.",
      icon: "",
    },
  ];

  return (
    <section
      id="departments"
      className="bg-[#08111F] py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-[#E6C88C]">
          Our Departments
        </h2>

        <p className="text-center text-[#A7D8FF] mt-5 max-w-3xl mx-auto">
          Explore our academic and Islamic departments dedicated to excellence.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-[#E6C88C] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl">{dept.icon}</div>

              <h3 className="text-2xl font-bold mt-6 text-[#E6C88C]">
                {dept.title}
              </h3>

              <p className="text-gray-300 mt-4">
                {dept.desc}
              </p>

              <button className="mt-8 bg-[#E6C88C] text-[#08111F] px-6 py-3 rounded-full font-semibold hover:scale-105 duration-300">
                Learn More
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}