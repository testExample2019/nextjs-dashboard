export type DealType = {
  id: string;
  slug: string;
  displayName: string;
  totalCommitment: string;
  funded: string;
  unfunded: string;
  lender: DealDetailsType;
  borrower: DealDetailsType;
  stepId?: string;
};

export type DealNavType = Omit<DealType, "lender" | "borrower">;

type DealDetailsType = {
  covenantsTracking: CovenantMetricType[];
  upcomingPayments: UpcomingPaymentsType;
  positions: PositionType[];
  transactions: TransactionType[];
  asOfDate: string;
  documents?: DocumentType[];
  instruments?: InstrumentType[];
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

type TransactionNestedType = Omit<
  TransactionType,
  "type" | "paymentType" | "role" | "transactionDetails" | "nestedRows"
>;

export type TransactionType = {
  id: string;
  transaction: "Drawdown" | "Interest Payment" | "Fee Payment";
  deal: string;
  instrument: string;
  customer: string;
  amount: string;
  paymentDate: string;
  status: "Pending" | "NotPaid" | "Paid" | "Scheduled";
  type: "Transaction" | "Transaction Request" | "Drawdown Request";
  paymentType: "Credit" | "Debit";
  role: "Lender" | "Borrower";
  transactionDetails: TransactionDetailsType;
  nestedRows?: TransactionNestedType[];
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
  stepId?: string;
  document: string;
  documentType: "Notice" | "Invoice" | string;
  subType: "Other" | "Final notice" | string;
  customer: string;
  transaction:
    | "Drawdown"
    | "Multiple Transactions"
    | "Interest Payment [Borrower]"
    | "Interest Payment [Lender]";
  documentDate: string;
  status: "Open" | "Reviewed" | "Pending" | "Published";
  documentDetails: {
    lastUpdated: string;
    type: string;
    subType: "Other" | "Final notice" | string;
    documentDate: string;
    fileType: string;
    status: string;
  };
  transactionDetails: {
    transactionDetailsList: {
      type: "Interest Payment";
      amount: string;
      tnxUpdated: string;
    }[];
    transactionInfo: {
      effectiveDate: string;
      paymentDate: string;
      amount: string;
    };
    rateInfo: RateInfoType;
    interestAmount?: InterestAmountType[];
    allocations?: AllocationType[];
  };
  nestedRows: DocumentNestedType[];
};

type DocumentNestedType = Omit<
  DocumentType,
  | "documentType"
  | "stepId"
  | "paymentType"
  | "documentDetails"
  | "transactionDetails"
  | "nestedRows"
>;

export type InstrumentType = {
  id: string;
  deal: string;
  instrument: string;
  type: string;
  subType: string;
  ccy: string;
  issueDate: string;
  maturityDate: string;
  createdDate: string;
  status: string;
  issueInfo: InstrumentIssueInfo;
  feeInfo: FeeInfoType;
  rateInfo: InstrumentRateInfo;
};

// Type for Issue Info
type InstrumentIssueInfo = {
  issuer: string | null;
  issueDate: string;
  expireDate: string | null;
  maturityDate: string;
};

type FeeInfoType = {
  feeType: string;
  appliesTo: string;
  rate: string;
  amount?: string;
  feeAmount?: string;
};

// Type for Rate Info
type InstrumentRateInfo = {
  rateType: string;
  index: string;
  accrualFrequency: string;
  adjSpread: string;
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

type RateInfoType = {
  type: "Fixed" | "Floating";
  dayCount: "ACT/360" | "ACT/365" | "30/360";
  pikOption: "Cash or PIK" | "Cash" | "PIK";
  includeAccrualEnd: "Yes" | "No";
  accrualStartDate: string;
  accrualEndDate: string;
};

type InterestAmountType = {
  date: string;
  rate: string;
  principal: string;
  amount: string;
};

type AllocationType = {
  role: "Borrower" | "Lender";
  counterparty: string;
  amount: string;
  share: string;
};

type TransactionDetailsType = {
  transactionInfo: {
    deal: string;
    counterparty: string;
    instrument: string;
    paymentDate: string;
    amount: string;
    effectiveDate?: string;
    commitment?: string;
    unfundedCommitment?: string;
  };
  rateInfo: RateInfoType;
  allocations: AllocationType[];
  bankAccount: {
    accountName: string;
    bank: string;
    BIC: string;
    ABA: string;
    IBAN: string;
    accountNumber: string;
    currency: string;
  };
  correspondingBankAccount?: {
    bank: string;
    BIC: string;
  };
  interestAmount?: InterestAmountType[];
  feeInfo?: FeeInfoType;
};

export type FacilityFeeType = {
  type: string;
  appliesTo: string;
  rate: string;
  flatAmount: string;
}

export enum DealsActions {
  Import = "IMPORT",
  Add = "ADD",
  Use = "USE",
}

export enum DealBorrowerActions {
  Drawdown = "DRAWDOWN",
  Prepayment = "PREPAYMENT",
}

export enum PaymentActions {
  ViewNotice = "VIEW_NOTICE",
  ViewInvoice = "VIEW_INVOICE",
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
export enum DealPages {
  Dashboard = "dashboard",
  Transactions = "transactions",
  Documents = "documents",
  Instruments = "instruments",
  Setup = "setup",
}

export enum PaymentTypes {
  Debits = "debits",
  Credits = "credits",
}

export type DealParamsType = {
  dealName: string;
  dealView: DealViews;
};
