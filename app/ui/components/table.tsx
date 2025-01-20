"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Status from "@/app/ui/components/status";
import { separateWords } from "@/app/lib/utils";
import { ChevronDown, ChevronLeft, Document } from "@/app/ui/icons";

interface TableProps {
  type: "document" | "transaction" | "position" | "instrument";
  rows: { [key: string]: string | number | [] }[];
}

export const Table: React.FC<TableProps> = ({ type, rows= [] }) => {
  const path = usePathname();
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleRow = (rowIndex: number) => {
    setExpandedRows(
      (prev) =>
        prev.includes(rowIndex)
          ? prev.filter((index) => index !== rowIndex) // Remove index if it's already expanded
          : [...prev, rowIndex], // Add index if it's not expanded
    );
  };

  // Extract headers dynamically from the first row
  const headers =
    rows?.length > 0
      ? Object.keys(rows[0]).filter(
          (key) => key !== "nestedRows" && key !== "id",
        )
      : [];

  const renderRows = (
    rows: { [key: string]: string | number | [] }[],
    isNested = false,
  ) => {
    return rows.map((row, index: number) => (
      <React.Fragment key={index}>
        {/* Main or Nested Row */}
        <tr
          className={`${path.includes(`${row.id}`) ? " bg-[#EDF4FC]" : ""} transition-all hover:bg-grey-o`}
        >
          {headers.map((header, cellIndex) => {
            let cellVal: React.JSX.Element;

            if (header === "docs") {
              cellVal = <Document />;
            } else if (header.includes("status")) {
              cellVal = <Status status={`${row[header]}`} />;
            } else {
              cellVal = <Link href={`/${type}/${row.id}`}>{row[header]}</Link>;
            }
            return (
              <td
                key={cellIndex}
                className={`relative px-3 py-3 text-sm text-grey-primary whitespace-nowrap max-w-[120px] truncate ${(row.nestedRows || isNested) && cellIndex === 0 ? "ps-8" : ""}`}
              >
                {row.nestedRows && cellIndex === 0 && (
                  <button
                    onClick={() => toggleRow(index)}
                    className="text-grey focus:outline-none absolute left-1"
                  >
                    {expandedRows.includes(index) ? (
                      <ChevronDown />
                    ) : (
                      <ChevronLeft />
                    )}
                  </button>
                )}
                <span className={"flex items-center"}>
                  {type === "document" && cellIndex === 0 && (
                    <Document className={"flex-shrink-0"} />
                  )}
                  {cellVal}
                </span>
              </td>
            );
          })}
        </tr>

        {/* Render Nested Rows */}
        {expandedRows.includes(index) &&
          row.nestedRows &&
          renderRows(row.nestedRows as [], true)}
      </React.Fragment>
    ));
  };

  return (
    <div className="overflow-x-auto shadow-md border border-grey-border rounded-lg">
      <table className="divide-y border-grey-border w-full">
        {/* Table Header */}
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="p-3 text-left text-xs font-bold text-grey-secondary uppercase tracking-wider max-w-[120px] truncate"
              >
                {separateWords(header)}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-white divide-y border-grey-border">
          {renderRows(rows)}
        </tbody>
      </table>
    </div>
  );
};
