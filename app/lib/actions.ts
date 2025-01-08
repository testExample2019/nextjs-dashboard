"use server";

import { DealsActions, PaymentApproveActions } from "@/app/lib/definitions";


export async function handleDealDropdownAction(actionType: string) {
  switch (actionType) {
    case DealsActions.Import:
      console.log("Import Deal...");
      break;
    case DealsActions.Add:
      console.log("Add Deal...");
      break;
    case DealsActions.Use:
      console.log("Use Deal...");
      break;
    default:
      console.log("Unknown action");
  }
}
