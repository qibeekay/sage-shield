import { useTheme } from "../theme/useTheme";
import { getImageSrc } from "../utils/imageUtils";

const Footer = () => {
  const { theme } = useTheme();

  // fetches the mode of the system
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      matchMedia("(prefers-color-scheme: dark)").matches);

  const mask = isDark
    ? getImageSrc("footerLeftD.png")
    : getImageSrc("footerLeftL.png");

  const mask1 = isDark
    ? getImageSrc("footerRightD.png")
    : getImageSrc("footerRightL.png");

  const mask2 = isDark
    ? getImageSrc("patternDark.png")
    : getImageSrc("patternLight.png");

  const logo = isDark ? getImageSrc("shieldD.png") : getImageSrc("shieldL.png");

  return (
    <footer className="relative bg-white dark:bg-[#030001] h-[468px] mt-[10rem] overflow-hidden flex items-center justify-center px-4">
      {/* footer */}
      <div className="flex flex-col gap-y-[56px] items-center justify-center relative z-10">
        {/* sage */}
        <div>
          <img src={logo} alt="" />
        </div>

        {/* links */}
        <div>
          <ul className="flex items-center justify-center gap-y-[22px] gap-x-[40px] flex-wrap">
            <li>
              <a
                href=""
                className="text-textColor dark:text-white text-base md:text-lg text-center"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-textColor dark:text-white text-base md:text-lg text-center"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-textColor dark:text-white text-base md:text-lg text-center"
              >
                Help
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-textColor dark:text-white text-base md:text-lg text-center"
              >
                Consultation
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-textColor dark:text-white text-base md:text-lg text-center"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-textColor dark:text-white text-base md:text-lg text-center"
              >
                Legal
              </a>
            </li>
          </ul>
        </div>

        {/* socials */}
        <div>
          <div className="flex items-center justify-center gap-4">
            {/* instagram */}
            <a href="">
              <img
                src={getImageSrc(`${isDark ? "instaD.png" : "instaL.png"}`)}
                alt=""
              />
            </a>

            {/* twitter */}
            <a href="">
              <img
                src={getImageSrc(`${isDark ? "twitterD.png" : "twitterL.png"}`)}
                alt=""
              />
            </a>

            {/* facebook */}
            <a href="">
              <img
                src={getImageSrc(`${isDark ? "faceD.png" : "faceL.png"}`)}
                alt=""
              />
            </a>
          </div>

          {/* terms */}
          <div className="flex items-center justify-center gap-[2rem] py-[20px]">
            <div>
              <a
                href=""
                className="text-textColor text-center dark:text-white text-sm md:text-base leading-[20px] tracking-[2%]"
              >
                Terms & Conditions
              </a>
            </div>

            <div>
              <a
                href=""
                className="text-textColor text-center dark:text-white text-sm md:text-base leading-[20px] tracking-[2%]"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* copyright */}
          <p className="text-textColor text-center dark:text-white text-sm md:text-base leading-[20px] tracking-[2%]">
            &copy; Sage Consolidated, All rights reserved.
          </p>
        </div>
      </div>

      {/* Huge Sage wordmark */}
      <div className="hidden pointer-events-none select-none absolute w-full -bottom-[7rem] left-0 llg:left-[25rem] z-0 md:flex items-center justify-center">
        <span
          className="block text-[clamp(7rem,314px,314px)] font-mont font-black -skew-x-12 leading-[314px] tracking-[-7.85px] text-[#FFFFFF] opacity-[8%] text-nowrap"
          style={{
            textShadow:
              "-0.3px -0.3px 0px rgba(0,0,0,0.6), 0.3px 0.3px 0px rgba(255,255,255,0.25)",
          }}
        >
          SAGE SHIELD
        </span>
      </div>

      {/* mask image */}
      <div className="absolute top-0 left-0">
        <img src={mask} alt="" />
      </div>

      <div className="absolute top-0 right-0">
        <img src={mask1} alt="" />
      </div>

      <div className="absolute top-0 right-0">
        <img src={mask2} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
