"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Status from "@/app/ui/components/status";
import { separateWords } from "@/app/lib/utils";
import { Document } from "@/app/ui/icons";

interface TableProps {
  type: "document" | "transaction" | "position";
  rows: { [key: string]: string | number }[];
}

export const Table: React.FC<TableProps> = ({ type, rows }) => {
  const path = usePathname();
  // Extract headers dynamically from the first row
  const headers =
    rows?.length > 0 ? Object.keys(rows[0]).filter((key) => key !== "id") : [];

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
          {rows?.map((row, rowIndex) => (
            <tr
              className={`${path.includes(`${row.id}`) ? " bg-[#EDF4FC]" : ""} transition-all hover:bg-grey-o`}
              key={rowIndex}
            >
              {headers.map((header, cellIndex) => {
                let cellVal: React.JSX.Element;

                if (header === "docs") {
                  cellVal = <Document />;
                } else if (header.includes("status")) {
                  cellVal = <Status status={`${row[header]}`} />;
                } else {
                  cellVal = (
                    <Link href={`/${type}/${row.id}`}>{row[header]}</Link>
                  );
                }
                return (
                  <td
                    key={cellIndex}
                    className="p-3 text-base text-grey-primary whitespace-nowrap max-w-[120px] truncate"
                  >
                    {cellVal}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
