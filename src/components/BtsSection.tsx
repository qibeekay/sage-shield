import React from "react";
import BehindTheScene from "./BehindTheScene";
import { getImageSrc } from "../utils/imageUtils";
import { useTheme } from "../theme/useTheme";

const BtsSection = () => {
  const { theme } = useTheme();

  // fetches the mode of the system
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      matchMedia("(prefers-color-scheme: dark)").matches);

  const mask = isDark
    ? getImageSrc("btsTopDark.png")
    : getImageSrc("btsTopL.png");

  const mask1 = isDark
    ? getImageSrc("btsBotDark.png")
    : getImageSrc("btsBotL.png");

  const mask2 = isDark
    ? getImageSrc("btsTop1Dark.png")
    : getImageSrc("btsLight.png");

  const img = isDark ? getImageSrc("btsD.png") : getImageSrc("bts.png");

  return (
    <div className="relative text-textColor dark:text-white py-[45px] llg:py-[15rem] overflow-y-hidden">
      {/* mobile header */}
      <div className="w-full relative z-10 llg:hidden flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-redhawk text-[24px] md:text-[48px] tracking-[-1%] leading-[100%]">
          Behind the Scenes
        </h1>
        <p className="max-w-[412px] mx-auto md:text-[20px] leading-[100%] tracking-[2%] pt-4 pb-2">
          Powerful AI-driven security designed to protect your business at every
          stage.
        </p>
      </div>

      <div className="h-full w-full flex items-center justify-center relative z-10 px-4">
        {/* desktop view */}
        {/* text */}
        <div className="relative hidden llg:block w-[30%] xlg:w-[55%]">
          <div className="absolute -top-[3rem] -right-[6rem]">
            <div className="w-fit flex flex-col items-end justify-end text-right">
              <h1 className="font-redhawk text-[30px] xlg:text-[48px] tracking-[-1%] leading-[100%]">
                Behind the Scenes
              </h1>
              <p className="max-w-[412px] text-lg xlg:text-[20px] leading-[100%] tracking-[2%] py-4 font-light">
                Powerful AI-driven security designed to protect your business at
                every stage.
              </p>
              <div className="flex items-center justify-end gap-2">
                <div>
                  <img
                    src={getImageSrc(`${isDark ? "trust.png" : "trustL.png"}`)}
                    alt=""
                  />
                </div>
                <p className="text-[20px] leading-[28px] tracking-[2%]">
                  Trusted by companies big and small.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full hidden llg:block">
          <BehindTheScene />
        </div>

        {/* mobile timeline */}
        <div className=" llg:hidden mt-10">
          <img className="w-full h-full" src={img} alt="" />
        </div>
      </div>

      {/* mask image */}
      <div className="absolute top-0">
        <img src={mask} alt="" />
      </div>

      <div className="absolute top-0">
        <img src={mask2} alt="" />
      </div>

      {isDark && (
        <div className="absolute bottom-0 right-0">
          <img src={getImageSrc("btsBot1Dark")} alt="" />
        </div>
      )}

      <div className="absolute bottom-0 right-0">
        <img src={mask1} alt="" />
      </div>
    </div>
  );
};

export default BtsSection;
