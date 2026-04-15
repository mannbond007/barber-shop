import Navbar from "../../components/Navbar";

import Services from "../../components/Services";

import Footer from "../../components/Footer";

export default function ServicesPage() {
  return (
    <div className="bg-[#0B0B0B] font-sans">
      <Navbar />

      <div className="pt-20">
        <Services />
      </div>

      <Footer />
    </div>
  );
}
