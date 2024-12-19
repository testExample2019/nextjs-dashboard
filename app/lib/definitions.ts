export type DealType = {
  id: number | string;
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

type PaymentType = {
  dueDate: string;
  status: string;
  prepaymentFee?: string;
  interest?: string;
  principalRepayment?: string;
  total: string;
};

type PositionType = {
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

export enum DealViews {
  Lender = "lender",
  Borrower = "borrower",
}
