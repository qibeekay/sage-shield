// src/components/Navbar.tsx (or wherever your Navbar is located)
import { getImageSrc } from "../utils/imageUtils";
import Button from "./props/Button";
import { useTheme } from "../theme/useTheme";
import { AnimatePresence, motion, type Variants } from "framer-motion"; // Use framer-motion, not motion/react
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { ThemeToggle } from "../theme/ThemeToggle"; // Import the new ThemeToggle

const links = ["Home", "About", "Services", "Solutions"];

const Navbar = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // fetches the mode of the system (Keep this logic if needed for logo/other elements)
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      matchMedia("(prefers-color-scheme: dark)").matches);

  // sets the logo image depending on the theme mode
  const logoFile = isDark
    ? getImageSrc("logoDark.png")
    : getImageSrc("logoLight.png");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants for mobile menu
  // (Assuming you've corrected the import from "motion/react" to "framer-motion")
  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  // Animation variants for menu items
  const itemVariants: Variants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <nav className="fixed left-0 top-0 w-full z-[100]">
      <div className="flex items-center justify-between py-[13px] px-4 llg:px-[120px] bg-white dark:bg-black ">
        {/* logo */}
        <div>
          <img src={logoFile} alt="" />
        </div>

        {/* links (Desktop) */}
        <div className="hidden lg:flex items-center gap-[40px]">
          {links.map((item) => (
            <div key={item}>
              <button className="cursor-pointer text-[20px] font-normal leading-[28px] font-neue tracking-[2%] text-textColor dark:text-white capitalize">
                {item}
              </button>
            </div>
          ))}
        </div>

        {/* button and ThemeToggle (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <div>
            <ThemeToggle />
          </div>
          <Button name="Start Protecting" />
        </div>

        {/* ThemeToggle and hamburger menu (Mobile) */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <motion.button
            onClick={toggleMenu}
            className="text-black dark:text-white focus:outline-none cursor-pointer"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <RiCloseFill size={30} /> : <HiMenuAlt2 size={30} />}
          </motion.button>
        </div>
      </div>
      {/* mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="bg-[#E53E3E0F] dark:bg-[#FFFFFF17]/30 backdrop-blur-[4px] lg:hidden mt-2 p-4 h-screen">
              <div className="flex flex-col text-center items-center justify-center space-y-4">
                {links.map((item, index) => (
                  <motion.div
                    key={item}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    custom={index}
                  >
                    <button className="cursor-pointer text-[20px] font-normal leading-[28px] font-neue tracking-[2%] text-textColor dark:text-white capitalize">
                      {item}
                    </button>
                  </motion.div>
                ))}

                {/* button */}
                <motion.div
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  custom={links.length}
                  className="flex items-center justify-center gap-2 w-fit"
                >
                  <Button name="Start Protecting" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
