import React from "react";
import { DocumentType } from "@/app/lib/definitions";
import { notFound } from "next/navigation";
import Status from "@/app/ui/components/status";
import Image from "next/image";

const DocumentView = ({ document }: { document?: DocumentType }) => {
  if (!document) {
    notFound();
  }

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-end border-b pb-4 mb-4">
        <div>
          <h3 className="text-sm text-grey font-semibold uppercase">
            {document.documentType}
          </h3>
          <p className="text-base text-grey-primary font-semibold">
            {document.deal}
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

      <div className={'h-[380px] overflow-auto'}>
        <Image
          src="/images/invoice.png"
          width={550}
          height={380}
          alt="Picture of document"
        />
      </div>

      <div className="flex justify-between space-x-4 mb-4">
        <button className="text-sm text-action-primary border-b-2 border-action-primary pb-2 w-full">
          Document
        </button>
        <button className="text-sm text-grey-secondary hover:text-action-primary hover:border-action-primary pb-2 w-full">
          Transaction Details
        </button>
      </div>

      <div className="mt-4">
        <h2 className="text-base font-semibold text-grey-blue py-4 mb-4 border-b-1 border-grey-border">
          Details
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-sm text-gray-500 font-semibold">
            Last Updated / Uploaded
          </p>
          <p className="text-gray-800 font-medium">{document.amount}</p>

          <p className="text-sm text-gray-500 font-semibold">Type</p>
          <p className="text-gray-800 font-medium">{document.documentType}</p>

          <p className="text-sm text-gray-500 font-semibold">Sub-Type</p>
          <p className="text-gray-800 font-medium">Other</p>

          <p className="text-sm text-gray-500 font-semibold">Document Date</p>
          <p className="text-gray-800 font-medium">2024-10-30</p>

          <p className="text-sm text-gray-500 font-semibold">File Type</p>
          <p className="text-blue-600 font-medium">PDF</p>

          <p className="text-sm text-gray-500 font-semibold">Status</p>
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
            <p className="text-gray-800 font-medium">Open</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentView;
