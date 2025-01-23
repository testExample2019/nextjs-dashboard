"use client";

import React, { useEffect, useState } from "react";
import { InstrumentType } from "@/app/lib/definitions";
import { notFound } from "next/navigation";
import { useNextStep } from "nextstepjs";

const InstrumentView = ({ instrument }: { instrument?: InstrumentType }) => {
  const { setCurrentStep, startNextStep, currentStep } = useNextStep();

  if (!instrument) {
    notFound();
  }

  enum TabsType {
    InstrumentInfo = "instrumentInfo",
    CashFlows = "cashflows",
  }

  const TabItems = [
    { id: TabsType.InstrumentInfo, label: "Instrument Info" },
    { id: TabsType.CashFlows, label: "Cashflows" },
  ];

  const [activeTab, setActiveTab] = useState<TabsType>(TabsType.InstrumentInfo);

  useEffect(() => {
    if (currentStep === 24) {
      startNextStep("mainTour");
      setCurrentStep(24);
    }
  }, [currentStep]);

  return (
    <div className="bg-white rounded-lg p-6">
      <div id={"tour1-step26"}>
        <div className="flex justify-between items-end border-b pb-4 mb-4">
          <div>
            <h3 className="text-sm text-grey font-semibold uppercase">
              Instrument
            </h3>
            <p className="text-base text-grey-primary font-semibold">
              {instrument.instrument}
            </p>
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

        {activeTab === TabsType.InstrumentInfo && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-grey font-semibold px-2">Deal</p>
                <p className="font-medium text-grey-primary p-2">
                  {instrument.deal}
                </p>
              </div>
              <div>
                <p className="text-sm text-grey font-semibold px-2">Type</p>
                <p className="font-medium text-grey-primary p-2">
                  {instrument.type}
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4">
              <h2 className="text-base font-semibold text-grey-blue py-4 mb-4 border-b-1 border-grey-border">
                Issue Info
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-grey font-semibold px-2">Issuer</p>
                  <p className="font-medium text-grey-primary p-2">
                    {instrument.issueInfo?.issuer}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-grey font-semibold px-2">
                    Issue Date
                  </p>
                  <p className="font-medium text-grey-primary p-2">
                    {instrument.issueInfo?.issueDate}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-grey font-semibold px-2">
                    Expire Date
                  </p>
                  <p className="font-medium text-grey-primary p-2">
                    {instrument.issueInfo?.expireDate}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-grey font-semibold px-2">
                    Maturity Date
                  </p>
                  <p className="font-medium text-grey-primary p-2">
                    {instrument.issueInfo?.maturityDate}
                  </p>
                </div>
              </div>
            </div>
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
                    {instrument.feeInfo?.feeType}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-grey font-semibold px-2">
                    Applies To
                  </p>
                  <p className="font-medium text-grey-primary p-2">
                    {instrument.feeInfo?.appliesTo}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-grey font-semibold px-2">Rate</p>
                  <p className="font-medium text-grey-primary p-2">
                    {instrument.feeInfo?.rate}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-grey font-semibold px-2">Amount</p>
                  <p className="font-medium text-grey-primary p-2">
                    {instrument.feeInfo?.amount}
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
                  <th className="border-b p-2 text-sm text-grey font-semibold uppercase">
                    Rate Type
                  </th>
                  <th className="border-b p-2 text-sm text-grey font-semibold uppercase">
                    Index
                  </th>
                  <th className="border-b p-2 text-sm text-grey font-semibold uppercase">
                    ACCRUAL FREQUENCY
                  </th>
                  <th className="border-b p-2 text-sm text-grey font-semibold uppercase">
                    ADJ SPREAD
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 text-grey-primary text-base">
                    {instrument.rateInfo.rateType}
                  </td>
                  <td className="p-2 text-grey-primary text-base">
                    {instrument.rateInfo.index}
                  </td>
                  <td className="p-2 text-grey-primary text-base">
                    {instrument.rateInfo.accrualFrequency}
                  </td>
                  <td className="p-2 text-grey-primary text-base">
                    {instrument.rateInfo.adjSpread}
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default InstrumentView;
