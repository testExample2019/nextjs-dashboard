"use server";

import { DealBorrowerActions, DealsActions } from "@/app/lib/definitions";
import { redirect } from "next/navigation";

export async function handleDealDropdownAction(actionType: string) {
  switch (actionType) {
    case DealsActions.Import:
      console.log("Import Deal...");
      break;
    case DealsActions.Add:
      console.log("Add Deal...");
      break;
    case DealsActions.Use:
      redirect("/template");
      break;
    default:
      console.log("Unknown action");
  }
}

export async function handleBorrowerDropdownAction(actionType: string) {
  switch (actionType) {
    case DealBorrowerActions.Drawdown:
      redirect("/transaction/drawdown-request");
      break;
    default:
      console.log("Unknown action");
  }
}
