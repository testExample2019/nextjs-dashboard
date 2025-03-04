import React, { Suspense } from "react";
import {
  CovenantsTrackingSkeleton,
  DashboardSkeleton,
  TableSkeleton,
  UpcomingPaymentsSkeleton,
} from "@/app/ui/skeletons";
import CovenantsCardWrapper from "@/app/ui/deals/dashboard/covenants-tracking";
import UpcomingPayments from "@/app/ui/deals/dashboard/upcoming-payments/upcoming-payments";
import PositionsTable from "@/app/ui/deals/positions/positions-table";
import { DealViews } from "@/app/lib/definitions";
import { ChevronLeft } from "@/app/ui/icons";
import { handleDisplayCorrectDealName } from "@/app/lib/utils";

const Page = async ({ params }: { params: Promise<{ dashboard: string }> }) => {
  const { dashboard } = await params; // Resolve the params promise
  const dealName = dashboard?.[0];
  const dealView = dashboard?.[1] as DealViews;

  return (
    <Suspense key={dashboard} fallback={<DashboardSkeleton />}>
      <div
        className={
          "py-2 px-4  h-[50px] border-b-1 border-grey-border flex items-center"
        }
      >
        <h1
          className={`text-subtitle w-full text-grey-primary font-semibold flex items-center gap-2`}
        >
          Dashboard
          <ChevronLeft />
          <span className={"uppercase"}>
            {handleDisplayCorrectDealName(dealName)}
          </span>
        </h1>
      </div>
      <div className={"p-4 flex flex-col gap-4"}>
        <h2 className={"text-grey-primary text-base font-semibold"}>
          Upcoming Payments
        </h2>
        <Suspense fallback={<UpcomingPaymentsSkeleton />}>
          <div id={"tour1-step8"}>
            <UpcomingPayments dealName={dealName} dealView={dealView} />
          </div>
        </Suspense>
        <h3 className={"text-grey-primary text-base font-semibold"}>
          Positions
        </h3>
        <Suspense fallback={<TableSkeleton />}>
          <div id={"tour1-step9"}>
            <PositionsTable dealName={dealName} dealView={dealView} />
          </div>
        </Suspense>
        <h3 className={"text-grey-primary text-base font-semibold"}>
          Covenants Tracking
        </h3>
        <Suspense fallback={<CovenantsTrackingSkeleton />}>
          <div id={"tour1-step10"}>
            <CovenantsCardWrapper dealName={dealName} dealView={dealView} />
          </div>
        </Suspense>
      </div>
    </Suspense>
  );
};

export default Page;
