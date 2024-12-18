import React from "react";
import { ButtonDropdown } from "@/app/ui/dropdown";
import { handleDealDropdownAction } from "@/app/lib/actions";
import { Suspense } from "react";
import { CardsSkeleton } from "@/app/ui/skeletons";
import ViewsNav from "@/app/ui/dashboard/views-nav";
import CovenantsCardWrapper from "@/app/ui/dashboard/covenants-tracking";
import { dealsDropdownItems } from "@/app/lib/data";
import DealsSideNav from "@/app/ui/deals/side-nav";

const Page = async ({
  params: { deal },
}: {
  params: {
    deal: string; // Dynamic route segment
  };
}) => {
  const dealName = deal?.[0];
  const dealView = deal?.[1];

  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <aside className={"border-r-1 border-grey-border"}>
          <div
            className={
              "flex justify-between items-center h-[50px] border-b-1 border-grey-border py-2 px-4 "
            }
          >
            <h3 className={"text-18 font-semibold text-grey-primary"}>Deals</h3>
            <ButtonDropdown
              children={"Add Deal"}
              dropdownItems={dealsDropdownItems}
              onAction={handleDealDropdownAction}
            />
          </div>

          <div className={"py-2 px-4 "}>
            <h4 className={"text-sm text-grey-light mb-2"}>
              Select a deal to filter the information on your dashboard:
            </h4>
            <DealsSideNav />
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
            <div className={`inline-flex items-center`}>
              <span className={" inline-flex text-sm text-[#909090] mr-3"}>
                View
              </span>
              <ViewsNav />
            </div>
          </div>
          <div className={"p-4"}>
            <h3 className={"text-grey-primary text-base font-semibold mb-4"}>
              Covenants Tracking
            </h3>
            <Suspense fallback={<CardsSkeleton />}>
              <CovenantsCardWrapper name={dealName} view={dealView} />
            </Suspense>
          </div>
        </>
      </div>
    </div>
  );
};

export default Page;
