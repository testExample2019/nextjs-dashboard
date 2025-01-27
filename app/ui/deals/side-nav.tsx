"use client";
import React, { useEffect } from "react";
import { DealNavType, DealPages, DealViews } from "@/app/lib/definitions";
import { SideNavLink } from "@/app/ui/deals/side-nav-link";
import { useNextStep } from "nextstepjs";
import { usePathname, useRouter } from "next/navigation";
import { replaceViewItemInURL } from "@/app/lib/utils";

export default function DealsSideNav({
  dealsNavData,
}: {
  dealsNavData: DealNavType[];
}) {
  const path = usePathname();
  const router = useRouter();
  const { setCurrentStep, startNextStep, currentStep } = useNextStep();

  useEffect(() => {
    if (
      currentStep === 0 ||
      currentStep === 7 ||
      currentStep === 21 ||
      currentStep === 23 ||
      currentStep === 25
    ) {
      startNextStep("mainTour");
      router.push(replaceViewItemInURL(path, DealViews.Lender));
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
