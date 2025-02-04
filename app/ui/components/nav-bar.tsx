"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { replacePageItemInURL } from "@/app/lib/utils";
import ViewsNav from "@/app/ui/components/views-nav";
import {
  ArrowDown,
  Dashboard,
  Documents,
  Instruments,
  Logo,
  Search,
  Transactions,
} from "@/app/ui/icons";

export default function NavBar() {
  const path = usePathname();
  return (
    <header className={`flex flex-col border-b-1 border-grey-border`}>
      <nav
        className={
          "h-16 bg-grey-lighter text-grey-primary flex items-center justify-between px-4"
        }
      >
        <Link
          href="/template"
          className="flex items-center justify-center gap-4"
        >
          <span className="w-24 hidden lg:inline-flex">
            <Logo />
          </span>
          <span
            className={"h-[30px] w-[1px] bg-grey-light hidden lg:inline-flex"}
          />
          <span className="text-[22px] translate-y-px">
            <span className="sr-only">Harmonic DirectLend</span>
            Direct<span className="font-semibold">Lend</span>
          </span>
        </Link>
        <div className="flex justify-start gap-4 mx-4 w-full">
          {/* Left Section: Filter Dropdown */}
          <div className="hidden lg:flex items-center justify-center space-x-4  xl:space-x-6  w-full">
            {/* Filter Dropdown */}

            <div className="relative w-full max-w-[300px]">
              <input
                type={"text"}
                name={"filter"}
                disabled={true}
                aria-label={"Filter By Counterparty/Group"}
                defaultValue={"Filter By Counterparty/Group"}
                className="block truncate  bg-transparent w-full px-4 py-2 text-grey text-sm border border-grey-border rounded-lg focus:ring-action-primary focus:border-action-primary"
              ></input>
              <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-grey">
                <ArrowDown />
              </div>
            </div>

            {/* Search Input */}
            <div className="relative w-full max-w-[300px]">
              <input
                type="text"
                name={"search"}
                disabled={true}
                aria-label={"Search Input"}
                defaultValue={"Search for Data"}
                className="block truncate bg-transparent w-full px-8 py-2 text-grey text-sm border border-grey-border rounded-lg focus:ring-action-primary focus:border-action-primary"
              />
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 text-grey">
                <Search />
              </div>
            </div>
          </div>
        </div>
        {/* Right Section: Icons */}
        <div className="hidden  items-center space-x-4 sm:flex">
          {/* Icon Buttons */}
          {[
            {
              icon: <Dashboard className={"focus:outline-hidden"} />,
              label: "Dashboard",
              href: `${replacePageItemInURL(path, "dashboard")}`,
            },
            {
              icon: <Transactions className={"focus:outline-hidden"} />,

              label: "Transactions",
              href: `${replacePageItemInURL(path, "transactions")}`,
            },
            {
              icon: <Instruments className={"focus:outline-hidden"} />,
              label: "Instruments",
              href: `${replacePageItemInURL(path, "instruments")}`,
            },

            {
              icon: <Documents className={"focus:outline-hidden"} />,

              label: "Documents",
              href: `${replacePageItemInURL(path, "documents")}`,
            },
          ].map((item, idx) => (
            <Link
              href={item.href}
              key={idx}
              className={`${path.includes(item.label.toLowerCase()) ? "border-action-primary text-action-primary" : "text-grey"}  inline-flex items-center justify-center w-10 h-10 bg-transparent border rounded-full shadow-sm hover:shadow-md outline-hidden focus:outline-hidden`}
              aria-label={item.label}
            >
              {item.icon}
            </Link>
          ))}
          {/* Separator */}
          <div className="w-px h-5 bg-grey-light"></div>
          {/*  View Button */}
          <ViewsNav />
          {/* Separator */}
          <div className="w-px h-5 bg-grey-light"></div>
          {/* Profile Circle */}
          <div className="w-9 h-9 bg-grey-blue text-white flex items-center justify-center rounded-full">
            DR
          </div>
        </div>
      </nav>
    </header>
  );
}
