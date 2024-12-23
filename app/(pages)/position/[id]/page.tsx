import React from "react";
import TransactionView from "@/app/ui/components/transaction-view";

const Page = () => {
  return (
    <TransactionView
      transaction={{
        id: "",
        deal: "",
        instrument: "",
        borrower: "",
        ccy: "",
        counterparty: "",
        role: "",
        committed: "",
        funded: "",
        unfunded: "",
        docs: "",
      }}
    />
  );
};

export default Page;
