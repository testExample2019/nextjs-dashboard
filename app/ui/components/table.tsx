"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface TableProps {
  type: string;
  rows: { [key: string]: string | number }[];
}

export const Table: React.FC<TableProps> = ({ type, rows }) => {
  const path = usePathname();
  // Extract headers dynamically from the first row
  const headers =
    rows?.length > 0 ? Object.keys(rows[0]).filter((key) => key !== "id") : [];

  return (
    <div className="overflow-x-auto shadow-md border border-gray-200 rounded-lg">
      <table className="divide-y divide-gray-200 w-full">
        {/* Table Header */}
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-bold text-grey-secondary uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-white divide-y divide-gray-200">
          {rows?.map((row, rowIndex) => (
            <tr
              className={`${path.includes(row.id as string) ? " bg-[#EDF4FC]" : ""} transition-all hover:bg-grey-o`}
              key={rowIndex}
            >
              {headers.map((header, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 text-sm text-grey-primary whitespace-nowrap"
                >
                  <Link href={`/${type}/${row.id}`}>{row[header]}</Link>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
