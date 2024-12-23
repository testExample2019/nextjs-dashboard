"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { replaceViewItemInURL } from "@/app/lib/utils";
import { usePathname } from "next/navigation";
import { DealViews } from "@/app/lib/definitions";

export default function ViewsNav() {
  const path = usePathname();

  return (
    <div className="flex h-full flex-col">
      <div className="flex grow flex-row justify-between space-x-2">
        <div className="inline-flex items-center border border-action-primary rounded-medium overflow-hidden">
          {[DealViews.Lender, DealViews.Borrower].map((link) => {
            return (
              <Link
                key={link}
                href={replaceViewItemInURL(path, link.toLowerCase())}
                className={clsx(
                  "flex grow items-center min-w-28 text-center transition-all text-action-primary justify-center gap-2  p-2 text-sm font-medium  hover:text-blue-dark",
                  {
                    "bg-action-primary text-white hover:bg-blue-dark hover:text-white":
                      path?.includes(link.toLowerCase()),
                  },
                )}
              >
                <p className={"uppercase"}>{link}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
