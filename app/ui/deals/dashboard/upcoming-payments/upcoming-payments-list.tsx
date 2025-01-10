"use client";
import { useState } from "react";
import React from "react";
import { ButtonDropdown } from "@/app/ui/components/dropdown";
import {
  PaymentApproveActions,
  PaymentTypes,
  UpcomingPaymentsType,
} from "@/app/lib/definitions";
import { usePathname, useRouter } from "next/navigation";
import { useToast } from "@/app/lib/contexts/toast-context";
import {
  PaymentApproveDropdownItems,
  PaymentOptionsDropdownItems,
} from "@/app/lib/constants";
import Calendar from "@/app/ui/deals/dashboard/upcoming-payments/calendar";

export default function UpcomingPaymentsList({
  upcomingPayments,
}: {
  upcomingPayments: UpcomingPaymentsType;
}) {
  const path = usePathname();
  const router = useRouter();
  const [activePaymentType, setActivePaymentType] = useState<PaymentTypes>(
    PaymentTypes.Debits,
  );
  const payments = upcomingPayments?.[activePaymentType];
  const { showToast } = useToast();
  const handleShowSuccessToast = () => {
    showToast("Approved!", "success");
  };
  const handleShowErrorToast = () => {
    showToast("Rejected!", "success");
  };

  return (
    <div className={"flex justify-between w-full"}>
      {/* Content */}
      <div className={"p-4 w-full bg-grey-o"}>
        <div className="flex">
          <button
            onClick={() => setActivePaymentType(PaymentTypes.Debits)}
            className={`flex gap-2 px-4 py-2 text-sm font-semibold relative ${
              activePaymentType === PaymentTypes.Debits
                ? "border-b-2 border-action-primary text-action-primary"
                : "text-grey-secondary"
            }`}
          >
            Debits
            <span className="bg-red text-white rounded-full w-5 h-5 font-bold">
              {upcomingPayments?.[PaymentTypes.Debits]?.length}
            </span>
          </button>
          <button
            onClick={() => setActivePaymentType(PaymentTypes.Credits)}
            className={`flex gap-2 px-4 py-2 text-sm font-semibold relative ${
              activePaymentType === PaymentTypes.Credits
                ? "border-b-2 border-action-primary text-action-primary"
                : "text-grey-secondary"
            }`}
          >
            Credits
            <span className="bg-red text-white rounded-full w-5 h-5 font-bold">
              {upcomingPayments?.[PaymentTypes.Credits]?.length}
            </span>
          </button>
        </div>
        <div className="mt-4 space-y-4">
          {payments?.map((payment) => (
            <div
              key={payment.id}
              className={`${path.includes(payment.transactionId) ? "bg-[#EDF4FC]" : "bg-white"} px-4 py-2  rounded-medium border shadow-md border-grey-border`}
            >
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-grey-primary">
                      {payment.dueDate}
                    </p>
                    <div className="flex items-center gap-1">
                      {payment.status.includes("Pending") && (
                        <span className={`w-2 h-2 bg-red rounded-full`} />
                      )}
                      <p
                        className={`text-sm ${
                          payment.status.includes("overdue")
                            ? "text-red"
                            : "text-grey"
                        }`}
                      >
                        {payment.status}
                      </p>
                    </div>
                  </div>

                  <div className="text-sm text-grey flex justify-start gap-4 items-center">
                    {payment.drawDown && (
                      <span className={"uppercase"}>
                        DrawDown
                        <span className={"text-grey-primary ms-2"}>
                          {payment.drawDown}
                        </span>
                      </span>
                    )}
                    {payment.drawDownFee && (
                      <span className={"uppercase"}>
                        DrawDown Fee
                        <span className={"text-grey-primary ms-2"}>
                          {payment.drawDownFee}
                        </span>
                      </span>
                    )}
                    {payment.prepaymentFee && (
                      <span className={"uppercase"}>
                        Prepayment Fee:
                        <span className={"text-grey-primary ms-2"}>
                          {payment.prepaymentFee}
                        </span>
                      </span>
                    )}
                    {payment.interest && (
                      <span className="block uppercase">
                        Interest:
                        <span className={"text-grey-primary ms-2"}>
                          {payment.interest}
                        </span>
                      </span>
                    )}
                    {payment.principalRepayment && (
                      <span className="block uppercase">
                        Principal Repayment:
                        <span className={"text-grey-primary ms-2"}>
                          {payment.principalRepayment}
                        </span>
                      </span>
                    )}
                    {activePaymentType === PaymentTypes.Debits && (
                      <ButtonDropdown
                        children={
                          <button
                            type="button"
                            className={`inline-flex justify-center gap-x-1.5 text-sm uppercase font-semibold text-action-primary  hover:text-blue-dark`}
                            id="menu-button"
                            aria-expanded="true"
                            aria-haspopup="true"
                          >
                            {"APPROVE"}
                            <svg
                              className="-mr-1 size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              data-slot="icon"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        }
                        dropdownItems={PaymentApproveDropdownItems}
                        onAction={(actionType: string) => {
                          if (
                            actionType === PaymentApproveActions.Approve ||
                            actionType === PaymentApproveActions.ApproveAndPay
                          ) {
                            handleShowSuccessToast();
                          } else {
                            handleShowErrorToast();
                          }
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className={"flex items-center justify-between gap-4"}>
                  <p className="font-semibold">
                    <span className={"text-grey text-sm uppercase block"}>
                      Total
                    </span>
                    <span className={"text-grey-primary text-base"}>
                      {payment.total}
                    </span>
                  </p>
                  <ButtonDropdown
                    children={
                      <button
                        className={
                          "w-10 h-10 transition-all hover:bg-grey-lighter rounded-md"
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 10.5C11.1562 10.5 10.5 11.1875 10.5 12C10.5 12.8438 11.1562 13.5 12 13.5C12.8125 13.5 13.5 12.8438 13.5 12C13.5 11.1875 12.8125 10.5 12 10.5ZM10.5 7.25C10.5 8.09375 11.1562 8.75 12 8.75C12.8125 8.75 13.5 8.09375 13.5 7.25C13.5 6.4375 12.8125 5.75 12 5.75C11.1562 5.75 10.5 6.4375 10.5 7.25ZM10.5 16.75C10.5 17.5938 11.1562 18.25 12 18.25C12.8125 18.25 13.5 17.5938 13.5 16.75C13.5 15.9375 12.8125 15.25 12 15.25C11.1562 15.25 10.5 15.9375 10.5 16.75Z"
                            fill="#6B98A2"
                          />
                        </svg>
                      </button>
                    }
                    dropdownItems={PaymentOptionsDropdownItems}
                    onAction={() =>
                      router.push(`/transaction/${payment.transactionId}`)
                    }
                  />
                </div>
              </div>
              {/* Additional details if available */}
            </div>
          ))}
        </div>
      </div>

      {/* Calendar */}
      <Calendar payments={payments} />
    </div>
  );
}
