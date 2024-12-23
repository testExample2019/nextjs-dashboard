"use server";

import { DealsActions, PaymentActions } from "@/app/lib/definitions";

export async function handlePaymentDropdownClick(actionType: string) {
  switch (actionType) {
    case PaymentActions.View:
      console.log("Viewing Notice...");
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
