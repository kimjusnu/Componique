"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface SelectProps {
  placeholder?: string;
  option: string[];
  color?: "red" | "blue" | "green" | "gray";
  onChange?: (value: string) => void;
  onClick?: (value: string) => void;
  className?: string;
}

const colorClasses = {
  red: "border-[#FF7676] focus:ring-[#FF7676] dark:border-[#FF7676] dark:focus:ring-[#FF7676]",
  blue: "border-[#7AA7FF] focus:ring-[#7AA7FF] dark:border-[#7AA7FF] dark:focus:ring-[#7AA7FF] ",
  green:
    "border-[#7EEFAF] focus:ring-[#7EEFAF] dark:border-[#7EEFAF] dark:focus:ring-[#7EEFAF]",
  gray: "border-[#DCDCDD] dark:border-[#DCDCDD] focus:ring-[#DCDCDD] dark:focus:ring-[#DCDCDD] ",
};

const Select = ({
  option,
  color = "gray",
  placeholder,
  onChange,
  onClick,
  className,
}: SelectProps) => {
  const [selectValue, setSelectValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const dropMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      if (
        open &&
        dropMenuRef.current &&
        !dropMenuRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClose);

    return () => document.removeEventListener("click", handleOutsideClose);
  }, [open]);

  const handleDropDown = () => {
    setOpen(!open);
  };

  const handleOptionClick = (item: string) => {
    setSelectValue(item);
    setOpen(false);
    if (onChange) {
      onChange(item);
    }
    if (onClick) {
      onClick(item);
    }
  };

  return (
    <>
      <div className={`relative w-60 ${className}`} ref={dropMenuRef}>
        <div
          className={`flex h-9 w-full cursor-pointer items-center justify-between rounded-lg border dark:border-[#2A6490] dark:bg-[#2a2e39] ${colorClasses[color]} p-2 shadow-lg`}
          onClick={handleDropDown}
        >
          <span className="text-sm font-semibold">
            {selectValue || placeholder}
          </span>
          <Image
            src={open ? "/selectUp.svg" : "/selectDown.svg"}
            alt="arrow"
            width={15}
            height={15}
          />
        </div>
        {open && (
          <ul
            className={`absolute left-0 right-0 top-full m-0 rounded-lg border bg-white p-0 dark:bg-[#2a2e39] ${colorClasses[color]} z-30 text-xs shadow-lg`}
          >
            {option.map((item, key) => (
              <li
                className={`m-0 block w-full cursor-pointer rounded-lg py-2 pl-4 text-sm hover:bg-[#E8F5FF] dark:hover:bg-[#2A6490] dark:hover:text-white ${
                  selectValue === item
                    ? "bg-[#E8F5FF] dark:bg-[#2A6490] dark:text-white"
                    : ""
                }`}
                key={key}
                onClick={() => handleOptionClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Select;
