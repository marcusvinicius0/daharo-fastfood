import React, { ComponentProps, forwardRef } from "react";
import clsx from "clsx";

type InputProps = ComponentProps<"input"> & {
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, error, ...props }, ref) => {
    const styled = {
      root: "flex flex-col gap-1 w-full border-none",
      input: clsx(
        props.className,
        "flex w-full h-full py-4 px-6 rounded-semifull border border-solid border-gray-200 font-inter text-md text-gray-500 font-medium placeholder-gray-500 placeholder-gray-400 placeholder:text-sm outline-white outline-1 transition-colors hover:border-red-500 focus:outline-red-500"
      ),
      error: "text-sm text-red-500 font-red-hat font-semibold",
    };

    return (
      <div className={styled.root}>
        <input ref={ref} name={name} className={styled.input} {...props} />
        {error && <p className={styled.error}>{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
