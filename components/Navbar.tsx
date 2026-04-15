"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth body lock for mobile menu
  useEffect(() => {
    const applyBodyLock = () => {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = scrollbarWidth
        ? `${scrollbarWidth}px`
        : "";
    };

    const resetBodyLock = () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };

    if (isMobileMenuOpen) {
      applyBodyLock();
    } else {
      resetBodyLock();
    }

    return resetBodyLock;
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-white text-2xl font-bold tracking-wide"
          >
            BarberShop
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex space-x-8">
            {["Home", "Services", "About", "Gallery", "Contact"].map((item) => (
              <li key={item} className="relative group">
                <Link
                  href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className="text-white hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {item}
                </Link>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#D4AF37] group-hover:w-full"
                  transition={{ duration: 0.3 }}
                />
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center rounded-full border border-white/20 bg-black/40 p-2 text-white shadow-lg transition duration-300 hover:bg-white/10"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-gradient-to-br from-black via-[#0f0a05] to-[#1a1410] z-50 md:hidden shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#D4AF37]/20">
                <span className="text-[#D4AF37] font-bold text-xl tracking-wide">
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 hover:text-[#D4AF37] transition duration-300"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col py-8">
                {["Home", "Services", "About", "Gallery", "Contact"].map(
                  (item, index) => (
                    <motion.div
                      key={item}
                      initial={{ x: 40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.08 }}
                      className="px-6 py-4"
                    >
                      <Link
                        href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                        onClick={handleLinkClick}
                        className="block text-white text-lg font-medium tracking-wide hover:text-[#D4AF37] transition-colors duration-300"
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ),
                )}
              </div>

              {/* CTA */}
              <motion.div
                className="absolute bottom-8 left-6 right-6"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link href="/contact" onClick={handleLinkClick}>
                  <button className="w-full bg-linear-to-r from-[#D4AF37] to-[#FFD700] text-black font-semibold py-3 rounded-full shadow-lg hover:shadow-[#D4AF37]/50 transition duration-300">
                    Book Appointment
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
