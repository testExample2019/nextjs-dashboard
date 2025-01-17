import React, { Suspense } from "react";
import { TableSkeleton } from "@/app/ui/skeletons";
import { Table } from "@/app/ui/components/table";
import { fetchTransactions } from "@/app/lib/data";
import { DealType, DealViews } from "@/app/lib/definitions";
import { ChevronLeft } from "@/app/ui/icons";

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
      transaction,
      deal,
      instrument,
      customer,
      amount,
      paymentDate,
      status,
      nestedRows,
    }) => ({
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
    <div>
      <div
        className={
          "flex w-full items-center justify-between py-2 px-4  h-[50px] border-b-1 border-grey-border"
        }
      >
        <h1
          className={`text-18 w-full text-grey-primary flex items-center gap-2`}
        >
          Transactions
          <ChevronLeft />
          <span className={"capitalize"}>{dealName}</span>
        </h1>
        <div className="flex items-center space-x-3">
          <span className="text-13 text-grey-primary flex items-center gap-1 whitespace-nowrap">
            Show Scheduled Transactions
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-10 h-4 bg-[#21212170] rounded-full peer peer-checked:bg-purple-o"></div>
            <div className="absolute w-6 h-6 bg-white rounded-full shadow-md transform transition peer-checked:translate-x-4 peer-checked:bg-purple"></div>
          </label>
        </div>
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
