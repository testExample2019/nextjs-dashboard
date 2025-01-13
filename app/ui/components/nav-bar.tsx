"use client";
import Link from "next/link";
import { deals } from "@/app/lib/placeholder-data";
import { usePathname } from "next/navigation";
import { replacePageItemInURL } from "@/app/lib/utils";
import ViewsNav from "@/app/ui/deals/dashboard/views-nav";

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
          className="flex items-center justify-center divide-grey-light lg:divide-x logo"
        >
          <span className="w-24 hidden lg:inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="20"
              viewBox="0 0 100 20"
              fill="currentColor"
            >
              <g clipPath="url(#clip0_116_191)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.3831 0.140869H0V19.4944H3.38239V11.5606C3.38239 11.1789 3.40915 10.8247 3.5162 10.5528C3.87042 9.54157 4.79859 8.67256 6.10423 8.67256C7.95704 8.67256 8.66549 10.1169 8.66549 12.0521V19.4944H12.0211V11.6676C12.0211 7.41833 9.64929 5.91904 7.3838 5.91904C6.54225 5.91904 5.75141 6.13594 5.09789 6.52115C4.38662 6.89862 3.84296 7.41763 3.43451 8.04791H3.3831V0.140869ZM87.7915 2.49932C87.7915 3.50988 87.0599 4.30073 85.8866 4.30073C84.7739 4.30073 84.0338 3.50988 84.0338 2.49932C84.0338 1.46411 84.793 0.673264 85.9183 0.673264C87.0599 0.673264 87.7711 1.46411 87.7915 2.49932ZM84.2261 19.4902V6.20777H87.6056V19.4902H84.2261ZM69.2732 12.7296C69.2732 17.6099 65.8352 19.793 62.4493 19.793C58.6852 19.793 55.7986 17.2014 55.7986 12.9451C55.7986 8.5796 58.6591 5.90918 62.6704 5.90918C66.6197 5.90988 69.2732 8.68946 69.2732 12.7296ZM59.2599 12.8662C59.2599 15.431 60.5148 17.3662 62.5627 17.3662C64.4704 17.3662 65.8077 15.4859 65.8077 12.8078C65.8077 10.7388 64.8803 8.36341 62.5873 8.36341C60.212 8.36411 59.2599 10.6528 59.2599 12.8662ZM35.0253 10.1648C35.0253 8.63876 34.9986 7.35707 34.9197 6.20848H37.807L37.9444 8.17115H38.0268C38.6803 7.13664 39.8796 5.90988 42.1176 5.90988C43.8634 5.90988 45.2254 6.89298 45.7993 8.36411H45.8549C46.3183 7.62819 46.862 7.08172 47.4873 6.70002C48.2261 6.18453 49.0718 5.90988 50.1613 5.90988C52.3753 5.90988 54.6099 7.40777 54.6099 11.6634V19.4909H51.3373V12.155C51.3373 9.9451 50.5739 8.63876 48.962 8.63876C47.8204 8.63876 46.9683 9.45355 46.6211 10.4092C46.5387 10.7395 46.4563 11.1444 46.4563 11.5261V19.4916H43.1803V11.8014C43.1803 9.9458 42.4451 8.63946 40.8908 8.63946C39.6401 8.63946 38.7908 9.61904 38.4923 10.5479C38.3542 10.8704 38.3 11.2585 38.3 11.6374V19.4916H35.0275V10.1648H35.0253ZM21.6599 19.4909L21.4437 18.0226H21.3613C20.543 19.0578 19.1507 19.7937 17.4352 19.7937C14.7613 19.7937 13.2584 17.855 13.2584 15.8409C13.2584 12.4789 16.2324 10.7902 21.1408 10.8219V10.6021C21.1408 9.7296 20.7901 8.28524 18.4458 8.28524C17.1331 8.28524 15.7711 8.69017 14.8641 9.262L14.2141 7.08242C15.1972 6.48101 16.912 5.91059 19.012 5.91059C23.2718 5.91059 24.4986 8.60777 24.4986 11.5028V16.3007C24.4986 17.5043 24.55 18.6726 24.6845 19.4909H21.6599ZM21.2268 13.0035C18.8521 12.9458 16.5866 13.4648 16.5866 15.4859C16.5866 16.7951 17.4352 17.3937 18.4979 17.3937C19.8345 17.3937 20.8183 16.5204 21.1141 15.5613C21.1958 15.3169 21.2268 15.0486 21.2268 14.8296V13.0035ZM26.1606 6.20777C26.2465 7.40707 26.2697 8.68876 26.2697 10.4909H26.269V19.4909H29.6246V12.6155C29.6246 12.2338 29.6789 11.8831 29.738 11.5845C30.0331 10.0796 31.1232 9.04369 32.7317 9.04369C33.1282 9.04369 33.4215 9.09925 33.6868 9.14946L33.712 9.15425V6.17045C33.4401 6.11481 33.2521 6.08805 32.9246 6.08805C31.5092 6.08805 29.9549 6.86059 29.2986 8.7451H29.1852L29.0753 6.20777H26.1606ZM70.5655 10.1648C70.5655 8.63876 70.5345 7.35707 70.4563 6.20848H73.4014L73.5634 8.19862H73.6458C74.219 7.16059 75.6662 5.90988 77.8739 5.90988C80.1901 5.90988 82.5929 7.40777 82.5929 11.612V19.4909H79.238V11.9895C79.238 10.0789 78.5254 8.63805 76.6979 8.63805C75.3634 8.63805 74.4352 9.59087 74.0817 10.6007C73.9746 10.9 73.9444 11.3085 73.9444 11.6909V19.4902H70.5655V10.1648ZM99.6063 19.0817C98.8979 19.412 97.5063 19.7697 95.8444 19.7697C91.6958 19.7697 88.9972 17.1197 88.9972 13.0043C88.9972 9.02115 91.7232 5.91059 96.3873 5.91059C97.6155 5.91059 98.8725 6.18524 99.6296 6.53594L99.0352 9.04439C98.488 8.80073 97.7007 8.52608 96.5014 8.52608C93.9338 8.52608 92.4084 10.4099 92.4317 12.8366C92.4317 15.5627 94.2084 17.1204 96.5014 17.1204C97.669 17.1204 98.4873 16.8754 99.1408 16.6043L99.6063 19.0817Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_116_191">
                  <rect
                    width="100"
                    height="19.7183"
                    transform="translate(0 0.140869)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span className="lg:ms-3 lg:pl-3 text-24 translate-y-px">
            <span className="sr-only">Harmonic DirectLend</span>
            Direct<span className="font-semibold">Lend</span>
          </span>
        </Link>
        <div className="hidden items-center justify-between gap-4 lg:flex">
          {/* Left Section: Filter Dropdown */}
          <div className="flex items-center space-x-4">
            {/* Filter Dropdown */}
            <div className="relative">
              <select
                defaultValue={"Filter By Counterparty/Group"}
                className="block bg-transparent w-full px-4 py-2 min-w-[300px] text-grey text-sm border border-grey-border rounded-medium focus:ring-action-primary focus:border-action-primary"
              >
                <option disabled={true}>Filter By Counterparty/Group</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>

            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                defaultValue={"Search for data"}
                className="block  bg-transparent min-w-[300px] w-full px-8 py-2 text-grey text-sm border border-grey-border rounded-medium focus:ring-action-primary focus:border-action-primary"
              />
              <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-grey">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M18.28 10.5a7.78 7.78 0 11-15.56 0 7.78 7.78 0 0115.56 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section: Icons */}
        <div className="hidden  items-center space-x-4 lg:flex">
          {/* Icon Buttons */}
          {[
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M13.875 7.83342L12.6667 6.83341V4.83341C12.6667 4.75008 12.5833 4.66675 12.5 4.66675H11.8333C11.7292 4.68758 11.6667 4.75008 11.6667 4.83341V6.02091L8.72917 3.60425C8.54167 3.43758 8.27083 3.35425 8 3.35425C7.70833 3.35425 7.4375 3.43758 7.25 3.60425L2.10417 7.83342C2.04167 7.89592 2 7.97925 2 8.08342C2 8.16675 2.02083 8.25008 2.0625 8.29175L2.29167 8.56258C2.33333 8.62508 2.4375 8.66675 2.54167 8.66675C2.625 8.66675 2.6875 8.64592 2.75 8.60425L3.33333 8.12508V12.0001C3.33333 12.3751 3.625 12.6667 4 12.6667H6.66667C7.02083 12.6667 7.3125 12.3751 7.33333 12.0001V9.83342H8.66667V12.0001C8.66667 12.3751 8.95833 12.6667 9.33333 12.6667H12C12.3542 12.6667 12.6458 12.3751 12.6667 12.0209V8.12508L13.2292 8.60425C13.2917 8.64592 13.3542 8.68758 13.4375 8.68758C13.5417 8.68758 13.6458 8.62508 13.7083 8.56258L13.9167 8.29175C13.9583 8.25008 14 8.16675 14 8.08342C14 7.97925 13.9375 7.89592 13.875 7.83342ZM11.6458 11.6667H9.66667V9.50008C9.64583 9.14592 9.35417 8.85425 9 8.83342H7C6.625 8.85425 6.33333 9.14592 6.33333 9.50008V11.6667H4.33333V7.31258L8 4.29175L11.6667 7.31258L11.6458 11.6667Z"
                    fill="currentColor"
                  />
                </svg>
              ),
              label: "Dashboard",
              href: `${replacePageItemInURL(path, "dashboard")}`,
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M13.25 6.1875C13.3542 6.08333 13.3542 5.9375 13.25 5.83333L11.1667 3.75C11.0625 3.64583 10.8958 3.64583 10.8125 3.75L10.3958 4.16667C10.2917 4.25 10.2917 4.41667 10.3958 4.52083L11.4583 5.5H2.91666C2.77082 5.5 2.66666 5.625 2.66666 5.75V6.25C2.66666 6.39583 2.77082 6.5 2.91666 6.5H11.4583L10.3958 7.5C10.2917 7.60417 10.2917 7.77083 10.3958 7.85417L10.8125 8.27083C10.8958 8.375 11.0625 8.375 11.1667 8.27083L13.25 6.1875ZM2.72916 10.1875L4.81249 12.2708C4.91666 12.375 5.08332 12.375 5.16666 12.2708L5.58332 11.8542C5.68749 11.7708 5.68749 11.6042 5.58332 11.5L4.52082 10.5H13.0833C13.2083 10.5 13.3333 10.3958 13.3333 10.25V9.75C13.3333 9.625 13.2083 9.5 13.0833 9.5H4.52082L5.58332 8.52083C5.68749 8.41667 5.68749 8.25 5.58332 8.16667L5.16666 7.75C5.08332 7.64583 4.91666 7.64583 4.81249 7.75L2.72916 9.83333C2.62499 9.9375 2.62499 10.0833 2.72916 10.1875Z"
                    fill="currentColor"
                  />
                </svg>
              ),
              label: "Transactions",
              href: `${replacePageItemInURL(path, "transactions")}`,
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M12.3541 4.04169L11.2916 2.97919C11.1041 2.79169 10.8541 2.66669 10.5833 2.66669H6.99998C6.43748 2.66669 5.99998 3.12502 5.99998 3.66669V4.66669H4.33331C3.77081 4.66669 3.33331 5.12502 3.33331 5.66669V12.3334C3.33331 12.8959 3.77081 13.3334 4.33331 13.3334H8.99998C9.54165 13.3334 9.99998 12.8959 9.99998 12.3334V11.3334H11.6666C12.2083 11.3334 12.6666 10.8959 12.6666 10.3334V4.75002C12.6666 4.47919 12.5416 4.22919 12.3541 4.04169ZM8.87498 12.3334H4.45831C4.37498 12.3334 4.33331 12.2917 4.33331 12.2084V5.79169C4.33331 5.72919 4.37498 5.66669 4.45831 5.66669H5.99998V10.3334C5.99998 10.8959 6.43748 11.3334 6.99998 11.3334H8.99998V12.2084C8.99998 12.2917 8.93748 12.3334 8.87498 12.3334ZM11.5416 10.3334H7.12498C7.04165 10.3334 6.99998 10.2917 6.99998 10.2084V3.79169C6.99998 3.72919 7.04165 3.66669 7.12498 3.66669H9.33331V5.50002C9.33331 5.79169 9.54165 6.00002 9.83331 6.00002H11.6666V10.2084C11.6666 10.2917 11.6041 10.3334 11.5416 10.3334ZM11.6666 5.00002H10.3333V3.66669H10.5208C10.5625 3.66669 10.5833 3.68752 10.6041 3.70835L11.625 4.72919C11.6458 4.75002 11.6666 4.77085 11.6666 4.81252V5.00002Z"
                    fill="currentColor"
                  />
                </svg>
              ),
              label: "Documents",
              href: `${replacePageItemInURL(path, "documents")}`,
            },
          ].map((item, idx) => (
            <Link
              href={item.href}
              key={idx}
              className={`${path.includes(item.label.toLowerCase()) ? "border-action-primary text-action-primary" : "text-grey"}  inline-flex items-center justify-center w-10 h-10 bg-transparent border rounded-full shadow hover:shadow-md`}
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
