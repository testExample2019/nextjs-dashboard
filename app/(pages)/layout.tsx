import React from "react";

export default function PagesLayout(props: {
  children: React.ReactNode;
  drawer: React.ReactNode;
}) {
  return (
    <>
      {props.children}
      {props.drawer}
    </>
  );
}
