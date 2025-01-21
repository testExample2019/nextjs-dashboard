import React from "react";
import TransactionView from "@/app/ui/deals/transactions/transaction-view";
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
  const isTransactionLender = transaction?.role === "Lender";

  return (
    <>
      <DrawerClose
        children={
          <div className={"fixed inset-0 bg-[#4E4B4B] bg-opacity-40"} />
        }
      />
      <div
        className={
          "fixed top-0 mr-auto right-0 h-full w-[40vw] bg-white overflow-auto"
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
          {transaction?.status === "Pending" && (
            <DrawerClose
              children={
                isTransactionLender ? (
                  <div className="flex justify-between gap-4 px-4 py-2 border-t-1 border-grey-border transition-all">
                    <div>
                      <button className="px-4 py-2 uppercase border border-red text-red rounded-md hover:border-action-primary hover:text-action-primary">
                        Reject
                      </button>
                    </div>
                    <div className={"flex gap-4"}>
                      <button className="px-4 py-2 uppercase border border-action-primary text-action-primary rounded-md hover:border-blue-dark hover:text-blue-dark">
                        Contact borrower
                      </button>
                      <button className="px-4 py-2 uppercase bg-action-primary text-white rounded-md hover:bg-blue-dark">
                        Approve & Pay
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between gap-4 px-4 py-2 border-t-1 border-grey-border transition-all">
                    <div>
                      <button className="px-4 py-2 uppercase border border-action-primary text-action-primary rounded-md hover:border-blue-dark hover:text-blue-dark">
                        Contact Lender
                      </button>
                    </div>
                    <button className="px-4 py-2 uppercase bg-action-primary text-white rounded-md hover:bg-blue-dark">
                      Make Payment
                    </button>
                  </div>
                )
              }
            />
          )}
        </div>
      </div>
    </>
  );
}
