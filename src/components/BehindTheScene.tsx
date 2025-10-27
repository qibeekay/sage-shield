import { getImageSrc } from "../utils/imageUtils";
import { useTheme } from "../theme/useTheme";
import { timelines } from "../utils/constants";
import { Timeline } from "./props/Timeline";

const BehindTheScene = () => {
  const { theme } = useTheme();

  // fetches the mode of the system
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <div className=" text-textColor dark:text-white">
      {/* structure */}
      <div className="relative">
        {/* arcs */}
        <div className="absolute left-7 top-[50%] -translate-y-[50%] inset-0">
          {/* outer arc */}
          <div className="relative">
            <div>
              <img src={getImageSrc("outerArc.png")} alt="" />
            </div>

            {/* inner arc */}
            <div className="absolute inset-0">
              <img src={getImageSrc("innerArc.png")} alt="" />
            </div>
          </div>
        </div>

        {/* dashed timelines */}
        <div className="">
          <div className="relative">
            {/* dashed arc */}
            <div>
              <img
                src={getImageSrc(`${isDark ? "dashed.png" : "dashedL.png"}`)}
                alt=""
              />
            </div>

            {/* timelines */}
            {timelines.map((s) => (
              <Timeline
                key={s.id}
                top={s.top}
                left={s.left}
                title={s.title}
                body={s.body}
                cardLeft={s.cardleft}
                cardTop={s.cardtop}
                imgLight={s.imgLight}
                imgDark={s.imgDark}
                number={
                  s.id === 1
                    ? "one"
                    : s.id === 2
                    ? "two"
                    : s.id === 3
                    ? "three"
                    : s.id === 4
                    ? "four"
                    : "five"
                }
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehindTheScene;
