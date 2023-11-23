"use client";

import Image from "next/image";
import { Input } from "../../ui/input";

interface CustomInputProps {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses: string;
}

const LocalSearchBar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: CustomInputProps) => {
  return (
    <div className="relative flex w-full flex-row gap-4 max-sm:flex-col">
      <div
        className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
      >
        {iconPosition === "left" && (
          <Image
            src={imgSrc}
            alt="search"
            height={24}
            width={24}
            className="cursor-pointer"
          />
        )}
        <Input
          type="text"
          placeholder={placeholder}
          value=""
          onChange={() => {}}
          className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
        />
        {iconPosition === "right" && (
          <Image
            src={imgSrc}
            alt="search"
            height={24}
            width={24}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};
export default LocalSearchBar;
