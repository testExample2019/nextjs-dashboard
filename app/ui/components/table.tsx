"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Status from "@/app/ui/components/status";
import { isLeftAligned, separateWords } from "@/app/lib/utils";
import { ChevronDown, ChevronLeft, Document } from "@/app/ui/icons";

interface TableProps {
  rows: { [key: string]: string | number | any }[];
  type?: "document" | "transaction" | "instrument";
  expandedItems?: number[]; // Indices to expand initially
}

export const Table: React.FC<TableProps> = ({
  rows = [],
  type,
  expandedItems = [],
}) => {
  const path = usePathname();
  const [expandedRows, setExpandedRows] = useState<number[]>(expandedItems);

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
            } else if (!!type) {
              cellVal = (
                <Link
                  className={`${isLeftAligned(header) ? "text-left" : "text-right"} truncate`}
                  href={`/${type}/${row.id}`}
                >
                  {row[header]}
                </Link>
              );
            } else {
              cellVal = (
                <span
                  className={`${isLeftAligned(header) ? "text-left" : "text-right"} truncate`}
                >
                  {row[header]}
                </span>
              );
            }
            return (
              <td
                key={cellIndex}
                className={`relative px-3 py-3 text-sm text-grey-primary whitespace-nowrap max-w-[125px] truncate ${(row.nestedRows || isNested) && cellIndex === 0 ? "ps-8" : ""}`}
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
                <span
                  className={`flex items-center whitespace-nowrap truncate ${isLeftAligned(header) ? "justify-end" : "justify-start"}`}
                >
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
    <div className="overflow-x-auto shadow border border-grey-border rounded-lg">
      <table className="divide-y border-grey-border w-full">
        {/* Table Header */}
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className={`px-3 py-4 text-left text-xs font-bold text-grey-secondary uppercase tracking-wider max-w-[125px] truncate ${isLeftAligned(header) ? "text-right" : "text-left"}`}
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
