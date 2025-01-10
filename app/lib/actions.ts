"use server";

import { DealsActions } from "@/app/lib/definitions";
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
