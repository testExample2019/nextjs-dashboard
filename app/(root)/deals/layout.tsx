import React from "react";

export default function PagesLayout(props: {
  children: React.ReactNode;
  sidenav: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-full bg-white">
        <div className="w-full md:w-72">{props.sidenav}</div>
        <div className="w-full overflow-hidden">{props.children}</div>
      </div>
    </>
  );
}
