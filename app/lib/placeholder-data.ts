import {
  DealType,
  DocumentType,
  InstrumentType,
  TransactionType,
} from "@/app/lib/definitions";

export const transactionsData: TransactionType[] = [
  {
    id: "transaction-request",
    type: "Transaction Request",
    paymentType: "Credit",
    transaction: "Drawdown",
    deal: "Soultrain",
    instrument: "Soultrain Revolver",
    customer: "Soultrain Music Awards",
    paymentDate: "2024-01-24",
    amount: "$5,000,000.00",
    role: "Lender",
    status: "Pending",
    transactionDetails: {
      transactionInfo: {
        deal: "Soultrain",
        counterparty: "Soultrain Music Awards",
        instrument: "Soultrain Revolver",
        paymentDate: "2024-01-24",
        commitment: "$200,000,000.00",
        unfundedCommitment: "$200,000,000.00",
        amount: "$5,000,000.00 USD",
        effectiveDate: "",
      },
      feeInfo: {
        feeType: "Drawdown Fee",
        appliesTo: "Drawdown Amount",
        rate: "1.0000%",
        feeAmount: "50,000.00 USD",
      },
      rateInfo: {
        type: "Fixed",
        dayCount: "ACT/360",
        pikOption: "Cash",
        includeAccrualEnd: "No",
        accrualStartDate: "2025-01-24",
        accrualEndDate: "2025-02-24",
      },
      allocations: [
        {
          role: "Borrower",
          counterparty: "Soul Train Music Awards",
          amount: "5,000,000.00",
          share: "100.00%",
        },
        {
          role: "Lender",
          counterparty: "Funky Fund East",
          amount: "(5,000,000.00)",
          share: "(100.00%)",
        },
      ],
      bankAccount: {
        accountName: "Account USD",
        bank: "FirstCaribbean International",
        bic: "FCIBJMKN",
        aba: "987654321",
        iban: "-", // Use "-" if no IBAN is provided
        accountNumber: "6665554433",
        currency: "USD",
      },
      correspondingBankAccount: {
        bank: "CitiBank N.A. (CITI)",
        bic: "FCIBJMKN",
      },
    },
  },
  {
    id: "drawdown-request",
    type: "Drawdown Request",
    paymentType: "Debit",
    transaction: "Drawdown",
    deal: "Soultrain",
    instrument: "New Fixed Loan",
    customer: "Soultrain Music Awards",
    paymentDate: "2025-01-01",
    amount: "1,5000,000.00 ",
    role: "Lender",
    status: "Pending",
    transactionDetails: {
      transactionInfo: {
        deal: "Soultrain",
        counterparty: "Soultrain Music Awards",
        instrument: "New Fixed Loan",
        paymentDate: "2025-01-01",
        commitment: "$10,000,000.00",
        unfundedCommitment: "9,053,398.00 USD",
        amount: "$1,5000,000.00  USD",
      },
      feeInfo: {
        feeType: "Drawdown Fee",
        appliesTo: "Drawdown Amount",
        rate: "0.5000%",
        feeAmount: "7,500.00 USD",
      },
      rateInfo: {
        type: "Fixed",
        dayCount: "ACT/365",
        pikOption: "Cash or PIK",
        includeAccrualEnd: "Yes",
        accrualStartDate: "2025-01-24",
        accrualEndDate: "2025-01-31",
      },
      allocations: [
        {
          role: "Borrower",
          counterparty: "Soul Train Music Awards",
          amount: "1,500,000.00",
          share: "100.00%",
        },
        {
          role: "Lender",
          counterparty: "Funky Fund East",
          amount: "(1,500,000.00)",
          share: "(100.00%)",
        },
      ],
      bankAccount: {
        accountName: "FunkyFunds Main USD",
        bank: "Barclays Bank PLC (BARC)",
        bic: "BUKBGB222222",
        aba: "-",
        iban: "-",
        accountNumber: "99999999999",
        currency: "USD",
      },
    },
  },
  {
    id: "transaction-1",
    type: "Transaction",
    paymentType: "Credit",
    transaction: "Drawdown",
    deal: "Soultrain",
    instrument: "New Fixed Loan",
    customer: "Soultrain Music Awards",
    paymentDate: "2025-01-01",
    amount: "100,000,000.00",
    role: "Lender",
    status: "Paid",
    transactionDetails: {
      transactionInfo: {
        deal: "Soultrain",
        counterparty: "Soultrain Music Awards",
        instrument: "Soultrain Revolver",
        paymentDate: "2025-01-01",
        amount: "$100,000,000.00 USD",
      },
      feeInfo: {
        feeType: "Drawdown Fee",
        appliesTo: "Drawdown Amount",
        rate: "1.0000%",
        feeAmount: "50,000.00 USD",
      },
      rateInfo: {
        type: "Fixed",
        dayCount: "ACT/360",
        pikOption: "Cash",
        includeAccrualEnd: "No",
        accrualStartDate: "2025-01-24",
        accrualEndDate: "2025-02-24",
      },
      allocations: [
        {
          role: "Borrower",
          counterparty: "Soul Train Music Awards",
          amount: "(100,000,000.00)",
          share: "(100.00%)",
        },
        {
          role: "Lender",
          counterparty: "Funky Fund East",
          amount: "100,000,000.00",
          share: "100.00%",
        },
      ],
      bankAccount: {
        accountName: "Account USD",
        bank: "FirstCaribbean International",
        bic: "FCIBJMKN",
        aba: "987654321",
        iban: "-", // Use "-" if no IBAN is provided
        accountNumber: "6665554433",
        currency: "USD",
      },
      correspondingBankAccount: {
        bank: "CitiBank N.A. (CITI)",
        bic: "FCIBJMKN",
      },
    },
    nestedRows: [
      {
        id: "transaction-1",
        transaction: "Drawdown",
        deal: "Soultrain",
        instrument: "New Fixed Loan",
        customer: "Funky Fund East",
        paymentDate: "2025-01-01",
        amount: "100,000,000.00",
        status: "Paid",
      },
    ],
  },
  {
    id: "transaction-2",
    type: "Transaction",
    paymentType: "Credit",
    transaction: "Fee Payment",
    deal: "Soultrain",
    instrument: "New Fixed Loan",
    customer: "Soultrain Music Awards",
    paymentDate: "2025-01-18",
    amount: "100,000.00",
    role: "Lender",
    status: "NotPaid",
    transactionDetails: {
      transactionInfo: {
        deal: "Soultrain",
        counterparty: "Soultrain Music Awards",
        instrument: "Soultrain Revolver",
        paymentDate: "2025-01-18",
        amount: "$100,000.00 USD",
      },
      feeInfo: {
        feeType: "Drawdown Fee",
        appliesTo: "Drawdown Amount",
        rate: "1.0000%",
        feeAmount: "50,000.00 USD",
      },
      rateInfo: {
        type: "Fixed",
        dayCount: "ACT/360",
        pikOption: "Cash",
        includeAccrualEnd: "No",
        accrualStartDate: "2025-01-24",
        accrualEndDate: "2025-02-24",
      },
      allocations: [
        {
          role: "Borrower",
          counterparty: "Soul Train Music Awards",
          amount: "(100,000.00)",
          share: "(100.00%)",
        },
        {
          role: "Lender",
          counterparty: "Funky Fund East",
          amount: "100,000.00",
          share: "100.00%",
        },
      ],
      bankAccount: {
        accountName: "Account USD",
        bank: "FirstCaribbean International",
        bic: "FCIBJMKN",
        aba: "987654321",
        iban: "-", // Use "-" if no IBAN is provided
        accountNumber: "6665554433",
        currency: "USD",
      },
      correspondingBankAccount: {
        bank: "CitiBank N.A. (CITI)",
        bic: "FCIBJMKN",
      },
    },
    nestedRows: [
      {
        id: "transaction-2",
        transaction: "Fee Payment",
        deal: "Soultrain",
        instrument: "New Fixed Loan",
        customer: "Funky Fund East",
        paymentDate: "2025-01-18",
        amount: "100,000.00",
        status: "NotPaid",
      },
    ],
  },
  {
    id: "transaction-3",
    type: "Transaction",
    paymentType: "Credit",
    transaction: "Interest Payment",
    deal: "Soultrain",
    instrument: "New Fixed Loan",
    customer: "Soultrain Music Awards",
    paymentDate: "2025-02-03",
    amount: "849,315.07",
    role: "Lender",
    status: "Scheduled",
    transactionDetails: {
      transactionInfo: {
        deal: "Soultrain",
        counterparty: "Soultrain Music Awards",
        instrument: "New Fixed Loan",
        paymentDate: "2025-02-03",
        amount: "$849,315.07 USD",
      },
      feeInfo: {
        feeType: "Drawdown Fee",
        appliesTo: "Drawdown Amount",
        rate: "1.0000%",
        feeAmount: "50,000.00 USD",
      },
      rateInfo: {
        type: "Fixed",
        dayCount: "ACT/360",
        pikOption: "Cash",
        includeAccrualEnd: "No",
        accrualStartDate: "2025-01-24",
        accrualEndDate: "2025-02-24",
      },
      allocations: [
        {
          role: "Borrower",
          counterparty: "Soul Train Music Awards",
          amount: "(849,315.07)",
          share: "(100.00%)",
        },
        {
          role: "Lender",
          counterparty: "Funky Fund East",
          amount: "849,315.07",
          share: "100.00%",
        },
      ],
      bankAccount: {
        accountName: "Account USD",
        bank: "FirstCaribbean International",
        bic: "FCIBJMKN",
        aba: "987654321",
        iban: "-", // Use "-" if no IBAN is provided
        accountNumber: "6665554433",
        currency: "USD",
      },
      correspondingBankAccount: {
        bank: "CitiBank N.A. (CITI)",
        bic: "FCIBJMKN",
      },
    },
    nestedRows: [
      {
        id: "transaction-3",
        transaction: "Interest Payment",
        deal: "Soultrain",
        instrument: "New Fixed Loan",
        customer: "Funky Fund East",
        paymentDate: "2025-02-03",
        amount: "849,315.07",
        status: "Scheduled",
      },
    ],
  },
  {
    id: "transaction-4",
    type: "Transaction",
    paymentType: "Credit",
    transaction: "Interest Payment",
    deal: "Soultrain",
    instrument: "New Fixed Loan",
    customer: "Soultrain Music Awards",
    paymentDate: "2025-02-03",
    amount: "767,123.29",
    role: "Lender",
    status: "Scheduled",
    transactionDetails: {
      transactionInfo: {
        deal: "Soultrain",
        counterparty: "Soultrain Music Awards",
        instrument: "New Fixed Loan",
        paymentDate: "2025-02-03",
        amount: "$767,123.29 USD",
      },
      feeInfo: {
        feeType: "Drawdown Fee",
        appliesTo: "Drawdown Amount",
        rate: "1.0000%",
        feeAmount: "50,000.00 USD",
      },
      rateInfo: {
        type: "Fixed",
        dayCount: "ACT/360",
        pikOption: "Cash",
        includeAccrualEnd: "No",
        accrualStartDate: "2025-01-24",
        accrualEndDate: "2025-02-24",
      },
      allocations: [
        {
          role: "Borrower",
          counterparty: "Soul Train Music Awards",
          amount: "(767,123.29)",
          share: "(100.00%)",
        },
        {
          role: "Lender",
          counterparty: "Funky Fund East",
          amount: "767,123.29)",
          share: "100.00%",
        },
      ],
      bankAccount: {
        accountName: "Account USD",
        bank: "FirstCaribbean International",
        bic: "FCIBJMKN",
        aba: "987654321",
        iban: "-", // Use "-" if no IBAN is provided
        accountNumber: "6665554433",
        currency: "USD",
      },
      correspondingBankAccount: {
        bank: "CitiBank N.A. (CITI)",
        bic: "FCIBJMKN",
      },
    },
    nestedRows: [
      {
        id: "transaction-4",
        transaction: "Interest Payment",
        deal: "Soultrain",
        instrument: "New Fixed Loan",
        customer: "Funky Fund East",
        paymentDate: "2025-02-03",
        amount: "849,315.07",
        status: "Scheduled",
      },
    ],
  },
];

