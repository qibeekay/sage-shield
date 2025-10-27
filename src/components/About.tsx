import { div } from "motion/react-client";
import { useTheme } from "../theme/useTheme";
import { contents } from "../utils/constants";
import { getImageSrc } from "../utils/imageUtils";
import AboutCard from "./AboutCard";
import Button from "./props/Button";

const About = () => {
  const { theme } = useTheme();

  // fetches the mode of the system
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      matchMedia("(prefers-color-scheme: dark)").matches);

  const mask = isDark
    ? getImageSrc("aboutLeft.png")
    : getImageSrc("aboutLeftL.png");

  const mask1 = isDark
    ? getImageSrc("aboutRight.png")
    : getImageSrc("aboutRightL.png");

  const mask2 = isDark
    ? getImageSrc("aboutCen.png")
    : getImageSrc("aboutCenL.png");
  return (
    <section className="relative py-[75px] overflow-y-hidden">
      {/* header text */}
      <div className="relative z-10 text-center max-w-[628px] mx-auto text-textColor dark:text-white">
        <h1 className="font-redhawk text-[24px] md:text-[48px] leading-[100%] tracking-[-1%]">
          Built For Your Security
        </h1>
        <p className="max-w-[364px] md:max-w-[628px] mx-auto md:text-[20px] leading-[150%] tracking-[2%] font-normal mt-[16px] text-textColor/70 dark:text-white/70">
          Powerful AI-driven security designed to protect your business at every
          stage.
        </p>
      </div>

      <div className="relative z-10">
        <AboutCard />
      </div>

      {/* col-span */}
      <div className="llg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 relative z-10">
        {contents.map((content, index) => (
          <div
            key={index}
            className={[
              "p-3 rounded-[4px] text-textColor bg-[#E53E3E0F] dark:bg-[#FFFFFF17] backdrop-blur-[4px] dark:text-white",
              index === 4 && "sm:col-span-2", // 5th item (0-based) spans both columns
            ].join(" ")}
          >
            {/* icon */}
            <div className="w-[40px] aspect-square rounded-[10px] grid place-items-center bg-[#321C1F1C] dark:bg-[#FFFFFF1C] backdrop-blur-[4px]">
              <content.icon className="text-[#321c1f] dark:text-white" />
            </div>

            {/* header */}
            <h1 className="sm:text-[20px] leading-[100%] py-3">
              {content.title}
            </h1>

            {/* desc */}
            <p className="text-sm leading-[100%]">{content.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid place-items-center relative z-10 mt-10 px-4">
        <div className="w-fit">
          <Button name="See How Sage Protects You" image="arrow-right.png" />
        </div>
      </div>

      {/* mask image */}
      <div className="absolute bottom-0">
        <img src={mask} alt="" />
      </div>

      <div className="absolute bottom-0 left-[10%]">
        <img src={mask2} alt="" />
      </div>

      <div className="absolute top-0 right-0">
        <img src={mask1} alt="" />
      </div>
    </section>
  );
};

export default About;
