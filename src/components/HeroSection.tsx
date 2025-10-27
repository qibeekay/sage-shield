import { div } from "motion/react-client";
import { useTheme } from "../theme/useTheme";
import { getImageSrc } from "../utils/imageUtils";
import Button from "./props/Button";

const HeroSection = () => {
  const { theme } = useTheme();

  // fetches the mode of the system
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      matchMedia("(prefers-color-scheme: dark)").matches);

  // sets the logo image depending on the theme mode
  const imageFile = isDark
    ? getImageSrc("heroD.png")
    : getImageSrc("heroL.png");

  const line = isDark ? getImageSrc("line.png") : getImageSrc("lineL.png");
  return (
    <div className="relative pt-28 llg:pt-0">
      {!isDark && (
        <div className="absolute w-full h-[60%] top-0 z-10">
          <img className="w-full h-full" src={getImageSrc("blur.png")} alt="" />
        </div>
      )}
      <div className="px-4 relative">
        {/* light mode blur */}
        <div className="flex items-center justify-between gap-6 px-4 llg:pl-[120px]">
          {/* hero texts */}
          <div className="w-full relative z-20 flex flex-col items-center justify-center text-center llg:block llg:text-left">
            {/* stars and users */}
            <div className="flex items-center">
              {/* teams */}
              <div>
                <div>
                  <img src={getImageSrc("users.png")} alt="" />
                </div>
              </div>

              {/* star */}
              <div>
                <div>
                  <img src={getImageSrc("stars.png")} alt="" />
                </div>

                <p className="text-textColor dark:text-white tracking-[3%]">
                  Join <span className="font-bold">+2k</span> others on Sage
                </p>
              </div>
            </div>

            {/* header text */}
            <div className="font-redhawk text-textColor dark:text-white text-[32px] md:text-[50px] xlg:text-[60px] leading-[124%] xxl:text-[80px] xxl:leading-[140%] tracking-[-2%] relative z-10 my-4 llg:my-0">
              <div className="flex items-center justify-center llg:justify-start gap-4 relative">
                <h1>AI-Powered</h1>
                {/* shield icon */}
                <div className="bg-[#ED893633] border-2 border-[#FFFFFF78] dark:bg-[#FFFFFF14] backdrop-blur-[4px] w-[70px] aspect-square rounded-full place-items-center hidden md:grid">
                  <div className="">
                    <img className="" src={getImageSrc("shield.png")} alt="" />
                  </div>
                </div>
                {/* line icon */}
                <div className="absolute top-[4rem] xxl:top-[5.7rem] left-6">
                  <div className="w-full hidden llg:block xxl:w-[1000px]">
                    <img className="w-full h-full" src={line} alt="" />
                  </div>
                </div>
              </div>
              <h1 className="relative">
                <span className="bg-gradient-to-b from-darkOrange from-0% to-darkerOrange to-36% bg-clip-text text-transparent">
                  Security
                </span>{" "}
                That Sees
              </h1>
              <h1>What Others Miss.</h1>
            </div>

            {/* paragraph text */}
            <p className="text-sm lg:text-[20px] text-textColor dark:text-white leading-[150%] lg:leading-[26px] tracking-[2%] max-w-[344px] lg:max-w-full">
              Real time threat detection and automated response built for the
              speed of modern business.
            </p>

            {/* demo */}
            <div>
              <div className="my-10 max-w-[527px] hidden md:block">
                <div className="flex items-center justify-between border-2 border-textColor bg-[#F3F3F3] dark:border-[#FFFFFFB2] dark:bg-[#FFFFFF21] backdrop-blur-[4px] rounded-[66px] p-2">
                  {/* input */}
                  <input
                    type="text"
                    className="w-full placeholder:text-textColor/[38%] text-textColor dark:text-white dark:placeholder:text-white/[38%] px-[20px] outline-none"
                    placeholder="Enter your email"
                  />

                  {/* button */}
                  <div className="min-w-[198px]">
                    <div className="w-full">
                      <Button name="Book a Demo" image="play.png" />
                    </div>
                  </div>
                </div>
              </div>

              {/* mobile button */}
              {/* button */}
              <div className="md:hidden my-6">
                <div className="w-full">
                  <Button name="Book a Demo" image="play.png" />
                </div>
              </div>
            </div>

            {/* list */}
            <div className="flex flex-wrap items-center justify-center llg:justify-start llg:items-start llg:flex-col gap-2 ">
              {/* enterprise */}
              <div className="flex items-center gap-[10px]">
                <img src={getImageSrc("check.png")} alt="" />
                <p className="text-[14px] llg:text-[20px] leading-[28px] tracking-[2%] text-textColor dark:text-white">
                  Enterprise-grade security
                </p>
              </div>

              {/* global */}
              <div className="flex items-center gap-[10px]">
                <img src={getImageSrc("check.png")} alt="" />
                <p className="text-[14px] llg:text-[20px] leading-[28px] tracking-[2%] text-textColor dark:text-white">
                  Global compliance support
                </p>
              </div>

              {/* deep */}
              <div className="flex items-center gap-[10px]">
                <img src={getImageSrc("check.png")} alt="" />
                <p className="text-[14px] llg:text-[20px] leading-[28px] tracking-[2%] text-textColor dark:text-white">
                  Deep analytics + AI
                </p>
              </div>
            </div>
          </div>
          {/* hero image */}
          <div className="hidden llg:block w-[80%]">
            <div>
              <img src={imageFile} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