const documentsData: DocumentType[] = [
  {
    id: "document-notice",
    stepId: "tour1-step12",
    document: "Soultrain 01-01-2025",
    documentType: "Transaction",
    subType: "Final Notice",
    customer: "Soul Train Music Awards",
    transaction: "Multiple Transactions",
    documentDate: "2025-01-20",
    status: "Published",
    documentDetails: {
      lastUpdated: "2024-01-14",
      type: "Transaction",
      subType: "Final Notice",
      documentDate: "2025-01-20",
      fileType: "PDF",
      status: "Published",
    },
    transactionDetails: {
      transactionDetailsList: [
        {
          type: "Interest Payment",
          amount: "$849,315.07",
          tnxUpdated: "2025-01-14 9:51 AM",
        },
      ],
      transactionInfo: {
        effectiveDate: "2025-02-01",
        paymentDate: "2025-02-03",
        amount: "849,315.07 USD",
      },
      rateInfo: {
        type: "Fixed",
        dayCount: "ACT/360",
        pikOption: "Cash or PIK",
        includeAccrualEnd: "Yes",
        accrualStartDate: "2025-01-01",
        accrualEndDate: "2025-01-31",
      },
      interestAmount: [
        {
          date: "2025-01-01",
          rate: "10.0000%",
          principal: "$100,000,000.00",
          amount: "$849,315.07",
        },
      ],
      allocations: [
        {
          role: "Borrower",
          counterparty: "Soul Train Music Awards",
          amount: "(849,315.07)",
          share: "(100.00%)",
        },
        {
          role: "Lender",
          counterparty: "Funky Fund East",
          amount: "849,315.07",
          share: "(100.00%)",
        },
      ],
    },
    nestedRows: [
      {
        id: "document-notice",
        document: "Soultrain - Drawdown 01-01-2025",
        transaction: "Multiple Transactions",
        subType: "Final Notice",
        deal: "Soultrain",
        customer: "Funky Fund East",
        documentDate: "2025-01-01",
        status: "Published",
      },
    ],
  },
  {
    id: "document-invoice",
    document: "Soultrain 02-03-2025",
    documentType: "Transaction",
    subType: "Final Notice",
    customer: "Soul Train Music Awards",
    transaction: "Multiple Transactions",
    documentDate: "2025-01-20",
    status: "Published",
    documentDetails: {
      lastUpdated: "2024-01-14",
      type: "Transaction",
      subType: "Final Notice",
      documentDate: "2025-01-20",
      fileType: "PDF",
      status: "Published",
    },
    transactionDetails: {
      transactionDetailsList: [
        {
          type: "Interest Payment",
          amount: "$849,315.07",
          tnxUpdated: "2025-01-14 9:51 AM",
        },
      ],
      transactionInfo: {
        effectiveDate: "2025-02-01",
        paymentDate: "2025-02-03",
        amount: "849,315.07 USD",
      },
      rateInfo: {
        type: "Fixed",
        dayCount: "ACT/360",
        pikOption: "Cash or PIK",
        includeAccrualEnd: "Yes",
        accrualStartDate: "2025-01-01",
        accrualEndDate: "2025-01-31",
      },
      interestAmount: [
        {
          date: "2025-01-01",
          rate: "10.0000%",
          principal: "$100,000,000.00",
          amount: "$849,315.07",
        },
      ],
      allocations: [
        {
          role: "Borrower",
          counterparty: "Soul Train Music Awards",
          amount: "(849,315.07)",
          share: "(100.00%)",
        },
        {
          role: "Lender",
          counterparty: "Funky Fund East",
          amount: "849,315.07",
          share: "(100.00%)",
        },
      ],
    },
    nestedRows: [
      {
        id: "document-invoice",
        document: "Soultrain - Drawdown 01-01-2025",
        transaction: "Multiple Transactions",
        subType: "Final Notice",
        deal: "Soultrain",
        customer: "Funky Fund East",
        documentDate: "2025-01-01",
        status: "Published",
      },
    ],
  },
  {
    id: "document-2",
    document: "Soultrain 01-01-2025",
    documentType: "Transaction",
    subType: "Final Notice",
    customer: "Soul Train Music Awards",
    transaction: "Interest Payment [Borrower]",
    documentDate: "2025-01-20",
    status: "Published",
    documentDetails: {
      lastUpdated: "2024-01-14",
      type: "Transaction",
      subType: "Final Notice",
      documentDate: "2025-01-20",
      fileType: "PDF",
      status: "Published",
    },
    transactionDetails: {
      transactionDetailsList: [
        {
          type: "Interest Payment",
          amount: "$849,315.07",
          tnxUpdated: "2025-01-14 9:51 AM",
        },
      ],
      transactionInfo: {
        effectiveDate: "2025-02-01",
        paymentDate: "2025-02-03",
        amount: "849,315.07 USD",
      },
      rateInfo: {
        type: "Fixed",
        dayCount: "ACT/360",
        pikOption: "Cash or PIK",
        includeAccrualEnd: "Yes",
        accrualStartDate: "2025-01-01",
        accrualEndDate: "2025-01-31",
      },
      interestAmount: [
        {
          date: "2025-01-01",
          rate: "10.0000%",
          principal: "$100,000,000.00",
          amount: "$849,315.07",
        },
      ],
      allocations: [
        {
          role: "Borrower",
          counterparty: "Soul Train Music Awards",
          amount: "(849,315.07)",
          share: "(100.00%)",
        },
        {
          role: "Lender",
          counterparty: "Funky Fund East",
          amount: "849,315.07",
          share: "(100.00%)",
        },
      ],
    },
    nestedRows: [
      {
        id: "document-2",
        document: "Soultrain - Drawdown 01-01-2025",
        transaction: "Interest Payment [Lender]",
        subType: "Final Notice",
        deal: "Soultrain",
        customer: "Funky Fund East",
        documentDate: "2025-01-01",
        status: "Published",
      },
    ],
  },
  {
    id: "document-3",
    document: "Soultrain 02-03-2025",
    documentType: "Transaction",
    subType: "Final Notice",
    customer: "Soul Train Music Awards",
    transaction: "Interest Payment [Borrower]",
    documentDate: "2025-01-20",
    status: "Published",
    documentDetails: {
      lastUpdated: "2024-01-14",
      type: "Transaction",
      subType: "Final Notice",
      documentDate: "2025-01-20",
      fileType: "PDF",
      status: "Published",
    },
    transactionDetails: {
      transactionDetailsList: [
        {
          type: "Interest Payment",
          amount: "$849,315.07",
          tnxUpdated: "2025-01-14 9:51 AM",
        },
      ],
      transactionInfo: {
        effectiveDate: "2025-02-01",
        paymentDate: "2025-02-03",
        amount: "849,315.07 USD",
      },
      rateInfo: {
        type: "Fixed",
        dayCount: "ACT/360",
        pikOption: "Cash or PIK",
        includeAccrualEnd: "Yes",
        accrualStartDate: "2025-01-01",
        accrualEndDate: "2025-01-31",
      },
      interestAmount: [
        {
          date: "2025-01-01",
          rate: "10.0000%",
          principal: "$100,000,000.00",
          amount: "$849,315.07",
        },
      ],
      allocations: [
        {
          role: "Borrower",
          counterparty: "Soul Train Music Awards",
          amount: "(849,315.07)",
          share: "(100.00%)",
        },
        {
          role: "Lender",
          counterparty: "Funky Fund East",
          amount: "849,315.07",
          share: "(100.00%)",
        },
      ],
    },
    nestedRows: [
      {
        id: "document-2-1",
        document: "Soultrain - Drawdown 01-01-2025",
        transaction: "Interest Payment [Lender]",
        subType: "Final Notice",
        deal: "Soultrain",
        customer: "Funky Fund East",
        documentDate: "2025-01-01",
        status: "Published",
      },
    ],
  },
];

