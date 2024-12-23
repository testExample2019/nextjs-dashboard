"use client";
import { useState } from "react";
import React from "react";
import { ButtonDropdown } from "@/app/ui/components/dropdown";
import { PaymentDropdownItems } from "@/app/lib/data";
import { handlePaymentDropdownClick } from "@/app/lib/actions";
import { PaymentTypes, UpcomingPaymentsType } from "@/app/lib/definitions";
import { usePathname } from "next/navigation";

export default function UpcomingPaymentsList({
  upcomingPayments,
  dealName,
  dealView,
  dealPaymentType,
}: {
  upcomingPayments: UpcomingPaymentsType;
  dealName: string;
  dealView: string;
  dealPaymentType: PaymentTypes;
}) {
  const path = usePathname();
  const [activeTab, setActiveTab] = useState<"credits" | "debits">("debits");

  const payments = upcomingPayments?.[activeTab]; // Dynamically get active payments
  return (
    <>
      <div className="flex">
        <button
          onClick={() => setActiveTab("debits")}
          className={`px-4 py-2 text-sm font-semibold ${
            activeTab === "debits"
              ? "border-b-2 border-action-primary text-action-primary"
              : "text-grey-secondary"
          }`}
        >
          Debits
        </button>
        <button
          onClick={() => setActiveTab("credits")}
          className={`px-4 py-2 text-sm font-semibold ${
            activeTab === "credits"
              ? "border-b-2 border-action-primary text-action-primary"
              : "text-grey-secondary"
          }`}
        >
          Credits
        </button>
      </div>
      <div className="mt-4 space-y-4">
        {payments?.map((payment, index: number) => (
          <div
            key={index}
            className="px-4 py-2 bg-white rounded-medium border shadow-md border-[#E3E3E3]"
          >
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {payment.dueDate}
                </p>
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
              <div className={"flex items-center justify-between gap-4"}>
                <p className="text-sm font-semibold text-grey-primary">
                  <span className={"text-grey uppercase block"}>Total</span>
                  <span>{payment.total}</span>
                </p>
                <ButtonDropdown
                  children={
                    <button className={"w-10 h-10"}>
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
                  dropdownItems={PaymentDropdownItems}
                  onAction={(actionType) =>
                    handlePaymentDropdownClick(
                      actionType,
                      `/transaction/${payment.id}`,
                    )
                  }
                />
              </div>
            </div>
            {/* Additional details if available */}
            <p className="text-sm text-grey flex justify-start gap-4">
              {payment.prepaymentFee && (
                <span className={"uppercase"}>
                  Prepayment Fee:{" "}
                  <span className={"text-grey-primary"}>
                    {payment.prepaymentFee}
                  </span>
                </span>
              )}
              {payment.interest && (
                <span className="block uppercase">
                  Interest:{" "}
                  <span className={"text-grey-primary"}>
                    {payment.interest}
                  </span>
                </span>
              )}
              {payment.principalRepayment && (
                <span className="block uppercase">
                  Principal Repayment:{" "}
                  <span className={"text-grey-primary"}>
                    {payment.principalRepayment}
                  </span>
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
