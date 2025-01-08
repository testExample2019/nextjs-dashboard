import React from "react";
import { fetchUpcomingPaymentsData } from "@/app/lib/data";
import UpcomingPaymentsList from "@/app/ui/deals/dashboard/upcoming-payments/upcoming-payments-list";
import { DealParamsType } from "@/app/lib/definitions";
import Calendar from "@/app/ui/deals/dashboard/upcoming-payments/calendar";

const UpcomingPayments: React.FC<DealParamsType> = async ({
  dealName,
  dealView,
}) => {
  const upcomingPayments = await fetchUpcomingPaymentsData(dealName, dealView);

  return (
    <div className="rounded-lg flex flex-col lg:flex-row justify-between shadow-md  border border-grey-border">
      <div className="p-4 w-full bg-grey-o">
        {/* Tabs */}
        <UpcomingPaymentsList upcomingPayments={upcomingPayments} />
      </div>
      {/* Calendar */}
      <Calendar />
    </div>
  );
};

export default UpcomingPayments;
