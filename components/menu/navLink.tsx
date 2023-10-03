import { Route } from "next";
import Link from "next/link";
import React from "react";

type NavLinkProps = {
  href: Route<string> | URL;
  label: string;
};

export default function NavLink({ label, href }: NavLinkProps) {
  return (
    <div>
      <Link href={href} passHref legacyBehavior>
        {label}
      </Link>
    </div>
  );
}
