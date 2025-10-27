import { useTheme } from "../theme/useTheme";
import { details } from "../utils/constants";
import { getImageSrc } from "../utils/imageUtils";
import Button from "./props/Button";

const Built = () => {
  const { theme } = useTheme();

  // fetches the mode of the system
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      matchMedia("(prefers-color-scheme: dark)").matches);

  const mask = isDark
    ? getImageSrc("builtmask.png")
    : getImageSrc("builtmaskL.png");

  return (
    <div className="relative max-w-[1488px] mx-auto px-4 text-textColor dark:text-white py-[75px]">
      {/* mobile header */}
      <div className="w-full relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-redhawk text-[24px] md:text-[48px] tracking-[-1%] leading-[100%]">
          Built For Every Business
        </h1>
        <p className="max-w-[370px] md:max-w-[628px] mx-auto md:text-[20px] leading-[26px] tracking-[2%] py-4 text-textColor/70 dark:text-white/70">
          Tailored AI security solutions for businesses of all sizes, from
          startups to enterprises.
        </p>

        <div>
          <Button name="Contact Sales" image="arrow-right.png" />
        </div>
      </div>

      {/* cards */}
      <div className="flex flex-wrap items-center justify-center gap-[24px] mt-14 relative z-10">
        {details.map((detail, index) => (
          <div
            key={index}
            className="card-shadow backdrop-blur-[14px] p-[20px] rounded-[15px] w-[463px] min-h-[335px] bg-[#FA4F1914] dark:bg-[#FFFFFF21] flex flex-col gap-y-[24px]"
          >
            {/* images */}
            <div>
              <div>
                <img
                  src={getImageSrc(`${isDark ? detail.imgD : detail.imgL}`)}
                  alt=""
                />
              </div>
            </div>

            {/* h1 */}
            <h1 className="text-[20px] font-medium sm:font-bold sm:text-[24px] leading-[100%] tracking-[2%]">
              {detail.title}
            </h1>

            {/* paragraph */}
            <p className="text-[20px] leading-[28px] tracking-[2%]">
              {detail.desc}
            </p>

            {/* list */}
            {detail.list.map((list) => (
              <div
                key={list}
                className="text-[20px] leading-[28px] tracking-[2%] flex items-center gap-2"
              >
                <div>
                  <img src={getImageSrc("check.png")} alt="" />
                </div>

                <p>{list}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 top-20">
        <img className="w-full h-full" src={mask} alt="" />
      </div>
    </div>
  );
};

export default Built;