const instrumentData: InstrumentType[] = [
  {
    id: "instrument-1",
    deal: "Soultrain",
    instrument: "New Fixed Loan",
    type: "Loan",
    subType: "Term Loan",
    ccy: "USD",
    issueDate: "2025-01-01",
    maturityDate: "2030-01-01",
    createdDate: "2024-10-30",
    status: "Open",
    issueInfo: {
      issuer: "-",
      issueDate: "2025-01-01",
      expireDate: "-",
      maturityDate: "2030-01-01",
    },
    feeInfo: {
      feeType: "Fixed",
      appliesTo: "Drawdown Amount",
      rate: "1.0000%",
      amount: "-",
    },
    rateInfo: {
      rateType: "Fixed",
      index: "Fixed",
      accrualFrequency: "1 Month",
      adjSpread: "8.5600%",
    },
  },
  {
    id: "instrument-2",
    deal: "Soultrain",
    instrument: "Soultrain Revolver",
    type: "Loan",
    subType: "Revolver",
    ccy: "USD",
    issueDate: "2025-01-01",
    maturityDate: "2030-01-01",
    createdDate: "2024-10-30",
    status: "Open",
    issueInfo: {
      issuer: null,
      issueDate: "2025-01-01",
      expireDate: null,
      maturityDate: "2030-01-01",
    },
    feeInfo: {
      feeType: "Fixed",
      appliesTo: "Drawdown Amount",
      rate: "1.0000%",
      amount: "-",
    },
    rateInfo: {
      rateType: "Fixed",
      index: "Fixed",
      accrualFrequency: "1 Month",
      adjSpread: "8.5600%",
    },
  },
];

