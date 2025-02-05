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
  {
    id: 1,
    label: "Import Deal",
    disabled: true,
    actionType: DealsActions.Import,
  },
  {
    id: 2,
    label: "Add New Deal",
    disabled: true,
    actionType: DealsActions.Add,
  },
  {
    id: 3,
    label: "Use Template",
    disabled: false,
    actionType: DealsActions.Use,
  },
];

export const dealBorrowerDropdownItems = [
  {
    id: 1,
    label: "Drawdown",
    disabled: false,
    actionType: DealBorrowerActions.Drawdown,
  },
  {
    id: 2,
    label: "Prepayment",
    disabled: true,
    actionType: DealBorrowerActions.Prepayment,
  },
];

export const LenderPaymentOptionsDropdownItems = [
  {
    id: 1,
    disabled: true,
    label: "View Transaction",
    actionType: PaymentActions.ViewTransaction,
  },
  {
    id: 2,
    label: "View Notice",
    disabled: true,
    actionType: PaymentActions.ViewNotice,
  },
  {
    id: 3,
    label: "Confirm Bank Account",
    disabled: true,
    actionType: PaymentActions.Confirm,
  },
  {
    id: 4,
    label: "Contact",
    disabled: true,
    actionType: PaymentActions.Contact,
  },
];
export const BorrowerPaymentOptionsDropdownItems = [
  {
    id: 1,
    disabled: true,
    label: "View Transaction",
    actionType: PaymentActions.ViewTransaction,
  },
  {
    id: 2,
    disabled: true,
    label: "View Invoice",
    actionType: PaymentActions.ViewInvoice,
  },
  {
    id: 3,
    disabled: true,
    label: "Make Payment",
    actionType: PaymentActions.Confirm,
  },
  {
    id: 4,
    disabled: true,
    label: "Contact Lender",
    actionType: PaymentActions.Contact,
  },
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

export const startPagePath = "/template";
export const setupPagePath = "/template/setup";
export const transactionDrawerPath = "/transaction/transaction-3";
export const transactionDrawdownRequestDrawerPath =
  "/transaction/drawdown-request";
export const transactionRequestDrawerPath = "/transaction/transaction-request";
export const instrumentDrawerPath = "/instrument/instrument-1";
export const documentNoticeDrawerPath = "/document/document-notice";
export const documentInvoiceDrawerPath = "/document/document-invoice";
