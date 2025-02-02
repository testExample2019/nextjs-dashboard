import React, { Suspense } from "react";
import { TableSkeleton } from "@/app/ui/skeletons";
import { Table } from "@/app/ui/components/table";
import { ChevronLeft } from "@/app/ui/icons";
import { handleDisplayCorrectDealName } from "@/app/lib/utils";
import { fetchInstruments } from "@/app/lib/data";
import { DealViews } from "@/app/lib/definitions";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ instrument: string }>;
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { instrument } = await params; // Resolve the params promise
  const dealName = instrument?.[0];
  const dealView = instrument?.[1] as DealViews;
  const instruments = await fetchInstruments(dealName, dealView);

  const selectedFields = instruments?.map(
    ({
      id,
      deal,
      instrument,
      type,
      subType,
      ccy,
      issueDate,
      maturityDate,
      status,
    }) => ({
      id,
      deal,
      instrument,
      type,
      subType,
      ccy,
      issueDate,
      maturityDate,
      status,
    }),
  );

  if (!instruments || !selectedFields || !instruments.length) {
    notFound();
  }

  return (
    <section id="tour1-step22">
      <div
        className={
          "flex w-full items-center justify-between py-2 px-4 h-[50px] border-b-1 border-grey-border"
        }
      >
        <h1
          className={`text-subtitle w-full text-grey-primary font-semibold flex items-center gap-2`}
        >
          Instruments
          <ChevronLeft />
          <span className={"uppercase"}>
            {handleDisplayCorrectDealName(dealName)}
          </span>
        </h1>
      </div>
      <div className={"p-4"}>
        <Suspense fallback={<TableSkeleton />}>
          <Table type={"instrument"} rows={selectedFields} />
        </Suspense>
      </div>
    </section>
  );
};

export default Page;
