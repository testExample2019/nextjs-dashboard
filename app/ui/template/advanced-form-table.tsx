"use client";

import React, { useEffect, useState } from "react";
import Tooltip from "@/app/ui/components/tooltip";
import { formTableDataAdvanced } from "@/app/lib/placeholder-data";
import { Cross, Reload } from "@/app/ui/icons";
import { FacilityFee } from "@/app/ui/template/faciliy-fee";
import TransactionsSchedule from "@/app/ui/template/transactions-schedule";
import { FacilityFeeType } from "@/app/lib/definitions";

enum AdvancedTableTabsType {
  RateAndPayment = "rateAndPayment",
  Spreads = "spreads",
  FacilityFees = "facilityFees",
}

const AdvancedTable = () => {
  const [formData, setFormData] = useState(formTableDataAdvanced);
  const [showNewFacility, setShowNewFacility] = useState(false);
  const [selectedRow, setSelectedRow] = useState<FacilityFeeType | null>(null); // Tracks selected row data

  const Tabs = [
    { id: AdvancedTableTabsType.RateAndPayment, label: "Rate and Payment" },
    { id: AdvancedTableTabsType.Spreads, label: "Spreads" },
    { id: AdvancedTableTabsType.FacilityFees, label: "Facility Fees" },
  ];

  // Use effect to scroll to RateAndPayment when the component is mounted
  useEffect(() => {
    const rateAndPaymentElement = document.getElementById(
      AdvancedTableTabsType.RateAndPayment,
    );
    if (rateAndPaymentElement) {
      setTimeout(() => {
        rateAndPaymentElement.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, []);

  const [activeTab, setActiveTab] = useState<AdvancedTableTabsType>(
    AdvancedTableTabsType.RateAndPayment,
  );

  // Handle row click
  const handleFacilityClick = (row: FacilityFeeType) => {
    setSelectedRow(row);
    setShowNewFacility(true);
  };

  // Handle Add button click
  const handleFacilityAddClick = () => {
    setSelectedRow(null); // No row selected when adding a new fee
    setShowNewFacility(true);
  };

  // Handle close form
  const handleFacilityCloseForm = () => {
    setShowNewFacility(false);
  };

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
    <div>
      <div className="py-2 px-8">
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
          <div className={"mb-6"}>
            <h2 className="text-base font-semibold text-grey-blue leading-5 py-4 border-b-1 border-grey-border flex items-center justify-between">
              Borrower & Lender
              <div>
                <button
                  type="button"
                  className={`cursor-pointer inline-flex justify-center gap-x-1.5 text-sm uppercase font-semibold text-action-primary  hover:text-blue-dark`}
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

          <div>
            <div className="flex justify-start border-b border-grey-border gap-4">
              {Tabs.map(({ id, label }) => (
                <button
                  key={id}
                  id={id}
                  onClick={() => setActiveTab(id)}
                  className={`text-sm cursor-pointer font-semibold  border-b-2 py-6 ${
                    activeTab === id
                      ? "border-action-primary text-action-primary"
                      : "text-grey-secondary border-transparent"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/*  Rate And Payment */}
            {activeTab === AdvancedTableTabsType.RateAndPayment && (
              <>
                {/* Rate and Payment Details */}
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div>
                      <label className="text-sm font-semibold text-grey-primary flex items-center gap-1 relative h-6">
                        Business Day Calendars
                      </label>
                      <select
                        name="businessDayCalendars"
                        defaultValue={formData.businessDayCalendars}
                        onChange={handleInputChange}
                        className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
                      >
                        <option>{formData.businessDayCalendars}</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-grey-primary flex items-center gap-1 relative h-6">
                        Non-Business Day Rule
                      </label>
                      <select
                        name="nonBusinessDayRule"
                        defaultValue={formData.nonBusinessDayRule}
                        onChange={handleInputChange}
                        className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
                      >
                        <option>{formData.nonBusinessDayRule}</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
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
                    <div>
                      <label className="text-sm font-semibold text-grey-primary flex items-center gap-1 relative h-6">
                        PIK Option
                        <Tooltip content={""} />
                      </label>
                      <select
                        name="pikOption"
                        defaultValue={formData.pikOption}
                        onChange={handleInputChange}
                        className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
                      >
                        <option>{formData.pikOption}</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-grey-primary flex items-center gap-1 relative h-6">
                        PIK Reduces Unfunded
                      </label>
                      <select
                        name="pikReducesUnfunded"
                        defaultValue={formData.pikReducesUnfunded}
                        onChange={handleInputChange}
                        className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
                      >
                        <option>{formData.pikReducesUnfunded}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-grey-primary h-6">
                        Rate Scale
                      </label>
                      <input
                        type="text"
                        name="rateScale"
                        value={formData.rateScale}
                        onChange={handleInputChange}
                        className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-base text-grey-primary flex items-center gap-1">
                        Include Accrual End
                        <Tooltip content={""} />
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked={true}
                        />
                        <div className="w-10 h-4 bg-[#21212170] rounded-full peer peer-checked:bg-purple-o"></div>
                        <div className="absolute w-6 h-6 bg-white rounded-full shadow-md transform transition peer-checked:translate-x-4 peer-checked:bg-purple"></div>
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-base text-grey-primary flex items-center gap-1">
                        Adjust Accrual End to Business Days
                        <Tooltip content={""} />
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked={false}
                        />
                        <div className="w-10 h-4 bg-[#21212170] rounded-full peer peer-checked:bg-purple-o"></div>
                        <div className="absolute w-6 h-6 bg-white rounded-full shadow-md transform transition peer-checked:translate-x-4 peer-checked:bg-purple"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/*   Interest Periods */}
                <div>
                  <h2 className="text-base font-semibold text-grey-blue leading-5 py-4 border-b-1 border-grey-border flex items-center justify-between">
                    Interest Periods
                    <div className={"flex items-center gap-6"}>
                      <button
                        type="button"
                        className={`cursor-pointer inline-flex justify-center gap-x-1.5 text-sm uppercase font-semibold text-action-primary  hover:text-blue-dark`}
                      >
                        + Add
                      </button>
                      <Reload />
                    </div>
                  </h2>
                </div>

                {/*   1ME (Pay 1st BD) */}
                <div>
                  <h2 className="text-base font-semibold text-grey-blue leading-5 py-4 border-b-1 border-grey-border flex items-center justify-between">
                    1ME (Pay 1st BD)
                    <button className={"cursor-pointer"} type="button">
                      <Cross />
                    </button>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
                    <div>
                      <label className="block text-sm font-semibold text-grey-primary h-6">
                        Accrual Frequency
                      </label>
                      <input
                        type="text"
                        name="accrualFrequency"
                        value={formData.accrualFrequency}
                        onChange={handleInputChange}
                        className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-grey-primary h-6"></label>
                      <select
                        aria-label="Accrual Frequency Unit"
                        name="accrualFrequencyUnit"
                        defaultValue={formData.accrualFrequencyUnit}
                        onChange={handleInputChange}
                        className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
                      >
                        <option>{formData.accrualFrequencyUnit}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-grey-primary h-6 whitespace-nowrap">
                        Adjust Interest Payment Date To
                      </label>
                      <input
                        type="text"
                        name="adjustmentValue"
                        value={formData.adjustmentValue}
                        onChange={handleInputChange}
                        className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-grey-primary h-6"></label>
                      <input
                        aria-label="Interest Payment Adjustment DateType"
                        type="text"
                        name="adjustmentType"
                        value={formData.adjustmentType}
                        onChange={handleInputChange}
                        className="w-full p-1 border-t-0 border-l-0 border-r-0 border-b-1 truncate border-grey-border focus:border-action-primary focus:ring-0"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/*  Spreads */}
            {activeTab === AdvancedTableTabsType.Spreads && (
              <div>
                <h2 className="text-base font-semibold text-grey-blue leading-5 py-4 border-b-1 border-grey-border flex items-center justify-between">
                  Spreads
                  <div className={"flex items-center gap-6"}>
                    <button
                      type="button"
                      className={`cursor-pointer inline-flex justify-center gap-x-1.5 text-sm uppercase font-semibold text-action-primary  hover:text-blue-dark`}
                    >
                      + Add
                    </button>
                    <Reload />
                  </div>
                </h2>
                {/* Spreads Table */}
                <table className="w-full border-collapse text-left mt-2">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 text-xs font-bold text-grey-secondary uppercase">
                        Date
                      </th>
                      <th className="py-2 px-4 text-xs font-bold text-grey-secondary uppercase">
                        Spread Type
                      </th>
                      <th className="py-2 px-4 text-xs font-bold text-grey-secondary uppercase text-right">
                        Spread
                      </th>
                      <th className="py-2 px-4 text-xs font-bold text-grey-secondary uppercase text-right">
                        Spread Adj
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.spreads.map((spread, index) => (
                      <tr key={index} className="border-b border-grey-lighter">
                        <td className="py-2 px-4 text-base text-grey-primary">
                          {spread.date}
                        </td>
                        <td className="py-2 px-4 text-base text-grey-primary">
                          {spread.spreadType}
                        </td>
                        <td className="py-2 px-4 text-base text-grey-primary text-right">
                          {spread.spread}
                        </td>
                        <td className="py-2 px-4 text-base text-grey-primary text-right">
                          {spread.spreadAdj}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/*  Facility Fees */}
            {activeTab === AdvancedTableTabsType.FacilityFees && (
              <div>
                <h2 className="text-base font-semibold text-grey-blue leading-5 py-4 border-b-1 border-grey-border flex items-center justify-between">
                  Facility Fees
                  <div className={"flex items-center gap-6"}>
                    <button
                      type="button"
                      onClick={handleFacilityAddClick}
                      className={`cursor-pointer inline-flex justify-center gap-x-1.5 text-sm uppercase font-semibold text-action-primary  hover:text-blue-dark`}
                    >
                      + Add
                    </button>
                    <Reload />
                  </div>
                </h2>
                {/* Facility Fees Table */}
                <table className="w-full border-collapse text-left mt-2">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 text-xs font-bold text-grey-secondary uppercase">
                        Type
                      </th>
                      <th className="py-2 px-4 text-xs font-bold text-grey-secondary uppercase">
                        Applies To
                      </th>
                      <th className="py-2 px-4 text-xs font-bold text-grey-secondary uppercase text-right">
                        Rate
                      </th>
                      <th className="py-2 px-4 text-xs font-bold text-grey-secondary uppercase text-right">
                        Flat Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.facilityFees.map((facility, index) => (
                      <tr
                        onClick={() => handleFacilityClick(facility)}
                        key={index}
                        className="border-b border-grey-lighter cursor-pointer transition-all hover:bg-blue-o"
                      >
                        <td className="py-2 px-4 text-base text-grey-primary">
                          {facility.type}
                        </td>
                        <td className="py-2 px-4 text-base text-grey-primary">
                          {facility.appliesTo}
                        </td>
                        <td className="py-2 px-4 text-base text-grey-primary text-right">
                          {facility.rate}
                        </td>
                        <td className="py-2 px-4 text-base text-grey-primary text-right">
                          {facility.flatAmount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
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
            <div className="mt-2 border-dashed border-1 bg-grey-o border-grey-light rounded-lg p-4 flex flex-col items-center">
              <p className="text-base font-semibold text-grey-primary">
                Drag & Drop files here to upload or
              </p>
              <button className="cursor-pointer mt-2 px-4 py-2 uppercase border border-action-primary text-action-primary rounded-md">
                Browse Files
              </button>
            </div>
          </div>
        </div>

        <TransactionsSchedule />

        {/* New Facility Fee Form */}
        {showNewFacility && selectedRow && (
          <FacilityFee data={selectedRow} onClose={handleFacilityCloseForm} />
        )}
      </div>
    </div>
  );
};

export default AdvancedTable;
