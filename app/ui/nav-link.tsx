"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }: any) => {
  const path = usePathname();
  return (
    <Link className={path.includes(href) ? "active" : ""} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
