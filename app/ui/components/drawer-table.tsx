import React from "react";
import { isLeftAligned, separateWords } from "@/app/lib/utils";

interface TableProps {
  rows?: { [key: string]: string | number }[];
  highlight?: boolean;
  activeIndex?: number;
}

export const DrawerTable: React.FC<TableProps> = ({
  rows = [],
  highlight = false,
  activeIndex,
}) => {
  // Extract headers dynamically from the first row
  const headers =
    rows?.length > 0 ? Object.keys(rows[0]).filter((key) => key !== "id") : [];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        {/* Table Header */}
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className={`p-3 text-left text-xs font-bol text-grey uppercase`}
              >
                <span
                  className={`block ${isLeftAligned(header) ? "text-right" : "text-left"}`}
                >
                  {separateWords(header)}
                </span>
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-white">
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`hover:bg-gray-50 transition-colors border-t border-grey-border ${activeIndex === rowIndex ? "bg-blue-o" : "bg-white"}`}
            >
              {headers.map((header, cellIndex) => (
                <td
                  key={cellIndex}
                  className="p-3 text-base text-grey-primary truncate"
                >
                  <span
                    className={` block ${isLeftAligned(header) ? `text-right ${highlight ? (`${row[header]}`.startsWith("(") ? "text-red" : "text-green") : ""} ` : "text-left text-grey-primary"}`}
                  >
                    {row[header]}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
