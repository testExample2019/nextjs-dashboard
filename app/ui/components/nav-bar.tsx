"use client";
import Link from "next/link";
import { deals } from "@/app/lib/placeholder-data";
import { usePathname } from "next/navigation";
import { replacePageItemInURL } from "@/app/lib/utils";

export default function NavBar() {
  const path = usePathname();
  return (
    <header className={`flex flex-col border-b-1 border-[#E3E3E3]`}>
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
        <div className="flex items-center justify-between gap-4">
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

          {/* Right Section: Icons */}
          <div className="flex items-center space-x-4">
            {/* Icon Buttons */}
            {[
              {
                icon: "🏠",
                label: "Dashboard",
                href: `${replacePageItemInURL(path, "dashboard")}`,
              },
              {
                icon: "🔄",
                label: "Transactions",
                href: `${replacePageItemInURL(path, "transactions")}`,
              },
              {
                icon: "📋",
                label: "Positions",
                href: `${replacePageItemInURL(path, "positions")}`,
              },
              { icon: "⚙️", label: "Settings", href: "" },
              { icon: "🔒", label: "Lock", href: "" },
            ].map((item, idx) => (
              <Link
                href={item.href}
                key={idx}
                className={`${path.includes(item.label.toLowerCase()) ? "border-action-primary text-action-primary" : ""}  inline-flex items-center justify-center w-10 h-10 p-2 bg-transparent border rounded-full shadow hover:shadow-md`}
                aria-label={item.label}
              >
                {item.icon}
              </Link>
            ))}

            {/* Profile Circle */}
            <div className="w-8 h-8 bg-action-primary text-white flex items-center justify-center rounded-full">
              DR
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
