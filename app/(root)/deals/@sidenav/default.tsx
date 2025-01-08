import React from "react";
import { fetchDealsNavData } from "@/app/lib/data";
import { ButtonDropdown } from "@/app/ui/components/dropdown";
import { handleDealDropdownAction } from "@/app/lib/actions";
import DealsSideNav from "@/app/ui/deals/side-nav";
import { dealsDropdownItems } from "@/app/lib/constants";

const SideNavPage = async () => {
  const dealsNavData = await fetchDealsNavData();
  return (
    <aside className={"border-r-1 border-grey-border h-full"}>
      <div
        className={
          "flex justify-between items-center h-[50px] border-b-1 border-grey-border py-2 px-4"
        }
      >
        <h3 className={"text-18 font-semibold text-grey-primary"}>Deals</h3>
        <ButtonDropdown
          children={
            <button
              type="button"
              className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm uppercase font-semibold text-action-primary outline-1 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              {"Add Deal"}
              <svg
                className="-mr-1 size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          }
          dropdownItems={dealsDropdownItems}
          onAction={handleDealDropdownAction}
        ></ButtonDropdown>
      </div>

      <div className={"py-2 px-4 sticky top-0"}>
        <h4 className={"text-sm text-grey-light mb-2"}>
          Select a deal to filter the information on your dashboard:
        </h4>

        <DealsSideNav dealsNavData={dealsNavData} />
      </div>
    </aside>
  );
};

export default SideNavPage;
