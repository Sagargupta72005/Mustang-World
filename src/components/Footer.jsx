import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Models", href: "/Model" },
    { name: "Gallery", href: "/Gallery" },
    { name: "3D View", href: "/Model" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <footer
      className={`w-full py-10 px-6 border-t ${
        darkMode ? "bg-neutral-950 border-white/50 text-white" : "bg-neutral-500 border-gray-300 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2
            className={`text-2xl font-extrabold bg-clip-text text-transparent ${
              darkMode
                ? "bg-gradient-to-r from-yellow-300 to-red-500"
                : "bg-gradient-to-r from-yellow-400 to-green-400"
            }`}
          >
            Ford Mustang
          </h2>
          <p className={`${darkMode ? "text-white/60" : "text-black/60"} mt-3 text-sm leading-relaxed`}>
            The legend lives on. Explore the heritage, performance, and design of the iconic Mustang.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-3">
          <h3 className={`text-lg font-semibold mb-1 ${darkMode ? "text-white" : "text-black"}`}>
            Quick Links
          </h3>
          {quickLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`${
                darkMode ? "text-white/60 hover:text-yellow-400" : "text-black/60 hover:text-blue-500"
              } transition`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h3 className={`text-lg font-semibold mb-3 ${darkMode ? "text-white" : "text-black"}`}>
            Contact
          </h3>
          <p className={`${darkMode ? "text-white/60" : "text-black/60"} text-sm`}>Email: mustang@official.com</p>
          <p className={`${darkMode ? "text-white/60" : "text-black/60"} text-sm mt-1`}>Phone: +1 800-MUSTANG</p>
          <p className={`${darkMode ? "text-white/60" : "text-black/60"} text-sm mt-1`}>Detroit, Michigan USA</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className={`mt-10 border-t pt-4 text-center text-sm ${
          darkMode ? "border-white/10 text-white/50" : "border-gray-300 text-black/50"
        }`}
      >
        © {new Date().getFullYear()} Mustang Showcase. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
