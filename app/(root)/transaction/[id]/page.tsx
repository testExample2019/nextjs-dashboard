import React from "react";
import TransactionView from "@/app/ui/components/views/transaction-view";
import { fetchTransactionById } from "@/app/lib/data";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const transaction = await fetchTransactionById(id);
  return <TransactionView transaction={transaction} />;
};

export default Page;
