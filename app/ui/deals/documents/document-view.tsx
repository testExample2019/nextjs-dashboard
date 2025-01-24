"use client";

import React, { useEffect, useState } from "react";
import { DocumentType } from "@/app/lib/definitions";
import { notFound } from "next/navigation";
import Status from "@/app/ui/components/status";
import Image from "next/image";
import { useNextStep } from "nextstepjs";

const DocumentView = ({ document }: { document?: DocumentType }) => {
  const { setCurrentStep, startNextStep, currentStep } = useNextStep();

  if (!document) {
    notFound();
  }

  enum DocumentSubTabsType {
    TransactionInfo = "transactionInfo",
    Allocations = "allocations",
  }

  const SubTabItems = [
    { id: DocumentSubTabsType.TransactionInfo, label: "Transaction Info" },
    { id: DocumentSubTabsType.Allocations, label: "Allocations" },
  ];

  enum DocumentTabsType {
    Document = "document",
    TransactionDetails = "transactionDetails",
  }

  const TabItems = [
    { id: DocumentTabsType.Document, label: "Document" },
    { id: DocumentTabsType.TransactionDetails, label: "Transaction Details" },
  ];

  const [activeTab, setActiveTab] = useState<DocumentTabsType>(
    DocumentTabsType.Document,
  );
  const [activeSubTab, setActiveSubTab] = useState<DocumentSubTabsType>(
    DocumentSubTabsType.TransactionInfo,
  );

  useEffect(() => {
    if (currentStep === 12) {
      startNextStep("mainTour");
      setCurrentStep(12);
    }
    if (currentStep === 13) {
      setActiveTab(DocumentTabsType.Document);
    }
    if (currentStep === 14) {
      setActiveTab(DocumentTabsType.TransactionDetails);
    }
  }, [currentStep]);

  return (
    <div className="bg-white rounded-lg p-6">
      <div id={"tour1-step12"}>
        <div id={"tour1-step14"}>
          <div id={"tour1-step28"}>
            <div className="flex justify-between items-end border-b pb-4 mb-4">
              <div>
                <h3 className="text-sm text-grey font-semibold uppercase">
                  {document.fileType}
                </h3>
                <p className="text-base text-grey-dark font-semibold">
                  {document.document}
                </p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                >
                  <path
                    d="M26 17.8335H22.125L24.0833 15.9168C25.3333 14.6668 24.4167 12.5002 22.6667 12.5002H20V7.8335C20 6.75016 19.0833 5.8335 18 5.8335H14C12.875 5.8335 12 6.75016 12 7.8335V12.5002H9.33333C7.54167 12.5002 6.625 14.6668 7.91667 15.9168L9.83333 17.8335H6C4.875 17.8335 4 18.7502 4 19.8335V25.1668C4 26.2918 4.875 27.1668 6 27.1668H26C27.0833 27.1668 28 26.2918 28 25.1668V19.8335C28 18.7502 27.0833 17.8335 26 17.8335ZM9.33333 14.5002H14V7.8335H18V14.5002H22.6667L16 21.1668L9.33333 14.5002ZM26 25.1668H6V19.8335H11.8333L14.5833 22.5835C15.3333 23.3752 16.625 23.3752 17.375 22.5835L20.125 19.8335H26V25.1668ZM22.3333 22.5002C22.3333 23.0835 22.75 23.5002 23.3333 23.5002C23.875 23.5002 24.3333 23.0835 24.3333 22.5002C24.3333 21.9585 23.875 21.5002 23.3333 21.5002C22.75 21.5002 22.3333 21.9585 22.3333 22.5002Z"
                    fill="#909090"
                  />
                </svg>
              </div>
            </div>

            <div className="flex justify-between mb-4">
              {TabItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`text-sm font-semibold  border-b-2  capitalize pb-2 w-full ${
                    activeTab === id
                      ? "border-action-primary text-action-primary"
                      : "text-grey-secondary"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {activeTab === DocumentTabsType.Document && (
              <>
                <div className={"h-[380px] overflow-auto"}>
                  <Image
                    src="/images/invoice.jpg"
                    width={550}
                    height={380}
                    alt="Picture of document"
                  />
                </div>
                <div className="flex items-center justify-between w-full px-4 py-2 border-t border-gray-300 bg-white">
                  <div className="flex items-center space-x-2">
                    <button className="text-grey hover:text-grey-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9.125 11.75C8.96875 11.9062 8.96875 12.125 9.125 12.2812L13.7188 16.9062C13.8438 17.0625 14.0938 17.0625 14.25 16.9062L14.8438 16.2812C15 16.125 15 15.9062 14.8438 15.75L11.1562 12L14.8438 8.28125C15 8.125 15 7.875 14.8438 7.75L14.25 7.125C14.0938 6.96875 13.8438 6.96875 13.7188 7.125L9.125 11.75Z"
                          fill="#909090"
                        />
                      </svg>
                    </button>

                    <div className="relative">
                      <select className="border-none bg-transparent text-grey-primary text-center focus:outline-none">
                        <option value="1">1</option>
                      </select>
                    </div>
                    <span className="text-grey-primary">of 1 pages</span>

                    <button className="text-gray-500 hover:text-grey-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14.8438 12.2812C15 12.125 15 11.9062 14.8438 11.75L10.2812 7.125C10.125 6.96875 9.875 6.96875 9.75 7.125L9.125 7.75C8.96875 7.875 8.96875 8.125 9.125 8.28125L12.8125 12L9.125 15.75C8.96875 15.9062 8.96875 16.125 9.125 16.2812L9.75 16.9062C9.875 17.0625 10.125 17.0625 10.2812 16.9062L14.8438 12.2812Z"
                          fill="#909090"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="text-greyhover:text-grey-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16 11.5C16 11.3125 15.8125 11.125 15.625 11.125H12.875V8.375C12.875 8.1875 12.6875 8 12.5 8H11.5C11.2812 8 11.125 8.1875 11.125 8.375V11.125H8.375C8.15625 11.125 8 11.3125 8 11.5V12.5C8 12.7188 8.15625 12.875 8.375 12.875H11.125V15.625C11.125 15.8438 11.2812 16 11.5 16H12.5C12.6875 16 12.875 15.8438 12.875 15.625V12.875H15.625C15.8125 12.875 16 12.7188 16 12.5V11.5ZM19.75 12C19.75 7.71875 16.2812 4.25 12 4.25C7.71875 4.25 4.25 7.71875 4.25 12C4.25 16.2812 7.71875 19.75 12 19.75C16.2812 19.75 19.75 16.2812 19.75 12ZM18.25 12C18.25 15.4688 15.4375 18.25 12 18.25C8.53125 18.25 5.75 15.4688 5.75 12C5.75 8.5625 8.53125 5.75 12 5.75C15.4375 5.75 18.25 8.5625 18.25 12Z"
                          fill="#909090"
                        />
                      </svg>
                    </button>
                    <span className="text-grey-primary text-base">100%</span>
                    <button className="text-grey hover:text-grey-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8.375 12.875H15.625C15.8125 12.875 16 12.7188 16 12.5V11.5C16 11.3125 15.8125 11.125 15.625 11.125H8.375C8.15625 11.125 8 11.3125 8 11.5V12.5C8 12.7188 8.15625 12.875 8.375 12.875ZM19.75 12C19.75 7.71875 16.2812 4.25 12 4.25C7.71875 4.25 4.25 7.71875 4.25 12C4.25 16.2812 7.71875 19.75 12 19.75C16.2812 19.75 19.75 16.2812 19.75 12ZM18.25 12C18.25 15.4688 15.4375 18.25 12 18.25C8.53125 18.25 5.75 15.4688 5.75 12C5.75 8.5625 8.53125 5.75 12 5.75C15.4375 5.75 18.25 8.5625 18.25 12Z"
                          fill="#909090"
                        />
                      </svg>
                    </button>
                    <button className="text-grey hover:text-grey-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M19 5.75C19 5.34375 18.6562 5 18.25 5H15.25C14.5938 5 14.25 5.8125 14.75 6.28125L15.5938 7.15625L12.25 10.5C12.0938 10.6562 12.0938 10.9062 12.25 11.0312L12.9688 11.75C13.0938 11.9062 13.3438 11.9062 13.5 11.75L16.8438 8.40625L17.7188 9.25C18.1875 9.75 19 9.40625 19 8.75V5.75ZM10.4688 12.2812L7.125 15.625L6.25 14.7812C5.78125 14.2812 5 14.625 5 15.2812V18.25C5 18.6875 5.3125 19 5.75 19H8.71875C9.375 19 9.71875 18.2188 9.21875 17.75L8.375 16.875L11.7188 13.5312C11.875 13.375 11.875 13.125 11.7188 13L11 12.2812C10.875 12.125 10.625 12.125 10.4688 12.2812Z"
                          fill="#909090"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="mt-4">
                  <h2 className="text-base font-semibold text-grey-blue py-4 mb-4 border-b-1 border-grey-border">
                    Details
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <p className="text-sm text-grey font-semibold">
                      Last Updated / Uploaded
                    </p>
                    <p className="text-grey-primary font-medium">
                      {document.amount}
                    </p>

                    <p className="text-sm text-grey font-semibold">Type</p>
                    <p className="text-grey-primary font-medium">
                      {document.documentType}
                    </p>

                    <p className="text-sm text-grey font-semibold">Sub-Type</p>
                    <p className="text-grey-primary font-medium">
                      {document.subType}
                    </p>

                    <p className="text-sm text-grey font-semibold">
                      Document Date
                    </p>
                    <p className="text-grey-primary font-medium">
                      {document.documentDate}
                    </p>

                    <p className="text-sm text-grey font-semibold">File Type</p>
                    <p className="text-grey-primary font-medium">
                      {document.fileType}
                    </p>

                    <p className="text-sm text-grey font-semibold">Status</p>
                    <Status status={document.status} />
                  </div>
                </div>
              </>
            )}

            {activeTab === DocumentTabsType.TransactionDetails && (
              <>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b p-2 text-xs text-grey font-bold uppercase">
                        Type
                      </th>
                      <th className="border-b p-2 text-xs text-grey font-bold uppercase">
                        Amount
                      </th>
                      <th className="border-b p-2 text-xs text-grey font-bold uppercase">
                        Tnx Updated
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={"bg-blue-o"}>
                      <td className="p-2 text-grey-primary text-base">
                        {document.transactionDetails.type}
                      </td>
                      <td className="p-2 text-grey-primary text-base">
                        {document.transactionDetails.amount}
                      </td>
                      <td className="p-2 text-grey-primary text-base">
                        {document.transactionDetails.txnUpdated}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="flex justify-between mb-4 mt-20">
                  {SubTabItems.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => setActiveSubTab(id)}
                      className={`text-sm font-semibold  border-b-2  capitalize pb-2 w-full ${
                        activeSubTab === id
                          ? "border-action-primary text-action-primary"
                          : "text-grey-secondary"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {activeSubTab === DocumentSubTabsType.TransactionInfo && (
                  <>
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-grey font-semibold">
                            Effective Date
                          </p>
                          <p className="font-medium text-grey-primary">
                            {
                              document.transactionDetails.transactionInfo
                                .effectiveDate
                            }
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-grey font-semibold">
                            Payment Date
                          </p>
                          <p className="font-medium text-grey-primary">
                            {
                              document.transactionDetails.transactionInfo
                                .paymentDate
                            }
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div></div>
                        <div>
                          <p className="text-sm text-grey font-semibold">
                            Amount
                          </p>
                          <p className="font-medium text-grey-primary">
                            {document.transactionDetails.transactionInfo.amount}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 pt-4">
                      <h2 className="text-base font-semibold text-grey-blue py-4 mb-4 border-b-1 border-grey-border">
                        Rate Info
                      </h2>
                      <div className="grid grid-cols-4 gap-4">
                        <div>
                          <p className="text-sm text-grey font-semibold">
                            Type
                          </p>
                          <p className="font-medium text-grey-primary">
                            {document.transactionDetails.rateInfo.type}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-grey font-semibold">
                            Day Count
                          </p>
                          <p className="font-medium text-grey-primary">
                            {document.transactionDetails.rateInfo.dayCount}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-grey font-semibold">
                            PIK Option
                          </p>
                          <p className="font-medium text-grey-primary">
                            {document.transactionDetails.rateInfo.pikOption}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-grey font-semibold">
                            Incl. Accrual End
                          </p>
                          <p className="font-medium text-grey-primary">
                            {
                              document.transactionDetails.rateInfo
                                .includeAccrualEnd
                            }
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-grey font-semibold">
                            Accrual Start
                          </p>
                          <p className="font-medium text-grey-primary">
                            {
                              document.transactionDetails.rateInfo
                                .accrualStartDate
                            }
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-grey font-semibold">
                            Accrual End
                          </p>
                          <p className="font-medium text-grey-primary">
                            {
                              document.transactionDetails.rateInfo
                                .accrualEndDate
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-base font-semibold text-grey-blue py-4 mb-4 border-b-1 border-grey-border">
                        Interest Amount
                      </h2>
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr>
                            <th className="border-b p-2 text-xs text-grey font-bold uppercase">
                              Date
                            </th>
                            <th className="border-b p-2 text-xs text-grey font-bold uppercase">
                              Rate
                            </th>
                            <th className="border-b p-2 text-xs text-grey font-bold uppercase">
                              Principal
                            </th>
                            <th className="border-b p-2 text-xs text-grey font-bold uppercase">
                              Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {document.transactionDetails.interestAmount?.map(
                            (interest, index) => (
                              <tr key={index}>
                                <td className="p-2 text-grey-primary text-base">
                                  {interest.date}
                                </td>
                                <td className="p-2 text-grey-primary text-base">
                                  {interest.rate}
                                </td>
                                <td className="p-2 text-grey-primary text-base">
                                  {interest.principal}
                                </td>
                                <td className="p-2 text-grey-primary text-base">
                                  {interest.amount}
                                </td>
                              </tr>
                            ),
                          )}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}
                {activeSubTab === DocumentSubTabsType.Allocations && (
                  <>
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr>
                          <th className="border-b p-2 text-xs text-grey font-bold uppercase">
                            Role
                          </th>
                          <th className="border-b p-2 text-xs text-grey font-bold uppercase">
                            Counterparty
                          </th>
                          <th className="border-b p-2 text-xs text-grey font-bold uppercase">
                            Amount
                          </th>
                          <th className="border-b p-2 text-xs text-grey font-bold uppercase">
                            Share
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {document.transactionDetails.allocations.map(
                          (allocation, index) => (
                            <tr key={index}>
                              <td className="py-2 text-grey-primary text-base">
                                {allocation.role}
                              </td>
                              <td className="py-2 text-grey-primary text-base">
                                {allocation.counterparty}
                              </td>
                              <td
                                className={`py-2 ${allocation.role === "Lender" ? "text-green" : "text-red"} text-base`}
                              >
                                {allocation.amount}
                              </td>
                              <td className="py-2 text-red text-base">
                                {allocation.share}
                              </td>
                            </tr>
                          ),
                        )}
                      </tbody>
                    </table>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentView;
