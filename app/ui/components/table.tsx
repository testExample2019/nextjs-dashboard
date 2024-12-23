import React from "react";

interface TableProps {
  rows: { [key: string]: string | number }[];
}

export const Table: React.FC<TableProps> = ({ rows }) => {
  // Extract headers dynamically from the first row
  const headers = rows?.length > 0 ? Object.keys(rows[0]) : [];

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
            <tr className={""} key={rowIndex}>
              {headers.map((header, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 text-sm text-grey-primary whitespace-nowrap"
                >
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
