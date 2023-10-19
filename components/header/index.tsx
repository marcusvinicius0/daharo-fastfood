"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "../menu/index";
import { Appearance, ButtonHamb } from "./hamb";
import clsx from "clsx";

import Link from "next/link";

export default function Header({}) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [bgHeader, setBgHeader] = useState<boolean>(false);

  const ref = useRef<HTMLHeadElement>(null);

  const pathName = usePathname();

  useEffect(() => {
    const handleResize = () => {
      const height = window.scrollY || document.documentElement.scrollTop;
      const distanceY = 88;

      if (distanceY > height) {
        setBgHeader(false);
      } else {
        setBgHeader(true);
      }
    };

    window.addEventListener("scroll", handleResize);

    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  const styled = {
    header: clsx(
      openMenu && "bg-white",
      bgHeader && "bg-white shadow-sm shadow-gray-200",
      "fixed top-0 left-0 right-0 flex z-50 w-full transition-all"
    ),
    logoText: clsx(
      !openMenu && !bgHeader && "text-black",
      (openMenu || bgHeader) && "text-red-500",
      "font-semibold text-lg"
    ),
  };

  const hambAppearance = () => {
    if (openMenu) return "default";
    return "standard" as Appearance;
  };

  return (
    <header ref={ref} className={styled.header}>
      <div className="flex w-full py-4 px-6 items-center justify-between border-b border-b-white/20 sm:py-6 sm:px-12 lg:px-24">
        <Link href="/" className={styled.logoText}>
          <h4>DAHARO</h4>
        </Link>

        <ButtonHamb
          appearance={hambAppearance()}
          open={openMenu}
          onClick={() => setOpenMenu((prev) => !prev)}
        />
      </div>

      {openMenu && (
        <div className="relative flex -z-50">
          <Menu open={openMenu} setOpenMenu={setOpenMenu} />
        </div>
      )}
    </header>
  );
}
