"use client";

import React, { useState } from "react";
import FormTable from "@/app/ui/template/form-table";
import Tooltip from "@/app/ui/components/tooltip";
import AdvancedFormTable from "@/app/ui/template/advanced-form-table";
import { TableProvider } from "@/app/lib/contexts/template-context";
import { redirect } from "next/navigation";
import { defaultDashboardPath } from "@/app/lib/constants";

const LoanSetupPage = () => {
  const [isAdvanced, setIsAdvanced] = useState(false);

  return (
    <TableProvider>
      <section className="relative">
        {/* Form Container */}
        <div
          id={"tour1-step3"}
          className="w-full lg:w-[60%] bg-white border-r-1 border-grey-border flex flex-col h-[calc(100vh-65px)]"
        >
          {/* Header */}
          <div className="flex justify-between items-center py-2 px-4 border-b-1 border-grey-border">
            <h1 className="text-18 font-semibold text-grey-primary">
              New Loan Setup
            </h1>
            <div id={"tour1-step3-3"} className="flex items-center space-x-3">
              <span className="text-sm text-grey-primary flex items-center gap-1">
                Advanced mode
                <Tooltip
                  content={
                    "Advanced mode gives you more tools to customize the Loan terms."
                  }
                />
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isAdvanced}
                  onChange={() => setIsAdvanced((prev) => !prev)}
                />
                <div className="w-10 h-4 bg-[#21212170] rounded-full peer peer-checked:bg-purple-o"></div>
                <div className="absolute w-6 h-6 bg-white rounded-full shadow-md transform transition peer-checked:translate-x-4 peer-checked:bg-purple"></div>
              </label>
            </div>
          </div>
          {/* Content */}
          <div className={"flex-1 overflow-y-auto"}>
            {isAdvanced ? <AdvancedFormTable /> : <FormTable />}
          </div>
          {/* Action Buttons */}
          <div className="flex justify-between py-2 px-6 gap-4 border-t-1 border-grey-border">
            <button
              onClick={() => redirect(`/template`)}
              className="px-4 py-2 uppercase text-action-primary rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={() => redirect(defaultDashboardPath)}
              className="px-4 py-2 uppercase bg-action-primary text-white rounded-md hover:bg-blue-dark"
            >
              Save
            </button>
          </div>
        </div>
      </section>
    </TableProvider>
  );
};

export default LoanSetupPage;
