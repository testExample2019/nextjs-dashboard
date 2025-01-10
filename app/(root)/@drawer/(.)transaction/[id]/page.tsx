import React from "react";
import TransactionView from "@/app/ui/components/transaction-view";
import { fetchTransactionById } from "@/app/lib/data";
import DrawerClose from "@/app/ui/components/drawer-close";

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
      <div className={"fixed top-0 mr-auto right-0 h-full w-[30vw] bg-white"}>
        <div className="flex justify-between items-center px-6 py-3">
          <h2 className="text-lg font-semibold">View Transaction</h2>
          <DrawerClose
            children={
              <button className="text-grey-blue ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13.4688 12L16.8438 8.65625C17.0312 8.46875 17.0312 8.125 16.8438 7.9375L16.0625 7.15625C15.875 6.96875 15.5312 6.96875 15.3438 7.15625L12 10.5312L8.625 7.15625C8.4375 6.96875 8.09375 6.96875 7.90625 7.15625L7.125 7.9375C6.9375 8.125 6.9375 8.46875 7.125 8.65625L10.5 12L7.125 15.375C6.9375 15.5625 6.9375 15.9062 7.125 16.0938L7.90625 16.875C8.09375 17.0625 8.4375 17.0625 8.625 16.875L12 13.5L15.3438 16.875C15.5312 17.0625 15.875 17.0625 16.0625 16.875L16.8438 16.0938C17.0312 15.9062 17.0312 15.5625 16.8438 15.375L13.4688 12Z"
                    fill="#6B98A2"
                  />
                </svg>
              </button>
            }
          />
        </div>
        <div className="flex flex-col justify-between ">
          <TransactionView transaction={transaction} />

          <DrawerClose
            children={
              <div className="flex justify-end space-x-4 px-4">
                <button className="px-4 py-2 uppercase border border-red text-red rounded-md hover:bg-grey-lighter">
                  Reject
                </button>
                <button className="px-4 py-2 uppercase bg-action-primary text-white rounded-md hover:bg-blue-dark">
                  Approve
                </button>
              </div>
            }
          ></DrawerClose>
        </div>
      </div>
    </>
  );
}
