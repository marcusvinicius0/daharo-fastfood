import { Route } from "next";
import Link from "next/link";
import React from "react";

type NavLinkProps = {
  href: Route<string> | URL;
  label: string;
  onClick: () => void;
};

export const NavLink = ({ label, href }: NavLinkProps) => {
  return (
    <Link href={href} passHref legacyBehavior className="w-full">
      {label}
    </Link>
  );
};
