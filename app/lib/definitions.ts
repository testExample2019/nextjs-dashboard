export type Deal = {
  id: number | string;
  name: string;
  totalCommitment: string;
  funded: string;
  unfunded: string;
  lender: DealDetails;
  borrower: DealDetails;
};

export type DealNav = Omit<Deal, "lender" | "borrower">;

type DealDetails = {
  covenantsTracking: CovenantMetric[];
  upcomingPayments: UpcomingPayments;
  positions: Position[];
  asOfDate: string;
};

export type CovenantMetric = {
  title: string;
  value: number;
  change: string;
  status: "Passed" | "Failed";
  prevPeriodValue: number | string;
  minimum?: number;
  maximum?: number;
};

type UpcomingPayments = {
  credits: Payment[];
};

type Payment = {
  dueDate: string;
  status: string;
  prepaymentFee?: string;
  interest?: string;
  principalRepayment?: string;
  total: string;
};

type Position = {
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
