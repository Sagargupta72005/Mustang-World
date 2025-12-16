import React, { useEffect, useContext, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";

  const isActive = (path) => currentPath === path;

  // FIXED — NO AUTO LIGHT MODE
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const activeClass =
    "text-yellow-400 font-semibold border-b-2 border-yellow-400 pb-1";
  const baseClass =
    "hover:text-yellow-300 transition pb-1 border-b-2 border-transparent";

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        w-full 
        fixed top-0 left-0 z-50 
        shadow-lg 
        font-bold 
        transition-colors 
        bg-neutral-950 border-gray-700
        dark:bg-neutral-900 dark:text-yellow-500
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-2">
          <img 
            src="https://as1.ftcdn.net/v2/jpg/02/71/87/52/1000_F_271875229_JzlwUotemLeMFirB2gqkv1bchCzaoivx.jpg" 
            alt="Logo"
            className="w-20 h-fit object-center border-2 rounded-3xl"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-10 text-lg">
          <a href="/" className={isActive("/") ? activeClass : baseClass}>
            Home
          </a>

          <a href="/Model" className={isActive("/Model") ? activeClass : baseClass}>
            Models
          </a>

          <a href="/Gallery" className={isActive("/Gallery") ? activeClass : baseClass}>
            Gallery
          </a>

          <a href="/About" className={isActive("/About") ? activeClass : baseClass}>
            About
          </a>
        </nav>

        {/* Theme + Mobile Toggle */}
        <div className="flex items-center space-x-4 ">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-4 rounded-full cursor-pointer hover:border-amber-400 hover:text-neutral-800  transition"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <button className="lg:hidden " onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:hidden bg-black dark:bg-neutral-900 border-t border-gray-700 px-6 py-4 space-y-4"
        >
          <a href="/" className={`block ${isActive("/") ? activeClass : baseClass}`}>
            Home
          </a>

          <a href="/Model" className={`block ${isActive("/Model") ? activeClass : baseClass}`}>
            Models
          </a>

          <a href="/Gallery" className={`block ${isActive("/Gallery") ? activeClass : baseClass}`}>
            Gallery
          </a>

          <a href="/About" className={`block ${isActive("/About") ? activeClass : baseClass}`}>
            About
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
