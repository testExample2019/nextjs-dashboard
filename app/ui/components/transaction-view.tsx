import React from "react";
import { TransactionType } from "@/app/lib/definitions";
import { notFound } from "next/navigation";

const TransactionView = ({ transaction }: { transaction?: TransactionType }) => {
  if (!transaction) {
    notFound();
  }
  return (
    <div className="bg-white rounded-lg p-6 h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">View Transaction</h2>
        <button className="text-gray-500 hover:text-gray-800">&times;</button>
      </div>

      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <div>
          <h3 className="text-base font-medium">Transaction</h3>
          <p className="text-gray-600">Interest Payment</p>
        </div>
        <div>
          <p className="text-sm font-medium">Status</p>
          <p className="text-red-600 font-semibold">Not Paid</p>
        </div>
      </div>

      <div className="flex space-x-4 mb-4">
        <button className="text-blue-600 border-b-2 border-blue-600 pb-2">
          Transaction Info
        </button>
        <button className="text-gray-500 hover:text-blue-600 hover:border-blue-600 pb-2">
          Allocations
        </button>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Deal</p>
            <p className="font-medium text-gray-800">{transaction.deal}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Counterparty</p>
            <p className="font-medium text-gray-800">
              {transaction.counterparty}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Instrument</p>
            <p className="font-medium text-gray-800">
              {transaction.instrument}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Payment Date</p>
            <p className="font-medium text-gray-800">2024-01-24</p>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-500">Amount</p>
          <p className="font-medium text-gray-800">$6,997.51</p>
        </div>
      </div>

      <div className="mt-6 border-t pt-4">
        <h3 className="text-sm font-medium text-gray-800 mb-4">Rate Info</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Type</p>
            <p className="font-medium text-gray-800">Fixed</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Day Count</p>
            <p className="font-medium text-gray-800">ACT/360</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Accrual Start</p>
            <p className="font-medium text-gray-800">2025-01-01</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Accrual End</p>
            <p className="font-medium text-gray-800">2025-01-31</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-800 mb-4">
          Interest Amount
        </h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2 text-sm font-medium text-gray-500">
                Date
              </th>
              <th className="border-b py-2 text-sm font-medium text-gray-500">
                Rate
              </th>
              <th className="border-b py-2 text-sm font-medium text-gray-500">
                Principal
              </th>
              <th className="border-b py-2 text-sm font-medium text-gray-500">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 text-gray-800 text-sm">2025-01-01</td>
              <td className="py-2 text-gray-800 text-sm">8.5600%</td>
              <td className="py-2 text-gray-800 text-sm">$50,000.00</td>
              <td className="py-2 text-gray-800 text-sm">$56,978.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionView;