const deals: DealType[] = [
  {
    id: "1",
    slug: "soultrain",
    displayName: "Soultrain",
    totalCommitment: "$300,000,000.00",
    funded: "$100,000,000.00",
    unfunded: "$200,000,000.00",
    lender: {
      covenantsTracking: [
        {
          title: "Quick Ratio",
          value: 6.68,
          change: "-12.5%",
          changeValue: "7.63",
          status: "Passed",
          prevPeriodValue: "Min 5.00",
        },
        {
          title: "Debt-to-EBITDA",
          value: 2.51,
          change: "+10.2%",
          changeValue: "2.27",
          status: "Failed",
          prevPeriodValue: "Max 2.50",
        },
        {
          title: "Fixed Charge Coverage Ratio",
          value: 1.56,
          change: "-3.00%",
          changeValue: "1.61",
          status: "Passed",
          prevPeriodValue: "Min 1.20",
        },
      ],
      upcomingPayments: {
        credits: [
          {
            id: "credit-1",
            dueDate: "2025-01-18",
            status: "5 days overdue",
            drawDownFee: "$100,000.00",
            total: "$100,000.00",
          },
          {
            id: "tour1-step11",
            dueDate: "2025-02-03",
            status: "in 10 days",
            interest: "$849,315.07",
            total: "$849,315.07",
            documentId: "document-notice",
          },
        ],
        debits: [
          {
            id: "debit-1",
            dueDate: "2025-01-24",
            status: "Pending",
            drawDownFee: "$5,000.00",
            drawDown: "$5,000,000.00",
            total: "$4,955,000.00",
            transactionId: "transaction-request",
          },
        ],
      },
      positions: [
        {
          id: "position-1",
          deal: "Soultrain",
          instrument: "New Fixed Loan",
          borrower: "Soultrain",
          ccy: "USD",
          counterparty: "Funky Fund East",
          role: "Lender",
          committed: "$100,000,000.00",
          funded: "$100,000,000.00",
          unfunded: "0.0",
          docs: "",
        },
      ],
      transactions: transactionsData.filter(
        (transaction) => transaction.role === "Lender",
      ),
      documents: documentsData,
      instruments: instrumentData,
      asOfDate: "2025-01-24",
    },
    borrower: {
      covenantsTracking: [
        {
          title: "Quick Ratio",
          value: 6.68,
          change: "-12.5%",
          changeValue: "7.63",
          status: "Passed",
          prevPeriodValue: "Min 5.00",
        },
        {
          title: "Debt-to-EBITDA",
          value: 2.51,
          change: "+10.2%",
          changeValue: "2.27",
          status: "Failed",
          prevPeriodValue: "Max 2.50",
        },
        {
          title: "Fixed Charge Coverage Ratio",
          value: 1.56,
          change: "-3.00%",
          changeValue: "1.61",
          status: "Passed",
          prevPeriodValue: "Min 1.20",
        },
      ],
      upcomingPayments: {
        credits: [
          {
            id: "credit-1",
            dueDate: "2025-01-24",
            status: "Pending",
            drawDown: "$5,000,000.00",
            drawDownFee: "$5,000.00",
            total: "$4,955,000.00",
            transactionId: "transaction-5",
          },
        ],
        debits: [
          {
            id: "debit-1",
            dueDate: "2025-01-18",
            status: "5 days overdue",
            drawDownFee: "$100,000.00",
            total: "$100,000.00",
          },
          {
            id: "tour1-step27",
            dueDate: "2025-02-03",
            status: "in 10 days",
            interest: "$849,315.07",
            total: "$849,315.07",
            documentId: "document-notice",
          },
        ],
      },
      positions: [
        {
          id: "position-1",
          deal: "Soultrain",
          instrument: "New Fixed Loan",
          borrower: "Soultrain",
          ccy: "USD",
          counterparty: "Funky Fund East",
          role: "Lender",
          committed: "$100,000,000.00",
          funded: "$100,000,000.00",
          unfunded: "0.0",
          docs: "",
        },
      ],
      transactions: transactionsData.filter(
        (transaction) => transaction.role === "Borrower",
      ),
      documents: documentsData,
      instruments: instrumentData,
      asOfDate: "2025-01-24",
    },
    stepId: "tour1-step29",
  },
  {
    id: "2",
    slug: "abccapital",
    displayName: "Abc Capital",
    totalCommitment: "$2,500,000",
    funded: "$680,000.00",
    unfunded: "$1,820,000.00",
    lender: {
      covenantsTracking: [
        {
          title: "Quick Ratio",
          value: 6.68,
          change: "-12.5%",
          changeValue: "7.63",
          status: "Passed",
          prevPeriodValue: "Min 5.00",
        },
        {
          title: "Debt-to-EBITDA",
          value: 2.51,
          change: "+10.2%",
          changeValue: "2.27",
          status: "Failed",
          prevPeriodValue: "Max 2.50",
        },
        {
          title: "Fixed Charge Coverage Ratio",
          value: 1.56,
          change: "-3.00%",
          changeValue: "1.61",
          status: "Passed",
          prevPeriodValue: "Min 1.20",
        },
      ],
      upcomingPayments: {
        credits: [
          {
            id: "credit-1",
            dueDate: "2025-01-18",
            status: "5 days overdue",
            drawDownFee: "$100,000.00",
            total: "$100,000.00",
          },
          {
            id: "credit-2",
            dueDate: "2025-02-03",
            status: "in 10 days",
            interest: "$849,315.07",
            total: "$849,315.07",
            documentId: "document-invoice",
          },
        ],
        debits: [
          {
            id: "debit-1",
            dueDate: "2025-01-24",
            status: "Pending",
            drawDownFee: "$5,000.00",
            drawDown: "$5,000,000.00",
            total: "$4,955,000.00",
            transactionId: "transaction-1",
          },
        ],
      },
      positions: [
        {
          id: "position-1",
          deal: "Abc Capital",
          instrument: "New Fixed Loan",
          borrower: "Abc Capital",
          ccy: "USD",
          counterparty: "Funky Fund East",
          role: "Lender",
          committed: "$100,000,000.00",
          funded: "$100,000,000.00",
          unfunded: "0.0",
          docs: "",
        },
      ],
      transactions: transactionsData.filter(
        (transaction) => transaction.role === "Lender",
      ),
      documents: documentsData,
      asOfDate: "2025-01-24",
    },
    borrower: {
      covenantsTracking: [
        {
          title: "Quick Ratio",
          value: 6.68,
          change: "-12.5%",
          changeValue: "7.63",
          status: "Passed",
          prevPeriodValue: "Min 5.00",
        },
        {
          title: "Debt-to-EBITDA",
          value: 2.51,
          change: "+10.2%",
          changeValue: "2.27",
          status: "Failed",
          prevPeriodValue: "Max 2.50",
        },
        {
          title: "Fixed Charge Coverage Ratio",
          value: 1.56,
          change: "-3.00%",
          changeValue: "1.61",
          status: "Passed",
          prevPeriodValue: "Min 1.20",
        },
      ],
      upcomingPayments: {
        credits: [
          {
            id: "credit-1",
            dueDate: "2025-01-24",
            status: "Pending",
            drawDown: "$5,000,000.00",
            drawDownFee: "$5,000.00",
            total: "$4,955,000.00",
            transactionId: "transaction-5",
          },
        ],
        debits: [
          {
            id: "debit-1",
            dueDate: "2025-01-18",
            status: "5 days overdue",
            drawDownFee: "$100,000.00",
            total: "$100,000.00",
          },
          {
            id: "debit-2",
            dueDate: "2025-02-03",
            status: "in 10 days",
            interest: "$849,315.07",
            total: "$849,315.07",
            documentId: "document-invoice",
          },
        ],
      },
      positions: [
        {
          id: "position-1",
          deal: "Abc Capital",
          instrument: "New Fixed Loan",
          borrower: "Abc Capital",
          ccy: "USD",
          counterparty: "Funky Fund East",
          role: "Lender",
          committed: "$100,000,000.00",
          funded: "$100,000,000.00",
          unfunded: "0.0",
          docs: "",
        },
      ],
      transactions: transactionsData.filter(
        (transaction) => transaction.role === "Borrower",
      ),
      documents: documentsData,
      asOfDate: "2025-01-24",
    },
  },
];

