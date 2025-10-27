// src/theme/ThemeToggle.tsx (or wherever you placed the original)
import { useTheme } from "./useTheme";
import { motion } from "framer-motion";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

// Tailwind classes for the toggle button
const commonClasses =
  "flex items-center justify-center w-6 h-6 z-10 transition-colors duration-300";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  // Determine if the current theme is 'dark' for positioning the indicator
  const isDark = theme === "dark";

  // Handle click to toggle between light and dark
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // The total width of the container is 56px (w-14)
  // The indicator width is 28px (w-7)
  // Position is based on the container width (56px) - indicator width (28px) = 28px
  // Dark position (right side) is 28px from the left edge.
  const indicatorX = isDark ? 28 : 0;

  return (
    <div className="flex items-center">
      <motion.button
        onClick={toggleTheme}
        className="relative flex w-14 h-7 p-0.5 rounded-full cursor-pointer bg-gray-200 dark:bg-gray-700 shadow-inner"
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        // Optional: Add a subtle press animation to the whole button
        whileTap={{ scale: 0.95 }}
      >
        {/* Sliding Indicator (The "pill" that moves) */}
        <motion.div
          className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white dark:bg-gray-800 shadow-md"
          animate={{ x: indicatorX }}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
        />

        {/* Light Icon (Always visible, style changes) */}
        <div className={commonClasses}>
          <HiOutlineSun
            className={`w-4 h-4 ${
              !isDark ? "text-yellow-500" : "text-gray-500"
            }`}
          />
        </div>

        {/* Dark Icon (Always visible, style changes) */}
        <div className={commonClasses}>
          <HiOutlineMoon
            className={`w-4 h-4 ${
              isDark ? "text-purple-400" : "text-gray-500"
            }`}
          />
        </div>
      </motion.button>
    </div>
  );
};
