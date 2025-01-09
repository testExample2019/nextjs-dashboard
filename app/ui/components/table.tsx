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
                className="p-4 text-left text-xs font-bold text-grey-secondary uppercase tracking-wider"
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
              className={`${path.includes(`${row.id}`) ? " bg-[#EDF4FC]" : ""} transition-all hover:bg-grey-o`}
              key={rowIndex}
            >
              {headers.map((header, cellIndex) => (
                <td
                  key={cellIndex}
                  className="p-4 text-sm text-grey-primary whitespace-nowrap"
                >
                  {header !== "docs" ? (
                    <Link href={`/${type}/${row.id}`}>{row[header]}</Link>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M18.0312 7.0625L15.4375 4.4375C15.1562 4.15625 14.75 4 14.375 4H8C7.15625 4 6.5 4.6875 6.5 5.5V18.5C6.5 19.3438 7.15625 20 8 20H17C17.8125 20 18.5 19.3438 18.5 18.5V8.125C18.5 7.75 18.3125 7.34375 18.0312 7.0625ZM16.875 8H14.5V5.625L16.875 8ZM8 18.5V5.5H13V8.75C13 9.1875 13.3125 9.5 13.75 9.5H17V18.5H8ZM15.8125 14.0312C15.4375 13.6562 14.3438 13.75 13.7812 13.8125C13.25 13.5 12.9062 13.0312 12.6562 12.375C12.75 11.875 12.9688 11.0938 12.8125 10.625C12.6875 9.8125 11.625 9.875 11.4688 10.4375C11.3438 10.9375 11.4688 11.6562 11.6875 12.5312C11.375 13.2812 10.9062 14.2812 10.5938 14.875C9.96875 15.1875 9.125 15.6875 9 16.3125C8.90625 16.8125 9.8125 18.0312 11.375 15.3438C12.0625 15.0938 12.8438 14.8125 13.5 14.6875C14.0938 15.0312 14.7812 15.2188 15.25 15.2188C16.0625 15.2188 16.125 14.3438 15.8125 14.0312ZM9.625 16.4688C9.78125 16.0312 10.375 15.5312 10.5625 15.375C9.96875 16.3125 9.625 16.4688 9.625 16.4688ZM12.1562 10.5C12.4062 10.5 12.375 11.5 12.2188 11.7812C12.0938 11.3438 12.0938 10.5 12.1562 10.5ZM11.4062 14.7812C11.7188 14.25 11.9688 13.625 12.1875 13.0625C12.4375 13.5312 12.75 13.9062 13.125 14.1562C12.4688 14.3125 11.9062 14.5625 11.4062 14.7812ZM15.5 14.625C15.5 14.625 15.3438 14.8125 14.3438 14.375C15.4375 14.2812 15.625 14.5312 15.5 14.625Z"
                        fill="#D20000"
                      />
                    </svg>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
