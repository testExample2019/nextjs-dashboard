import React, { Suspense } from "react";
import DashboardSkeleton, {
  CovenantsTrackingSkeleton,
  TableSkeleton,
  UpcomingPaymentsSkeleton,
} from "@/app/ui/skeletons";
import ViewsNav from "@/app/ui/deals/dashboard/views-nav";
import CovenantsCardWrapper from "@/app/ui/deals/dashboard/covenants-tracking";
import UpcomingPayments from "@/app/ui/deals/dashboard/upcoming-payments/upcoming-payments";
import PositionsTable from "@/app/ui/deals/dashboard/positions-table";

const Page = async ({ params }: { params: Promise<{ dashboard: string }> }) => {
  const { dashboard } = await params; // Resolve the params promise
  const dealName = dashboard?.[0];
  const dealView = dashboard?.[1];

  return (
    <Suspense key={dashboard} fallback={<DashboardSkeleton />}>
      <div
        className={
          "flex w-full items-center justify-between py-2 px-4  h-[50px] border-b-1 border-grey-border"
        }
      >
        <h1 className={`text-18 md:text-2xl text-grey-primary`}>Dashboard</h1>
      </div>
      <div className={"p-4 flex flex-col gap-4"}>
        <Suspense fallback={<UpcomingPaymentsSkeleton />}>
          <h3 className={"text-grey-primary text-base font-semibold"}>
            Upcoming Payments
          </h3>
          <div id={"tour1-step6"}>
            <UpcomingPayments dealName={dealName} dealView={dealView} />
          </div>
        </Suspense>
        <Suspense fallback={<TableSkeleton />}>
          <h3 className={"text-grey-primary text-base font-semibold"}>
            Positions
          </h3>
          <PositionsTable dealName={dealName} dealView={dealView} />
        </Suspense>
        <Suspense fallback={<CovenantsTrackingSkeleton />}>
          <h3 className={"text-grey-primary text-base font-semibold"}>
            Covenants Tracking
          </h3>
          <div className="flex flex-col lg:flex-row gap-4">
            <CovenantsCardWrapper dealName={dealName} dealView={dealView} />
          </div>
        </Suspense>
      </div>
    </Suspense>
  );
};

export default Page;
