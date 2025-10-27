import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import LINKS from "@/config/Links";

function FooterComponent() {
  return (
    <footer className="w-full py-4 px-6 flex justify-center items-center gap-2 bg-transparent">
      <span className="text-sm text-gray-600 dark:text-gray-400">
        طراحی شده توسط
      </span>
      <Link
        href={LINKS.personalWebsite}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 font-bold text-teal-600 dark:text-teal-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-300"
      >
        امیرحسین کاکاوند
      </Link>
      <Link
        href={LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors flex items-center justify-center"
        aria-label="Visit GitHub"
      >
        <FaGithub className="w-5 h-5" />
      </Link>
    </footer>
  );
}

export default FooterComponent;
