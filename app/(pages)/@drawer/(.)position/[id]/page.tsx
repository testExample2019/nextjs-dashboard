import React from "react";
import ModalBackdrop from "@/app/ui/components/modal-backdrop";
import TransactionView from "@/app/ui/components/transaction-view";
import { fetchTransactionById } from "@/app/lib/data";

export default async function TransactionDrawer({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const transaction = await fetchTransactionById(id);
  return (
    <>
      <ModalBackdrop />
      <div className={"fixed top-0 mr-auto right-0 h-full w-[30vw] bg-white"}>
        <TransactionView transaction={transaction} />
      </div>
    </>
  );
}
