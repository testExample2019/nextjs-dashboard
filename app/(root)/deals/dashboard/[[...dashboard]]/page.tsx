import React, { Suspense } from "react";
import DashboardSkeleton, {
  CovenantsTrackingSkeleton,
  TableSkeleton,
  UpcomingPaymentsSkeleton,
} from "@/app/ui/skeletons";
import CovenantsCardWrapper from "@/app/ui/deals/dashboard/covenants-tracking";
import UpcomingPayments from "@/app/ui/deals/dashboard/upcoming-payments/upcoming-payments";
import PositionsTable from "@/app/ui/deals/positions/positions-table";
import { DealViews } from "@/app/lib/definitions";
import { ChevronLeft } from "@/app/ui/icons";
import { handleDisplayCorrectDialName } from "@/app/lib/utils";

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
          className={`text-18 w-full text-grey-primary flex items-center gap-2`}
        >
          Dashboard
          <ChevronLeft />
          <span className={"capitalize"}>
            {handleDisplayCorrectDialName(dealName)}
          </span>
        </h1>
      </div>
      <div className={"p-4 flex flex-col gap-4"}>
        <h2 className={"text-grey-primary text-base font-semibold"}>
          Upcoming Payments
        </h2>
        <Suspense fallback={<UpcomingPaymentsSkeleton />}>
          <div id={"tour1-step5-1"}>
            <UpcomingPayments dealName={dealName} dealView={dealView} />
          </div>
        </Suspense>
        <h3 className={"text-grey-primary text-base font-semibold"}>
          Positions
        </h3>
        <Suspense fallback={<TableSkeleton />}>
          <div id={"tour1-step5-2"}>
            <PositionsTable dealName={dealName} dealView={dealView} />
          </div>
        </Suspense>
        <h3 className={"text-grey-primary text-base font-semibold"}>
          Covenants Tracking
        </h3>
        <Suspense fallback={<CovenantsTrackingSkeleton />}>
          <div id={"tour1-step5-3"}>
            <CovenantsCardWrapper dealName={dealName} dealView={dealView} />
          </div>
        </Suspense>
      </div>
    </Suspense>
  );
};

export default Page;
