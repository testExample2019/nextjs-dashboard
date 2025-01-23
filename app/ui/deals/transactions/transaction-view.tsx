"use client";
import React, { Fragment, useEffect, useState } from "react";
import { TransactionType } from "@/app/lib/definitions";
import { notFound } from "next/navigation";
import Status from "@/app/ui/components/status";
import { ChevronDown } from "@/app/ui/icons";
import { useNextStep } from "nextstepjs";

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
  const { setCurrentStep, startNextStep, currentStep } = useNextStep();

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

  useEffect(() => {
    if (currentStep === 17) {
      startNextStep("mainTour");
      setCurrentStep(17);
    }
    if (currentStep === 19) {
      setActiveTab(TransactionTabsType.RateInfo);
    }
    if (currentStep === 20) {
      setActiveTab(TransactionTabsType.Allocations);
    }
  }, [currentStep]);

  if (!transaction) {
    notFound();
  }

  return (
    <div className="bg-white rounded-lg p-4">
      <div id={"tour1-step5-10"}>
        <div id={"tour1-step5-11"}>
          <div id={"tour1-step5-12"}>
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
                      <p className="text-sm text-grey font-semibold px-2">
                        Deal
                      </p>
                      <p className="font-medium text-grey-primary p-2">
                        {transaction.deal}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-grey font-semibold px-2">
                        Counterparty
                      </p>
                      <p className="font-medium text-grey-primary p-2">
                        {transaction.counterparty}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-grey font-semibold px-2">
                        Instrument
                      </p>
                      <p className="font-medium text-grey-primary p-2">
                        {transaction.instrument}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-grey font-semibold px-2">
                        Payment Date
                      </p>
                      <p className="font-medium text-grey-primary p-2">
                        {transaction.paymentDate}
                      </p>
                    </div>
                    {isInterestPayment && (
                      <div>
                        <p className="text-sm text-grey font-semibold px-2">
                          Effective Date
                        </p>
                        <p className="font-medium text-grey-primary p-2">
                          {transaction.paymentDate}
                        </p>
                      </div>
                    )}
                    {!isInterestPayment && (
                      <div>
                        <p className="text-sm text-grey font-semibold px-2">
                          Commitment
                        </p>
                        <p className="font-medium text-grey-primary p-2">
                          {transaction.committed}
                        </p>
                      </div>
                    )}
                    {!isInterestPayment && (
                      <div>
                        <p className="text-sm text-grey font-semibold">
                          Unfunded Commitment
                        </p>
                        <p className="font-medium text-grey-primary p-2">
                          {transaction.unfunded}
                        </p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-grey font-semibold px-2">
                        Amount
                      </p>
                      <p className="font-medium text-grey-primary p-2">
                        {transaction.amount}
                      </p>
                    </div>
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
                          <p className="text-sm text-grey font-semibold px-2">
                            Fee Type
                          </p>
                          <p className="font-medium text-grey-primary p-2">
                            {transaction.transactionDetails.feeInfo?.feeType}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-grey font-semibold px-2">
                            Applies To
                          </p>
                          <p className="font-medium text-grey-primary p-2">
                            {transaction.transactionDetails.feeInfo?.appliesTo}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-grey font-semibold px-2">
                            Rate
                          </p>
                          <p className="font-medium text-grey-primary p-2">
                            {transaction.transactionDetails.feeInfo?.rate}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-grey font-semibold px-2">
                            Fee Amount
                          </p>
                          <p className="font-medium text-grey-primary p-2">
                            {transaction.transactionDetails.feeInfo?.feeAmount}
                          </p>
                        </div>
                      </div>
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
                          <p className="text-sm text-grey font-semibold px-2">
                            Type
                          </p>
                          <p className="font-medium text-grey-primary p-2">
                            {transaction.transactionDetails.rateInfo.type}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-grey font-semibold px-2">
                            Day Count
                          </p>
                          <p className="font-medium text-grey-primary p-2">
                            {transaction.transactionDetails.rateInfo.dayCount}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-grey font-semibold px-2">
                            Accrual Start
                          </p>
                          <p className="font-medium text-grey-primary p-2">
                            {
                              transaction.transactionDetails.rateInfo
                                .accrualStartDate
                            }
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-grey font-semibold px-2">
                            Accrual End
                          </p>
                          <p className="font-medium text-grey-primary p-2">
                            {
                              transaction.transactionDetails.rateInfo
                                .accrualEndDate
                            }
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
                            <th className="border-b py-2 text-sm text-grey font-semibold uppercase">
                              Date
                            </th>
                            <th className="border-b py-2 text-sm text-grey font-semibold uppercase">
                              Rate
                            </th>
                            <th className="border-b py-2 text-sm text-grey font-semibold uppercase">
                              Principal
                            </th>
                            <th className="border-b py-2 text-sm text-grey font-semibold uppercase">
                              Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {transaction.transactionDetails.interestAmount?.map(
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
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-grey font-semibold px-2">
                        Type
                      </p>
                      <p className="font-medium text-grey-primary p-2">
                        {transaction.transactionDetails.rateInfo.type}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-grey font-semibold px-2">
                        Day Count
                      </p>
                      <p className="font-medium text-grey-primary p-2">
                        {transaction.transactionDetails.rateInfo.dayCount}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-grey font-semibold px-2">
                        PIK Option
                      </p>
                      <p className="font-medium text-grey-primary p-2">
                        {transaction.transactionDetails.rateInfo.pikOption}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-grey font-semibold px-2">
                        Incl. Accrual End
                      </p>
                      <p className="font-medium text-grey-primary p-2">
                        {
                          transaction.transactionDetails.rateInfo
                            .includeAccrualEnd
                        }
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-grey font-semibold px-2">
                        Accrual Start
                      </p>
                      <p className="font-medium text-grey-primary p-2">
                        {
                          transaction.transactionDetails.rateInfo
                            .accrualStartDate
                        }
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-grey font-semibold px-2">
                        Accrual End
                      </p>
                      <p className="font-medium text-grey-primary p-2">
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
                      <th className="border-b py-2 text-sm text-grey font-semibold uppercase">
                        DATE
                      </th>
                      <th className="border-b py-2 text-sm text-grey font-semibold uppercase">
                        MARKET INDEX
                      </th>
                      <th className="border-b py-2 text-sm text-grey font-semibold uppercase">
                        ADJ INDEX RATE
                      </th>
                      <th className="border-b py-2 text-sm text-grey font-semibold uppercase">
                        ADJ SPREAD
                      </th>
                      <th className="border-b py-2 text-sm text-grey font-semibold uppercase">
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
                      <td className="px-4 py-2 border-t text-sm">8.5600%</td>
                      <td className="px-4 py-2 border-t text-sm">8.5600%</td>
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
                      <th className="border-b py-2 text-sm text-grey font-semibold uppercase">
                        Role
                      </th>
                      <th className="border-b py-2 text-sm text-grey font-semibold uppercase">
                        Counterparty
                      </th>
                      <th className="border-b py-2 text-sm text-grey font-semibold uppercase">
                        Amount
                      </th>
                      <th className="border-b py-2 text-sm text-grey font-semibold uppercase">
                        Share
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transaction.transactionDetails.allocations?.map(
                      (allocation, index) => (
                        <tr key={index}>
                          <td className="py-2 text-grey-primary text-base">
                            {allocation.role}
                          </td>
                          <td className="py-2 text-grey-primary text-base">
                            {allocation.counterparty}
                          </td>
                          <td
                            className={`py-2 ${allocation.amount.startsWith("(") ? "text-red" : "text-green"} text-base`}
                          >
                            {allocation.amount}
                          </td>
                          <td
                            className={`py-2 ${allocation.amount.startsWith("(") ? "text-red" : "text-green"} text-base`}
                          >
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
                      <p className="text-sm text-grey font-semibold px-2">
                        Account Name
                      </p>
                      <p className="font-medium text-grey-primary p-2">
                        {transaction.transactionDetails.bankAccount.accountName}
                      </p>
                    </div>
                    <Fragment />
                    <div>
                      <p className="text-sm text-grey font-semibold px-2">
                        Bank
                      </p>
                      <p className="font-medium text-grey-primary p-2">
                        {transaction.transactionDetails.bankAccount.bank}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-grey font-semibold px-2">
                        Bic
                      </p>
                      <p className="font-medium text-grey-primary p-2">
                        {transaction.transactionDetails.bankAccount.bic}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-grey font-semibold px-2">
                        ABA
                      </p>
                      <p className="font-medium text-grey-primary p-2">
                        {transaction.transactionDetails.bankAccount.aba}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-grey font-semibold px-2">
                        IBAN
                      </p>
                      <p className="font-medium text-grey-primary p-2">
                        {transaction.transactionDetails.bankAccount.iban}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-grey font-semibold px-2">
                        Account Number
                      </p>
                      <p className="font-medium text-grey-primary p-2">
                        {
                          transaction.transactionDetails.bankAccount
                            .accountNumber
                        }
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-grey font-semibold px-2">
                        Currency
                      </p>
                      <p className="font-medium text-grey-primary p-2">
                        {transaction.transactionDetails.bankAccount.currency}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4">
                  <h2 className="text-base font-semibold text-grey-blue py-4 mb-4 border-b-1 border-grey-border">
                    Correspondent Bank
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-grey font-semibold px-2">
                        Bank
                      </p>
                      <p className="font-medium text-grey-primary p-2">
                        {
                          transaction.transactionDetails
                            .correspondingBankAccount?.bank
                        }
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-grey font-semibold px-2">
                        Bic
                      </p>
                      <p className="font-medium text-grey-primary p-2">
                        {
                          transaction.transactionDetails
                            .correspondingBankAccount?.bic
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionView;
