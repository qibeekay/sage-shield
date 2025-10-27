import { AnimatePresence, motion, type Variants } from "motion/react";
import { useState } from "react";
import { contents } from "../utils/constants";

const AboutCard = () => {
  const [activeCard, setActiveCard] = useState(0);

  const contentVariants: Variants = {
    expanded: {
      flexGrow: 3,
      transition: { duration: 1, ease: "easeInOut" },
    },
    collapsed: {
      flexGrow: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
    default: {
      flexGrow: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const textVariants: Variants = {
    active: {
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    inactive: {
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const descriptionVariants: Variants = {
    enter: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.3 },
    },
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 1 },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="max-w-[1488px] mx-auto mt-24">
      <div className="hidden llg:flex items-center gap-[22px]">
        {contents.map((content, index) => (
          <motion.div
            variants={contentVariants}
            initial={index === 0 ? "expanded" : "collapsed"}
            key={index}
            className={`w-[153px] h-[447px] py-[22px] px-[44px] rounded-[12px] relative overflow-hidden cursor-pointer md:cursor-default text-textColor bg-[#E53E3E0F] dark:bg-[#FFFFFF17] backdrop-blur-[4px] dark:text-white`}
            animate={
              activeCard === null
                ? index === 0
                  ? "expanded"
                  : "collapsed"
                : activeCard === index
                ? "expanded"
                : "collapsed"
            }
            onMouseEnter={() => {
              setActiveCard(index);
            }}
            onMouseLeave={() => {
              setActiveCard(0);
            }}
          >
            <motion.div
              animate={activeCard === index ? "active" : "inactive"}
              variants={textVariants}
            >
              <div className="relative">
                <div className="">
                  <div>
                    <div className="w-[64px] aspect-square rounded-[24px] grid place-items-center bg-[#321C1F1C] dark:bg-[#FFFFFF1C] backdrop-blur-[4px]">
                      <div>
                        <content.icon className="text-[#321c1f] dark:text-white" />
                      </div>
                    </div>
                  </div>

                  {/* content title */}
                  <div className={`mt-[28px] text-[32px] leading-[100%]`}>
                    <h1
                      className={`text-nowrap ${
                        activeCard === index ? "" : "rotate-text pl-4"
                      }`}
                    >
                      {content.title}
                    </h1>
                  </div>
                </div>
              </div>

              {/* description */}
              <AnimatePresence>
                {activeCard === index && (
                  <motion.div
                    className="text-sm llg:text-base xlg:text-[20px] leading-[26px] tracking-[2%] mt-[22px]"
                    variants={descriptionVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    {content.description}

                    <p className="border-3 border-[#321C1F1A] dark:border-[#FFFFFF1A]  px-[18px] py-[22px] mt-[22px] rounded-[12px] text-textColor/70 dark:text-white/70">
                      {content.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutCard;
