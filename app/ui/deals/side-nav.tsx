"use client";
import React from "react";
import { DealNavType } from "@/app/lib/definitions";
import { SideNavLink } from "@/app/ui/deals/side-nav-link";

export default function DealsSideNav({
  dealsNavData,
}: {
  dealsNavData: DealNavType[];
}) {
  return (
    <div id={`tour1-step7`} className={"flex  md:flex-col gap-4"}>
      {dealsNavData.map(
        ({
          id,
          slug,
          totalCommitment,
          funded,
          unfunded,
          displayName,
          stepId,
        }) => {
          return (
            <SideNavLink
              key={id}
              id={id}
              slug={slug}
              displayName={displayName}
              totalCommitment={totalCommitment}
              funded={funded}
              unfunded={unfunded}
              stepId={stepId}
            />
          );
        },
      )}
    </div>
  );
}
