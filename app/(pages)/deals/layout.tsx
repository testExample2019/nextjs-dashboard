import React from "react";

export default function PagesLayout(props: {
  children: React.ReactNode;
  sidenav: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-72">{props.sidenav}</div>
        <div className={"w-full overflow-hidden"}>{props.children}</div>
      </div>
    </>
  );
}
