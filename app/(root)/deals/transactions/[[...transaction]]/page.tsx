import React, { Suspense } from "react";
import { TableSkeleton } from "@/app/ui/skeletons";
import { Table } from "@/app/ui/components/table";
import { fetchTransactions } from "@/app/lib/data";

interface PageProps {
  params: Promise<{ transaction: string }>;
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { transaction } = await params; // Resolve the params promise
  const dealName = transaction?.[0];
  const dealView = transaction?.[1];
  const transactions = await fetchTransactions(dealName, dealView);
  // Select only specific fields dynamically
  const selectedFields = transactions.map(
    ({ type, deal, instrument, counterparty, amount, ccy, status }) => ({
      type,
      deal,
      instrument,
      counterparty,
      amount,
      ccy,
      status,
    }),
  );
  return (
    <div>
      <div
        className={
          "flex w-full items-center justify-between py-2 px-4  h-[50px] border-b-1 border-grey-border"
        }
      >
        <h1 className={`text-18 md:text-2xl text-grey-primary`}>
          Transactions
        </h1>
      </div>
      <div className={"p-4"}>
        <Suspense fallback={<TableSkeleton />}>
          <Table type={"transaction"} rows={selectedFields} />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
