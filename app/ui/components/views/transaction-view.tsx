"use client";
import React, { useState } from "react";
import { DealViews, TransactionType } from "@/app/lib/definitions";
import { notFound } from "next/navigation";
import Status from "@/app/ui/components/status";

const TransactionView = ({
  transaction,
}: {
  transaction?: TransactionType;
}) => {
  enum TransactionTabsType {
    TransactionInfo = "transactionInfo",
    Allocations = "allocations",
  }

  const TabItems = [
    { id: TransactionTabsType.TransactionInfo, label: "Transaction Info" },
    { id: TransactionTabsType.Allocations, label: "Allocations" },
  ];

  const [activeTab, setActiveTab] = useState<TransactionTabsType>(
    TransactionTabsType.TransactionInfo,
  );

  if (!transaction) {
    notFound();
  }

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-end border-b pb-4 mb-4">
        <div>
          <h3 className="text-sm text-grey font-semibold uppercase">
            Transaction
          </h3>
          <p className="text-base text-grey-primary font-semibold">
            {transaction.type}
          </p>
        </div>
        <div className="flex items-center justify-between text-base gap-2">
          <p className="text-grey">Status</p>
          <Status status={transaction.status} />
        </div>
      </div>

      <div className="flex justify-between space-x-4 mb-4">
        {TabItems.map(({ id, label }) => (
          <button
            onClick={() => setActiveTab(id)}
            className={`text-sm font-semibold  border-b-2  capitalize pb-2 w-full ${
              activeTab === id
                ? "border-action-primary text-action-primary"
                : "text-grey-secondary"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {activeTab === TransactionTabsType.TransactionInfo ? (
        <>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-grey font-semibold">Deal</p>
                <p className="font-medium text-grey-primary">
                  {transaction.deal}
                </p>
              </div>
              <div>
                <p className="text-sm text-grey font-semibold">Counterparty</p>
                <p className="font-medium text-grey-primary">
                  {transaction.counterparty}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-grey font-semibold">Instrument</p>
                <p className="font-medium text-grey-primary">
                  {transaction.instrument}
                </p>
              </div>
              <div>
                <p className="text-sm text-grey font-semibold">Payment Date</p>
                <p className="font-medium text-grey-primary">
                  {transaction.instrument}
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
                <p className="font-medium text-grey-primary">
                  {" "}
                  {transaction.rateInfo.type}
                </p>
              </div>
              <div>
                <p className="text-sm text-grey font-semibold">Day Count</p>
                <p className="font-medium text-grey-primary">
                  {" "}
                  {transaction.rateInfo.dayCount}
                </p>
              </div>
              <div>
                <p className="text-sm text-grey font-semibold">Accrual Start</p>
                <p className="font-medium text-grey-primary">
                  {transaction.rateInfo.accrualStartDate}
                </p>
              </div>
              <div>
                <p className="text-sm text-grey font-semibold">Accrual End</p>
                <p className="font-medium text-grey-primary">
                  {transaction.rateInfo.accrualEndDate}
                </p>
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
                  <td className="py-2 text-grey-primary text-base">
                    {transaction.interestAmount.date}
                  </td>
                  <td className="py-2 text-grey-primary text-base">
                    {transaction.interestAmount.rate}
                  </td>
                  <td className="py-2 text-grey-primary text-base">
                    {transaction.interestAmount.principal}
                  </td>
                  <td className="py-2 text-grey-primary text-base">
                    {transaction.interestAmount.amount}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b py-2 text-sm text-grey font-semibold">
                  Role
                </th>
                <th className="border-b py-2 text-sm text-grey font-semibold">
                  Counterparty
                </th>
                <th className="border-b py-2 text-sm text-grey font-semibold">
                  Amount
                </th>
                <th className="border-b py-2 text-sm text-grey font-semibold">
                  Share
                </th>
              </tr>
            </thead>
            <tbody>
              {transaction.allocations.map((allocation) => (
                <tr>
                  <td className="py-2 text-grey-primary text-base">
                    {allocation.role}
                  </td>
                  <td className="py-2 text-grey-primary text-base">
                    {allocation.counterparty}
                  </td>
                  <td className="py-2 text-grey-primary text-base">
                    {allocation.amount}
                  </td>
                  <td className="py-2 text-grey-primary text-base">
                    {allocation.share}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default TransactionView;
