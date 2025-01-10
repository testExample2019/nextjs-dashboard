"use client";

import Link from "next/link";
import { replaceViewItemInURL } from "@/app/lib/utils";
import { usePathname } from "next/navigation";
import { DealViews } from "@/app/lib/definitions";

export default function ViewsNav() {
  const path = usePathname();

  return (
    <div className="flex h-full flex-col">
      <div className="flex grow flex-row justify-between space-x-2">
        <div
          id={"tour1-step7"}
          className="inline-flex items-center overflow-hidden"
        >
          <Link
            href={"/deals/dashboard/soultrain/lender"}
            className={`${path.includes("template") ? "flex" : "hidden"} gap-2 items-center px-4 py-1 bg-blue-100 text-blue-dark text-sm font-medium rounded-full hover:bg-blue-200 transition`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className={"transform translate-y-[2px]"}
            >
              <path
                d="M7.39062 6.75C6.9375 6.75 6.73438 7 6 7C5.25 7 5.04688 6.75 4.59375 6.75C3.4375 6.75 2.5 7.70312 2.5 8.85938V9.25C2.5 9.67188 2.82812 10 3.25 10H8.75C9.15625 10 9.5 9.67188 9.5 9.25V8.85938C9.5 7.70312 8.54688 6.75 7.39062 6.75ZM8.75 9.25H3.25V8.85938C3.25 8.10938 3.84375 7.5 4.59375 7.5C4.82812 7.5 5.1875 7.75 6 7.75C6.79688 7.75 7.15625 7.5 7.39062 7.5C8.14062 7.5 8.75 8.10938 8.75 8.85938V9.25ZM6 6.5C7.23438 6.5 8.25 5.5 8.25 4.25C8.25 3.01562 7.23438 2 6 2C4.75 2 3.75 3.01562 3.75 4.25C3.75 5.5 4.75 6.5 6 6.5ZM6 2.75C6.8125 2.75 7.5 3.4375 7.5 4.25C7.5 5.07812 6.8125 5.75 6 5.75C5.17188 5.75 4.5 5.07812 4.5 4.25C4.5 3.4375 5.17188 2.75 6 2.75Z"
                fill="currentColor"
              />
            </svg>
            <span className={"capitalize"}>{DealViews.Lender} View</span>
          </Link>
          {[DealViews.Lender, DealViews.Borrower].map((link) => {
            return (
              <Link
                key={link}
                href={replaceViewItemInURL(
                  path,
                  link === DealViews.Lender
                    ? DealViews.Borrower
                    : DealViews.Lender,
                )}
                className={`${path.includes(link.toLowerCase()) ? "flex" : "hidden"} gap-2 items-center px-4 py-1 bg-blue-100 text-blue-dark text-sm font-medium rounded-full hover:bg-blue-200 transition`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className={"transform translate-y-[2px]"}
                >
                  <path
                    d="M7.39062 6.75C6.9375 6.75 6.73438 7 6 7C5.25 7 5.04688 6.75 4.59375 6.75C3.4375 6.75 2.5 7.70312 2.5 8.85938V9.25C2.5 9.67188 2.82812 10 3.25 10H8.75C9.15625 10 9.5 9.67188 9.5 9.25V8.85938C9.5 7.70312 8.54688 6.75 7.39062 6.75ZM8.75 9.25H3.25V8.85938C3.25 8.10938 3.84375 7.5 4.59375 7.5C4.82812 7.5 5.1875 7.75 6 7.75C6.79688 7.75 7.15625 7.5 7.39062 7.5C8.14062 7.5 8.75 8.10938 8.75 8.85938V9.25ZM6 6.5C7.23438 6.5 8.25 5.5 8.25 4.25C8.25 3.01562 7.23438 2 6 2C4.75 2 3.75 3.01562 3.75 4.25C3.75 5.5 4.75 6.5 6 6.5ZM6 2.75C6.8125 2.75 7.5 3.4375 7.5 4.25C7.5 5.07812 6.8125 5.75 6 5.75C5.17188 5.75 4.5 5.07812 4.5 4.25C4.5 3.4375 5.17188 2.75 6 2.75Z"
                    fill="currentColor"
                  />
                </svg>
                <span className={"capitalize"}>{link} View</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
