import React, { Suspense } from "react";
import { fetchDeals } from "@/app/lib/data";
import { CardsSkeleton } from "@/app/ui/skeletons";
import SideNavLink from "@/app/ui/deals/side-nav-link";

const DealsSideNav = async () => {
  let links = await fetchDeals();

  return (
    <div className={"flex flex-col gap-4"}>
      <Suspense fallback={<CardsSkeleton />}>
        {links.map(({ id, name, totalCommitment, funded, unfunded }) => {
          return (
            <SideNavLink
              key={id}
              id={id}
              name={name}
              totalCommitment={totalCommitment}
              funded={funded}
              unfunded={unfunded}
            ></SideNavLink>
          );
        })}
      </Suspense>
    </div>
  );
};

export default DealsSideNav;
