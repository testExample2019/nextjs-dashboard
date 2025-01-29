"use client";
import React, { useEffect, useState } from "react";
import { useTableContext } from "@/app/lib/contexts/template-context";
import { useNextStep } from "nextstepjs";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="w-20 h-10"
          >
            <path
              d="M12 4.25C7.71875 4.25 4.25 7.75 4.25 12C4.25 16.2812 7.71875 19.75 12 19.75C16.25 19.75 19.75 16.2812 19.75 12C19.75 7.75 16.25 4.25 12 4.25ZM12 18.25C8.53125 18.25 5.75 15.4688 5.75 12C5.75 8.5625 8.53125 5.75 12 5.75C15.4375 5.75 18.25 8.5625 18.25 12C18.25 15.4688 15.4375 18.25 12 18.25ZM12 7.6875C11.25 7.6875 10.6875 8.28125 10.6875 9C10.6875 9.75 11.25 10.3125 12 10.3125C12.7188 10.3125 13.3125 9.75 13.3125 9C13.3125 8.28125 12.7188 7.6875 12 7.6875ZM13.75 15.625V14.875C13.75 14.6875 13.5625 14.5 13.375 14.5H13V11.375C13 11.1875 12.8125 11 12.625 11H10.625C10.4062 11 10.25 11.1875 10.25 11.375V12.125C10.25 12.3438 10.4062 12.5 10.625 12.5H11V14.5H10.625C10.4062 14.5 10.25 14.6875 10.25 14.875V15.625C10.25 15.8438 10.4062 16 10.625 16H13.375C13.5625 16 13.75 15.8438 13.75 15.625Z"
              fill="currentColor"
            />
          </svg>

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
