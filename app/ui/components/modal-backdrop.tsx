"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ModalBackdrop = () => {
  const router = useRouter();
  return (
    <div
      onClick={router.back}
      className={
        "fixed inset-0 bg-black bg-opacity-85 flex justify-center items-center"
      }
    />
  );
};

export default ModalBackdrop;
