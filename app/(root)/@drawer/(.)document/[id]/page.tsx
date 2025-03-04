import React from "react";
import { fetchDocumentById } from "@/app/lib/data";
import DrawerClose from "@/app/ui/components/drawer-close";
import { Cross } from "@/app/ui/icons";
import DocumentView from "@/app/ui/deals/documents/document-view";

export default async function PositionDrawer({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const document = await fetchDocumentById(id);
  return (
    <>
      <DrawerClose>
        <div className={"fixed inset-0 bg-grey-dark opacity-40"} />
      </DrawerClose>
      <div
        className={
          "fixed top-0 mr-auto right-0 h-full w-[40vw] bg-white overflow-auto z-20"
        }
      >
        <div className="flex justify-between items-center px-6 py-3 border-b border-grey-border">
          <h2 className="text-lg font-semibold text-grey-dark ">
            View Document
          </h2>
          <DrawerClose>
            <button className="text-grey-blue cursor-pointer">
              <Cross />
            </button>
          </DrawerClose>
        </div>
        <DocumentView document={document} />
      </div>
    </>
  );
}
