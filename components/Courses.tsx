export default function Courses() {
  const courses = [
    {
      title: "NAVAVI",
      icon: "",
      desc: "Advanced Islamic studies programme based on authentic scholarly traditions.",
    },
    {
      title: "JAZARI",
      icon: "",
      desc: "Specialized Ashara Qira'ath programme based on the famous Al-Jazariyyah text.",
    },
    {
      title: "HIFZ-UL-QUR'AN",
      icon: "",
      desc: "Complete memorization of the Holy Qur'an with proper Ashara qira'ath and revision.",
    },
    {
      title: "DARS",
      icon: "",
      desc: "Traditional Dars programme covering Qur'an, Hadith, Fiqh, Aqeedah and Arabic sciences.",
    },
  ];

  return (
    <section
      id="courses"
      className="bg-[#06101C] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#E6C88C]">
            Courses Offered
          </h2>

          <p className="mt-5 text-[#A7D8FF] text-lg">
            Academic and Islamic programmes at
            <br />
            Jamia Imam Navavi (RA)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center hover:border-[#E6C88C] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-6xl mb-6">
                {course.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {course.title}
              </h3>

              <p className="mt-4 text-gray-300 leading-7">
                {course.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}