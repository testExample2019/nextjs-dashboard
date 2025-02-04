import { CovenantMetricType, DealParamsType } from "@/app/lib/definitions";
import { fetchCovenantsTrackingData } from "@/app/lib/data";
import React from "react";
import ValueIndicator from "@/app/ui/deals/dashboard/value-indicator";
import { Failed, Passed } from "@/app/ui/icons";

const CovenantsCardWrapper: React.FC<DealParamsType> = async ({
  dealName,
  dealView,
}) => {
  const covenantsTrackingData: CovenantMetricType[] =
    await fetchCovenantsTrackingData(dealName, dealView);
  return (
    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
      {covenantsTrackingData?.map(
        (
          { title, value, change, changeValue, prevPeriodValue, status },
          key,
        ) => (
          <CovenantsCard
            key={key}
            title={title}
            value={value}
            status={status}
            change={change}
            changeValue={changeValue}
            prevPeriodValue={prevPeriodValue}
          />
        ),
      )}
    </div>
  );
};

export default CovenantsCardWrapper;

function CovenantsCard({
  title,
  value,
  change,
  changeValue,
  prevPeriodValue,
  status,
}: CovenantMetricType) {
  return (
    <div className="flex-1 bg-white shadow-sm rounded-lg p-4 border border-grey-border w-full">
      <h3 className="text-grey text-sm font-semibold uppercase truncate whitespace-nowrap">
        {title}
      </h3>
      <div className={"flex justify-between items-end flex-col xl:flex-row"}>
        <div className="flex justify-between items-center">
          <div className="mt-2 flex items-center gap-2">
            <span className="text-grey-primary text-base font-medium">
              {status === "Passed" ? (
                <div className={"flex items-center justify-center"}>
                  <Passed />
                  Passed
                </div>
              ) : (
                <div className={"flex items-center justify-center"}>
                  <Failed />
                  Failed
                </div>
              )}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center gap-2">
          <div className={"flex items-center justify-center"}>
            <ValueIndicator value={change} />

            <span className="text-grey-primary text-base px-2">
              {changeValue}
            </span>
            <span className="text-grey-primary text-[28px] font-bold flex items-center justify-center gap-4">
              <span className={"text-grey font-normal text-base"}>|</span>{" "}
              {value}
            </span>
          </div>

          <span className="text-grey text-sm flex items-center justify-center gap-2">
            Previous Period <span>|</span>
            <span className="min-w-[65px] font-semibold">
              ({prevPeriodValue})
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
