"use client";
import React, { useEffect, useState } from "react";
import { useTableContext } from "@/app/lib/contexts/template-context";
import { useNextStep } from "nextstepjs";
import Tooltip from "@/app/ui/components/tooltip";

const TransactionsSchedule = () => {
  const { transactionsTableData } = useTableContext();
  const { currentStep } = useNextStep();

  // Track recently changed rows for animation
  const [updatedRows, setUpdatedRows] = useState<number[]>([]);

  useEffect(() => {
    // Add all row indices as updated initially
    currentStep === 5 &&
      setUpdatedRows(transactionsTableData.map((_, idx) => idx));

    // Remove the updated state after the animation duration
    const timeout = setTimeout(() => setUpdatedRows([]), 1500); // Matches the animation duration
    return () => clearTimeout(timeout);
  }, [transactionsTableData]);

  return (
    <div className="w-full lg:w-[40%] bg-white h-full overflow-y-auto absolute top-0 right-0">
      <h2 className="text-18 font-semibold capitalize text-grey-primary py-2 px-4 border-b-1 border-grey-border">
        Preview transactions schedule
      </h2>
      <div id={"tour1-step2"}>
        <div className="bg-blue-50 border border-blue-100 p-4 mx-4 my-6 rounded-lg flex items-start gap-2 text-grey-primary">
          <Tooltip content={""} />

          <p className="text-13 text-grey-primary">
            This is a preliminary preview of transactions based on provided
            inputs. You will be able to adjust and create new transactions
            during the loan lifecycle. Check for the Advanced mode to customize
            more details.
          </p>
        </div>
        <table
          id={"tour1-step3-1"}
          className="w-full text-left border-collapse"
        >
          <thead>
            <tr>
              <th className="border-b p-3 text-grey-secondary text-xs font-semibold">
                TRANSACTION
              </th>
              <th className="border-b p-3 text-grey-secondary text-xs font-semibold">
                DATE
              </th>
              <th className="border-b p-3 text-grey-secondary text-xs font-semibold">
                AMOUNT
              </th>
            </tr>
          </thead>
          <tbody>
            {transactionsTableData.map((txn, idx) => (
              <tr
                key={idx}
                className={`hover:bg-gray-50 whitespace-nowrap ${
                  updatedRows.includes(idx) ? "animate-highlight" : ""
                }`}
              >
                <td className="p-3 text-sm text-grey-primary">
                  {txn.transaction}
                </td>
                <td className="p-3 text-sm text-grey-primary">{txn.date}</td>
                <td className="p-3 text-sm text-grey-primary">{txn.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsSchedule;
