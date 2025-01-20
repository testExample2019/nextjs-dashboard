import Tooltip from "@/app/ui/components/tooltip";
import { ChevronLeft, Cross } from "@/app/ui/icons";

export const FacilityFee = ({ data, onClose }: { data: any; onClose: any }) => {
  return (
    <div className="bg-white absolute top-0 right-0 w-full lg:w-[40%] h-full z-10">
      <h2 className="text-18 font-semibold capitalize text-grey-primary py-2 px-4 border-b-1 border-grey-border flex justify-between items-center">
        <div className={"flex items-center justify-center gap-2"}>
          <button onClick={onClose}>
            <ChevronLeft className={"rotate-180"} />
          </button>
          {data?.type ? "Facility Fee" : "New Facility Fee"}
        </div>
        <button onClick={onClose}>
          <Cross />
        </button>
      </h2>
      <div className={"p-6"}>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-semibold text-grey-primary flex items-center gap-1 relative h-6">
              Type
            </label>
            <select
              name="facilityFeeType"
              defaultValue={data?.type || ""}
              className="w-full mt-1 p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
            >
              <option>{data?.type || ""}</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold text-grey-primary flex items-center gap-1 relative h-6">
              Applies To
            </label>
            <select
              name="facilityFeeAppliesTo"
              defaultValue={data?.appliesTo || ""}
              className="w-full mt-1 p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
            >
              <option>{data?.appliesTo || ""}</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-semibold text-grey-primary flex items-center gap-1 relative h-6">
              Payment Timing
            </label>
            <select
              name="facilityFeeType"
              defaultValue={"Appears"}
              className="w-full mt-1 p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
            >
              <option>{"Appears"}</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold text-grey-primary flex items-center gap-1 relative h-6">
              Day Count
            </label>
            <select
              name="facilityFeeAppliesTo"
              defaultValue={"ACT/365"}
              className="w-full mt-1 p-1 border-t-0 border-l-0 border-r-0 border-b-1 border-grey-border focus:border-action-primary focus:ring-0"
            >
              <option>{"ACT/365"}</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="flex items-center space-x-3">
            <span className="text-base text-grey-primary flex items-center gap-1">
              Include Accrual End
              <Tooltip content={"Lorem"} />
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                defaultChecked={true}
              />
              <div className="w-10 h-4 bg-[#21212170] rounded-full peer peer-checked:bg-purple-o"></div>
              <div className="absolute w-6 h-6 bg-white rounded-full shadow-md transform transition peer-checked:translate-x-4 peer-checked:bg-purple"></div>
            </label>
          </div>
        </div>
      </div>
      {/*  Facility Rates */}
      <div className={"p-6"}>
        <div>
          <h2 className="text-lg font-semibold text-grey-blue py-2 border-b-1 border-grey-border flex items-center justify-between">
            Facility Rates
            <div className={"flex items-center gap-6"}>
              <button
                type="button"
                className={`inline-flex justify-center gap-x-1.5 text-sm uppercase font-semibold text-action-primary  hover:text-blue-dark`}
              >
                + Add
              </button>
            </div>
          </h2>
          {/* Facility Fees Table */}
          <table className="w-full border-collapse text-left mt-2">
            <thead>
              <tr>
                <th className="py-2 px-4 text-xs font-bold text-grey-secondary uppercase">
                  START DATE
                </th>
                <th className="py-2 px-4 text-xs font-bold text-grey-secondary uppercase">
                  RATE
                </th>
                <th className="py-2 px-4 text-xs font-bold text-grey-secondary uppercase">
                  AMOUNT
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-grey-lighter cursor-pointer transition-all hover:bg-blue-o">
                <td className="py-2 px-4 text-base text-grey-primary">
                  2025-01-01
                </td>
                <td className="py-2 px-4 text-base text-grey-primary">
                  {data?.rate || ""}
                </td>
                <td className="py-2 px-4 text-base text-grey-primary">
                  {data?.flatAmount || ""}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
