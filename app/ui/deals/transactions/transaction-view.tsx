"use client";
import React, { useState } from "react";
import { TransactionType } from "@/app/lib/definitions";
import { notFound } from "next/navigation";
import Status from "@/app/ui/components/status";
import { ChevronDown } from "@/app/ui/icons";

enum TransactionTabsType {
  TransactionInfo = "transactionInfo",
  Allocations = "allocations",
  RateInfo = "rateInfo",
}

const TransactionView = ({
  transaction,
}: {
  transaction?: TransactionType;
}) => {
  const isInterestPayment = transaction?.transaction === "Interest Payment";
  const Tabs = [
    { id: TransactionTabsType.TransactionInfo, label: "Transaction Info" },
    { id: TransactionTabsType.RateInfo, label: "Rate Info" },
    { id: TransactionTabsType.Allocations, label: "Allocations" },
  ];

  const TabItems = isInterestPayment
    ? Tabs.filter((item) => item.id !== TransactionTabsType.RateInfo)
    : Tabs;

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
            {transaction.transaction}
          </p>
        </div>
        <div className="flex items-center justify-between text-base gap-2">
          <p className="text-grey">Status</p>
          <Status status={transaction.status} />
        </div>
      </div>

      <div className="flex justify-between mb-4">
        {TabItems.map(({ id, label }) => (
          <button
            key={id}
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

      {activeTab === TransactionTabsType.TransactionInfo && (
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

            {!isInterestPayment && (
              <div>
                <p className="text-sm text-grey font-semibold">Commitment</p>
                <p className="font-medium text-grey-primary">
                  {transaction.committed}
                </p>
              </div>
            )}
            {!isInterestPayment && (
              <div>
                <p className="text-sm text-grey font-semibold">
                  Unfunded Commitment
                </p>
                <p className="font-medium text-grey-primary">
                  {transaction.unfunded}
                </p>
              </div>
            )}

            <div>
              <p className="text-sm text-grey font-semibold">Amount</p>
              <p className="font-medium text-grey-primary">
                {transaction.amount}
              </p>
            </div>
          </div>
          {!isInterestPayment && (
            <>
              <div className="mt-6 pt-4">
                <h2 className="text-base font-semibold text-grey-blue py-4 mb-4 border-b-1 border-grey-border">
                  Fee Info
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-grey font-semibold">Fee Type</p>
                    <p className="font-medium text-grey-primary">
                      {transaction.transactionDetails.feeInfo?.feeType}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-grey font-semibold">
                      Applies To
                    </p>
                    <p className="font-medium text-grey-primary">
                      {transaction.transactionDetails.feeInfo?.appliesTo}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-grey font-semibold">Rate</p>
                    <p className="font-medium text-grey-primary">
                      {transaction.transactionDetails.feeInfo?.rate}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-grey font-semibold">
                      Fee Amount
                    </p>
                    <p className="font-medium text-grey-primary">
                      {transaction.transactionDetails.feeInfo?.feeAmount}
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
                    {transaction.transactionDetails.interestAmount.map(
                      (interest, index) => (
                        <tr key={index}>
                          <td className="py-2 text-grey-primary text-base">
                            {interest.date}
                          </td>
                          <td className="py-2 text-grey-primary text-base">
                            {interest.rate}
                          </td>
                          <td className="py-2 text-grey-primary text-base">
                            {interest.principal}
                          </td>
                          <td className="py-2 text-grey-primary text-base">
                            {interest.amount}
                          </td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}
          {isInterestPayment && (
            <>
              <div className="mt-6 pt-4">
                <h2 className="text-base font-semibold text-grey-blue py-4 mb-4 border-b-1 border-grey-border">
                  Rate Info
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-grey font-semibold">Type</p>
                    <p className="font-medium text-grey-primary">
                      {transaction.transactionDetails.rateInfo.type}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-grey font-semibold">Day Count</p>
                    <p className="font-medium text-grey-primary">
                      {transaction.transactionDetails.rateInfo.dayCount}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-grey font-semibold">
                      Accrual Start
                    </p>
                    <p className="font-medium text-grey-primary">
                      {transaction.transactionDetails.rateInfo.accrualStartDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-grey font-semibold">
                      Accrual End
                    </p>
                    <p className="font-medium text-grey-primary">
                      {transaction.transactionDetails.rateInfo.accrualEndDate}
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
                    {transaction.transactionDetails.interestAmount.map(
                      (interest, index) => (
                        <tr key={index}>
                          <td className="py-2 text-grey-primary text-base">
                            {interest.date}
                          </td>
                          <td className="py-2 text-grey-primary text-base">
                            {interest.rate}
                          </td>
                          <td className="py-2 text-grey-primary text-base">
                            {interest.principal}
                          </td>
                          <td className="py-2 text-grey-primary text-base">
                            {interest.amount}
                          </td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      )}
      {activeTab === TransactionTabsType.RateInfo && (
        <>
          <div>
            <h2 className="text-base font-semibold text-grey-blue py-4 mb-4 border-b-1 border-grey-border">
              Rate Option Details:
              {transaction.transactionDetails.rateInfo.type}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-grey font-semibold">Type</p>
                <p className="font-medium text-grey-primary">
                  {transaction.transactionDetails.rateInfo.type}
                </p>
              </div>
              <div>
                <p className="text-sm text-grey font-semibold">Day Count</p>
                <p className="font-medium text-grey-primary">
                  {transaction.transactionDetails.rateInfo.dayCount}
                </p>
              </div>
              <div>
                <p className="text-sm text-grey font-semibold">PIK Option</p>
                <p className="font-medium text-grey-primary">
                  {transaction.transactionDetails.rateInfo.pikOption}
                </p>
              </div>
              <div>
                <p className="text-sm text-grey font-semibold">
                  Incl. Accrual End
                </p>
                <p className="font-medium text-grey-primary">
                  {transaction.transactionDetails.rateInfo.includeAccrualEnd}
                </p>
              </div>
              <div>
                <p className="text-sm text-grey font-semibold">Accrual Start</p>
                <p className="font-medium text-grey-primary">
                  {transaction.transactionDetails.rateInfo.accrualStartDate}
                </p>
              </div>
              <div>
                <p className="text-sm text-grey font-semibold">Accrual End</p>
                <p className="font-medium text-grey-primary">
                  {transaction.transactionDetails.rateInfo.accrualEndDate}
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-base font-semibold text-grey-blue py-4 mb-4 border-b-1 border-grey-border">
            Rate Info
          </h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b py-2 text-sm text-grey font-semibold">
                  DATE
                </th>
                <th className="border-b py-2 text-sm text-grey font-semibold">
                  MARKET INDEX
                </th>
                <th className="border-b py-2 text-sm text-grey font-semibold">
                  ADJ INDEX RATE
                </th>
                <th className="border-b py-2 text-sm text-grey font-semibold">
                  ADJ SPREAD
                </th>
                <th className="border-b py-2 text-sm text-grey font-semibold">
                  ALL IN RATE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-50 text-grey-primary font-medium">
                <td colSpan={5} className="px-4 py-2">
                  <div className="w-full flex items-start">
                    <ChevronDown />
                    <span>Standard (1)</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-t text-sm">2025-01-01</td>
                <td className="px-4 py-2 border-t text-sm">Fixed</td>
                <td className="px-4 py-2 border-t text-sm">-</td>
                <td className="px-4 py-2 border-t text-sm">10.0000%</td>
                <td className="px-4 py-2 border-t text-sm">10.0000%</td>
              </tr>

              <tr className="bg-blue-50 text-grey-primary font-medium">
                <td colSpan={5} className="px-4 py-2">
                  <div className="w-full flex items-start">
                    <ChevronDown />
                    <span>PIK (1)</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-t text-sm">2025-01-01</td>
                <td className="px-4 py-2 border-t text-sm">Fixed</td>
                <td className="px-4 py-2 border-t text-sm">-</td>
                <td className="px-4 py-2 border-t text-sm">20.0000%</td>
                <td className="px-4 py-2 border-t text-sm">20.0000%</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
      {activeTab === TransactionTabsType.Allocations && (
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
              {transaction.transactionDetails.allocations.map(
                (allocation, index) => (
                  <tr key={index}>
                    <td className="py-2 text-grey-primary text-base">
                      {allocation.role}
                    </td>
                    <td className="py-2 text-grey-primary text-base">
                      {allocation.counterparty}
                    </td>
                    <td
                      className={`py-2 ${allocation.role === "Lender" ? "text-green" : "text-red"} text-base`}
                    >
                      {allocation.amount}
                    </td>
                    <td className="py-2 text-red text-base">
                      {allocation.share}
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
          <div className="mt-6 pt-4">
            <h2 className="text-base font-semibold text-grey-blue py-4 mb-4 border-b-1 border-grey-border">
              Bank Account
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-grey font-semibold">Account Name</p>
                <p className="font-medium text-grey-primary">
                  {transaction.transactionDetails.bankAccount.accountName}
                </p>
              </div>
              <div>
                <p className="text-sm text-grey font-semibold">Bank</p>
                <p className="font-medium text-grey-primary">
                  {transaction.transactionDetails.bankAccount.bank}
                </p>
              </div>
              <div>
                <p className="text-sm text-grey font-semibold">Bic</p>
                <p className="font-medium text-grey-primary">
                  {transaction.transactionDetails.bankAccount.bic}
                </p>
              </div>
              <div>
                <p className="text-sm text-grey font-semibold">Aba</p>
                <p className="font-medium text-grey-primary">
                  {transaction.transactionDetails.bankAccount.aba}
                </p>
              </div>
              <div>
                <p className="text-sm text-grey font-semibold">IBAN</p>
                <p className="font-medium text-grey-primary">
                  {transaction.transactionDetails.bankAccount.iban}
                </p>
              </div>
              <div>
                <p className="text-sm text-grey font-semibold">
                  Account Number
                </p>
                <p className="font-medium text-grey-primary">
                  {transaction.transactionDetails.bankAccount.accountNumber}
                </p>
              </div>
              <div>
                <p className="text-sm text-grey font-semibold">Currency</p>
                <p className="font-medium text-grey-primary">
                  {transaction.transactionDetails.bankAccount.currency}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TransactionView;
