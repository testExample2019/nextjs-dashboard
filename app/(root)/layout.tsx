import React from "react";
import NavBar from "@/app/ui/components/nav-bar";

export default function PagesLayout(props: {
  children: React.ReactNode;
  drawer: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col h-screen max-w-screen-2xl m-auto">
        <NavBar />
        <main>{props.children}</main>
      </div>
      {props.drawer}
    </>
  );
}
