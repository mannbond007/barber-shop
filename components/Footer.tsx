"use client";

import { motion } from "framer-motion";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 bg-[#111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">BarberShop</h3>

            <p className="text-[#A1A1A1]">Premium grooming services</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>

            <ul className="text-[#A1A1A1] space-y-2">
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Haircut
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Shave
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Beard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>

            <ul className="text-[#A1A1A1] space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Our Story
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>

            <p className="text-[#A1A1A1]">123 Main St, City</p>

            <p className="text-[#A1A1A1]">(123) 456-7890</p>

            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-[#A1A1A1] hover:text-[#D4AF37] transition-colors"
              >
                FB
              </a>

              <a
                href="#"
                className="text-[#A1A1A1] hover:text-[#D4AF37] transition-colors"
              >
                IG
              </a>

              <a
                href="#"
                className="text-[#A1A1A1] hover:text-[#D4AF37] transition-colors"
              >
                TW
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
