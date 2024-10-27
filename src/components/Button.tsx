import AppHelper from "@/helpers/AppHelper";

import {ButtonHTMLAttributes, ReactNode} from "react";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({children, isLoading, className, variant = "primary", ...props}: Props) => {
  return (
    <button
      className={AppHelper.classes("btn font-medium h-3rem px-1.5rem text-base", className, {
        "btn-primary text-white": variant === "primary",
        "btn-secondary text-base-content": variant === "secondary",
        "btn-outline border-primary text-base-content hover:text-white hover:bg-primary hover:border-primary":
          variant === "outline",
        "btn-ghost hover:bg-transparent text-neutral-500 hover:text-base-content":
          variant === "ghost",
      })}
      disabled={isLoading}
      {...props}
    >
      {children}
      {isLoading ? <span className="loading loading-spinner loading-xs ms-0.25rem"></span> : null}
    </button>
  );
};

export default Button;
