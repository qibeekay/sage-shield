import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

interface ButtonProps {
  name: string;
  image?: string;
}

const Button = ({ name, image }: ButtonProps) => {
  return (
    <button className="flex items-center gap-[10px] brand-gradient text-[#030001] font-medium text-[20px] tracking-[1%] leading-[20px] py-4 px-6 rounded-[66px] shadow-b cursor-pointer w-full">
      {name}

      {image && (
        <div>
          <img src={getImageSrc(image)} alt="" />
        </div>
      )}
    </button>
  );
};

export default Button;
