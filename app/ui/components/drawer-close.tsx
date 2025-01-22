"use client";
import React from "react";
import { useRouter } from "next/navigation";

const DrawerClose = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return <div onClick={router.back}>{children}</div>;
};

export default DrawerClose;
