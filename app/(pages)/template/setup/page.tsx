"use client";

import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { deals } from "@/app/lib/placeholder-data";

const LoanSetupPage = () => {
  const [isAdvanced, setIsAdvanced] = useState(false);
  const router = useRouter();

  // Pre-populated values
  const initialData = {
    name: "New Fixed Loan",
    loanType: "Term Loan",
    loanAmount: "100,000,000.00",
    issueDate: "2025-01-01",
    maturityDate: "2030-01-01",
    deal: "Soultrain Deal",
    borrower: "Soultrain Music Awards",
    lender: "Funky Fund East",
    rateType: "Fixed",
    annualRate: "10.00%",
    paid: "Monthly",
    dayCount: "ACT/365",
  };

  const transactions = [
    {
      transaction: "Commitment",
      date: "2025-01-01",
      amount: "$100,000,000.00",
    },
    { transaction: "Drawdown", date: "2025-01-01", amount: "$100,000,000.00" },
    {
      transaction: "Interest Payment",
      date: "2025-02-01",
      amount: "$849,315.06",
    },
    {
      transaction: "Interest Payment",
      date: "2025-03-01",
      amount: "$761,123.28",
    },
    {
      transaction: "Interest Payment",
      date: "2025-04-01",
      amount: "$849,315.06",
    },
    {
      transaction: "Principal Repayment",
      date: "2030-01-01",
      amount: "$100,000,000.00",
    },
  ];

  const [formData, setFormData] = useState(initialData);

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
    <div className="flex flex-col md:flex-row justify-center md:justify-between min-h-screen bg-gray-50 p-8 gap-8">
      {/* Form Container */}
      <div className="w-full max-w-5xl p-8 bg-white rounded-lg shadow-lg border border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            New Loan Instrument Setup
          </h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Simple</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isAdvanced}
                onChange={() => setIsAdvanced((prev) => !prev)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600"></div>
              <div className="absolute w-4 h-4 bg-white rounded-full shadow-md transform transition peer-checked:translate-x-5"></div>
            </label>
            <span className="text-sm text-gray-600">Advanced</span>
          </div>
        </div>

        {/* Loan Details Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="New Fixed Loan"
              className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Loan Type
            </label>
            <select
              name="loanType"
              value={formData.loanType}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Term Loan</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Loan Amount
            </label>
            <input
              type="text"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Issue Date
            </label>
            <input
              type="date"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Maturity Date
            </label>
            <input
              type="date"
              name="maturityDate"
              value={formData.maturityDate}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Deal
            </label>
            <select
              name="deal"
              value={formData.deal}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Soultrain Deal</option>
            </select>
          </div>
        </div>

        {/* Borrower and Lender Details */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Borrower & Lender
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Borrower
              </label>
              <select
                name="borrower"
                value={formData.borrower}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Soultrain Music Awards</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Lender
              </label>
              <input
                type="text"
                name="lender"
                value={formData.lender}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Rate and Payment Details */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Rate and Payment Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rate Type
              </label>
              <select
                name="rateType"
                value={formData.rateType}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Fixed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Annual Rate
              </label>
              <input
                type="text"
                name="annualRate"
                value={formData.annualRate}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Paid
              </label>
              <select
                name="paid"
                value={formData.paid}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Monthly</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Day Count
              </label>
              <select
                name="dayCount"
                value={formData.dayCount}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option>ACT/365</option>
              </select>
            </div>
          </div>
        </div>

        {/* Documentation */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">Documentation</h2>
          <div className="mt-2 border-dashed border-2 border-gray-300 rounded-lg p-4 flex flex-col items-center">
            <p className="text-sm text-gray-500">Drag & Drop files here</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
              Browse Files
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-6 space-x-4">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 text-gray-500 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() =>
              redirect(
                `/deals/dashboard/${deals[0].name.toLowerCase()}/lender/`,
              )
            }
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
      {/* Table */}
      <div className="w-1/3 max-w-5xl p-8 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Preview transactions schedule
        </h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2 px-3 text-gray-600 text-sm font-medium">
                TRANSACTION
              </th>
              <th className="border-b py-2 px-3 text-gray-600 text-sm font-medium">
                DATE
              </th>
              <th className="border-b py-2 px-3 text-gray-600 text-sm font-medium">
                AMOUNT
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, idx) => (
              <tr key={idx} className="hover:bg-gray-50 whitespace-nowrap">
                <td className="py-2 px-3 text-sm text-gray-800">
                  {txn.transaction}
                </td>
                <td className="py-2 px-3 text-sm text-gray-800">
                  {txn.date}
                </td>
                <td className="py-2 px-3 text-sm text-gray-800">
                  {txn.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanSetupPage;
