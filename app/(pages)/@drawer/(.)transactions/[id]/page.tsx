import React from "react";
import ModalBackdrop from "@/app/ui/components/modal-backdrop";

export default async function TransactionDrawer({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <>
      <ModalBackdrop />
      <dialog
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform transform ${
          true ? "translate-x-0" : "translate-x-full"
        }`}
        open
      >
        <div>{id}</div>
      </dialog>
    </>
  );
}
