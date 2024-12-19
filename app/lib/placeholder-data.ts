import { DealType } from "@/app/lib/definitions";

const deals: DealType[] = [
  {
    id: 1,
    name: "Soultrain",
    totalCommitment: "$2,000,000",
    funded: "A$540,000",
    unfunded: "$1,460",
    lender: {
      covenantsTracking: [
        {
          title: "Quick Ratio",
          value: 6.68,
          change: "+12.5%",
          status: "Passed",
          prevPeriodValue: "Min 5.00",
        },
        {
          title: "Debt-to-EBITDA",
          value: 2.51,
          change: "-10.2%",
          status: "Failed",
          prevPeriodValue: "Max 2.50",
        },
        {
          title: "Fixed Charge Coverage Ratio",
          value: 6.68,
          change: "+12.5%",
          status: "Passed",
          prevPeriodValue: "Min 5.00",
        },
      ],
      upcomingPayments: {
        credits: [
          {
            dueDate: "2024-01-18",
            status: "5 days overdue",
            prepaymentFee: "$1,601.94",
            total: "$1,601.94",
          },
          {
            dueDate: "2024-01-24",
            status: "in 10 days",
            interest: "$6,997.51",
            principalRepayment: "$50,000.00",
            total: "$56,978.00",
          },
        ],
        debits: [
          {
            dueDate: "2024-01-18",
            status: "5 days overdue",
            prepaymentFee: "$1,601.94",
            total: "$1,601.94",
          },
          {
            dueDate: "2024-01-24",
            status: "in 10 days",
            interest: "$6,997.51",
            principalRepayment: "$50,000.00",
            total: "$56,978.00",
          },
        ],
      },
      positions: [
        {
          deal: "Soultrain",
          instrument: "Soultrain Revolver",
          borrower: "Soultrain",
          ccy: "USD",
          counterparty: "Bruno",
          role: "LENDER",
          committed: "$100,000,000.00",
          funded: "$0.0",
          unfunded: "$100,000,000.00",
          docs: "$0.0",
        },
      ],
      asOfDate: "2024-02-04",
    },
    borrower: {
      covenantsTracking: [
        {
          title: "Quick Ratio",
          value: 6.5,
          change: "-10.0%",
          status: "Failed",
          prevPeriodValue: "Min 5.00",
        },
        {
          title: "Debt-to-EBITDA",
          value: 2.8,
          change: "-8.0%",
          status: "Failed",
          prevPeriodValue: "Max 2.50",
        },
        {
          title: "Fixed Charge Coverage Ratio",
          value: 6.4,
          change: "+11.0%",
          status: "Passed",
          prevPeriodValue: "Min 5.00",
        },
      ],
      upcomingPayments: {
        credits: [
          {
            dueDate: "2024-01-22",
            status: "2 days overdue",
            prepaymentFee: "$1,500.00",
            total: "$1,500.00",
          },
        ],
        debits: [
          {
            dueDate: "2024-01-18",
            status: "5 days overdue",
            prepaymentFee: "$1,601.94",
            total: "$1,601.94",
          },
          {
            dueDate: "2024-01-24",
            status: "in 10 days",
            interest: "$6,997.51",
            principalRepayment: "$50,000.00",
            total: "$56,978.00",
          },
        ],
      },
      positions: [],
      asOfDate: "2024-02-04",
    },
  },
  {
    id: 2,
    name: "abcCapital",
    totalCommitment: "$2,500,000",
    funded: "A$680,000",
    unfunded: "$1,820",
    lender: {
      covenantsTracking: [
        {
          title: "Quick Ratio",
          value: 5.5,
          change: "+10.0%",
          status: "Passed",
          prevPeriodValue: "Min 5.00",
        },
        {
          title: "Debt-to-EBITDA",
          value: 3.1,
          change: "-8.0%",
          status: "Failed",
          prevPeriodValue: "Max 2.50",
        },
        {
          title: "Fixed Charge Coverage Ratio",
          value: 5.75,
          change: "+8.5%",
          status: "Passed",
          prevPeriodValue: "Min 5.00",
        },
      ],
      upcomingPayments: {
        credits: [
          {
            dueDate: "2024-01-20",
            status: "3 days overdue",
            prepaymentFee: "$2,000.00",
            total: "$2,000.00",
          },
          {
            dueDate: "2024-01-28",
            status: "in 14 days",
            interest: "$7,200.00",
            principalRepayment: "$60,000.00",
            total: "$67,200.00",
          },
        ],
        debits: [
          {
            dueDate: "2024-01-18",
            status: "5 days overdue",
            prepaymentFee: "$1,601.94",
            total: "$1,601.94",
          },
          {
            dueDate: "2024-01-24",
            status: "in 10 days",
            interest: "$6,997.51",
            principalRepayment: "$50,000.00",
            total: "$56,978.00",
          },
        ],
      },
      positions: [
        {
          deal: "ABC Capital",
          instrument: "Capital Loan",
          borrower: "ABC Corp",
          ccy: "USD",
          counterparty: "Michael",
          role: "LENDER",
          committed: "$150,000,000.00",
          funded: "$0.0",
          unfunded: "$150,000,000.00",
          docs: "$0.0",
        },
      ],
      asOfDate: "2024-02-04",
    },
    borrower: {
      covenantsTracking: [
        {
          title: "Quick Ratio",
          value: 5.2,
          change: "+9.0%",
          status: "Passed",
          prevPeriodValue: "Min 5.00",
        },
        {
          title: "Debt-to-EBITDA",
          value: 3.3,
          change: "-7.0%",
          status: "Failed",
          prevPeriodValue: "Max 2.50",
        },
        {
          title: "Fixed Charge Coverage Ratio",
          value: 5.6,
          change: "-8.0%",
          status: "Failed",
          prevPeriodValue: "Min 5.00",
        },
      ],
      upcomingPayments: {
        credits: [
          {
            dueDate: "2024-01-25",
            status: "in 7 days",
            interest: "$6,500.00",
            total: "$6,500.00",
          },
        ],
        debits: [
          {
            dueDate: "2024-01-18",
            status: "5 days overdue",
            prepaymentFee: "$1,601.94",
            total: "$1,601.94",
          },
          {
            dueDate: "2024-01-24",
            status: "in 10 days",
            interest: "$6,997.51",
            principalRepayment: "$50,000.00",
            total: "$56,978.00",
          },
        ],
      },
      positions: [],
      asOfDate: "2024-02-04",
    },
  },
];
export { deals };
