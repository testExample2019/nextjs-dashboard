import React from "react";
import TransactionView from "@/app/ui/deals/transactions/transaction-view";
import { fetchTransactionById } from "@/app/lib/data";
import DrawerClose from "@/app/ui/components/drawer-close";
import { Cross } from "@/app/ui/icons";
import { DealViews } from "@/app/lib/definitions";

export default async function TransactionDrawer({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const transaction = await fetchTransactionById(id);
  const isTransactionLender =
    transaction?.role.toLowerCase() === DealViews.Lender;

  return (
    <div>
      <DrawerClose
        children={<div className={"fixed inset-0 bg-grey-dark opacity-40"} />}
      />
      <div
        id={"transactionInnerDrawer"}
        className={
          "fixed top-0 mr-auto right-0 h-full w-[40vw] bg-white overflow-auto z-20"
        }
      >
        <div className="flex flex-col justify-between h-full pb-2">
          <div>
            <div className="flex justify-between items-center px-6 py-3 border-b border-grey-border">
              <h2 className="text-lg font-semibold text-grey-dark">
                View {transaction?.type}
              </h2>
              <DrawerClose
                children={
                  <button className="text-grey-blue cursor-pointer">
                    <Cross />
                  </button>
                }
              />
            </div>
            <TransactionView transaction={transaction} />
          </div>
          {transaction?.type === "Transaction Request" && (
            <DrawerClose
              children={
                isTransactionLender ? (
                  <div
                    id={"tour1-step19"}
                    className="flex justify-between gap-4 px-4 py-2 border-t-1 border-grey-border transition-all text-sm font-semibold"
                  >
                    <div>
                      <button className="cursor-pointer px-4 py-2 uppercase border border-red text-red rounded hover:border-action-primary hover:text-action-primary">
                        Reject
                      </button>
                    </div>
                    <div className={"flex gap-4"}>
                      <button className="cursor-pointer px-4 py-2 uppercase border border-action-primary text-action-primary rounded hover:border-blue-dark hover:text-blue-dark">
                        Contact borrower
                      </button>
                      <button className="cursor-pointer px-4 py-2 uppercase bg-action-primary text-white rounded hover:bg-blue-dark">
                        Approve & Pay
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between gap-4 px-4 py-2 border-t-1 border-grey-border transition-all text-sm font-semibold">
                    <div>
                      <button className="cursor-pointer px-4 py-2 uppercase border border-action-primary text-action-primary rounded hover:border-blue-dark hover:text-blue-dark">
                        Contact Lender
                      </button>
                    </div>
                    <button className="cursor-pointer px-4 py-2 uppercase bg-action-primary text-white rounded hover:bg-blue-dark">
                      Make Payment
                    </button>
                  </div>
                )
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}
