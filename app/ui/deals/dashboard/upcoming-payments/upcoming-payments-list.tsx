"use client";
import React, { useEffect, useState } from "react";
import { ButtonDropdown } from "@/app/ui/components/dropdown";
import {
  DealViews,
  PaymentActions,
  PaymentType,
  PaymentTypes,
  UpcomingPaymentsType,
} from "@/app/lib/definitions";
import { usePathname, useRouter } from "next/navigation";
import {
  BorrowerPaymentOptionsDropdownItems,
  LenderPaymentOptionsDropdownItems,
  today,
} from "@/app/lib/constants";
import Calendar from "@/app/ui/deals/dashboard/upcoming-payments/calendar";
import Status from "@/app/ui/components/status";
import { isSameDay } from "date-fns";
import { useNextStep } from "nextstepjs";

export default function UpcomingPaymentsList({
  upcomingPayments,
  dealView,
}: {
  upcomingPayments: UpcomingPaymentsType;
  dealView: DealViews;
}) {
  const path = usePathname();
  const router = useRouter();
  const [activePaymentType, setActivePaymentType] = useState<PaymentTypes>(
    PaymentTypes.Credits,
  );
  const payments = upcomingPayments?.[activePaymentType];

  const hasPreviewBtn =
    activePaymentType === PaymentTypes.Debits && dealView === DealViews.Lender;

  const { currentStep } = useNextStep();

  useEffect(() => {
    if (
      currentStep === 16 ||
      currentStep === 22 ||
      currentStep === 27 ||
      currentStep === 30
    ) {
      setActivePaymentType(PaymentTypes.Debits);
    } else if (currentStep === 14 || currentStep === 33) {
      setActivePaymentType(PaymentTypes.Credits);
    }
  }, [currentStep]);

  const generateDropdownItems = (payment: PaymentType) => {
    const baseItems =
      dealView === DealViews.Lender
        ? LenderPaymentOptionsDropdownItems
        : BorrowerPaymentOptionsDropdownItems;

    // Return new array of dropdown items with disabled unset if needed
    return baseItems.map((item) => {
      if (
        item.actionType === PaymentActions.ViewTransaction &&
        payment.transactionId
      ) {
        return { ...item, disabled: false };
      }
      if (
        (item.actionType === PaymentActions.ViewNotice ||
          item.actionType === PaymentActions.ViewInvoice) &&
        payment.documentId
      ) {
        return { ...item, disabled: false };
      }

      // Otherwise leave item as-is
      return item;
    });
  };

  const handleUpcomingPaymentDropdownAction = (
    actionType: string,
    payment: PaymentType,
  ) => {
    switch (actionType) {
      case PaymentActions.ViewTransaction:
        if (payment.transactionId) {
          router.push(`/transaction/${payment.transactionId}`);
        }
        break;
      case PaymentActions.ViewNotice:
        if (payment.documentId) {
          router.push(`/document/${payment.documentId}`);
        }
        break;
      case PaymentActions.ViewInvoice:
        if (payment.documentId) {
          router.push(`/document/${payment.documentId}`);
        }
        break;
      default:
        console.log("Unknown action");
    }
  };

  return (
    <div className={"flex justify-between w-full flex-col lg:flex-row"}>
      {/* Content */}
      <div className={"p-4 w-full bg-grey-o"}>
        <div id={"tour1-step26"}>
          <div id={"tour1-step31"}>
            <div id={"tour1-step14"}>
              <div className="flex">
                {[PaymentTypes.Debits, PaymentTypes.Credits].map(
                  (payment, index) => (
                    <button
                      key={index}
                      onClick={() => setActivePaymentType(payment)}
                      className={`flex cursor-pointer gap-2 px-4 py-2 text-sm font-semibold relative capitalize ${
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
                  ),
                )}
              </div>
              <div className="mt-4 space-y-4">
                {payments?.map((payment) => (
                  <div
                    key={payment.id}
                    className={`${payment.transactionId && path.includes(payment.transactionId) ? "bg-[#EDF4FC]" : "bg-white"} px-4 py-2  rounded-lg border shadow-sm border-grey-border`}
                  >
                    <div className="flex justify-between flex-row md:flex-col lg:flex-row lg:items-end gap-2 lg:gap-4">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <p className="text-base font-medium text-grey-primary">
                            {payment.dueDate}
                          </p>
                          {isSameDay(payment.dueDate, today) && (
                            <span className="text-sm font-medium text-grey">
                              Today
                            </span>
                          )}

                          <Status status={payment.status} />
                        </div>

                        <div className="text-xs text-grey flex justify-start gap-4 items-center">
                          {payment.drawDown && (
                            <span className={"uppercase font-semibold"}>
                              DrawDown
                              <span
                                className={
                                  "text-grey-primary text-base ms-2 font-normal"
                                }
                              >
                                {payment.drawDown}
                              </span>
                            </span>
                          )}
                          {payment.drawDownFee && (
                            <span className={"uppercase font-semibold"}>
                              DrawDown Fee
                              <span
                                className={
                                  "text-grey-primary text-base ms-2 font-normal"
                                }
                              >
                                {payment.drawDownFee}
                              </span>
                            </span>
                          )}
                          {payment.prepaymentFee && (
                            <span className={"uppercase font-semibold"}>
                              Prepayment Fee:
                              <span
                                className={
                                  "text-grey-primary text-base ms-2 font-normal"
                                }
                              >
                                {payment.prepaymentFee}
                              </span>
                            </span>
                          )}
                          {payment.interest && (
                            <span className="uppercase font-semibold">
                              Interest:
                              <span
                                className={
                                  "text-grey-primary text-base ms-2 font-normal"
                                }
                              >
                                {payment.interest}
                              </span>
                            </span>
                          )}
                          {payment.principalRepayment && (
                            <span className="uppercase font-semibold">
                              Principal Repayment:
                              <span
                                className={
                                  "text-grey-primary text-base ms-2 font-normal"
                                }
                              >
                                {payment.principalRepayment}
                              </span>
                            </span>
                          )}
                          {hasPreviewBtn && (
                            <button
                              type="button"
                              onClick={() =>
                                handleUpcomingPaymentDropdownAction(
                                  PaymentActions.ViewTransaction,
                                  payment,
                                )
                              }
                              className={`text-sm cursor-pointer transition-all uppercase border p-2 rounded-md tra border-action-primary font-semibold text-action-primary  hover:text-blue-dark`}
                              id="tour1-step15"
                              aria-haspopup="true"
                            >
                              Preview
                            </button>
                          )}
                        </div>
                      </div>
                      <div
                        className={`flex items-end lg:justify-between gap-4 ${hasPreviewBtn ? "-translate-y-1.5" : ""}`}
                      >
                        <p className="font-semibold">
                          <span
                            className={
                              "text-grey text-xs uppercase block text-right"
                            }
                          >
                            Total
                          </span>
                          <span className={"text-grey-primary text-base"}>
                            {payment.total}
                          </span>
                        </p>
                        <ButtonDropdown
                          id={payment.id}
                          dropdownItems={generateDropdownItems(payment)}
                          onAction={(actionType) =>
                            handleUpcomingPaymentDropdownAction(
                              actionType,
                              payment,
                            )
                          }
                        >
                          <button
                            aria-label={`More options for ${payment.total}`}
                            className={`w-8 h-8 cursor-pointer transition-all hover:bg-grey-lighter rounded-md`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M12 10.5C11.1562 10.5 10.5 11.1875 10.5 12C10.5 12.8438 11.1562 13.5 12 13.5C12.8125 13.5 13.5 12.8438 13.5 12C13.5 11.1875 12.8125 10.5 12 10.5ZM10.5 7.25C10.5 8.09375 11.1562 8.75 12 8.75C12.8125 8.75 13.5 8.09375 13.5 7.25C13.5 6.4375 12.8125 5.75 12 5.75C11.1562 5.75 10.5 6.4375 10.5 7.25ZM10.5 16.75C10.5 17.5938 11.1562 18.25 12 18.25C12.8125 18.25 13.5 17.5938 13.5 16.75C13.5 15.9375 12.8125 15.25 12 15.25C11.1562 15.25 10.5 15.9375 10.5 16.75Z"
                                fill="#909090"
                              />
                            </svg>
                          </button>
                        </ButtonDropdown>
                      </div>
                    </div>
                    {/* Additional details if available */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[40%] min-w-[300px]">
        <Calendar payments={payments} />
      </div>
    </div>
  );
}
