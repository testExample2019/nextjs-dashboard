"use client";
import React, { useEffect, useState } from "react";
import { TransactionType } from "@/app/lib/definitions";
import { notFound } from "next/navigation";
import Status from "@/app/ui/components/status";
import { ChevronDown } from "@/app/ui/icons";
import { useNextStep } from "nextstepjs";
import { DrawerTable } from "@/app/ui/components/drawer-table";
import { DrawerContent } from "@/app/ui/components/drawer-content";

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
  const { currentStep } = useNextStep();

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
    if (currentStep === 18) {
      setActiveTab(TransactionTabsType.TransactionInfo);
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
    <div className="bg-white rounded-lg px-6 py-4">
      <div id={"tour1-step21"}>
        <div id={"tour1-step30"}>
          <div id={"tour1-step16"}>
            <div id={"tour1-step17"}>
              <div id={"tour1-step18"}>
                <div className="flex justify-between items-end border-b pb-4 mb-4">
                  <div>
                    <h3 className="text-sm text-grey font-semibold uppercase">
                      Transaction
                    </h3>
                    <p className="text-base text-grey-dark font-semibold">
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
                    <DrawerContent
                      rows={transaction.transactionDetails.transactionInfo}
                    />
                    <div className="mt-6">
                      {!isInterestPayment &&
                        !!transaction.transactionDetails.feeInfo && (
                          <DrawerContent
                            title={"Fee info"}
                            rows={transaction.transactionDetails.feeInfo}
                          />
                        )}
                    </div>

                    {isInterestPayment && (
                      <>
                        <DrawerContent
                          title={"Rate info"}
                          rows={transaction.transactionDetails.rateInfo}
                        />
                        <div className="mt-6">
                          <h2 className="text-base font-semibold text-grey-blue py-4 mb-4 border-b-1 border-grey-border">
                            Interest Amount
                          </h2>
                          <DrawerTable
                            rows={transaction.transactionDetails.interestAmount}
                          />
                        </div>
                      </>
                    )}
                  </>
                )}
                {activeTab === TransactionTabsType.RateInfo && (
                  <>
                    <div>
                      <DrawerContent
                        title={`Rate Option Details:
                        ${transaction.transactionDetails.rateInfo.type}`}
                        rows={transaction.transactionDetails.rateInfo}
                        cols={4}
                      />
                    </div>
                    <h2 className="text-base font-semibold text-grey-blue py-4 mb-4 border-b-1 border-grey-border">
                      Rate Info
                    </h2>
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr>
                          <th className="border-b py-2 text-xs text-grey font-bold uppercase">
                            DATE
                          </th>
                          <th className="border-b py-2 text-xs text-grey font-bold uppercase">
                            MARKET INDEX
                          </th>
                          <th className="border-b py-2 text-xs text-grey font-bold uppercase text-right">
                            ADJ INDEX RATE
                          </th>
                          <th className="border-b py-2 text-xs text-grey font-bold uppercase text-right">
                            ADJ SPREAD
                          </th>
                          <th className="border-b py-2 text-xs text-grey font-bold uppercase text-right">
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
                          <td className="px-4 py-2 border-t text-base">
                            2025-01-01
                          </td>
                          <td className="px-4 py-2 border-t text-base">
                            Fixed
                          </td>
                          <td className="px-4 py-2 border-t text-base">-</td>
                          <td className="px-4 py-2 border-t text-base text-right">
                            10%
                          </td>
                          <td className="px-4 py-2 border-t text-base text-right">
                            10%
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                )}
                {activeTab === TransactionTabsType.Allocations && (
                  <>
                    <DrawerTable
                      activeIndex={0}
                      highlight={true}
                      rows={transaction.transactionDetails.allocations}
                    />
                    <div className="mt-6 pt-4">
                      <DrawerContent
                        title={`Bank Account - ${transaction.customer}`}
                        rows={transaction.transactionDetails.bankAccount}
                      />
                    </div>
                    {transaction.transactionDetails
                      .correspondingBankAccount && (
                      <div className="mt-6 pt-4">
                        <DrawerContent
                          title={`Correspondent Bank`}
                          rows={
                            transaction.transactionDetails
                              .correspondingBankAccount
                          }
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionView;
