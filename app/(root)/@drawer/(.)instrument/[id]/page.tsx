import React from "react";
import { fetchInstrumentById } from "@/app/lib/data";
import DrawerClose from "@/app/ui/components/drawer-close";
import { Cross } from "@/app/ui/icons";
import InstrumentView from "@/app/ui/deals/instruments/instrument-view";

export default async function InstrumentDrawer({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const instrument = await fetchInstrumentById(id);

  return (
    <>
      <DrawerClose
        children={
          <div className={"fixed inset-0 bg-grey-dark bg-opacity-40"} />
        }
      />
      <div
        id={"instrumentDrawer"}
        className={
          "fixed top-0 mr-auto right-0 h-full w-[40vw] bg-white overflow-auto"
        }
      >
        <div className="flex flex-col justify-between h-full pb-2">
          <div>
            <div className="flex justify-between items-center px-6 py-3 border-b border-grey-border">
              <h2 className="text-lg font-semibold text-grey-dark">
                View Instrument
              </h2>
              <DrawerClose
                children={
                  <button className="text-grey-blue ">
                    <Cross />
                  </button>
                }
              />
            </div>
            <InstrumentView instrument={instrument} />
          </div>
        </div>
      </div>
    </>
  );
}
