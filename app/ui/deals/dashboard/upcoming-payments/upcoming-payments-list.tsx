"use client";
import { useState } from "react";
import React from "react";
import { ButtonDropdown } from "@/app/ui/components/dropdown";
import {
  DealViews,
  PaymentActions,
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
import Status from "@/app/ui/components/status";

export default function UpcomingPaymentsList({
  upcomingPayments,
}: {
  upcomingPayments: UpcomingPaymentsType;
}) {
  const path = usePathname();
  const router = useRouter();
  const [activePaymentType, setActivePaymentType] = useState<PaymentTypes>(
    PaymentTypes.Credits,
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
          {[PaymentTypes.Debits, PaymentTypes.Credits].map((payment, index) => (
            <button
              key={index}
              onClick={() => setActivePaymentType(payment)}
              className={`flex gap-2 px-4 py-2 text-sm font-semibold relative capitalize ${
                activePaymentType === payment
                  ? "border-b-2 border-action-primary text-action-primary"
                  : "text-grey-secondary"
              }`}
            >
              {payment}
              <span className="bg-red text-white rounded-full w-5 h-5 font-bold">
                {upcomingPayments?.[payment]?.length}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-4 space-y-4">
          {payments?.map((payment) => (
            <div
              key={payment.id}
              className={`${payment.transactionId && path.includes(payment.transactionId) ? "bg-[#EDF4FC]" : "bg-white"} px-4 py-2  rounded-medium border shadow-md border-grey-border`}
            >
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-grey-primary">
                      {payment.dueDate}
                    </p>
                    <Status status={payment.status} />
                  </div>

                  <div className="text-sm text-grey flex justify-start gap-4 items-center">
                    {payment.drawDown && (
                      <span className={"uppercase font-semibold"}>
                        DrawDown
                        <span className={"text-grey-primary ms-2 font-normal"}>
                          {payment.drawDown}
                        </span>
                      </span>
                    )}
                    {payment.drawDownFee && (
                      <span className={"uppercase font-semibold"}>
                        DrawDown Fee
                        <span className={"text-grey-primary ms-2 font-normal"}>
                          {payment.drawDownFee}
                        </span>
                      </span>
                    )}
                    {payment.prepaymentFee && (
                      <span className={"uppercase font-semibold"}>
                        Prepayment Fee:
                        <span className={"text-grey-primary ms-2 font-normal"}>
                          {payment.prepaymentFee}
                        </span>
                      </span>
                    )}
                    {payment.interest && (
                      <span className="uppercase font-semibold">
                        Interest:
                        <span className={"text-grey-primary ms-2 font-normal"}>
                          {payment.interest}
                        </span>
                      </span>
                    )}
                    {payment.principalRepayment && (
                      <span className="uppercase font-semibold">
                        Principal Repayment:
                        <span className={"text-grey-primary ms-2 font-normal"}>
                          {payment.principalRepayment}
                        </span>
                      </span>
                    )}
                    {activePaymentType === PaymentTypes.Debits &&
                      path.includes(DealViews.Lender) && (
                        <ButtonDropdown
                          children={
                            <button
                              type="button"
                              className={`text-sm uppercase border p-2 rounded-md tra border-action-primary font-semibold text-action-primary  hover:text-blue-dark`}
                              id="menu-button"
                              aria-haspopup="true"
                            >
                              {"Preview"}
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
                    onAction={(actionType) => {
                      if (
                        actionType === PaymentActions.ViewTransaction &&
                        payment.transactionId
                      ) {
                        router.push(`/transaction/${payment.transactionId}`);
                      }
                      if (
                        actionType === PaymentActions.ViewNotice &&
                        payment.noticeId
                      ) {
                        router.push(`/notice/${payment.noticeId}`);
                      } else return;
                    }}
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
