import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import ThemeToggle from "./ThemeToggleComponent";
import LINKS from "@/config/Links";

export default function GalleryHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-gray-800/50 transition-colors duration-300">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Link
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors flex items-center justify-center"
              aria-label="Visit GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex-1 flex justify-center">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white truncate max-w-xs sm:max-w-md text-center px-4">
              Hiking
            </h1>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
