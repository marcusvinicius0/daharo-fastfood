"use client";
type Props = {};

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Menu from "../Menu";

export default function Header({}: Props) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <header className="w-full h-20 shadow-md">
      <div className="flex justify-between items-center h-full px-3">
        <p className="text-red-400 font-bold">DAHARO</p>

        <button onClick={(e) => setOpenMenu(!openMenu)}>
          {openMenu ? (
            <XMarkIcon className="text-red-500 w-8 h-8" />
          ) : (
            <Bars3Icon className="text-red-500 w-8 h-8" />
          )}
        </button>
      </div>

      {openMenu && <Menu open={openMenu} />}
    </header>
  );
}
