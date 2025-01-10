export type DealType = {
  id: string;
  name: string;
  totalCommitment: string;
  funded: string;
  unfunded: string;
  lender: DealDetailsType;
  borrower: DealDetailsType;
};

export type DealNavType = Omit<DealType, "lender" | "borrower">;

type DealDetailsType = {
  covenantsTracking: CovenantMetricType[];
  upcomingPayments: UpcomingPaymentsType;
  positions: PositionsType[];
  transactions: TransactionType[];
  asOfDate: string;
};

export type CovenantMetricType = {
  title: string;
  value: number;
  change: string;
  status: "Passed" | "Failed";
  prevPeriodValue: number | string;
  minimum?: number;
  maximum?: number;
};

export type UpcomingPaymentsType = {
  credits: PaymentType[];
  debits: PaymentType[];
};

export type PaymentType = {
  id: string;
  dueDate: string;
  status: string;
  total: string;
  transactionId: string;
  prepaymentFee?: string;
  interest?: string;
  principalRepayment?: string;
  drawDownFee?: string;
  drawDown?: string;
};

export type TransactionType = {
  id: string;
  type: "Drawdown";
  deal: string;
  instrument: string;
  borrower: string;
  ccy: string;
  counterparty: string;
  role: string;
  committed: string;
  funded: string;
  unfunded: string;
  status: "Open" | "Reviewed" | "Pending" | "Not Paid";
};

export type PositionsType = {
  id: string;
  deal: string;
  instrument: string;
  borrower: string;
  ccy: string;
  counterparty: string;
  role: string;
  committed: string;
  funded: string;
  unfunded: string;
  docs: string;
};

export enum DealsActions {
  Import = "IMPORT",
  Add = "ADD",
  Use = "USE",
}

export enum PaymentActions {
  ViewNotice = "VIEW_NOTICE",
  ViewTransaction = "VIEW_TRANSACTION",
  Confirm = "CONFIRM",
  Contact = "CONTACT",
}

export enum PaymentApproveActions {
  Approve = "APPROVE",
  ApproveAndPay = "APPROVE_AND_PAY",
  Reject = "REJECT",
}

export enum DealViews {
  Lender = "lender",
  Borrower = "borrower",
}

export enum PaymentTypes {
  Debits = "debits",
  Credits = "credits",
}

export type DealParamsType = {
  dealName: string;
  dealView: string;
};
