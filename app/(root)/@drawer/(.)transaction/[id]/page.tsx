import React from "react";
import TransactionView from "@/app/ui/components/views/transaction-view";
import { fetchTransactionById } from "@/app/lib/data";
import DrawerClose from "@/app/ui/components/drawer-close";
import { Cross } from "@/app/ui/icons";

export default async function TransactionDrawer({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const transaction = await fetchTransactionById(id);
  return (
    <>
      <DrawerClose
        children={
          <div className={"fixed inset-0 bg-[#4E4B4B] bg-opacity-40"} />
        }
      />
      <div
        className={
          "fixed top-0 mr-auto right-0 h-full w-[35vw] bg-white overflow-auto"
        }
      >
        <div className="flex flex-col justify-between h-full pb-2">
          <div>
            <div className="flex justify-between items-center px-6 py-3">
              <h2 className="text-lg font-semibold">View Transaction</h2>
              <DrawerClose
                children={
                  <button className="text-grey-blue ">
                    <Cross />
                  </button>
                }
              />
            </div>
            <TransactionView transaction={transaction} />
          </div>

          {transaction?.type === "Drawdown" && (
            <DrawerClose
              children={
                <div className="flex justify-end space-x-4 px-4 py-2 border-t-1 border-grey-border">
                  <button className="px-4 py-2 uppercase border border-red text-red rounded-md hover:border-action-primary hover:text-action-primary">
                    Reject
                  </button>
                  <button className="px-4 py-2 uppercase bg-action-primary text-white rounded-md hover:bg-blue-dark">
                    Approve
                  </button>
                </div>
              }
            />
          )}
        </div>
      </div>
    </>
  );
}
