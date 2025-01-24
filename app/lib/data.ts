import { deals } from "@/app/lib/placeholder-data";
import { DealNavType, DealViews } from "@/app/lib/definitions";

const handleDealView = (dealName: string, dealView: DealViews) => {
  return dealView === DealViews.Lender
    ? deals.filter((deal) => deal.slug === dealName)[0]?.lender
    : deals.filter((deal) => deal.slug === dealName)[0]?.borrower;
};

export async function fetchDealsNavData(): Promise<DealNavType[]> {
  try {
    return deals.map((deal) => ({
      id: deal.id,
      slug: deal.slug,
      displayName: deal.displayName,
      title: deal.slug,
      totalCommitment: deal.totalCommitment,
      funded: deal.funded,
      unfunded: deal.unfunded,
      stepId: deal.stepId,
    }));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch nav data.");
  }
}

export async function fetchPositions(dealName: string, dealView: DealViews) {
  try {
    return handleDealView(dealName, dealView)?.positions;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Positions data.");
  }
}
export async function fetchDocuments(dealName: string, dealView: DealViews) {
  try {
    return handleDealView(dealName, dealView)?.documents;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Documents data.");
  }
}
export async function fetchInstruments(dealName: string, dealView: DealViews) {
  try {
    return handleDealView(dealName, dealView)?.instruments;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Instruments data.");
  }
}

export async function fetchTransactions(dealName: string, dealView: DealViews) {
  try {
    return handleDealView(dealName, dealView)?.transactions;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Transactions data.");
  }
}

export async function fetchCovenantsTrackingData(
  dealName: string,
  dealView: DealViews,
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
  dealView: DealViews,
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

export async function fetchDocumentById(documentId: string) {
  try {
    return deals
      .flatMap((deal) => [
        ...(deal.lender?.documents || []),
        ...(deal.borrower?.documents || []),
      ])
      .find((txn) => txn.id === documentId);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Documents data.");
  }
}

export async function fetchInstrumentById(instrumentId: string) {
  try {
    return deals
      .flatMap((deal) => [
        ...(deal.lender?.instruments || []),
        ...(deal.borrower?.instruments || []),
      ])
      .find((txn) => txn.id === instrumentId);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Instruments data.");
  }
}
