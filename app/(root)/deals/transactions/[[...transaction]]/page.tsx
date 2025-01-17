import React from "react";
import { fetchTransactions } from "@/app/lib/data";
import { DealViews } from "@/app/lib/definitions";
import TransactionsTableView from "@/app/ui/deals/transactions/transactions-table";

interface PageProps {
  params: Promise<{ transaction: string }>;
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { transaction } = await params; // Resolve the params promise
  const dealName = transaction?.[0];
  const dealView = transaction?.[1] as DealViews;
  const transactions = await fetchTransactions(dealName, dealView);
  // Select only specific fields dynamically
  const selectedFields = transactions.map(
    ({
      id,
      transaction,
      deal,
      instrument,
      customer,
      amount,
      paymentDate,
      status,
      nestedRows,
    }) => ({
      id,
      transaction,
      deal,
      instrument,
      customer,
      amount,
      paymentDate,
      status,
      nestedRows,
    }),
  );
  return (
    <TransactionsTableView dealName={dealName} transactions={selectedFields} />
  );
};

export default Page;
