import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Principal from "@/components/Principal";
import Courses from "@/components/Courses";
import Facilities from "@/components/Facilities";
import WhyChoose from "@/components/WhyChoose";
import Stats from "@/components/Stats";
import Faculty from "@/components/Faculty";
import Astronomy from "@/components/Astronomy";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Principal />

      <Courses />

      <Facilities />

      <WhyChoose />

      <Stats />

      <Faculty />

      <Astronomy />

      <Gallery />

      <Contact />

      <Footer />
    </>
  );
}