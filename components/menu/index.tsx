"use client";
import React from "react";

import { motion } from "framer-motion";
import { Route } from "next";
import NavLink from "./navLink";
import Footer from "../Footer";

type MenuProps = {
  open?: boolean;
};

const FADE_DOWN = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

const path = [
  {
    path: "/",
    label: "Início",
  },
  {
    path: "/paginas",
    label: "Páginas",
  },
  {
    path: "/menus",
    label: "Menus",
  },
  {
    path: "/comprar",
    label: "Comprar",
  },
  {
    path: "/blog",
    label: "Blog",
  },
];

export default function Menu({ open = false }: MenuProps) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className={`fixed z-10 flex flex-col gap-4 w-full justify-between bg-white inset-0 py-8 px-6  ${
        open ? "pt-24" : ""
      }`}
    >
      <div className="flex flex-col justify-center space-y-10 items-center w-full">
        <motion.ul
          variants={FADE_DOWN}
          className="flex flex-col gap-10 items-center w-full max-w-[48.37rem]"
        >
          {path.map(({ path, label }) => {
            return (
              <motion.li
                variants={FADE_DOWN}
                key={path}
                className="w-full flex items-center justify-center p-1.5 rounded-full text-gray-700 border border-gray-400/20 cursor-pointer hover:bg-slate-50/80"
              >
                <NavLink href={path as Route} label={label} />
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.ul variants={FADE_DOWN} className="w-full max-w-[48.37rem]">
          <motion.li>
            <button className="rounded-full bg-red-500 text-white shadow-md w-full h-12 hover:bg-red-500/90">
              SAIR
            </button>
          </motion.li>
        </motion.ul>

        <motion.div variants={FADE_DOWN} className="mx-auto w-full fixed bottom-0">
          <Footer />
        </motion.div>
      </div>
    </motion.div>
  );
}
