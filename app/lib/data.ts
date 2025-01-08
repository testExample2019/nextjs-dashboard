import { deals } from "@/app/lib/placeholder-data";
import {
  DealNavType,
  DealsActions,
  DealViews,
  PaymentActions,
  PaymentApproveActions,
} from "@/app/lib/definitions";

const handleDealView = (dealName: string, dealView: string) => {
  return dealView === DealViews.Lender
    ? deals.filter((deal) => deal.name.toLowerCase() === dealName)[0]?.lender
    : deals.filter((deal) => deal.name.toLowerCase() === dealName)[0]?.borrower;
};

export async function fetchDealsNavData(): Promise<DealNavType[]> {
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

export async function fetchTransactionById(transactionId: string) {
  try {
    return deals
      .flatMap((deal) => [
        ...(deal.lender?.transactions || []),
        ...(deal.borrower?.transactions || []),
      ])
      .find((txn) => txn.id === transactionId);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch TransactionId data.");
  }
}

export async function fetchPositionById(positionId: string) {
  try {
    return deals
      .flatMap((deal) => [
        ...(deal.lender?.positions || []),
        ...(deal.borrower?.positions || []),
      ])
      .find((txn) => txn.id === positionId);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Positions data.");
  }
}

export const dealsDropdownItems = [
  { id: 1, label: "Import Deal", actionType: DealsActions.Import },
  { id: 2, label: "Add New Deal", actionType: DealsActions.Add },
  { id: 3, label: "Use Template", actionType: DealsActions.Use },
];

export const PaymentOptionsDropdownItems = [
  { id: 1, label: "View Notice", actionType: PaymentActions.View },
  { id: 2, label: "Confirm Bank Account", actionType: PaymentActions.Confirm },
  { id: 3, label: "Contact", actionType: PaymentActions.Contact },
];

export const PaymentApproveDropdownItems = [
  {
    id: 1,
    label: "Approve transaction",
    actionType: PaymentApproveActions.Approve,
  },
  {
    id: 2,
    label: "Approve and Pay",
    actionType: PaymentApproveActions.ApproveAndPay,
  },
  { id: 3, label: "Reject", actionType: PaymentApproveActions.Reject },
];
