"use client";
import React from "react";
import { DealNavType, DealViews } from "@/app/lib/definitions";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { replaceDealItemInURL } from "@/app/lib/utils";
import { ButtonDropdown } from "@/app/ui/components/dropdown";
import { dealBorrowerDropdownItems } from "@/app/lib/constants";
import { handleDealDropdownAction } from "@/app/lib/actions";

export const SideNavLink = ({
  slug,
  displayName,
  totalCommitment,
  funded,
  unfunded,
}: DealNavType) => {
  const path = usePathname();
  const href = replaceDealItemInURL(path, slug);
  return (
    <Link
      className={`${path.includes(slug) ? "bg-blue-o" : "bg-white"} w-full max-w-sm  border rounded-medium shadow-md p-2 block transition-all hover:shadow-lg`}
      href={href}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-grey-primary text-base uppercase">{displayName}</h3>
        <div className="flex gap- items-center">
          <span className="text-xs font-medium bg-grey-blue text-white px-1 rounded">
            USD
          </span>
          <ButtonDropdown
            children={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 10.5C11.1562 10.5 10.5 11.1875 10.5 12C10.5 12.8438 11.1562 13.5 12 13.5C12.8125 13.5 13.5 12.8438 13.5 12C13.5 11.1875 12.8125 10.5 12 10.5ZM10.5 7.25C10.5 8.09375 11.1562 8.75 12 8.75C12.8125 8.75 13.5 8.09375 13.5 7.25C13.5 6.4375 12.8125 5.75 12 5.75C11.1562 5.75 10.5 6.4375 10.5 7.25ZM10.5 16.75C10.5 17.5938 11.1562 18.25 12 18.25C12.8125 18.25 13.5 17.5938 13.5 16.75C13.5 15.9375 12.8125 15.25 12 15.25C11.1562 15.25 10.5 15.9375 10.5 16.75Z"
                  fill="#6B98A2"
                />
              </svg>
            }
            dropdownItems={dealBorrowerDropdownItems}
            disabled={!path.includes(DealViews.Borrower)}
            onAction={handleDealDropdownAction}
            placeholder={"Request:"}
          />
        </div>
      </div>

      <div className="text-grey-secondary">
        <p className=" text-xs mt-2">Total Commitment</p>
        <p className="text-base font-bold ">{totalCommitment}</p>
      </div>

      <div className="mt-2">
        <div className="w-full rounded-full h-2.5 bg-grey-light bg-opacity-40">
          <div className="bg-green h-2.5 rounded-full w-1/3"></div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2 gap-4">
        <div className="text-xs text-grey-secondary">
          Funded
          <p className="text-sm font-bold text-green">{funded}</p>
        </div>

        <div className="text-xs text-grey-secondary">
          Unfunded
          <p>{unfunded}</p>
        </div>
      </div>
    </Link>
  );
};
