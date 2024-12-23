import React, { Suspense } from "react";
import DashboardSkeleton, {
  CardsSkeleton,
  TableSkeleton,
} from "@/app/ui/skeletons";
import ViewsNav from "@/app/ui/deals/dashboard/views-nav";
import CovenantsCardWrapper from "@/app/ui/deals/dashboard/covenants-tracking";
import UpcomingPayments from "@/app/ui/deals/dashboard/upcoming-payments/upcoming-payments";
import { PaymentTypes } from "@/app/lib/definitions";
import { Table } from "@/app/ui/components/table";
import { fetchPositions } from "@/app/lib/data";

const Page = async ({ params }: { params: Promise<{ dashboard: string }> }) => {
  const { dashboard } = await params; // Resolve the params promise
  const dealName = dashboard?.[0];
  const dealView = dashboard?.[1];
  const dealPaymentType = dashboard?.[2] as PaymentTypes;
  const positions = await fetchPositions(dealName, dealView);

  return (
    <Suspense key={dashboard} fallback={<DashboardSkeleton />}>
      <div
        className={
          "flex w-full items-center justify-between py-2 px-4  h-[50px] border-b-1 border-grey-border"
        }
      >
        <h1 className={`text-18 md:text-2xl`}>Dashboard</h1>
        <div id={"tour1-step3"} className={`inline-flex items-center`}>
          <span className={" inline-flex text-sm text-grey mr-3"}>View</span>
          <ViewsNav />
        </div>
      </div>
      <div className={"p-4 flex flex-col gap-4"}>
        <h3 className={"text-grey-primary text-base font-semibold"}>
          Covenants Tracking
        </h3>
        <div id={"tour1-step4"} className="flex flex-col lg:flex-row gap-4">
          <Suspense fallback={<CardsSkeleton />}>
            <CovenantsCardWrapper dealName={dealName} dealView={dealView} />
          </Suspense>
        </div>
        <h3 className={"text-grey-primary text-base font-semibold"}>
          Upcoming Payments
        </h3>
        <div id={"tour1-step5"}>
          <Suspense fallback={<CardsSkeleton />}>
            <UpcomingPayments
              dealName={dealName}
              dealView={dealView}
              dealPaymentType={dealPaymentType}
            />
          </Suspense>
        </div>
        <h3 className={"text-grey-primary text-base font-semibold"}>
          Positions
        </h3>
        <div id={"tour1-step6"}>
          <Suspense fallback={<TableSkeleton />}>
            <Table rows={positions} />
          </Suspense>
        </div>
      </div>
    </Suspense>
  );
};

export default Page;
