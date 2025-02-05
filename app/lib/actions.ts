"use server";

import { DealBorrowerActions, DealsActions } from "@/app/lib/definitions";
import { redirect } from "next/navigation";
import {
  startPagePath,
  transactionDrawdownRequestDrawerPath,
} from "@/app/lib/constants";

export async function handleDealDropdownAction(actionType: string) {
  switch (actionType) {
    case DealsActions.Import:
      console.log("Import Deal...");
      break;
    case DealsActions.Add:
      console.log("Add Deal...");
      break;
    case DealsActions.Use:
      redirect(startPagePath);
      break;
    default:
      console.log("Unknown action");
  }
}

export async function handleBorrowerDropdownAction(actionType: string) {
  switch (actionType) {
    case DealBorrowerActions.Drawdown:
      redirect(transactionDrawdownRequestDrawerPath);
      break;
    default:
      console.log("Unknown action");
  }
}
