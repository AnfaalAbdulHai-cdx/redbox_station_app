import React from "react";
import BoxDX from "./boxdx";

interface HomeBoxDXProps {
  children?: React.ReactNode;
  variant?: "header" | "ready" |  "left"  | "right" | "rightarrow"| "divider" | "card" | "DueOrders"| "section" | "playicon" | "total";
  className?: string;
}


const HomeBoxDX: React.FC<HomeBoxDXProps> = ({ children, variant, className }) => {
  let baseClass = "";

  switch (variant) {
    case "header":
      baseClass = "bg-black px-2 py-5 flex-row justify-between items-center rounded-b-xl w-full";
      break;
    case "ready":
        baseClass = "flex flex-row items-center space-x-2";
      break;
    case "divider":
      baseClass = "mt-4 w-[99%] max-w-[100%] h-[1px] bg-gray-300 self-center";
      break;
    case "left":
        baseClass = "flex-1 bg-[#E21F26] justify-center items-center";
        break;
    case "right":
      baseClass = "flex-1 bg-white justify-center items-center";
      break;
    case "card":
      baseClass = "flex flex-row items-center border border-gray-300 rounded-lg px-4 py-4 space-x-3 mt-0";
      break;
    case "DueOrders":
      baseClass = "bg-secondary-200 w-[32px] h-[27px] rounded-[50px] flex items-center justify-center";
      break;
    case "rightarrow":
      baseClass = "w-7 h-7 items-center justify-center rounded-md";
      break;
    case "section":
      baseClass = "mb-5 mt-[-30px]";
      break;
    case "playicon":
      baseClass = "w-[84px] h-[32px] border-[1px] border-secondary-950 rounded-[100px] bg-typography-50 flex-row items-center justify-center mt-0 ml-0";
      break;
    case "total":
      baseClass = "bg-secondary-200 w-[32px] h-[27px] rounded-[50px] flex items-center justify-center ml-3";
      break;
    default:
      baseClass = "";
  }

  return <BoxDX className={`${baseClass} ${className || ""}`}>{children}</BoxDX>;
};

export default HomeBoxDX;
