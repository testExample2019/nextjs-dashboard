import React, { Suspense } from "react";
import DashboardSkeleton, {
  CovenantsTrackingSkeleton,
  TableSkeleton,
  UpcomingPaymentsSkeleton,
} from "@/app/ui/skeletons";
import CovenantsCardWrapper from "@/app/ui/deals/dashboard/covenants-tracking";
import UpcomingPayments from "@/app/ui/deals/dashboard/upcoming-payments/upcoming-payments";
import PositionsTable from "@/app/ui/deals/dashboard/positions-table";
import { DealViews } from "@/app/lib/definitions";

const Page = async ({ params }: { params: Promise<{ dashboard: string }> }) => {
  const { dashboard } = await params; // Resolve the params promise
  const dealName = dashboard?.[0];
  const dealView = dashboard?.[1] as DealViews;

  return (
    <Suspense key={dashboard} fallback={<DashboardSkeleton />}>
      <div className={"py-2 px-4  h-[50px] border-b-1 border-grey-border"}>
        <h1
          className={`text-18 w-full md:text-2xl text-grey-primary flex items-center gap-2`}
        >
          Dashboard
          {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.8438 12.2812C15 12.125 15 11.9062 14.8438 11.75L10.2812 7.125C10.125 6.96875 9.875 6.96875 9.75 7.125L9.125 7.75C8.96875 7.875 8.96875 8.125 9.125 8.28125L12.8125 12L9.125 15.75C8.96875 15.9062 8.96875 16.125 9.125 16.2812L9.75 16.9062C9.875 17.0625 10.125 17.0625 10.2812 16.9062L14.8438 12.2812Z"
                fill="#909090"
              />
            </svg>
          }
          <span className={"capitalize"}>{dealName}</span>
        </h1>
      </div>
      <div className={"p-4 flex flex-col gap-4"}>
        <h2 className={"text-grey-primary text-base font-semibold"}>
          Upcoming Payments
        </h2>
        <Suspense fallback={<UpcomingPaymentsSkeleton />}>
          <div id={"tour1-step6"}>
            <UpcomingPayments dealName={dealName} dealView={dealView} />
          </div>
        </Suspense>
        <h3 className={"text-grey-primary text-base font-semibold"}>
          Positions
        </h3>
        <Suspense fallback={<TableSkeleton />}>
          <PositionsTable dealName={dealName} dealView={dealView} />
        </Suspense>
        <h3 className={"text-grey-primary text-base font-semibold"}>
          Covenants Tracking
        </h3>
        <Suspense fallback={<CovenantsTrackingSkeleton />}>
          <div className="flex flex-col lg:flex-row gap-4">
            <CovenantsCardWrapper dealName={dealName} dealView={dealView} />
          </div>
        </Suspense>
      </div>
    </Suspense>
  );
};

export default Page;
