import Navbar from "../../components/Navbar";

import Contact from "../../components/Contact";

import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-[#0B0B0B] font-sans">
      <Navbar />

      <div className="pt-20">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
