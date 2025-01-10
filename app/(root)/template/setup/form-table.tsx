"use client";

import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import { deals, formTableData } from "@/app/lib/placeholder-data";
import { useState } from "react";
import { useNextStep } from "nextstepjs";

const FormTable = () => {
  const [formData, setFormData] = useState(formTableData);
  const { setCurrentStep } = useNextStep();
  useEffect(() => {
    setCurrentStep(2);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div id={"tour1-step3"} className="py-2 px-8">
      {/* Loan Details Form */}
      <h2 className="text-lg font-semibold text-grey-blue py-4 border-b-1 border-grey-border">
        General Info
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <div>
          <label className="block text-sm font-semibold text-grey-primary">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="New Fixed Loan"
            className="w-full mt-1 p-2 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-grey-primary flex items-center gap-1">
            Loan Type
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 4.25C7.71875 4.25 4.25 7.75 4.25 12C4.25 16.2812 7.71875 19.75 12 19.75C16.25 19.75 19.75 16.2812 19.75 12C19.75 7.75 16.25 4.25 12 4.25ZM12 18.25C8.53125 18.25 5.75 15.4688 5.75 12C5.75 8.5625 8.53125 5.75 12 5.75C15.4375 5.75 18.25 8.5625 18.25 12C18.25 15.4688 15.4375 18.25 12 18.25ZM12 7.6875C11.25 7.6875 10.6875 8.28125 10.6875 9C10.6875 9.75 11.25 10.3125 12 10.3125C12.7188 10.3125 13.3125 9.75 13.3125 9C13.3125 8.28125 12.7188 7.6875 12 7.6875ZM13.75 15.625V14.875C13.75 14.6875 13.5625 14.5 13.375 14.5H13V11.375C13 11.1875 12.8125 11 12.625 11H10.625C10.4062 11 10.25 11.1875 10.25 11.375V12.125C10.25 12.3438 10.4062 12.5 10.625 12.5H11V14.5H10.625C10.4062 14.5 10.25 14.6875 10.25 14.875V15.625C10.25 15.8438 10.4062 16 10.625 16H13.375C13.5625 16 13.75 15.8438 13.75 15.625Z"
                fill="#4A90E2"
              />
            </svg>
          </label>
          <select
            name="loanType"
            defaultValue={formData.loanType}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:ring-blue-500"
          >
            <option>{formData.loanType}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-grey-primary">
            Deal
          </label>
          <select
            name="deal"
            defaultValue={formData.deal}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:ring-blue-500"
          >
            <option>{formData.deal}</option>
          </select>
        </div>
        <div className={"flex gap-4 justify-between"}>
          <div className={"w-full"}>
            <label className="text-sm font-semibold text-grey-primary flex items-center gap-1">
              Loan Amount
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 4.25C7.71875 4.25 4.25 7.75 4.25 12C4.25 16.2812 7.71875 19.75 12 19.75C16.25 19.75 19.75 16.2812 19.75 12C19.75 7.75 16.25 4.25 12 4.25ZM12 18.25C8.53125 18.25 5.75 15.4688 5.75 12C5.75 8.5625 8.53125 5.75 12 5.75C15.4375 5.75 18.25 8.5625 18.25 12C18.25 15.4688 15.4375 18.25 12 18.25ZM12 7.6875C11.25 7.6875 10.6875 8.28125 10.6875 9C10.6875 9.75 11.25 10.3125 12 10.3125C12.7188 10.3125 13.3125 9.75 13.3125 9C13.3125 8.28125 12.7188 7.6875 12 7.6875ZM13.75 15.625V14.875C13.75 14.6875 13.5625 14.5 13.375 14.5H13V11.375C13 11.1875 12.8125 11 12.625 11H10.625C10.4062 11 10.25 11.1875 10.25 11.375V12.125C10.25 12.3438 10.4062 12.5 10.625 12.5H11V14.5H10.625C10.4062 14.5 10.25 14.6875 10.25 14.875V15.625C10.25 15.8438 10.4062 16 10.625 16H13.375C13.5625 16 13.75 15.8438 13.75 15.625Z"
                  fill="#4A90E2"
                />
              </svg>
            </label>
            <select
              name="loanAmount"
              defaultValue={formData.loanAmount}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:ring-blue-500"
            >
              <option>{formData.loanAmount}</option>
            </select>
          </div>
          <div className={"w-full"}>
            <label className="block text-sm font-semibold text-grey-primary">
              CCY
            </label>
            <select
              name="loanAmount"
              defaultValue={formData.ccy}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:ring-blue-500"
            >
              <option>{formData.ccy}</option>
            </select>
          </div>
        </div>

        <div className={"flex gap-4 justify-between"}>
          <div className={"w-full"}>
            <label className="block text-sm font-semibold text-grey-primary">
              Issue Date
            </label>
            <input
              type="date"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:ring-blue-500 "
            />
          </div>
          <div className={"w-full"}>
            <label className="block text-sm font-semibold text-grey-primary">
              Maturity Date
            </label>
            <input
              type="date"
              name="maturityDate"
              value={formData.maturityDate}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Borrower and Lender Details */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-grey-blue py-4 border-b-1 border-grey-border">
          Borrower & Lender
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-semibold text-grey-primary flex items-center gap-1">
              Borrower
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 4.25C7.71875 4.25 4.25 7.75 4.25 12C4.25 16.2812 7.71875 19.75 12 19.75C16.25 19.75 19.75 16.2812 19.75 12C19.75 7.75 16.25 4.25 12 4.25ZM12 18.25C8.53125 18.25 5.75 15.4688 5.75 12C5.75 8.5625 8.53125 5.75 12 5.75C15.4375 5.75 18.25 8.5625 18.25 12C18.25 15.4688 15.4375 18.25 12 18.25ZM12 7.6875C11.25 7.6875 10.6875 8.28125 10.6875 9C10.6875 9.75 11.25 10.3125 12 10.3125C12.7188 10.3125 13.3125 9.75 13.3125 9C13.3125 8.28125 12.7188 7.6875 12 7.6875ZM13.75 15.625V14.875C13.75 14.6875 13.5625 14.5 13.375 14.5H13V11.375C13 11.1875 12.8125 11 12.625 11H10.625C10.4062 11 10.25 11.1875 10.25 11.375V12.125C10.25 12.3438 10.4062 12.5 10.625 12.5H11V14.5H10.625C10.4062 14.5 10.25 14.6875 10.25 14.875V15.625C10.25 15.8438 10.4062 16 10.625 16H13.375C13.5625 16 13.75 15.8438 13.75 15.625Z"
                  fill="#4A90E2"
                />
              </svg>
            </label>
            <select
              name="borrower"
              defaultValue={formData.borrower}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:ring-blue-500"
            >
              <option>{formData.borrower}</option>
            </select>
          </div>
          <div className={"flex gap-4 justify-between"}>
            <div className={"w-full"}>
              <label className="text-sm font-semibold text-grey-primary flex items-center gap-1">
                Lender
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 4.25C7.71875 4.25 4.25 7.75 4.25 12C4.25 16.2812 7.71875 19.75 12 19.75C16.25 19.75 19.75 16.2812 19.75 12C19.75 7.75 16.25 4.25 12 4.25ZM12 18.25C8.53125 18.25 5.75 15.4688 5.75 12C5.75 8.5625 8.53125 5.75 12 5.75C15.4375 5.75 18.25 8.5625 18.25 12C18.25 15.4688 15.4375 18.25 12 18.25ZM12 7.6875C11.25 7.6875 10.6875 8.28125 10.6875 9C10.6875 9.75 11.25 10.3125 12 10.3125C12.7188 10.3125 13.3125 9.75 13.3125 9C13.3125 8.28125 12.7188 7.6875 12 7.6875ZM13.75 15.625V14.875C13.75 14.6875 13.5625 14.5 13.375 14.5H13V11.375C13 11.1875 12.8125 11 12.625 11H10.625C10.4062 11 10.25 11.1875 10.25 11.375V12.125C10.25 12.3438 10.4062 12.5 10.625 12.5H11V14.5H10.625C10.4062 14.5 10.25 14.6875 10.25 14.875V15.625C10.25 15.8438 10.4062 16 10.625 16H13.375C13.5625 16 13.75 15.8438 13.75 15.625Z"
                    fill="#4A90E2"
                  />
                </svg>
              </label>
              <select
                name="lender"
                defaultValue={formData.lender}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:ring-blue-500"
              >
                <option>{formData.lender}</option>
              </select>
            </div>
            <div className={"w-full"}>
              <label className="text-sm font-semibold text-grey-primary flex items-center gap-1">
                Lender share
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 4.25C7.71875 4.25 4.25 7.75 4.25 12C4.25 16.2812 7.71875 19.75 12 19.75C16.25 19.75 19.75 16.2812 19.75 12C19.75 7.75 16.25 4.25 12 4.25ZM12 18.25C8.53125 18.25 5.75 15.4688 5.75 12C5.75 8.5625 8.53125 5.75 12 5.75C15.4375 5.75 18.25 8.5625 18.25 12C18.25 15.4688 15.4375 18.25 12 18.25ZM12 7.6875C11.25 7.6875 10.6875 8.28125 10.6875 9C10.6875 9.75 11.25 10.3125 12 10.3125C12.7188 10.3125 13.3125 9.75 13.3125 9C13.3125 8.28125 12.7188 7.6875 12 7.6875ZM13.75 15.625V14.875C13.75 14.6875 13.5625 14.5 13.375 14.5H13V11.375C13 11.1875 12.8125 11 12.625 11H10.625C10.4062 11 10.25 11.1875 10.25 11.375V12.125C10.25 12.3438 10.4062 12.5 10.625 12.5H11V14.5H10.625C10.4062 14.5 10.25 14.6875 10.25 14.875V15.625C10.25 15.8438 10.4062 16 10.625 16H13.375C13.5625 16 13.75 15.8438 13.75 15.625Z"
                    fill="#4A90E2"
                  />
                </svg>
              </label>
              <input
                type="text"
                name="lenderShare"
                value={formData.lenderShare}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              className={`inline-flex justify-center gap-x-1.5 text-sm uppercase font-semibold text-action-primary  hover:text-blue-dark`}
            >
              + Add lender
            </button>
          </div>
        </div>
      </div>

      {/* Rate and Payment Details */}
      <div className="mt-2">
        <h2 className="text-lg font-semibold text-grey-blue py-4 border-b-1 border-grey-border">
          Rate and Payment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <div>
            <label className="block text-sm font-semibold text-grey-primary">
              Rate Type
            </label>
            <select
              name="rateType"
              defaultValue={formData.rateType}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:ring-blue-500"
            >
              <option>{formData.rateType}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-grey-primary">
              Annual Rate
            </label>
            <input
              type="text"
              name="annualRate"
              value={formData.annualRate}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-grey-primary">
              Paid
            </label>
            <select
              name="paid"
              defaultValue={formData.paid}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:ring-blue-500"
            >
              <option>{formData.paid}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-grey-primary">
              Day Count
            </label>
            <select
              name="dayCount"
              defaultValue={formData.dayCount}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:ring-blue-500"
            >
              <option>{formData.dayCount}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bullet Repayment */}
      <div className="mt-2">
        <h2 className="text-lg font-semibold text-grey-blue py-4 border-b-1 border-grey-border">
          Bullet Repayment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <div className="flex items-center space-x-3">
            <span className="text-sm text-grey-primary flex items-center gap-1">
              Amortized Loan
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 4.25C7.71875 4.25 4.25 7.75 4.25 12C4.25 16.2812 7.71875 19.75 12 19.75C16.25 19.75 19.75 16.2812 19.75 12C19.75 7.75 16.25 4.25 12 4.25ZM12 18.25C8.53125 18.25 5.75 15.4688 5.75 12C5.75 8.5625 8.53125 5.75 12 5.75C15.4375 5.75 18.25 8.5625 18.25 12C18.25 15.4688 15.4375 18.25 12 18.25ZM12 7.6875C11.25 7.6875 10.6875 8.28125 10.6875 9C10.6875 9.75 11.25 10.3125 12 10.3125C12.7188 10.3125 13.3125 9.75 13.3125 9C13.3125 8.28125 12.7188 7.6875 12 7.6875ZM13.75 15.625V14.875C13.75 14.6875 13.5625 14.5 13.375 14.5H13V11.375C13 11.1875 12.8125 11 12.625 11H10.625C10.4062 11 10.25 11.1875 10.25 11.375V12.125C10.25 12.3438 10.4062 12.5 10.625 12.5H11V14.5H10.625C10.4062 14.5 10.25 14.6875 10.25 14.875V15.625C10.25 15.8438 10.4062 16 10.625 16H13.375C13.5625 16 13.75 15.8438 13.75 15.625Z"
                  fill="#4A90E2"
                />
              </svg>
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
      <div className="mt-2">
        <h2 className="text-lg font-semibold text-grey-blue py-4 border-b-1 border-grey-border">
          Documentation
        </h2>
        <div className="mt-6 border-dashed border-1 bg-grey-o border-grey-light rounded-lg p-4 flex flex-col items-center">
          <p className="text-base font-semibold text-grey-primary">
            Drag & Drop files here to upload or
          </p>
          <button className="mt-2 px-4 py-2  uppercase border border-action-primary text-action-primary rounded-md">
            Browse Files
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-6 space-x-4">
        <button
          onClick={() => redirect(`/template`)}
          className="px-4 py-2 uppercase text-action-primary rounded-md hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={() =>
            redirect(`/deals/dashboard/${deals[0].name.toLowerCase()}/lender/`)
          }
          className="px-4 py-2 uppercase bg-action-primary text-white rounded-md hover:bg-blue-dark"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default FormTable;
