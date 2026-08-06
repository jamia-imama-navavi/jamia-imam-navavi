import Image from "next/image";

const news = [
  {
    image: "/glct1.jpg",
    title: "Global Leadership & Cultural Talent (GLCT)",
    date: "July 2026",
    desc: "A grand event showcasing leadership, creativity and student excellence.",
  },
  {
    image: "/event1.jpg",
    title: "Annual Graduation Ceremony",
    date: "June 2026",
    desc: "Celebrating the achievements of our graduating students.",
  },
  {
    image: "/event2.jpg",
    title: "Islamic Conference",
    date: "May 2026",
    desc: "Scholars and students gathered for inspiring lectures and discussions.",
  },
];

export default function News() {
  return (
    <section
      id="news"
      className="bg-[#08111F] py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-[#E6C88C]">
          Latest News & Events
        </h2>

        <p className="text-center text-[#A7D8FF] mt-5">
          Stay updated with the latest activities and achievements.
        </p>

        <div className="grid lg:grid-cols-3 gap-10 mt-16">

          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-[#E6C88C] transition duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-110 duration-500"
                />
              </div>

              <div className="p-8">
                <span className="text-[#E6C88C] text-sm">
                  {item.date}
                </span>

                <h3 className="text-2xl font-bold mt-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {item.desc}
                </p>

                <button className="mt-6 text-[#E6C88C] font-semibold">
                  Read More →
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}