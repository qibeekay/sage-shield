import { useTheme } from "../theme/useTheme";
import { results } from "../utils/constants";
import { getImageSrc } from "../utils/imageUtils";

const Results = () => {
  const { theme } = useTheme();

  // fetches the mode of the system
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      matchMedia("(prefers-color-scheme: dark)").matches);

  const mask = isDark
    ? getImageSrc("resultLeftD.png")
    : getImageSrc("resultLeftL.png");

  const mask1 = isDark
    ? getImageSrc("resultRight.png")
    : getImageSrc("resultRightL.png");

  const mask2 = isDark
    ? getImageSrc("resultLeft1D.png")
    : getImageSrc("resultLeft1L.png");

  return (
    <div className="relative  px-4 text-textColor dark:text-white py-[75px] overflow-y-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* mobile header */}
        <div className="w-full relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-redhawk text-[24px] md:text-[48px] tracking-[-1%] leading-[100%]">
            Proven Results
          </h1>
          <p className="max-w-[370px] md:max-w-[628px] mx-auto md:text-[20px] leading-[26px] tracking-[2%] py-4 text-textColor/70 dark:text-white/70">
            Businesses of all sizes rely on our AI to protect their critical
            assets.
          </p>
        </div>

        {/* details */}
        <div className="mt-14 relative z-10">
          <div className="flex items-center justify-center flex-col md:flex-row gap-[24px] ">
            {/* text */}
            <div className="w-full">
              <div className="flex flex-col gap-y-[24px]">
                {results.map((detail, index) => (
                  <div key={index} className="flex gap-[24px] items-start">
                    {/* img */}
                    <div>
                      <div>
                        <img
                          src={getImageSrc(
                            `${isDark ? detail.imgD : detail.imgL}`
                          )}
                          alt=""
                        />
                      </div>
                    </div>

                    {/* text */}
                    <div>
                      <h1 className="text-[16px] font-medium sm:font-bold sm:text-[24px] leading-[150%] tracking-[2%]">
                        {detail.title}
                      </h1>

                      <p className="max-w-[450px] text-[14px] sm:text[20px] leading-[150%] tracking-[2%] mt-[12px]">
                        {detail.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* image */}
            <div className="w-full">
              <div>
                <img
                  src={getImageSrc(
                    `${isDark ? "resultImg.png" : "resultImgL.png"}`
                  )}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* testimonial */}
        <div className="relative z-10 w-full bg-[#FA4F191A] dark:bg-[#FFFFFF1A] backdrop-blur-[32px] p-3 rounded-[12px] min-h-[375px] flex flex-col items-center justify-center text-center mt-14">
          <div className="flex flex-col items-center justify-center text-center">
            {/* message */}
            <p className="max-w-[344px] sm:max-w-[801px] mx-auto text-sm sm:text-[24px] leading-[34px] tracking-[2%]">
              “Our team sleeps easier knowing the AI handles threats before they
              reach us. Game changer!”
            </p>

            {/* image */}
            <div className="mt-[32px]">
              <div className="w-[62px] aspect-square rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={getImageSrc("img1.jpg")}
                  alt=""
                />
              </div>
            </div>

            {/* name */}
            <p className="sm:text-[20px] font-medium sm:font-bold leading-[100%] tracking-[2%] my-4">
              Maria Maxwell
            </p>

            {/* title */}
            <p className="italic sm:text-[20px] leading-[100%] tracking-[2%] text-textColor/70 dark:text-white/70">
              Small Business Owner
            </p>

            {/* slide indicators */}
            <div className="flex"></div>
          </div>
        </div>
      </div>

      {/* mask image */}
      <div className="absolute bottom-0 left-0">
        <img src={mask} alt="" />
      </div>

      <div className="absolute top-0 left-[10%]">
        <img src={mask2} alt="" />
      </div>

      <div className="absolute top-0 right-0">
        <img src={mask1} alt="" />
      </div>
    </div>
  );
};

export default Results;
