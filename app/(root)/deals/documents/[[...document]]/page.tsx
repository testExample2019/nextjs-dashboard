import React, { Suspense } from "react";
import { TableSkeleton } from "@/app/ui/skeletons";
import { Table } from "@/app/ui/components/table";
import { fetchDocuments } from "@/app/lib/data";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ document: string }>;
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { document } = await params; // Resolve the params promise
  const dealName = document?.[0];
  const dealView = document?.[1];
  const documents = await fetchDocuments(dealName, dealView);

  if (!documents || !documents.length) {
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
          <Table type={"document"} rows={documents} />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
