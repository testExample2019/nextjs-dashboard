import React from "react";
import TransactionView from "@/app/ui/components/views/transaction-view";
import { fetchPositionById } from "@/app/lib/data";
import DrawerClose from "@/app/ui/components/drawer-close";
import PositionView from "@/app/ui/components/views/position-view";
import { Cross } from "@/app/ui/icons";

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
      <div className={"fixed top-0 mr-auto right-0 h-full w-[35vw] bg-white"}>
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
        <PositionView position={position} />
      </div>
    </>
  );
}
