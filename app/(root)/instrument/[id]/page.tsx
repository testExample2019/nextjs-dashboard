import React from "react";
import { fetchInstrumentById } from "@/app/lib/data";
import InstrumentView from "@/app/ui/deals/instruments/instrument-view";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const instrument = await fetchInstrumentById(id);
  return <InstrumentView instrument={instrument} />;
};

export default Page;
