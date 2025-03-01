"use client";

import { JSX } from "react";

interface IButtonProps {
  text: string;
  textStyles?: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  buttonStyles?: string;
  onClick?: () => void;
}

function Button({
  text,
  textStyles,
  startIcon,
  endIcon,
  buttonStyles,
  onClick,
}: IButtonProps) {
  return (
    <button
      className={`flex items-center gap-1 p-2 rounded-md cursor-[pointer] ${buttonStyles}`}
      onClick={onClick}
    >
      {startIcon}
      <span className={`text-[14px] font-[500] ${textStyles}`}>{text}</span>
      {endIcon}
    </button>
  );
}

export default Button;
