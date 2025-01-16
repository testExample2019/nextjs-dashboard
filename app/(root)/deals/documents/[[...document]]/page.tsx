import React, { Suspense } from "react";
import { TableSkeleton } from "@/app/ui/skeletons";
import { Table } from "@/app/ui/components/table";
import { fetchDocuments } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { DealViews } from "@/app/lib/definitions";

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
      documentName,
      documentType,
      documentSubType,
      deal,
      transaction,
      transactionDate,
      amount,
      documentDate,
      status,
    }) => ({
      documentName,
      documentType,
      documentSubType,
      deal,
      transaction,
      transactionDate,
      amount,
      documentDate,
      status,
    }),
  );

  if (!documents || !selectedFields || !documents.length) {
    notFound();
  }
  return (
    <div>
      <div
        className={
          "flex w-full items-center justify-between py-2 px-4  h-[50px] border-b-1 border-grey-border"
        }
      >
        <h1 className={`text-18 md:text-2xl text-grey-primary`}>Documents</h1>
      </div>
      <div className={"p-4"}>
        <Suspense fallback={<TableSkeleton />}>
          <Table type={"document"} rows={selectedFields} />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
