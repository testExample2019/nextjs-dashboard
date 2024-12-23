import { deals } from "@/app/lib/placeholder-data";
import {
  DealNavType,
  DealsActions,
  DealViews,
  PaymentActions,
} from "@/app/lib/definitions";

const handleDealView = (dealName: string, dealView: string) => {
  return dealView === DealViews.Lender
    ? deals.filter((deal) => deal.name.toLowerCase() === dealName)[0]?.lender
    : deals.filter((deal) => deal.name.toLowerCase() === dealName)[0]?.borrower;
};
export async function fetchDeals() {
  try {
    return deals;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch deals data.");
  }
}

export async function fetchDealsNavData(): Promise<DealNavType[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    return deals.map((deal) => ({
      id: deal.id,
      name: deal.name,
      title: deal.name,
      totalCommitment: deal.totalCommitment,
      funded: deal.funded,
      unfunded: deal.unfunded,
    }));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch nav data.");
  }
}

export async function fetchPositions(dealName: string, dealView: string) {
  try {
    return handleDealView(dealName, dealView)?.positions;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Positions data.");
  }
}

export async function fetchTransactions(dealName: string, dealView: string) {
  try {
    return handleDealView(dealName, dealView)?.transactions;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Transactions data.");
  }
}

export async function fetchCovenantsTrackingData(
  dealName: string,
  dealView: string,
) {
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

export const PaymentDropdownItems = [
  { id: 1, label: "View Notice", actionType: PaymentActions.View },
  { id: 2, label: "Confirm Bank Account", actionType: PaymentActions.Confirm },
  { id: 3, label: "Contact", actionType: PaymentActions.Contact },
];
