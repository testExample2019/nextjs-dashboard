import React from "react";
import { fetchDocumentById } from "@/app/lib/data";
import DrawerClose from "@/app/ui/components/drawer-close";
import { Cross } from "@/app/ui/icons";
import DocumentView from "@/app/ui/components/views/document-view";

export default async function PositionDrawer({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const document = await fetchDocumentById(id);
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
        <div className="flex justify-between items-center px-6 py-3 ">
          <h2 className="text-lg font-semibold">View Document</h2>
          <DrawerClose
            children={
              <button className="text-grey-blue ">
                <Cross />
              </button>
            }
          />
        </div>
        <DocumentView document={document} />
      </div>
    </>
  );
}
