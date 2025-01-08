import { DealsActions, PaymentActions, PaymentApproveActions } from "@/app/lib/definitions";

export const dealsDropdownItems = [
  { id: 1, label: "Import Deal", actionType: DealsActions.Import },
  { id: 2, label: "Add New Deal", actionType: DealsActions.Add },
  { id: 3, label: "Use Template", actionType: DealsActions.Use },
];

export const PaymentOptionsDropdownItems = [
  { id: 1, label: "View Notice", actionType: PaymentActions.ViewNotice },
  {
    id: 2,
    label: "View Transaction",
    actionType: PaymentActions.ViewTransaction,
  },
  { id: 3, label: "Confirm Bank Account", actionType: PaymentActions.Confirm },
  { id: 4, label: "Contact", actionType: PaymentActions.Contact },
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
