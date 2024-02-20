"use client";

import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <button
      className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full text-yellow-400 focus:outline-none"
      onClick={() => setDarkMode((prevMode) => !prevMode)}
    >
      {darkMode ? (
        <FaSun size={20} className="text-[#FFFF00] font-bold" />
      ) : (
        <FaMoon size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
