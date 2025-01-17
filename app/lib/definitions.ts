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
  transaction: "Drawdown" | "Interest Payment" | "Fee Payment";
  deal: string;
  instrument: string;
  customer: string;
  paymentDate: string;
  amount: string;
  paymentType: "Credit" | "Debit";
  borrower: string;
  ccy: string;
  counterparty: string;
  role: "Lender" | "Borrower";
  committed: string;
  funded: string;
  unfunded: string;
  status: "Open" | "Reviewed" | "Pending" | "NotPaid" | "Paid" | "Scheduled";
  transactionDetails: TransactionDetailsType;
  nestedRows?: any;
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
  document: string;
  documentType: "Transaction" | "Customer" | "Invoice" | "Contract" | string;
  subType: "Other" | "Final notice" | string;
  deal: string;
  amount: string;
  customer: string;
  transaction:
    | "Drawdown"
    | "Multiple Transactions"
    | "Interest Payment [Borrower]"
    | "Interest Payment [Lender]";
  transactionDate: string;
  documentDate: string;
  fileType: string;
  status: "Open" | "Reviewed" | "Pending" | "Published";
  transactionDetails: TransactionDetailsType;
  nestedRows: any;
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

type TransactionDetailsType = {
  type: "Interest Payment" | "Drawdown" | string; // Transaction type
  amount: string; // Transaction amount with currency formatting
  txnUpdated: string; // Date and time the transaction was last updated
  transactionInfo: {
    effectiveDate: string; // Effective date (ISO format)
    paymentDate: string; // Payment date (ISO format)
    amount: string; // Transaction amount with currency formatting
  };
  rateInfo: {
    type: "Fixed" | "Floating"; // Type of rate
    dayCount: "ACT/360" | "ACT/365" | "30/360"; // Day count convention
    pikOption: "Cash or PIK" | "Cash" | "PIK"; // PIK (Payment-in-Kind) option
    includeAccrualEnd: "Yes" | "No"; // Whether to include accrual end
    accrualStartDate: string; // Accrual start date (ISO format)
    accrualEndDate: string; // Accrual end date (ISO format)
  };
  interestAmount: {
    date: string; // Date of the interest payment (ISO format)
    rate: string; // Rate percentage as a formatted string (e.g., "10.0000%")
    principal: string; // Principal amount with currency formatting
    amount: string; // Calculated interest amount with currency formatting
  }[];
  allocations: {
    role: "Borrower" | "Lender";
    counterparty: string;
    amount: string;
    share: string;
  }[];
  bankAccount: {
    accountName: string; // Name of the account (e.g., "Account USD")
    bank: string; // Name of the bank (e.g., "FirstCaribbean International")
    bic: string; // Bank Identifier Code (e.g., "09676")
    aba: string; // ABA Routing Number (e.g., "987654321")
    iban: string; // International Bank Account Number (e.g., "-")
    accountNumber: string; // Account Number (e.g., "6665554433")
    currency: string; // Currency code (e.g., "USD")
  };
  feeInfo?: {
    feeType: string; // Type of the fee (e.g., "Drawdown Fee")
    appliesTo: string; // What the fee applies to (e.g., "Drawdown Amount")
    rate: string; // Fee rate as a percentage (e.g., "0.1000%")
    feeAmount: string; // Fee amount with currency formatting (e.g., "100,000.00 USD")
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
