import React from "react";
import { fetchPositionById } from "@/app/lib/data";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const position = await fetchPositionById(id);
  return <></>;
};

export default Page;
