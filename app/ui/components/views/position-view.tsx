import React from "react";
import { PositionType } from "@/app/lib/definitions";
import { notFound } from "next/navigation";
import Status from "@/app/ui/components/status";

const PositionView = ({ position }: { position?: PositionType }) => {
  if (!position) {
    notFound();
  }

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-end border-b pb-4 mb-4">
        <div>
          <h3 className="text-sm text-grey font-semibold uppercase">
            Position
          </h3>
        </div>
      </div>

      <div className="flex justify-between space-x-4 mb-4">
        <button className="text-sm text-action-primary border-b-2 border-action-primary pb-2 w-full">
          Transaction Info
        </button>
        <button className="text-sm text-grey-secondary hover:text-action-primary hover:border-action-primary pb-2 w-full">
          Allocations
        </button>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-grey font-semibold">Deal</p>
            <p className="font-medium text-grey-primary">{position.deal}</p>
          </div>
          <div>
            <p className="text-sm text-grey font-semibold">Counterparty</p>
            <p className="font-medium text-grey-primary">
              {position.counterparty}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-grey font-semibold">Instrument</p>
            <p className="font-medium text-grey-primary">
              {position.instrument}
            </p>
          </div>
          <div>
            <p className="text-sm text-grey font-semibold">Payment Date</p>
            <p className="font-medium text-grey-primary">
              {position.instrument}
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm text-grey font-semibold">Amount</p>
          <p className="font-medium text-grey-primary">$6,997.51</p>
        </div>
      </div>

      <div className="mt-6 border-t pt-4">
        <h2 className="text-base font-semibold text-grey-blue py-4 mb-4 border-b-1 border-grey-border">
          Rate Info
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-grey font-semibold">Type</p>
            <p className="font-medium text-grey-primary">Fixed</p>
          </div>
          <div>
            <p className="text-sm text-grey font-semibold">Day Count</p>
            <p className="font-medium text-grey-primary">ACT/360</p>
          </div>
          <div>
            <p className="text-sm text-grey font-semibold">Accrual Start</p>
            <p className="font-medium text-grey-primary">2025-01-01</p>
          </div>
          <div>
            <p className="text-sm text-grey font-semibold">Accrual End</p>
            <p className="font-medium text-grey-primary">2025-01-31</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-base font-semibold text-grey-blue py-4 mb-4 border-b-1 border-grey-border">
          Interest Amount
        </h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2 text-sm text-grey font-semibold">
                Date
              </th>
              <th className="border-b py-2 text-sm text-grey font-semibold">
                Rate
              </th>
              <th className="border-b py-2 text-sm text-grey font-semibold">
                Principal
              </th>
              <th className="border-b py-2 text-sm text-grey font-semibold">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 text-grey-primary text-base">2025-01-01</td>
              <td className="py-2 text-grey-primary text-base">8.5600%</td>
              <td className="py-2 text-grey-primary text-base">$50,000.00</td>
              <td className="py-2 text-grey-primary text-base">$56,978.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PositionView;
