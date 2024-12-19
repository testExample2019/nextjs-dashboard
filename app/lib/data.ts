import { deals } from "@/app/lib/placeholder-data";
import { DealNavType, DealsActions, DealViews } from "@/app/lib/definitions";

const handleDealView = (dealName: string, dealView: string) => {
  return dealView === DealViews.Lender
    ? deals.filter((deal) => deal.name.toLowerCase() === dealName)[0]?.lender
    : deals.filter((deal) => deal.name.toLowerCase() === dealName)[0]?.borrower;
};

export async function fetchDealsNavData(): Promise<DealNavType[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    return deals.map((deal) => ({
      id: deal.id || "0",
      name: deal.name || "N/A",
      title: deal.name || "N/A",
      totalCommitment: deal.totalCommitment || "N/A",
      funded: deal.funded || "N/A",
      unfunded: deal.unfunded || "N/A",
    }));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch nav data.");
  }
}

export async function fetchCovenantsTrackingData(
  dealName: string,
  dealView: string,
) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    return handleDealView(dealName, dealView)?.covenantsTracking;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch CovenantsTracking data.");
  }
}

export async function fetchUpcomingPaymentsData(
  dealName: string,
  dealView: string,
) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    return handleDealView(dealName, dealView)?.upcomingPayments;
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
