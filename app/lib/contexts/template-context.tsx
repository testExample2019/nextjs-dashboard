import React, { createContext, useContext, useState } from "react";
import { formatCurrency } from "@/app/lib/utils";

interface Transaction {
  transaction: string;
  date: string;
  amount: string;
}

interface TableContextType {
  transactionsTableData: Transaction[];
  updateAnnualRate: (annualRate: string) => void;
}

const tableData = [
  {
    transaction: "Commitment",
    date: "2025-01-01",
    amount: "$100,000,000.00",
  },
  {
    transaction: "Drawdown",
    date: "2025-01-01",
    amount: "$100,000,000.00",
  },
  {
    transaction: "Interest Payment",
    date: "2025-02-01",
    amount: "$849,315.07",
  },
  {
    transaction: "Interest Payment",
    date: "2025-03-01",
    amount: "$767,123.29",
  },
  {
    transaction: "Interest Payment",
    date: "2025-04-01",
    amount: "$849,315.07",
  },
  {
    transaction: "Interest Payment",
    date: "2025-05-01",
    amount: "$821,917.81",
  },
  {
    transaction: "Interest Payment",
    date: "2025-06-01",
    amount: "$849,315.07",
  },
  {
    transaction: "Interest Payment",
    date: "2025-07-01",
    amount: "$821,917.81",
  },
  {
    transaction: "Interest Payment",
    date: "2025-08-01",
    amount: "$849,315.07",
  },
  {
    transaction: "Interest Payment",
    date: "2025-09-01",
    amount: "$849,315.07",
  },
  {
    transaction: "Interest Payment",
    date: "2025-10-01",
    amount: "$821,917.81",
  },
  {
    transaction: "Interest Payment",
    date: "2025-11-01",
    amount: "$849,315.07",
  },
  {
    transaction: "Interest Payment",
    date: "2025-12-01",
    amount: "$821,917.81",
  },
  {
    transaction: "Interest Payment",
    date: "2026-01-01",
    amount: "$849,315.07",
  },
  {
    transaction: "Interest Payment",
    date: "2026-02-01",
    amount: "$849,315.07",
  },
  {
    transaction: "Interest Payment",
    date: "2026-03-01",
    amount: "$767,123.29",
  },
];
const TableContext = createContext<TableContextType | undefined>(undefined);

export const TableProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [transactionsTableData, setTransactionsTableData] =
    useState<Transaction[]>(tableData);

  const updateAnnualRate = (annualRate: string) => {
    const newAnnualRate = parseFloat(annualRate.replace("%", "").trim());
    // Logic to update transactionsTableData based on the annualRate
    const updatedData = tableData.map((row) => {
      if (row.transaction === "Interest Payment") {
        const baseAmount = parseFloat(row.amount.replace(/[$,]/g, ""));
        const newAmount = baseAmount * (newAnnualRate / 10); // Adjusted by annual rate
        return {
          ...row,
          amount: formatCurrency(newAmount),
        };
      }
      return row;
    });

    setTransactionsTableData(updatedData);
  };

  return (
    <TableContext.Provider value={{ transactionsTableData, updateAnnualRate }}>
      {children}
    </TableContext.Provider>
  );
};

export const useTableContext = (): TableContextType => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("useTableContext must be used within a TableProvider");
  }
  return context;
};
