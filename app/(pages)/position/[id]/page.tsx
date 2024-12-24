import React from "react";
import TransactionView from "@/app/ui/components/transaction-view";
import { fetchPositionById } from "@/app/lib/data";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const position = await fetchPositionById(id);
  return <TransactionView transaction={position} />;
};

export default Page;
