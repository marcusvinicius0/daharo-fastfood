import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: boolean;
  size?: "sm" | "md" | "lg";
  label?: string;
  rounded?: "md" | "full";
  loading?: boolean;
  appearance?: "gray" | "white" | "primary";
}

const sizes = {
  sm: "py-2 px-6 h-10",
  md: "py-3 px-8 h-12 font-semibold",
  lg: "py-4 px-8 h-14 font-semibold sm:px-10",
};

const rounds = {
  md: "rounded-lg",
  full: "rounded-full",
};

const sizeIcons = {
  sm: "w-10 !p-0",
  md: "w-12 !p-0",
  lg: "w-14 !p-0",
};

const appearances = {
  gray: "border-gray-200 text-gray-500",
  white: "bg-white text-blue border-white",
  primary: "text-white bg-primary border-primary",
};

const Button = ({
  icon = false,
  size = "lg",
  type = "button",
  label,
  rounded = "full",
  loading,
  disabled,
  children,
  className,
  appearance = "gray",
  ...rest
}: ButtonProps) => {
  const styled = clsx(
    className,
    sizes[size],
    rounds[rounded],
    icon && sizeIcons[size],
    appearances[appearance],
    disabled && "bg-gray-400 border-gray-400 cursor-not-allowed",
    "flex items-center justify-center text-md transition-all duration-300 ease-in-out border border-solid"
  );

  return (
    <button
      {...rest}
      type={type === "submit" ? "submit" : "button"}
      disabled={disabled}
      className={styled}
    >
      {/* {loading ? <Spinner /> : label || children} */}
      {label || children}
    </button>
  );
};

export default Button;
