import Navbar from "../components/Navbar";

import Hero from "../components/Hero";

import Services from "../components/Services";

import About from "../components/About";

import Gallery from "../components/Gallery";

import Testimonials from "../components/Testimonials";

import Contact from "../components/Contact";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0B0B0B] font-sans">
      <Navbar />

      <Hero />

      <Services />

      <About />

      <Gallery />

      <Testimonials />

      <Contact />

      <Footer />
    </div>
  );
}
