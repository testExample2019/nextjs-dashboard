import React from "react";
import { fetchUpcomingPaymentsData } from "@/app/lib/data";
import UpcomingPaymentsList from "@/app/ui/deals/dashboard/upcoming-payments/upcoming-payments-list";
import { DealParamsType } from "@/app/lib/definitions";

const UpcomingPayments: React.FC<DealParamsType> = async ({
  dealName,
  dealView,
}) => {
  const upcomingPayments = await fetchUpcomingPaymentsData(dealName, dealView);

  return (
    <div className="rounded-lg flex flex-col lg:flex-row justify-between shadow-md  border border-grey-border">
      <UpcomingPaymentsList upcomingPayments={upcomingPayments} />
    </div>
  );
};

export default UpcomingPayments;
