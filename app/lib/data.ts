import { deals } from "@/app/lib/placeholder-data";
import { DealsActions, DealViews } from "@/app/lib/definitions";

export async function fetchDeals() {
  try {
    return deals;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch deals data.");
  }
}

export async function fetchDealsLinks() {
  try {
    return deals;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch deals data.");
  }
}

export async function fetchDealsNavData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    return deals.map((deal) => ({
      title: deal.name || "Untitled",
      totalCommitment: deal.totalCommitment || "N/A",
      funded: deal.funded || "N/A",
      unfunded: deal.unfunded || "N/A",
    }));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch nav data.");
  }
}

export async function fetchCovenantsTrackingData(name: string, view: string) {
  try {
    return view === DealViews.Lender
      ? deals.filter((deal) => deal.name.toLowerCase() === name)[0]?.lender
          .covenantsTracking
      : deals.filter((deal) => deal.name.toLowerCase() === name)[0]?.borrower
          .covenantsTracking;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch CovenantsTracking data.");
  }
}

export const dealsDropdownItems = [
  { id: 1, label: "Import Deal", actionType: DealsActions.Import },
  { id: 2, label: "Add New Deal", actionType: DealsActions.Add },
  { id: 3, label: "Use Template", actionType: DealsActions.Use },
];
