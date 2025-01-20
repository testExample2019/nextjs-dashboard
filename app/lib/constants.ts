import {
  DealsActions,
  DealViews,
  PaymentActions,
  PaymentApproveActions,
} from "@/app/lib/definitions";
import { deals } from "@/app/lib/placeholder-data";

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
  { id: 3, label: "Use Template", actionType: DealsActions.Use },
];

export const LenderPaymentOptionsDropdownItems = [
  {
    id: 1,
    label: "View Transaction",
    actionType: PaymentActions.ViewTransaction,
  },
  { id: 2, label: "View Notice", actionType: PaymentActions.ViewNotice },
  { id: 3, label: "Confirm Bank Account", actionType: PaymentActions.Confirm },
  { id: 4, label: "Contact", actionType: PaymentActions.Contact },
];
export const BorrowerPaymentOptionsDropdownItems = [
  {
    id: 1,
    label: "View Transaction",
    actionType: PaymentActions.ViewTransaction,
  },
  { id: 2, label: "View Notice", actionType: PaymentActions.ViewNotice },
  { id: 3, label: "Make Payment", actionType: PaymentActions.Confirm },
  { id: 4, label: "Contact Lender", actionType: PaymentActions.Contact },
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

export const today = new Date(2025, 0, 24); // Month is 0-indexed: 11 = December
export const defaultDashboardPath = `/deals/dashboard/${deals[0].name.toLowerCase()}/lender/`;