const formTableData = {
  name: "New Fixed Loan",
  loanType: "Term Loan",
  loanAmount: "100,000,000.00",
  ccy: "USD",
  issueDate: "2025-01-01",
  maturityDate: "2030-01-01",
  deal: "Soultrain Deal",
  borrower: "Soultrain Music Awards",
  lender: "Funky Fund East",
  lenderShare: "100,000,000.00",
  rateType: "Fixed",
  annualRate: "10.00%",
  paid: "Monthly",
  dayCount: "ACT/365",
};

const formTableDataAdvanced = {
  name: "New Fixed Loan",
  loanType: "Term Loan",
  loanAmount: "100,000,000.00",
  ccy: "USD",
  issueDate: "2025-01-01",
  maturityDate: "2030-01-01",
  deal: "Soultrain Deal",
  borrower: "Soultrain Music Awards",
  lender: "Funky Fund East",
  lenderShare: "100,000,000.00",
  rateType: "Fixed",
  annualRate: "10.00%",
  paid: "Monthly",
  businessDayCalendars: "New York, London",
  nonBusinessDayRule: "Modified Next Business Day",
  dayCount: "ACT/365",
  pikOption: "Cash or PIK",
  pikReducesUnfunded: "No",
  rateScale: 4,
  includeAccrualEnd: true,
  accrualEndAdj: true,
  spreads: [
    {
      date: "2025-01-01",
      spreadType: "Standard",
      spread: "10.0000%",
      spreadAdj: "+0.1000%",
    },
    {
      date: "2026-01-01",
      spreadType: "Standard",
      spread: "12.0000%",
      spreadAdj: "+0.1000%",
    },
    {
      date: "2025-01-01",
      spreadType: "PIK",
      spread: "20.0000%",
      spreadAdj: "+0.5000%",
    },
    {
      date: "2026-01-01",
      spreadType: "PIK",
      spread: "22.0000%",
      spreadAdj: "+0.5000%",
    },
    {
      date: "2025-01-01",
      spreadType: "Standard Participation",
      spread: "8.0000%",
      spreadAdj: "-",
    },
  ],
  facilityFees: [
    {
      type: "Upfront Fee",
      appliesTo: "N/A",
      rate: "-",
      flatAmount: "$1,500.00",
    },
    {
      type: "Unfunded Fee",
      appliesTo: "Current Unfunded",
      rate: "1.5000%",
      flatAmount: "-",
    },
    {
      type: "Prepayment Fee",
      appliesTo: "Prepayment Amount",
      rate: "0.5000%",
      flatAmount: "-",
    },
    {
      type: "Drawdown Fee",
      appliesTo: "Drawdown Amount",
      rate: "0.1000%",
      flatAmount: "-",
    },
    {
      type: "Commitment Fee",
      appliesTo: "Commitment Amount",
      rate: "0.1000%",
      flatAmount: "-",
    },
    {
      type: "Administrative Fee",
      appliesTo: "N/A",
      rate: "-",
      flatAmount: "$1,500.00",
    },
  ],
  accrualFrequency: 1,
  accrualFrequencyUnit: "Month End",
  adjustmentValue: 1,
  adjustmentType: "Business Day of the Month",
};

export { deals, formTableData, formTableDataAdvanced };
