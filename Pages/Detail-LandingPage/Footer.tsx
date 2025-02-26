"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="gradient-bg container-custom m-auto rounded-md text-white py-8 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left flex flex-col justify-center items-center md:items-start gap-2">
          <Image src={"/Favicon.png"} width={120} height={40} alt="Logo" />
          <p className="text-white text-xs md:text-sm lg:text-base mt-2">
            ServerBracket is a simple and powerful hosting panel that allows you
            to manage domains, databases, firewalls, and server configurations
            through a user-friendly GUI
          </p>
        </div>

        <nav className="flex space-x-6 text-white text-sm md:text-base">
          {["Home", "Features", "Pricing", "Contact"].map((item, index) => (
            <div key={index}>
              <motion.div
                whileHover={{ scale: 1.1, color: "#fff" }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white"
                >
                  {item}
                </Link>
              </motion.div>
            </div>
          ))}
        </nav>

        <div className="flex space-x-4">
          {[FaFacebook, FaTwitter, FaLinkedin].map((Icon, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              href="#"
              className="text-black hover:text-white"
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </div>
      </div>

      <div className="border-t border-white mt-6 pt-4 text-center text-sm text-white">
        &copy; 2025 MyCompany. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
