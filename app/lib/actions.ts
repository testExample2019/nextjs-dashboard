"use server";

export async function handlePaymentDropdownClick(actionType: string) {
  switch (actionType) {
    case "view":
      console.log("View Notice...");
      break;
    case "confirm":
      console.log("Confirm Bank Account...");
      break;
    case "contact":
      console.log("Contact borrower...");
      break;
    default:
      console.log("Unknown action");
  }
}

export async function handleDealDropdownAction(actionType: string) {
  switch (actionType) {
    case "import":
      console.log("Importing Deal...");
      break;
    case "add":
      console.log("Adding Deal...");
      break;
    case "use":
      console.log("Using Deal...");
      break;
    default:
      console.log("Unknown action");
  }
}
