"use client";
import React, { useEffect } from "react";
import { DealNavType, DealPages } from "@/app/lib/definitions";
import { SideNavLink } from "@/app/ui/deals/side-nav-link";
import { useNextStep } from "nextstepjs";
import { usePathname } from "next/navigation";

export default function DealsSideNav({
  dealsNavData,
}: {
  dealsNavData: DealNavType[];
}) {
  const path = usePathname();
  const { setCurrentStep, startNextStep, currentStep } = useNextStep();

  console.log(currentStep);
  useEffect(() => {
    startNextStep("mainTour");
    if (currentStep === 0) {
      path.includes(DealPages.Dashboard) && setCurrentStep(7);
      path.includes(DealPages.Transactions) && setCurrentStep(21);
      path.includes(DealPages.Instruments) && setCurrentStep(23);
      path.includes(DealPages.Documents) && setCurrentStep(25);
    }
  }, []);

  return (
    <div id={`tour1-step7`} className={"flex  md:flex-col gap-4"}>
      {dealsNavData.map(
        ({ id, slug, totalCommitment, funded, unfunded, displayName }) => {
          return (
            <SideNavLink
              key={id}
              id={id}
              slug={slug}
              displayName={displayName}
              totalCommitment={totalCommitment}
              funded={funded}
              unfunded={unfunded}
            />
          );
        },
      )}
    </div>
  );
}
