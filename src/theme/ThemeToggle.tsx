import { motion, type Variants } from "framer-motion";
import { useTheme } from "./useTheme";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      matchMedia("(prefers-color-scheme: dark)").matches);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  // Animation variants for the toggle track
  const trackVariants: Variants = {
    light: {
      backgroundColor: "#e5e7eb", // gray-200
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    dark: {
      backgroundColor: "#374151", // gray-700
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  // Animation variants for the toggle knob
  const knobVariants: Variants = {
    light: {
      x: 0,
      backgroundColor: "#3b82f6", // blue-500
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
    dark: {
      x: 24,
      backgroundColor: "#1e40af", // blue-700
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
  };

  // Animation variants for the icons
  const sunIconVariants = {
    light: {
      scale: 1,
      rotate: 0,
      opacity: 1,
    },
    dark: {
      scale: 0,
      rotate: -90,
      opacity: 0,
    },
  };

  const moonIconVariants = {
    light: {
      scale: 0,
      rotate: 90,
      opacity: 0,
    },
    dark: {
      scale: 1,
      rotate: 0,
      opacity: 1,
    },
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full cursor-pointer"
      variants={trackVariants}
      animate={isDark ? "dark" : "light"}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Sun Icon (Light Mode) */}
      <motion.div
        className="absolute left-1 top-1/2 transform -translate-y-1/2 text-xs"
        variants={sunIconVariants}
        animate={isDark ? "dark" : "light"}
      >
        ☀️
      </motion.div>

      {/* Moon Icon (Dark Mode) */}
      <motion.div
        className="absolute right-1 top-1/2 transform -translate-y-1/2 text-xs"
        variants={moonIconVariants}
        animate={isDark ? "dark" : "light"}
      >
        🌙
      </motion.div>

      {/* Toggle Knob */}
      <motion.div
        className="absolute top-1 left-1 w-6 h-6 rounded-full shadow-lg flex items-center justify-center"
        variants={knobVariants}
        animate={isDark ? "dark" : "light"}
      >
        <motion.span
          className="text-white text-[10px] font-bold"
          animate={{
            scale: [1, 1.2, 1],
            transition: { duration: 0.3 },
          }}
          key={theme}
        >
          {isDark ? "🌙" : "☀️"}
        </motion.span>
      </motion.div>
    </motion.button>
  );
};
