"use client";
import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-md ${className}`}>
      {children}
    </button>
  );
};

export default Button;
