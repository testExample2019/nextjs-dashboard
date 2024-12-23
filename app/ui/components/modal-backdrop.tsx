"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ModalBackdrop = () => {
  const router = useRouter();
  return (
    <div
      onClick={router.back}
      className={
        "fixed inset-0 bg-[#4E4B4B] bg-opacity-40"
      }
    />
  );
};

export default ModalBackdrop;
