import React from "react";
import { DealNavType } from "@/app/lib/definitions";
import { SideNavLink } from "@/app/ui/deals/side-nav-link";

export default function DealsSideNav({
  dealsNavData,
}: {
  dealsNavData: DealNavType[];
}) {
  return (
    <div className={"flex flex-col gap-4"}>
      {dealsNavData.map(({ id, name, totalCommitment, funded, unfunded }) => {
        return (
          <SideNavLink
            key={id}
            id={id}
            name={name}
            totalCommitment={totalCommitment}
            funded={funded}
            unfunded={unfunded}
          />
        );
      })}
    </div>
  );
}
