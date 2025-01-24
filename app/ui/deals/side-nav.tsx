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

  useEffect(() => {
    if (currentStep === 7) {
      startNextStep("mainTour");
      path.includes(DealPages.Dashboard) && setCurrentStep(7);
    }

    if (currentStep === 0) {
      startNextStep("mainTour");
      path.includes(DealPages.Dashboard) && setCurrentStep(7);
      path.includes(DealPages.Transactions) && setCurrentStep(21);
      path.includes(DealPages.Instruments) && setCurrentStep(23);
      path.includes(DealPages.Documents) && setCurrentStep(25);
    }
  }, [path]);

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
