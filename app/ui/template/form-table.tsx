"use client";

import React, { useEffect, useState } from "react";
import { formTableData } from "@/app/lib/placeholder-data";
import Tooltip from "@/app/ui/components/tooltip";
import TransactionsSchedule from "@/app/ui/template/transactions-schedule";
import { useTableContext } from "@/app/lib/contexts/template-context";
import { useDebouncedCallback } from "use-debounce";
import { useNextStep } from "nextstepjs";

const FormTable = () => {
  const [formData, setFormData] = useState(formTableData);
  const { updateAnnualRate } = useTableContext();
  const { currentStep } = useNextStep();

  const generateSyntheticEvent = (val: string = "15.00%") => {
    return {
      target: {
        name: "annualRate",
        value: val,
      },
    } as React.ChangeEvent<HTMLInputElement>;
  };

  useEffect(() => {
    currentStep >= 5 && handleInputChange(generateSyntheticEvent("15.00%"));
    currentStep === 3 && handleInputChange(generateSyntheticEvent("10.00%"));
  }, [currentStep]);

  // Debounced callback for updating the annual rate
  const debouncedUpdateAnnualRate = useDebouncedCallback(
    (annualRate: string) => {
      updateAnnualRate(annualRate);
    },
    1000,
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Trigger debounced updateAnnualRate only for annualRate field
    if (name === "annualRate") {
      debouncedUpdateAnnualRate(value);
    }
  };

  return (
    <>
      <div className="py-2 px-8 overflow-y-auto">
        {/* Loan Details Form */}
        <div className={"grid grid-cols-1 gap-1.5"}>
          {/* General info */}
          <div>
            <h2 className="text-base font-semibold text-grey-blue leading-5 py-4 border-b-1 border-grey-border">
              General Info
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className={"flex gap-4 justify-between"}>
                <div className={"w-full"}>
                  <label className="block text-sm font-semibold text-grey-primary h-6">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="New Fixed Loan"
                    className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
                  />
                </div>
                <div className={"w-full"}>
                  <label className="text-sm font-semibold text-grey-primary flex items-center gap-1 relative h-6">
                    Loan Type
                    <Tooltip content={""} />
                  </label>
                  <select
                    name="loanType"
                    defaultValue={formData.loanType}
                    onChange={handleInputChange}
                    className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
                  >
                    <option>{formData.loanType}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-grey-primary h-6">
                  Deal
                </label>
                <select
                  name="deal"
                  defaultValue={formData.deal}
                  onChange={handleInputChange}
                  className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
                >
                  <option>{formData.deal}</option>
                </select>
                <span className="text-xs text-grey truncate whitespace-nowrap">
                  Place your new loan to an existing deal or create a new one
                </span>
              </div>
              <div className={"flex gap-4 justify-between"}>
                <div className={"w-full"}>
                  <label className="text-sm font-semibold text-grey-primary flex items-center gap-1 h-6">
                    Loan Amount
                    <Tooltip content={""} />
                  </label>
                  <input
                    type="text"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleInputChange}
                    placeholder="Loan Amount"
                    className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
                  />
                </div>
                <div className={"w-full"}>
                  <label className="block text-sm font-semibold text-grey-primary h-6">
                    CCY
                  </label>
                  <select
                    name="ccy"
                    defaultValue={formData.ccy}
                    onChange={handleInputChange}
                    className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
                  >
                    <option>{formData.ccy}</option>
                  </select>
                </div>
              </div>

              <div className={"flex gap-4 justify-between"}>
                <div className={"w-full"}>
                  <label className="block text-sm font-semibold text-grey-primary h-6">
                    Issue Date
                  </label>
                  <input
                    type="text"
                    name="issueDate"
                    disabled={true}
                    value={formData.issueDate}
                    onChange={handleInputChange}
                    className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
                  />
                </div>
                <div className={"w-full"}>
                  <label className="block text-sm font-semibold text-grey-primary h-6">
                    Maturity Date
                  </label>
                  <input
                    type="text"
                    disabled={true}
                    name="maturityDate"
                    value={formData.maturityDate}
                    onChange={handleInputChange}
                    className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Borrower and Lender Details */}
          <div>
            <h2 className="text-base font-semibold text-grey-blue leading-5 py-4 border-b-1 border-grey-border flex items-center justify-between">
              Borrower & Lender
              <div>
                <button
                  type="button"
                  className={`inline-flex justify-center gap-x-1.5 text-sm uppercase font-semibold text-action-primary  hover:text-blue-dark`}
                >
                  + Add lender
                </button>
              </div>
            </h2>
            <div className="grid grid-cols-1 gap-4 mt-2">
              <div>
                <label className="text-sm font-semibold text-grey-primary flex items-center gap-1">
                  Borrower
                  <Tooltip content={""} />
                </label>
                <select
                  name="borrower"
                  defaultValue={formData.borrower}
                  onChange={handleInputChange}
                  className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
                >
                  <option>{formData.borrower}</option>
                </select>
              </div>
              <div className={"flex gap-4 justify-between"}>
                <div className={"w-full"}>
                  <label className="text-sm font-semibold text-grey-primary flex items-center gap-1">
                    Lenders
                    <Tooltip content={""} />
                  </label>
                  <select
                    name="lender"
                    defaultValue={formData.lender}
                    onChange={handleInputChange}
                    className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
                  >
                    <option>{formData.lender}</option>
                  </select>
                </div>
                <div className={"w-full flex items-center gap-4"}>
                  <div>
                    <label className="text-sm font-semibold text-grey-primary flex items-center gap-1">
                      Lender share
                      <Tooltip content={""} />
                    </label>
                    <input
                      type="text"
                      name="lenderShare"
                      value={formData.lenderShare}
                      onChange={handleInputChange}
                      className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0 truncate"
                    />
                  </div>

                  <p className={"text-base text-grey"}>100%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Rate and Payment Details */}
          <div>
            <h2 className="text-base font-semibold text-grey-blue leading-5 py-4 border-b-1 border-grey-border">
              Rate and Payment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
              <div>
                <label className="text-sm font-semibold text-grey-primary flex items-center gap-1 relative h-6">
                  Rate Type
                  <Tooltip content={""} />
                </label>
                <select
                  name="rateType"
                  defaultValue={formData.rateType}
                  onChange={handleInputChange}
                  className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
                >
                  <option>{formData.rateType}</option>
                </select>
              </div>
              <div id={"tour1-step3"}>
                <label className="text-sm font-semibold text-grey-primary flex items-center gap-1 relative h-6">
                  Annual Rate
                  <Tooltip content={""} />
                </label>
                <input
                  type="text"
                  name="annualRate"
                  value={formData.annualRate}
                  onChange={handleInputChange}
                  className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-grey-primary h-6">
                  Paid
                </label>
                <select
                  name="paid"
                  defaultValue={formData.paid}
                  onChange={handleInputChange}
                  className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
                >
                  <option>{formData.paid}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-grey-primary h-6">
                  Day Count
                </label>
                <select
                  name="dayCount"
                  defaultValue={formData.dayCount}
                  onChange={handleInputChange}
                  className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
                >
                  <option>{formData.dayCount}</option>
                </select>
              </div>
            </div>
          </div>

          {/* Amortization */}
          <div>
            <h2 className="text-base font-semibold text-grey-blue leading-5 py-4 border-b-1 border-grey-border">
              Amortization
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
              <div className="flex items-center space-x-3">
                <span className="text-base text-grey-primary flex items-center gap-1 whitespace-nowrap">
                  Amortized Loan
                  <Tooltip content={""} />
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-10 h-4 bg-[#21212170] rounded-full peer peer-checked:bg-purple-o"></div>
                  <div className="absolute w-6 h-6 bg-white rounded-full shadow-md transform transition peer-checked:translate-x-4 peer-checked:bg-purple"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Documentation */}
          <div>
            <h2 className="text-base font-semibold text-grey-blue leading-5 py-4 border-b-1 border-grey-border">
              Documentation
            </h2>
            <div className="mt-4 border-dashed border-1 bg-grey-o border-grey-light rounded-lg p-4 flex flex-col items-center">
              <p className="text-base font-semibold text-grey-primary">
                Drag & Drop files here to upload or
              </p>
              <button className="mt-2 px-4 py-2 uppercase border border-action-primary text-action-primary rounded-md">
                Browse Files
              </button>
            </div>
          </div>
        </div>
      </div>
      <TransactionsSchedule />
    </>
  );
};

export default FormTable;
