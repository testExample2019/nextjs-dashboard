import React from "react";
import { separateWords } from "@/app/lib/utils";

interface TableProps {
  rows?: { [key: string]: string | number }[];
  highlight?: boolean;
}

export const DrawerTable: React.FC<TableProps> = ({
  rows = [],
  highlight = false,
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
                  className={` block ${header === "amount" || header === "share" ? "text-right" : "text-left"}`}
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
              className="hover:bg-gray-50 transition-colors border-t border-grey-border"
            >
              {headers.map((header, cellIndex) => (
                <td
                  key={cellIndex}
                  className="p-3 text-base text-grey-primary truncate"
                >
                  <span
                    className={` block ${header === "amount" || header === "share" ? `text-right ${highlight ? (`${row[header]}`.startsWith("(") ? "text-red" : "text-green") : ""} ` : "text-left text-grey-primary"}`}
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
