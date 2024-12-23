import React from "react";
import { fetchUpcomingPaymentsData } from "@/app/lib/data";
import UpcomingPaymentsList from "@/app/ui/deals/dashboard/upcoming-payments/upcoming-payments-list";
import { PaymentTypes } from "@/app/lib/definitions";

export default async function UpcomingPayments({
  dealName,
  dealView,
  dealPaymentType = PaymentTypes.Debits,
}: {
  dealName: string;
  dealView: string;
  dealPaymentType: PaymentTypes;
}) {
  const upcomingPayments = await fetchUpcomingPaymentsData(dealName, dealView);

  return (
    <div className="rounded-lg shadow-md flex justify-between">
      <div className="p-4 w-full bg-grey-o">
        {/* Tabs */}
        <UpcomingPaymentsList
          upcomingPayments={upcomingPayments}
          dealName={dealName}
          dealView={dealView}
          dealPaymentType={dealPaymentType}
        />
      </div>

      {/* Calendar */}
      <div className="w-[40%]">
        <div className="bg-white rounded-lg border border-grey-border p-4 h-full">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm font-semibold text-action-primary">
              DECEMBER 2024
            </p>
            <div className="space-x-3">
              <button className="text-sm text-grey-primary hover:text-gray-900">
                &lt;
              </button>
              <span className={"text-sm text-grey-primary"}>Today</span>
              <button className="text-sm text-grey-primary hover:text-gray-900">
                &gt;
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-5 text-center text-grey-primary">
            <span className="text-xs font-semibold text-grey">SU</span>
            <span className="text-xs font-semibold text-grey">MO</span>
            <span className="text-xs font-semibold text-grey">TU</span>
            <span className="text-xs font-semibold text-grey">WE</span>
            <span className="text-xs font-semibold text-grey">TH</span>
            <span className="text-xs font-semibold text-grey">FR</span>
            <span className="text-xs font-semibold text-grey">SA</span>

            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="text-sm">1</span>
            <span className="text-sm">2</span>
            <span className="text-sm">3</span>
            <span className="text-sm">4</span>
            <span className="text-sm">5</span>
            <span className="text-sm">6</span>
            <span className="text-sm">7</span>
            <span className="text-sm">8</span>
            <span className="text-sm">9</span>
            <span className="text-sm">10</span>
            <span className="text-sm">11</span>
            <span className="text-sm">12</span>
            <span className="text-sm">13</span>
            <span className="text-sm">14</span>
            <span className="text-sm">15</span>
            <span className="text-sm">16</span>
            <span className="text-sm">17</span>
            <span className="text-sm">18</span>
            <span className="text-sm">19</span>
            <span className="text-sm">20</span>
            <span className="text-sm">21</span>
            <span className="text-sm">22</span>
            <span className="bg-action-primary text-white text-sm rounded-full w-6 h-6 flex items-center justify-center mx-auto">
              30
            </span>
            <span className="text-sm">31</span>
          </div>
        </div>
      </div>
    </div>
  );
}
