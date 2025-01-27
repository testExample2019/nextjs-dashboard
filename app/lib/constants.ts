import {
  DealBorrowerActions,
  DealsActions,
  DealViews,
  PaymentActions,
} from "@/app/lib/definitions";
import { getDefaultPath } from "@/app/lib/utils";

export const ViewDropdownItems = [
  { id: 1, label: `${DealViews.Lender} View`, actionType: DealViews.Lender },
  {
    id: 2,
    label: `${DealViews.Borrower} View`,
    actionType: DealViews.Borrower,
  },
];

export const dealsDropdownItems = [
  { id: 1, label: "Import Deal", actionType: DealsActions.Import },
  { id: 2, label: "Add New Deal", actionType: DealsActions.Add },
  { id: 3, label: "Use Template", active: true, actionType: DealsActions.Use },
];

export const dealBorrowerDropdownItems = [
  {
    id: 1,
    label: "Drawdown",
    active: true,
    actionType: DealBorrowerActions.Drawdown,
  },
  { id: 2, label: "Prepayment", actionType: DealBorrowerActions.Prepayment },
];

export const LenderPaymentOptionsDropdownItems = [
  {
    id: 1,
    label: "View Transaction",
    actionType: PaymentActions.ViewTransaction,
  },
  {
    id: 2,
    label: "View Notice",
    actionType: PaymentActions.ViewNotice,
  },
  { id: 3, label: "Confirm Bank Account", actionType: PaymentActions.Confirm },
  { id: 4, label: "Contact", actionType: PaymentActions.Contact },
];
export const BorrowerPaymentOptionsDropdownItems = [
  {
    id: 1,
    label: "View Transaction",
    actionType: PaymentActions.ViewTransaction,
  },
  {
    id: 2,
    label: "View Invoice",
    actionType: PaymentActions.ViewInvoice,
  },
  { id: 3, label: "Make Payment", actionType: PaymentActions.Confirm },
  { id: 4, label: "Contact Lender", actionType: PaymentActions.Contact },
];

export const today = new Date(2025, 0, 24); // Month is 0-indexed: 11 = December
export const defaultDashboardPath = getDefaultPath("dashboard");
export const defaultTransactionsPath = getDefaultPath("transactions");
export const defaultInstrumentsPath = getDefaultPath("instruments");
export const defaultDocumentsPath = getDefaultPath("documents");
export const defaultDashboardBorrowerPath = getDefaultPath(
  "dashboard",
  DealViews.Borrower,
);
