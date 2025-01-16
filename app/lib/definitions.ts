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
  positions: PositionType[];
  transactions: TransactionType[];
  asOfDate: string;
  documents?: DocumentType[];
  notices?: NoticeType[];
};

export type CovenantMetricType = {
  title: string;
  value: number;
  change: string;
  changeValue: string;
  status: "Passed" | "Failed";
  prevPeriodValue: number | string;
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
  transactionId?: string;
  documentId?: string;
  noticeId?: string;
  prepaymentFee?: string;
  interest?: string;
  principalRepayment?: string;
  drawDownFee?: string;
  drawDown?: string;
};

export type TransactionType = {
  id: string;
  paymentType: "Credit" | "Debit";
  type: "Drawdown" | "Interest Payment";
  deal: string;
  instrument: string;
  borrower: string;
  ccy: string;
  counterparty: string;
  role: string;
  committed: string;
  funded: string;
  unfunded: string;
  status: "Open" | "Reviewed" | "Pending" | "NotPaid";
  amount: string;
  paymentDate: string;
  rateInfo: RateInfoType;
  interestAmount: InterestAmountType;
  allocations: AllocationType[];
};

type RateInfoType = {
  type: "Fixed" | "Floating"; // Type of rate
  dayCount: "ACT/360" | "ACT/365" | "30/360"; // Day count convention
  accrualStartDate: string; // Start date in ISO format (e.g., "2025-01-24")
  accrualEndDate: string; // End date in ISO format (e.g., "2025-02-24")
};

type InterestAmountType = {
  date: string; // Date in ISO format (e.g., "2025-01-24")
  rate: string; // Rate as a string (e.g., "8.5600")
  principal: string; // Principal amount as a string with currency (e.g., "$5,000,000.00")
  amount: string; // Interest amount as a string with currency (e.g., "$36,855.56")
};

type AllocationType = {
  role: "Borrower" | "Lender";
  counterparty: string;
  amount: string; // Formatted string (e.g., "(849,315.07)")
  share: string; // Formatted percentage (e.g., "100.00%")
};

export type PositionType = {
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

export type DocumentType = {
  id: string;
  documentName: string;
  documentType: "Transaction" | "Customer" | "Invoice" | "Contract" | string;
  documentSubType: "Other" | "Final notice" | string;
  deal: string;
  amount: string;
  transaction: "Drawdown";
  transactionDate: string;
  documentDate: string;
  fileType: string;
  status: "Open" | "Reviewed" | "Pending" | "Published";
};

export type NoticeType = {
  id: string;
  name: string;
  type: "Transaction" | "Customer" | "Invoice" | "Contract" | string;
  subType: "Other" | "Final notice" | string;
  date: string;
  lastUpdate: string;
  status: "Sent" | "Published";
};

type TransactionDetails = {
  type: string;
  amount: {
    value: number;
    currency: string;
  };
  txnUpdated: string;
  info: {
    effectiveDate: string;
    paymentDate: string;
    commitment: {
      amount: number;
      currency: string;
    };
    unfundedCommitment: {
      amount: number;
      currency: string;
    };
    amount: {
      value: number;
      currency: string;
    };
  };
  feeInfo: {
    lastUpdated: string | null;
    notes: string;
  };
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
  dealView: DealViews;
};
