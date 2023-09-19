import React from "react";

type MenuProps = {
  open?: boolean;
};

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Menu({ open = false }: MenuProps) {
  return (
    <motion.div
      initial={{
        y: -30,
        opacity: 0,
      }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full z-[999px] fixed bottom-0 top-20 left-0 right-0 h-full bg-zinc-50"
    >
      <div className="flex flex-col space-y-20">
        <nav className="mt-5">
          <ul className="flex flex-col items-center gap-8 text-bold">
            <Link
              href="/"
              className="bg-slate-50/80 w-11/12 h-10 flex justify-center rounded text-black text-bold shadow-sm"
            >
              <li className="flex items-center gap-1 active:text-red-500">
                Home
                <ChevronDownIcon className="w-3 h-3" />
              </li>
            </Link>
            <Link
              href="/"
              className="bg-slate-50/80 w-11/12 h-10 flex justify-center rounded text-black text-bold shadow-sm"
            >
              <li className="flex items-center gap-1 active:text-red-500">
                Pages
                <ChevronDownIcon className="w-3 h-3" />
              </li>
            </Link>
            <Link
              href="/"
              className="bg-slate-50/80 w-11/12 h-10 flex justify-center rounded text-black text-bold shadow-sm"
            >
              <li className="flex items-center gap-1 active:text-red-500">
                Menus
                <ChevronDownIcon className="w-3 h-3" />
              </li>
            </Link>
            <Link
              href="/"
              className="bg-slate-50/80 w-11/12 h-10 flex justify-center rounded text-black text-bold shadow-sm"
            >
              <li className="flex items-center gap-1 active:text-red-500">
                Shop
                <ChevronDownIcon className="w-3 h-3" />
              </li>
            </Link>
            <Link
              href="/"
              className="bg-slate-50/80 w-11/12 h-10 flex justify-center rounded text-black text-bold shadow-sm"
            >
              <li className="flex items-center gap-1 active:text-red-500">
                Blog
                <ChevronDownIcon className="w-3 h-3" />
              </li>
            </Link>
          </ul>
        </nav>

        <span className="flex flex-col justify-center items-center space-y-6">
          <button className="bg-[#EC3D08] text-white p-3 rounded-xl w-48 hover:bg-[#EC3D08]/90 shadow-sm">
            Login
          </button>
          <span className="text-xs text-center text-gray-700 hover:opacity-90 font-semibold">
            <Link href="/">Não possui uma conta? Cadastre-se agora!</Link>
          </span>
        </span>

        <footer className="w-full fixed bottom-0 pb-2">
          <hr className="border-gray-200" />

          <div className="flex flex-col justify-center mt-6 space-y-4">
            <span className="mx-auto">
              <h2 className="font-semibold">Daharo - Food Delivery</h2>
            </span>

            <div className="flex justify-center">
              <p className="font-normal text-sm tracking-wide text-gray-500">
                © 2023 - Todos os direitos reservados
              </p>
            </div>
          </div>
        </footer>
      </div>
    </motion.div>
  );
}
