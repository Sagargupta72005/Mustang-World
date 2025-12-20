import React, { useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import {
  FaTiktok,
  FaLinkedin,
  FaWeibo,
  FaPlayCircle,
  FaWeixin,
  FaDiscord,
} from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const footerRef = useRef(null);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    gsap.from(footerRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`px-6 md:px-20 py-30 h-full flex flex-col gap-5 transition-colors duration-300
        ${darkMode ? "bg-neutral-900 text-white" : "bg-neutral-900 text-white"}
      `}
    >
      {/* Top Section */}
      <div className="flex flex-col items-center justify-between gap-5 md:flex-row md:items-start md:gap-0">
        <div className="flex flex-col gap-8 md:flex-row">
          <button className="font-semibold uppercase transition hover:opacity-80">
            <a href="/">Home</a>
          </button>
          <button className="font-semibold uppercase transition hover:opacity-80">
            <a href="/Model">Model</a>
          </button>
          <button className="font-semibold uppercase transition hover:opacity-80">
            <a href="/Gallery">Gallery</a>
          </button>
          <button className="font-semibold uppercase transition hover:opacity-80">
            <a href="/About">About</a>
          </button>
        </div>
        <div className="flex gap-4 text-2xl ">
          {[
            FaTiktok,
            FaLinkedin,
            FaWeibo,
            FaPlayCircle,
            FaWeixin,
            FaDiscord,
          ].map((Icon, idx) => (
            <Icon
              key={idx}
              className={`cursor-pointer transition-colors duration-200 ${
                darkMode ? "hover:text-gray-400" : "hover:text-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div
        className={`border-t pt-6 text-sm md:text-base ${
          darkMode ? "border-gray-700" : "border-gray-300"
        }`}
      >
        <p className="mb-4">
          * The consumption and emissions values on the website refer to your
          geographical IP...
        </p>
        <p>Copyright © 2025 Mustang 1969. All rights reserved.</p>
        <p className="mt-2">
          WARNING ABOUT ILLEGAL OFFERS OF ALLEGED SHARES OF MUSTANG 1969...
        </p>
      </div>

      {/* Logo */}
      <div className="flex justify-center ">
        <img
          src="src\assets\AdobeStock_774225839_Preview_Editorial_Use_Only.png" // <-- Make sure this exists in /public
          alt="Mustang 1969 Logo"
          className="w-auto h-18"
        />
      </div>

      <div
        className={`border-t pt-6 text-sm md:text-base ${
          darkMode ? "border-gray-700" : "border-gray-300"
        }`}
      >
        <p>
          The consumption and emissions values in the website refer to your
          geographical IP. This value might be unrealistic if you navigate using
          VPN or if the position of your Internet provider is imprecise. If you
          believe you are incorrectly geolocalized, contact your dealer to get
          valid consumption and emissions information in your area.
        </p>
      </div>

      <div
        className={`border-t pt-6 text-sm md:text-base ${
          darkMode ? "border-gray-700" : "border-gray-300"
        }`}
      >
        <p>
          Copyright © 2025 Automobili Lamborghini S.p.A. a company with sole
          shareholder subject to the management and coordination of AUDI AG. All
          rights reserved. VAT no. IT 00591801204 WARNING ABOUT ILLEGAL OFFERS
          OF ALLEGED SHARES OF AUTOMOBILI LAMBORGHINI S.P.A. Automobili
          Lamborghini S.p.A. got the notice that several third parties across
          different countries are allegedly offering shares in Automobili
          Lamborghini S.p.A. These offers are unlawful and originate neither
          from Volkswagen Aktiengesellschaft nor from any of its subsidiaries.
        </p>
      </div>
    </footer>
  );
};

export default Footer;