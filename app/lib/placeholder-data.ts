import { DealType } from "@/app/lib/definitions";

const deals: DealType[] = [
  {
    id: "1",
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
            id: "credit-1",
            dueDate: "2024-05-18",
            status: "10 days overdue",
            prepaymentFee: "$1,601.94",
            total: "$1,901.94",
            transactionId: "transaction-1",
          },
          {
            id: "credit-2",
            dueDate: "2024-01-24",
            status: "in 10 days",
            interest: "$6,997.51",
            principalRepayment: "$50,000.00",
            total: "$56,978.00",
            transactionId: "transaction-2",
          },
        ],
        debits: [
          {
            id: "debit-1",
            dueDate: "2024-01-18",
            status: "5 days overdue",
            prepaymentFee: "$1,601.94",
            total: "$1,601.94",
            transactionId: "transaction-1",
          },
          {
            id: "debit-2",
            dueDate: "2024-10-22",
            status: "in 15 days",
            interest: "$16,997.51",
            principalRepayment: "$56,000.00",
            total: "$76,978.00",
            transactionId: "transaction-2",
          },
          {
            id: "debit-3",
            dueDate: "2024-10-24",
            status: "in 2 days",
            interest: "$16,997.51",
            principalRepayment: "$76,000.00",
            total: "$76,978.00",
            transactionId: "transaction-3",
          },
        ],
      },
      positions: [
        {
          id: "position-1",
          deal: "Soultrain",
          instrument: "Soultrain Revolver",
          borrower: "Soultrain",
          ccy: "USD",
          counterparty: "Bruno 1",
          role: "LENDER 1 ",
          committed: "$100,000,000.00",
          funded: "$0.0",
          unfunded: "$100,000,000.00",
          docs: "$0.0",
        },
        {
          id: "position-2",
          deal: "Soultrain",
          instrument: "Soultrain Revolver",
          borrower: "Soultrain",
          ccy: "USD",
          counterparty: "Bruno 2",
          role: "LENDER 2",
          committed: "$200,000,000.00",
          funded: "$0.0",
          unfunded: "$200,000,000.00",
          docs: "$0.0",
        },
      ],
      transactions: [
        {
          id: "transaction-1",
          deal: "Soultrain",
          instrument: "Soultrain Revolver",
          borrower: "Soultrain",
          ccy: "USD",
          counterparty: "Bruno 1",
          role: "LENDER 1 ",
          committed: "$100,000,000.00",
          funded: "$0.0",
          unfunded: "$100,000,000.00",
          docs: "$0.0",
        },
        {
          id: "transaction-2",
          deal: "Soultrain",
          instrument: "Soultrain Revolver",
          borrower: "Soultrain",
          ccy: "USD",
          counterparty: "Bruno 2",
          role: "LENDER 2",
          committed: "$200,000,000.00",
          funded: "$0.0",
          unfunded: "$200,000,000.00",
          docs: "$0.0",
        },
        {
          id: "transaction-3",
          deal: "Soultrain",
          instrument: "Soultrain Revolver",
          borrower: "Soultrain",
          ccy: "USD",
          counterparty: "Bruno 3",
          role: "LENDER 3",
          committed: "$90,000,000.00",
          funded: "$0.0",
          unfunded: "$90,000,000.00",
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
            id: "credit-33",
            dueDate: "2024-01-22",
            status: "2 days overdue",
            prepaymentFee: "$1,500.00",
            total: "$1,500.00",
            transactionId: "transaction-3",
          },
        ],
        debits: [
          {
            id: "debit-32",
            dueDate: "2024-01-18",
            status: "5 days overdue",
            prepaymentFee: "$1,601.94",
            total: "$1,601.94",
            transactionId: "transaction-3",
          },
          {
            id: "debit-4",
            dueDate: "2024-01-24",
            status: "in 10 days",
            interest: "$6,997.51",
            principalRepayment: "$50,000.00",
            total: "$56,978.00",
            transactionId: "transaction-4",
          },
        ],
      },
      positions: [
        {
          id: "position-3",
          deal: "Soultrain",
          instrument: "Soultrain Revolver",
          borrower: "Soultrain",
          ccy: "USD",
          counterparty: "Bruno 1",
          role: "LENDER 1",
          committed: "$200,000,000.00",
          funded: "$0.0",
          unfunded: "$200,000,000.00",
          docs: "$0.0",
        },
        {
          id: "position-4",
          deal: "Soultrain",
          instrument: "Soultrain Revolver",
          borrower: "Soultrain",
          ccy: "USD",
          counterparty: "Bruno 2",
          role: "LENDER 2",
          committed: "$300,000,000.00",
          funded: "$0.0",
          unfunded: "$300,000,000.00",
          docs: "$0.0",
        },
      ],
      transactions: [
        {
          id: "transaction-3",
          deal: "Soultrain",
          instrument: "Soultrain Revolver",
          borrower: "Soultrain",
          ccy: "USD",
          counterparty: "Bruno 1",
          role: "LENDER 1",
          committed: "$200,000,000.00",
          funded: "$0.0",
          unfunded: "$200,000,000.00",
          docs: "$0.0",
        },
        {
          id: "transaction-4",
          deal: "Soultrain",
          instrument: "Soultrain Revolver",
          borrower: "Soultrain",
          ccy: "USD",
          counterparty: "Bruno 2",
          role: "LENDER 2",
          committed: "$300,000,000.00",
          funded: "$0.0",
          unfunded: "$300,000,000.00",
          docs: "$0.0",
        },
      ],
      asOfDate: "2024-02-04",
    },
  },
  {
    id: "2",
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
            id: "credit-43",
            dueDate: "2024-01-20",
            status: "3 days overdue",
            prepaymentFee: "$2,000.00",
            total: "$2,000.00",
            transactionId: "transaction-5",
          },
        ],
        debits: [
          {
            id: "debit-52",
            dueDate: "2024-01-18",
            status: "5 days overdue",
            prepaymentFee: "$1,601.94",
            total: "$1,601.94",
            transactionId: "transaction-5",
          },
          {
            id: "debit-6",
            dueDate: "2024-01-24",
            status: "in 10 days",
            interest: "$6,997.51",
            principalRepayment: "$50,000.00",
            total: "$56,978.00",
            transactionId: "transaction-6",
          },
        ],
      },
      positions: [
        {
          id: "position-5",
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
        {
          id: "position-7",
          deal: "ABC Capital",
          instrument: "Capital Loan",
          borrower: "ABC Corp",
          ccy: "USD",
          counterparty: "Michael",
          role: "LENDER",
          committed: "$180,000,000.00",
          funded: "$0.0",
          unfunded: "$180,000,000.00",
          docs: "$0.0",
        },
      ],
      transactions: [
        {
          id: "transaction-5",
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
        {
          id: "transaction-6",
          deal: "ABC Capital",
          instrument: "Capital Loan",
          borrower: "ABC Corp",
          ccy: "USD",
          counterparty: "Michael",
          role: "LENDER",
          committed: "$180,000,000.00",
          funded: "$0.0",
          unfunded: "$180,000,000.00",
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
            id: "credit-6",
            dueDate: "2024-01-25",
            status: "in 7 days",
            interest: "$6,500.00",
            total: "$6,500.00",
            transactionId: "transaction-7",
          },
        ],
        debits: [
          {
            id: "debit-7",
            dueDate: "2024-01-18",
            status: "5 days overdue",
            prepaymentFee: "$1,601.94",
            total: "$1,601.94",
            transactionId: "transaction-7",
          },
          {
            id: "debit-8",
            dueDate: "2024-01-24",
            status: "in 10 days",
            interest: "$6,997.51",
            principalRepayment: "$50,000.00",
            total: "$56,978.00",
            transactionId: "transaction-8",
          },
        ],
      },
      positions: [
        {
          id: "position-6",
          deal: "ABC Capital",
          instrument: "Capital Loan",
          borrower: "ABC Corp",
          ccy: "USD",
          counterparty: "Michael",
          role: "LENDER",
          committed: "$180,000,000.00",
          funded: "$0.0",
          unfunded: "$180,000,000.00",
          docs: "$0.0",
        },
        {
          id: "position-8",
          deal: "ABC Capital",
          instrument: "Capital Loan",
          borrower: "ABC Corp",
          ccy: "USD",
          counterparty: "Michael",
          role: "LENDER",
          committed: "$190,000,000.00",
          funded: "$0.0",
          unfunded: "$190,000,000.00",
          docs: "$0.0",
        },
      ],
      transactions: [
        {
          id: "transaction-7",
          deal: "ABC Capital",
          instrument: "Capital Loan",
          borrower: "ABC Corp",
          ccy: "USD",
          counterparty: "Michael",
          role: "LENDER",
          committed: "$180,000,000.00",
          funded: "$0.0",
          unfunded: "$180,000,000.00",
          docs: "$0.0",
        },
        {
          id: "transaction-8",
          deal: "ABC Capital",
          instrument: "Capital Loan",
          borrower: "ABC Corp",
          ccy: "USD",
          counterparty: "Michael",
          role: "LENDER",
          committed: "$190,000,000.00",
          funded: "$0.0",
          unfunded: "$190,000,000.00",
          docs: "$0.0",
        },
      ],
      asOfDate: "2024-02-04",
    },
  },
];
export { deals };
