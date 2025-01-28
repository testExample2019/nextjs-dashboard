import React from "react";
import { Table } from "@/app/ui/components/table";
import { fetchPositions } from "@/app/lib/data";
import { DealParamsType } from "@/app/lib/definitions";

const PositionsTable: React.FC<DealParamsType> = async ({
  dealName,
  dealView,
}) => {
  const positions = await fetchPositions(dealName, dealView);

  const selectedFields = positions?.map(
    ({
      deal,
      instrument,
      borrower,
      ccy,
      counterparty,
      role,
      committed,
      funded,
      unfunded,
      docs,
    }) => ({
      deal,
      instrument,
      borrower,
      ccy,
      counterparty,
      role,
      committed,
      funded,
      unfunded,
      docs,
    }),
  );

  return <Table rows={selectedFields} />;
};

export default PositionsTable;
