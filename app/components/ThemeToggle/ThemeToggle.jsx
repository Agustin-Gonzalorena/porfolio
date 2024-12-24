"use client";
import { MoonIcon, SunIcon } from "@/app/svg/svgs";
import { useState } from "react";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState("dark");

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      onClick={toggleTheme}
      className="absolute right-6 md:right-20 top-5 p-1 shadow-sm shadow-black border-black dark:border-white rounded-full flex items-center justify-center hover:cursor-pointer"
    >
      <div className="h-5 w-5">{isDarkMode ? <SunIcon /> : <MoonIcon />}</div>
    </div>
  );
}
