import React, { Suspense } from "react";
import { TableSkeleton } from "@/app/ui/skeletons";
import { Table } from "@/app/ui/components/table";
import { fetchDocuments } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { DealViews } from "@/app/lib/definitions";
import { ChevronLeft } from "@/app/ui/icons";
import { handleDisplayCorrectDealName } from "@/app/lib/utils";

interface PageProps {
  params: Promise<{ document: string }>;
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { document } = await params; // Resolve the params promise
  const dealName = document?.[0];
  const dealView = document?.[1] as DealViews;
  const documents = await fetchDocuments(dealName, dealView);

  const selectedFields = documents?.map(
    ({
      id,
      document,
      transaction,
      subType,
      customer,
      documentDate,
      status,
      nestedRows,
    }) => ({
      id,
      document,
      transaction,
      subType,
      customer,
      documentDate,
      status,
      nestedRows,
    }),
  );

  if (!documents || !selectedFields || !documents.length) {
    notFound();
  }
  return (
    <section id="tour1-step24">
      <div
        className={
          "flex w-full items-center justify-between py-2 px-4 h-[50px] border-b-1 border-grey-border"
        }
      >
        <h1
          className={`text-18 w-full text-grey-primary font-semibold flex items-center gap-2`}
        >
          Documents
          <ChevronLeft />
          <span className={"capitalize"}>
            {handleDisplayCorrectDealName(dealName)}
          </span>
        </h1>
      </div>
      <div className={"p-4"}>
        <Suspense fallback={<TableSkeleton />}>
          <Table type={"document"} rows={selectedFields} />
        </Suspense>
      </div>
    </section>
  );
};

export default Page;
