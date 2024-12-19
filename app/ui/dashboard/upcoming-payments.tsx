"use client";
import React, { useState } from "react";
import { UpcomingPaymentsType } from "@/app/lib/definitions";
import { ButtonDropdown } from "@/app/ui/dropdown";
import { PaymentDropdownItems } from "@/app/lib/data";
import { handlePaymentDropdownClick } from "@/app/lib/actions";

export default function UpcomingPayments({
  upcomingPayments,
}: {
  upcomingPayments: UpcomingPaymentsType;
}) {
  const [activeTab, setActiveTab] = useState<"credits" | "debits">("credits");

  const payments = upcomingPayments?.[activeTab]; // Dynamically get active payments

  return (
    <>
      <h3 className={"text-grey-primary text-base font-semibold"}>
        Upcoming Payments
      </h3>
      <div className="rounded-lg shadow-md flex justify-between">
        <div className="p-4 w-full bg-grey-o">
          {/* Tabs */}
          <div className="flex">
            <button
              onClick={() => setActiveTab("debits")}
              className={`p-2 text-sm font-medium ${
                activeTab === "debits"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
            >
              Debits
            </button>
            <button
              onClick={() => setActiveTab("credits")}
              className={`p-2 text-sm font-medium ${
                activeTab === "credits"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
            >
              Credits
            </button>
          </div>

          {/* Payments List */}
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
                          : "text-gray-500"
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
                      onAction={handlePaymentDropdownClick}
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
        </div>

        {/* Calendar */}
        <div className="w-1/3">
          <div className="bg-white rounded-lg border border-gray-200 p-4 h-full">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm font-medium text-gray-700">DECEMBER 2024</p>
              <div className="space-x-2">
                <button className="text-sm text-gray-500 hover:text-gray-900">
                  &lt;
                </button>
                <button className="text-sm text-gray-500 hover:text-gray-900">
                  &gt;
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              <span className="text-xs font-semibold text-gray-500">SU</span>
              <span className="text-xs font-semibold text-gray-500">MO</span>
              <span className="text-xs font-semibold text-gray-500">TU</span>
              <span className="text-xs font-semibold text-gray-500">WE</span>
              <span className="text-xs font-semibold text-gray-500">TH</span>
              <span className="text-xs font-semibold text-gray-500">FR</span>
              <span className="text-xs font-semibold text-gray-500">SA</span>

              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="text-sm">1</span>
              <span className="text-sm">2</span>
              <span className="text-sm">3</span>
              <span className="text-sm">4</span>
              <span className="text-sm">5</span>
              <span className="text-sm">6</span>
              <span className="text-sm">7</span>
              <span className="text-sm">8</span>
              <span className="text-sm">9</span>
              <span className="text-sm">10</span>
              <span className="text-sm">11</span>
              <span className="text-sm">12</span>
              <span className="text-sm">13</span>
              <span className="text-sm">14</span>
              <span className="text-sm">15</span>
              <span className="text-sm">16</span>
              <span className="text-sm">17</span>
              <span className="text-sm">18</span>
              <span className="text-sm">19</span>
              <span className="text-sm">20</span>
              <span className="text-sm">21</span>
              <span className="text-sm">22</span>
              <span className="bg-blue-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center mx-auto">
                30
              </span>
              <span className="text-sm">31</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
