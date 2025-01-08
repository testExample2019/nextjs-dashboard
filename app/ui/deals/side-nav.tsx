"use client";
import React from "react";
import { DealNavType } from "@/app/lib/definitions";
import { SideNavLink } from "@/app/ui/deals/side-nav-link";
import { useEffect } from "react";
import { useNextStep } from "nextstepjs";

export default function DealsSideNav({
  dealsNavData,
}: {
  dealsNavData: DealNavType[];
}) {
  const { setCurrentStep } = useNextStep();
  useEffect(() => {
    setCurrentStep(4);
  }, []);
  return (
    <div id={`tour1-step5`} className={"flex flex-col gap-4"}>
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
