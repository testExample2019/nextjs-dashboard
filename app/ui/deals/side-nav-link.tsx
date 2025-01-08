"use client";
import React from "react";
import { DealNavType } from "@/app/lib/definitions";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { replaceDealItemInURL } from "@/app/lib/utils";

export const SideNavLink = ({
  name,
  totalCommitment,
  funded,
  unfunded,
}: DealNavType) => {
  const path = usePathname();
  const href = replaceDealItemInURL(path, name.toLowerCase());
  return (
    <Link
      className={`${path.includes(name.toLowerCase()) ? "bg-[#EDF4FC]" : "bg-white"} max-w-sm  border rounded-medium shadow-md p-2 block transition-all hover:shadow-lg`}
      href={href}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-grey-primary text-base uppercase">{name}</h3>
        <div className="flex gap- items-center">
          <span className="text-xs font-medium bg-[#6B98A2] text-white px-1 rounded">
            USD
          </span>
        </div>
      </div>

      <div className="text-[#797275]">
        <p className=" text-xs mt-2">Total Commitment</p>
        <p className="text-base font-bold ">{totalCommitment}</p>
      </div>

      <div className="mt-2">
        <div className="w-full rounded-full h-2.5 bg-grey-light bg-opacity-40">
          <div className="bg-green h-2.5 rounded-full w-1/2"></div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2">
        <div className="text-xs text-[#797275]">
          Funded
          <p className="text-sm font-bold text-green">{funded}</p>
        </div>

        <div className="text-xs text-[#797275]">
          Unfunded
          <p>{unfunded}</p>
        </div>
      </div>
    </Link>
  );
};
