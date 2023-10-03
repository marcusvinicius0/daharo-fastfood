import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export type Appearance = "default" | "standard" | "form";

interface HambProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: Appearance;
  open?: boolean;
}

export const ButtonHamb = ({
  appearance = "default",
  open = false,
  ...rest
}: HambProps) => {
  const wrapperAppearance = {
    default: "bg-gray-100",
    standard: "bg-black/20",
    form: "bg-black hidden",
  };

  const baseAppearance = {
    default: "bg-gray-500",
    standard: "bg-red-500",
    form: "bg-inherit",
  };

  const styled = {
    wrapper: clsx(
      appearance && wrapperAppearance[appearance],
      "relative rounded-full p-2 bg-gray-100 w-10 h-10"
    ),
    base: clsx(
      appearance && baseAppearance[appearance],
      "flex w-5 h-0.5 absolute right-2.5 transition-all"
    ),
    top: clsx(open && "rotate-45 top-[1.25rem]", !open && "top-3.5 rotate-0"),
    middle: clsx(open && "opacity-0 w-2", !open && "top-5 opacity-100"),
    bottom: clsx(
      open && "-rotate-[225deg] top-[1.25rem]",
      !open && "top-[1.625rem] rotate-180"
    ),
  };

  return (
    <button className={styled.wrapper} {...rest}>
      <div className={`${styled.base} ${styled.top}`} />
      <div className={`${styled.base} ${styled.middle}`} />
      <div className={`${styled.base} ${styled.bottom}`} />
    </button>
  );
};
