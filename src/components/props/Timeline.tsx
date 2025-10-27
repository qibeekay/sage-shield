import { getImageSrc } from "../../utils/imageUtils";

// Step.tsx
type Props = {
  top: string;
  left: string;
  title: string;
  cardLeft: string;
  cardTop: string;
  body: string;
  imgLight: string;
  imgDark: string;
  number: "one" | "two" | "three" | "four" | "five";
  isDark: boolean;
};

export const Timeline = ({
  top,
  left,
  title,
  body,
  imgLight,
  imgDark,
  number,
  isDark,
  cardTop,
  cardLeft,
}: Props) => {
  const numImg = isDark
    ? getImageSrc(`${number}.png`)
    : getImageSrc(`${number}L.png`);
  const cardImg = isDark ? getImageSrc(imgDark) : getImageSrc(imgLight);

  return (
    <div className="absolute" style={{ top, left }}>
      <div className="relative">
        {/* number circle */}
        <div className="relative z-10">
          <div className="w-full h-full">
            <img className="w-full h-full" src={numImg} alt="" />
          </div>
        </div>

        {/* card */}
        <div className="absolute" style={{ top: cardTop, left: cardLeft }}>
          <div className="w-[433px] flex items-center gap-6 border-2 bg-[#FA4F191C] border-[#FA4F1938] dark:border-[#FFFFFF38] backdrop-blur-[4px] dark:bg-[#FFFFFF14] rounded-full py-5 px-11">
            <div className="flex-1">
              <h3 className="font-medium text-[20px] tracking-[2%] leading-none">
                {title}
              </h3>
              <p className="text-xs leading-[18px] mt-2 font-normal">{body}</p>
            </div>

            <div>
              <div className="">
                <img className="w-full h-full" src={cardImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
