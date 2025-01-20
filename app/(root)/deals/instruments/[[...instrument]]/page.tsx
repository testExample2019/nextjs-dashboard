import React, { Suspense } from "react";
import { TableSkeleton } from "@/app/ui/skeletons";
import { Table } from "@/app/ui/components/table";
import { ChevronLeft } from "@/app/ui/icons";
import { handleDisplayCorrectDialName } from "@/app/lib/utils";

interface PageProps {
  params: Promise<{ instrument: string }>;
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { instrument } = await params; // Resolve the params promise
  const dealName = instrument?.[0];

  return (
    <div>
      <div
        className={
          "flex w-full items-center justify-between py-2 px-4  h-[50px] border-b-1 border-grey-border"
        }
      >
        <h1
          className={`text-18 w-full text-grey-primary flex items-center gap-2`}
        >
          Instruments
          <ChevronLeft />
          <span className={"capitalize"}>
            {handleDisplayCorrectDialName(dealName)}
          </span>
        </h1>
      </div>
      <div className={"p-4"}>
        <Suspense fallback={<TableSkeleton />}>
          <Table type={"instrument"} rows={[]} />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
