"use client";

import React, { useEffect, useState } from "react";
import { replaceViewItemInURL } from "@/app/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { DealViews } from "@/app/lib/definitions";
import { ButtonDropdown } from "@/app/ui/components/dropdown";
import { ViewDropdownItems } from "@/app/lib/constants";
import { useNextStep } from "nextstepjs";

export default function ViewsNav() {
  const { currentStep } = useNextStep();

  const path = usePathname();
  const router = useRouter();
  const [activeView, setActiveView] = useState(DealViews.Lender);
  useEffect(() => {
    if (currentStep >= 27 && activeView === DealViews.Lender) {
      router.push(replaceViewItemInURL(path, DealViews.Borrower));
    }
  }, [currentStep]);

  useEffect(() => {
    path.includes(DealViews.Borrower) && setActiveView(DealViews.Borrower);
    path.includes(DealViews.Lender) && setActiveView(DealViews.Lender);
  }, [path]);

  return (
    <div id={"tour1-step25"}>
      <div className="flex h-full flex-col">
        <div className="flex grow flex-row justify-between space-x-2">
          <div className="inline-flex items-center ">
            <ButtonDropdown
              children={
                <button
                  type="button"
                  className={`${
                    activeView === DealViews.Lender
                      ? "bg-blue-o text-blue-dark"
                      : "bg-orange-o text-orange"
                  } flex justify-between gap-1.5 items-center px-3 py-0.5 z-20 shadow text-sm font-medium rounded-full transition min-w-[160px] hover:shadow-md`}
                  id={`view-button-${activeView}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={"transform translate-y-[2px]"}
                  >
                    <path
                      d="M7.39062 6.75C6.9375 6.75 6.73438 7 6 7C5.25 7 5.04688 6.75 4.59375 6.75C3.4375 6.75 2.5 7.70312 2.5 8.85938V9.25C2.5 9.67188 2.82812 10 3.25 10H8.75C9.15625 10 9.5 9.67188 9.5 9.25V8.85938C9.5 7.70312 8.54688 6.75 7.39062 6.75ZM8.75 9.25H3.25V8.85938C3.25 8.10938 3.84375 7.5 4.59375 7.5C4.82812 7.5 5.1875 7.75 6 7.75C6.79688 7.75 7.15625 7.5 7.39062 7.5C8.14062 7.5 8.75 8.10938 8.75 8.85938V9.25ZM6 6.5C7.23438 6.5 8.25 5.5 8.25 4.25C8.25 3.01562 7.23438 2 6 2C4.75 2 3.75 3.01562 3.75 4.25C3.75 5.5 4.75 6.5 6 6.5ZM6 2.75C6.8125 2.75 7.5 3.4375 7.5 4.25C7.5 5.07812 6.8125 5.75 6 5.75C5.17188 5.75 4.5 5.07812 4.5 4.25C4.5 3.4375 5.17188 2.75 6 2.75Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className={"capitalize whitespace-nowrap"}>
                    {activeView} View
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M7.81249 9.91675C7.91666 10.0209 8.06249 10.0209 8.16666 9.91675L11.25 6.85425C11.3542 6.77091 11.3542 6.60425 11.25 6.50008L10.8333 6.10425C10.75 6.00008 10.5833 6.00008 10.4792 6.10425L7.99999 8.56258L5.49999 6.10425C5.39582 6.00008 5.24999 6.00008 5.14582 6.10425L4.72916 6.50008C4.62499 6.60425 4.62499 6.77091 4.72916 6.85425L7.81249 9.91675Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              }
              dropdownItems={ViewDropdownItems}
              onAction={(actionType) => {
                router.push(replaceViewItemInURL(path, actionType));
                setActiveView(actionType);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
