import React from "react";
import TransactionView from "@/app/ui/components/transaction-view";
import { fetchPositionById } from "@/app/lib/data";
import DrawerClose from "@/app/ui/components/drawer-close";

export default async function PositionDrawer({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const position = await fetchPositionById(id);
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
              <button className="text-gray-500 hover:text-gray-800">
                &times;
              </button>
            }
          />
        </div>
        <></>
      </div>
    </>
  );
}
