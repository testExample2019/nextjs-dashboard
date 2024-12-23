"use server";

import { DealsActions, PaymentActions } from "@/app/lib/definitions";
import { redirect } from "next/navigation";

export async function handlePaymentDropdownClick(
  actionType: string,
  redirectTo?: string | undefined,
) {
  switch (actionType) {
    case PaymentActions.View:
      redirectTo && redirect(redirectTo);
      break;
    case PaymentActions.Confirm:
      console.log("Confirm Bank Account...");
      break;
    case PaymentActions.Contact:
      console.log("Contact borrower...");
      break;
    default:
      console.log("Unknown action");
  }
}

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
