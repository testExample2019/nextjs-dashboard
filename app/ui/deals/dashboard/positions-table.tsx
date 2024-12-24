import React from "react";
import { Table } from "@/app/ui/components/table";
import { fetchPositions } from "@/app/lib/data";
import { DealParamsType } from "@/app/lib/definitions";

const PositionsTable: React.FC<DealParamsType> = async ({
  dealName,
  dealView,
}) => {
  const positions = await fetchPositions(dealName, dealView);

  return (
    <div>
      <Table type={"position"} rows={positions} />
    </div>
  );
};

export default PositionsTable;
