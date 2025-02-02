import React from "react";
import NavBar from "@/app/ui/components/nav-bar";

export default function PagesLayout(props: {
  children: React.ReactNode;
  drawer: React.ReactNode;
}) {
  return (
    <>
      <div
        id={"tour1-step6"}
        className="flex flex-col h-screen max-w-(--breakpoint-2xl) m-auto"
      >
        <NavBar />
        <main className="h-full">{props.children}</main>
      </div>
      {props.drawer}
    </>
  );
}
