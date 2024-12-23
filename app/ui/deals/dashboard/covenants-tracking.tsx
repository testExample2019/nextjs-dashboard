import { CovenantMetricType } from "@/app/lib/definitions";
import { fetchCovenantsTrackingData } from "@/app/lib/data";

export default async function CovenantsCardWrapper({
  dealName,
  dealView,
}: {
  dealName: string;
  dealView: string;
}) {
  const covenantsTrackingData: CovenantMetricType[] =
    await fetchCovenantsTrackingData(dealName, dealView);
  return (
    <>
      {covenantsTrackingData?.map(
        ({ title, value, change, prevPeriodValue, status }, key) => (
          <Card
            key={key}
            title={title}
            value={value}
            status={status}
            change={change}
            prevPeriodValue={prevPeriodValue}
          />
        ),
      )}
    </>
  );
}

export function Card({
  title,
  value,
  change,
  prevPeriodValue,
  status,
}: CovenantMetricType) {
  return (
    <div className="flex-1 bg-white shadow-md rounded-lg p-4 border border-[#E3E3E3]">
      <h3 className="text-grey text-sm font-semibold uppercase">
        {title}
      </h3>
      <div className={"flex justify-between items-end"}>
        <div className="flex justify-between items-center">
          <div className="mt-2 flex items-center gap-2">
            <span className="text-grey-primary text-base font-medium">
              {status === "Passed" ? (
                <div className={"flex items-center justify-center"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.75 4C7.46875 4 4 7.5 4 11.75C4 16.0312 7.46875 19.5 11.75 19.5C16 19.5 19.5 16.0312 19.5 11.75C19.5 7.5 16 4 11.75 4ZM11.75 5.5C15.1875 5.5 18 8.3125 18 11.75C18 15.2188 15.1875 18 11.75 18C8.28125 18 5.5 15.2188 5.5 11.75C5.5 8.3125 8.28125 5.5 11.75 5.5ZM16.125 9.59375L15.4062 8.875C15.2812 8.71875 15.0312 8.71875 14.875 8.875L10.4688 13.25L8.59375 11.375C8.4375 11.2188 8.21875 11.2188 8.0625 11.375L7.34375 12.0625C7.21875 12.2188 7.21875 12.4688 7.34375 12.5938L10.1875 15.4688C10.3438 15.625 10.5625 15.625 10.7188 15.4688L16.125 10.125C16.25 9.96875 16.25 9.71875 16.125 9.59375Z"
                      fill="#70AD47"
                    />
                  </svg>
                  Passed
                </div>
              ) : (
                <div className={"flex items-center justify-center"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M11.0833 10.4063L11.3021 13.9063C11.3021 14.125 11.4583 14.25 11.6771 14.25H12.9583C13.1771 14.25 13.3333 14.0938 13.3333 13.9063L13.5521 10.4063C13.5521 10.1875 13.3958 10 13.1771 10H11.4583C11.2396 10 11.0833 10.1875 11.0833 10.4063ZM13.6458 16C13.6458 15.2813 13.0521 14.6875 12.3333 14.6875C11.5833 14.6875 11.0208 15.2813 11.0208 16C11.0208 16.75 11.5833 17.3125 12.3333 17.3125C13.0521 17.3125 13.6458 16.75 13.6458 16ZM13.6146 4.75005C13.0521 3.7813 11.5833 3.75005 11.0208 4.75005L3.52084 17.7813C2.95834 18.75 3.67709 20 4.83334 20H19.8021C20.9583 20 21.6771 18.7813 21.1146 17.7813L13.6146 4.75005ZM4.98959 18.25L12.1458 5.81255C12.2396 5.68755 12.3958 5.68755 12.4896 5.81255L19.6458 18.25C19.7396 18.375 19.6458 18.5 19.4896 18.5H5.14584C4.98959 18.5 4.89584 18.375 4.98959 18.25Z"
                      fill="#D13A00"
                    />
                  </svg>
                  Failed
                </div>
              )}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center gap-2">
          <div>
            <span
              className={`${status === "Passed" ? "text-green" : "text-red"} text-base font-n`}
            >
              {change}
            </span>
            <span className="text-grey-primary text-base px-2">
              {value} <span className={"text-[#909090]"}>|</span>
            </span>
            <span className="inline-flex text-grey-primary text-28 font-bold">
              {value}
            </span>
          </div>

          <span className="text-[#909090] text-sm">
            Previous Period | {prevPeriodValue}
          </span>
        </div>
      </div>
    </div>
  );
}
