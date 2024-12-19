import React from "react";
import { ButtonDropdown } from "@/app/ui/dropdown";
import { handleDealDropdownAction } from "@/app/lib/actions";
import { Suspense } from "react";
import { CardsSkeleton, InvoicesTableSkeleton } from "@/app/ui/skeletons";
import ViewsNav from "@/app/ui/dashboard/views-nav";
import CovenantsCardWrapper from "@/app/ui/dashboard/covenants-tracking";
import {
  dealsDropdownItems,
  fetchDealsNavData,
  fetchUpcomingPaymentsData,
} from "@/app/lib/data";
import DealsSideNav from "@/app/ui/deals/side-nav";
import UpcomingPayments from "@/app/ui/dashboard/upcoming-payments";

const Page = async ({ params }: { params: Promise<{ deal: string }> }) => {
  const { deal } = await params; // Resolve the params promise
  const dealName = deal?.[0];
  const dealView = deal?.[1];
  const dealsNavData = await fetchDealsNavData();
  const upcomingPayments = await fetchUpcomingPaymentsData(dealName, dealView);

  return (
    <Suspense key={deal} fallback={<InvoicesTableSkeleton />}>
      <div className="flex flex-col md:flex-row md:overflow-hidden h-full">
        <div className="w-full flex-none md:w-64">
          <aside className={"border-r-1 border-grey-border"}>
            <div
              className={
                "flex justify-between items-center h-[50px] border-b-1 border-grey-border py-2 px-4 "
              }
            >
              <h3 className={"text-18 font-semibold text-grey-primary"}>
                Deals
              </h3>
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

            <div className={"py-2 px-4"} id={"tour1-step2"}>
              <h4 className={"text-sm text-grey-light mb-2"}>
                Select a deal to filter the information on your dashboard:
              </h4>

              <DealsSideNav dealsNavData={dealsNavData} />
            </div>
          </aside>
        </div>
        <div className="w-full">
          <>
            <div
              className={
                "flex w-full items-center justify-between py-2 px-4  h-[50px] border-b-1 border-grey-border"
              }
            >
              <h1 className={`text-18 md:text-2xl`}>Dashboard</h1>
              <div id={"tour1-step3"} className={`inline-flex items-center`}>
                <span className={" inline-flex text-sm text-grey mr-3"}>
                  View
                </span>
                <ViewsNav dealName={dealName} dealView={dealView} />
              </div>
            </div>
            <div className={"p-4 flex flex-col gap-4"}>
              <h3 className={"text-grey-primary text-base font-semibold"}>
                Covenants Tracking
              </h3>
              <div
                id={"tour1-step4"}
                className="flex flex-col lg:flex-row gap-4"
              >
                <Suspense fallback={<CardsSkeleton />}>
                  <CovenantsCardWrapper
                    dealName={dealName}
                    dealView={dealView}
                  />
                </Suspense>
              </div>
              <div id={"tour1-step5"}>
                <Suspense fallback={<CardsSkeleton />}>
                  <UpcomingPayments upcomingPayments={upcomingPayments} />
                </Suspense>
              </div>
            </div>
          </>
        </div>
      </div>
    </Suspense>
  );
};

export default Page;
