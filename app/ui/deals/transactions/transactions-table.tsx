"use client";
import React, { Suspense, useEffect, useState } from "react";
import { TableSkeleton } from "@/app/ui/skeletons";
import { Table } from "@/app/ui/components/table";
import { ChevronLeft } from "@/app/ui/icons";
import { TransactionType } from "@/app/lib/definitions";
import { handleDisplayCorrectDialName } from "@/app/lib/utils";

type TransactionsTableViewProps = {
  dealName: string;
  transactions: TransactionsTableViewType[];
};

type TransactionsTableViewType = Pick<
  TransactionType,
  | "id"
  | "transaction"
  | "deal"
  | "instrument"
  | "customer"
  | "amount"
  | "paymentDate"
  | "status"
  | "nestedRows"
>;

const TransactionsTableView = ({
  dealName,
  transactions,
}: TransactionsTableViewProps) => {
  const hideScheduledTransactions = transactions.filter(
    (transaction) => transaction.status !== "Scheduled",
  );
  const [transactionsRows, setTransactionsRows] = useState(
    hideScheduledTransactions,
  );
  const [showScheduledTransactions, setShowScheduledTransactions] =
    useState(false);

  useEffect(() => {
    showScheduledTransactions
      ? setTransactionsRows(transactions)
      : setTransactionsRows(hideScheduledTransactions);
  }, [showScheduledTransactions]);
  return (
    <section id="tour1-step5-14">
      <div
        className={
          "flex w-full items-center justify-between py-2 px-4  h-[50px] border-b-1 border-grey-border"
        }
      >
        <h1
          className={`text-18 w-full text-grey-primary font-semibold flex items-center gap-2`}
        >
          Transactions
          <ChevronLeft />
          <span className={"capitalize"}>
            {handleDisplayCorrectDialName(dealName)}
          </span>
        </h1>
        <div className="flex items-center space-x-3">
          <span className="text-13 text-grey-primary flex items-center gap-1 whitespace-nowrap">
            Show Scheduled Transactions
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              onChange={() =>
                setShowScheduledTransactions(!showScheduledTransactions)
              }
              checked={showScheduledTransactions}
              type="checkbox"
              className="sr-only peer"
            />
            <div className="w-10 h-4 bg-[#21212170] rounded-full peer peer-checked:bg-purple-o"></div>
            <div className="absolute w-6 h-6 bg-white rounded-full shadow-md transform transition peer-checked:translate-x-4 peer-checked:bg-purple"></div>
          </label>
        </div>
      </div>
      <div className={"p-4"}>
        <Suspense fallback={<TableSkeleton />}>
          <Table type={"transaction"} rows={transactionsRows} />
        </Suspense>
      </div>
    </section>
  );
};

export default TransactionsTableView;
