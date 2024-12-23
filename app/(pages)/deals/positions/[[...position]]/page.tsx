import React, { Suspense } from "react";
import { TableSkeleton } from "@/app/ui/skeletons";
import { Table } from "@/app/ui/components/table";
import ViewsNav from "@/app/ui/deals/dashboard/views-nav";
import { fetchPositions } from "@/app/lib/data";

const Page = async ({ params }: { params: Promise<{ position: string }> }) => {
  const { position } = await params; // Resolve the params promise
  const dealName = position?.[0];
  const dealView = position?.[1];
  const positions = await fetchPositions(dealName, dealView);

  return (
    <div>
      <div
        className={
          "flex w-full items-center justify-between py-2 px-4  h-[50px] border-b-1 border-grey-border"
        }
      >
        <h1 className={`text-18 md:text-2xl`}>Positions</h1>
        <div id={"tour1-step3"} className={`inline-flex items-center`}>
          <span className={" inline-flex text-sm text-grey mr-3"}>View</span>
          <ViewsNav />
        </div>
      </div>
      <div className={"p-4"}>
        <Suspense fallback={<TableSkeleton />}>
          <Table rows={positions} />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
