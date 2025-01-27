import { Tour } from "nextstepjs";
import {
  defaultDashboardBorrowerPath,
  defaultDashboardPath,
  defaultDocumentsPath,
  defaultInstrumentsPath,
  defaultTransactionsPath,
} from "@/app/lib/constants";

export const steps: Tour[] = [
  {
    tour: "mainTour",
    steps: [
      {
        icon: <></>,
        title: "Welcome to DirectLend Platform!",
        content: (
          <div className="text-grey-primary min-w-[400px]">
            We’re excited to have you on board. Our platform is designed to
            cater to both Borrowers and Lenders, ensuring a seamless experience
            for all users. In this guided tour, we will walk you through the key
            features and functionalities of the platform, starting with the
            Lender view.
          </div>
        ),
        side: "top",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Get Started with DirectLend",
        content: (
          <div className="text-grey-primary min-w-[600px]">
            <p>
              To kick things off, we will begin with the onboarding process for
              a new Loan. To simplify the Loan creation, we invite you to select
              a template that best fits your needs. By choosing a template, we
              can automatically repopulate many fields in the system, saving you
              time and effort in the process.
            </p>
            <p>Let’s get started by selecting a simple Fixed loan template.</p>
          </div>
        ),
        selector: "#tour1-step0",
        side: "bottom",
        showSkip: false,
        showControls: true,
        pointerPadding: 10,
        pointerRadius: 10,
        nextRoute: "/template/setup",
      },
      {
        icon: <></>,
        title: "Here is the New Loan Setup Wizard!",
        content: (
          <div className="text-grey-primary min-w-[400px]">
            <p className="mb-3">
              This intuitive tool is designed to help you efficiently configure
              all the essential details of your loan.
            </p>
            <p className="text-base font-semibold mb-3">
              Here’s what you can do in this wizard:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">Specify Key Information:</span>{" "}
                Enter the fundamental details about the loan, including the loan
                amount and key dates.
              </li>
              <li>
                <span className="font-semibold">
                  Add to Existing Deal or Create New:
                </span>{" "}
                Choose whether to add this loan instrument to an existing deal
                or create a brand-new deal from scratch.
              </li>
              <li>
                <span className="font-semibold">
                  Designate Borrower and Lenders:
                </span>{" "}
                Identify the Borrower for this loan and specify one or multiple
                lenders. You can easily allocate their respective shares in the
                loan.
              </li>
              <li>
                <span className="font-semibold">
                  Customize Interest Rate Settings:
                </span>{" "}
                Tailor the interest rate settings to fit your requirements,
                whether it be fixed, floating, or a specific structure.
              </li>
              <li>
                <span className="font-semibold">
                  Upload Loan-Related Documentation:
                </span>{" "}
                For a comprehensive setup, upload any relevant documentation
                that pertains to the loan, ensuring all necessary information is
                readily available.
              </li>
            </ul>
          </div>
        ),
        selector: "#tour1-step1",
        side: "right",
        showSkip: false,
        showControls: true,
        prevRoute: "/template",
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Preview Transactions Schedule Panel",
        content: (
          <div className="text-grey-primary min-w-[400px]">
            <p className="mb-3">
              On the right-hand side, you’ll find the
              <span className="font-semibold">
                {" "}
                Preview Transactions Schedule{" "}
              </span>
              panel. This feature provides a real-time overview of the
              transactions associated with your loan based on the inputs you’ve
              entered.
            </p>
            <p className="text-base font-semibold mb-3">
              Here’s what you can expect from this panel:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">Instant Updates: </span> As you
                fill out the loan details, the preview will automatically update
                to reflect your inputs, giving you immediate visibility into how
                your selections impact the transaction schedule.
              </li>
              <li>
                <span className="font-semibold">Detailed Breakdown:</span> View
                a clear breakdown of all scheduled payments, including principal
                and interest allocations, due dates, and any other relevant
                transaction details.
              </li>
              <li>
                <span className="font-semibold">Adjustments:</span> If you need
                to make changes to your inputs, you can easily return to the
                relevant sections of the wizard, and the preview will adjust
                accordingly.
              </li>
            </ul>
            <p className={"mt-3"}>
              Utilize this panel to ensure everything aligns with your
              expectations before finalizing your loan setup!
            </p>
          </div>
        ),
        selector: "#tour1-step2",
        side: "left",
        showSkip: false,
        showControls: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Adjust Annual Rate in Your Loan",
        content: (
          <div className="text-grey-primary min-w-[400px]">
            <p>
              Let’s adjust the interest rate to{" "}
              <span className="font-semibold">15%</span>.
            </p>
            <p>
              After entering the new interest rate, the Preview Transactions
              Schedule panel on the right-hand side will automatically update to
              reflect this change.
            </p>
          </div>
        ),
        selector: "#tour1-step3",
        side: "top",
        showSkip: false,
        showControls: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Advanced mode",
        content: (
          <div className="text-grey-primary min-w-[400px]">
            If you require more sophisticated controls for your loan setup, you
            can easily switch the wizard to{" "}
            <span className="font-semibold">Advanced Mode</span>.
          </div>
        ),
        selector: "#tour1-step4",
        side: "bottom",
        showSkip: false,
        showControls: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Advanced mode features",
        content: (
          <div className="text-grey-primary min-w-[400px]">
            <p className="mb-3">
              This mode provides you with enhanced features and options tailored
              for more complex lending scenarios.
            </p>
            <p className="text-base font-semibold mb-3">
              Here’s what you can access in Advanced Mode:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">
                  Accrual Frequency Options:
                </span>
                Select the accrual frequency for interest calculations, whether
                it be daily, monthly, quarterly, or annually.
              </li>
              <li>
                <span className="font-semibold">Various Spread Types: </span>
                Choose from different spread types to customize how the interest
                rate is calculated in relation to a benchmark rate.
              </li>
              <li>
                <span className="font-semibold">Payment in Kind Settings:</span>{" "}
                Configure payment in kind (PIK) options to allow for interest
                payments to be added to the principal balance instead of being
                paid in cash.
              </li>
              <li>
                <span className="font-semibold">Unitranche Loan Setup:</span>{" "}
                Set up unitranche loans, which combine senior and subordinated
                debt into a single facility, simplifying the capital structure.
              </li>
              <li>
                <span className="font-semibold">Business Day Calendars:</span>{" "}
                Specify business day calendars for payment due dates to ensure
                that payments are scheduled accurately, taking into account
                holidays and weekends.
              </li>
              <li>
                <span className="font-semibold">Different Types of Fees:</span>{" "}
                Add and customize various fees associated with the loan, such as
                origination fees, commitment fees, or prepayment penalties.
              </li>
            </ul>
          </div>
        ),
        selector: "#tour1-step5",
        side: "right",
        showSkip: false,
        showControls: true,
        nextRoute: defaultDashboardPath,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Welcome to the Dashboard!",
        content: (
          <div className="text-grey-primary w-[400px]">
            This central hub provides you with a comprehensive overview of all
            your deals, loans, and related events, allowing you to effortlessly
            track and manage your lending activities.
          </div>
        ),
        selector: "#tour1-step6",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        prevRoute: "/template/setup",
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Deals Panel",
        content: (
          <div className="text-grey-primary min-w-[400px]">
            <p className="mb-3">
              The Deals Panel on your Dashboard provides an efficient way to
              view all your Loan deals and their current positions:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                Access a comprehensive list of both active and closed loan
                deals, showcasing key details such as deal name, Committed,
                Funded, and Unfunded positions.
              </li>
              <li>
                By selecting a specific deal, you can filter the Dashboard
                content to display only the relevant information, allowing you
                to concentrate on what matters most.
              </li>
            </ul>
          </div>
        ),
        selector: "#tour1-step7",
        side: "right",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "The Upcoming Payments Widget",
        content: (
          <div className="text-grey-primary min-w-[65vw]">
            <p className="mb-3">
              <span className="font-semibold">
                The Upcoming Payments Widget
              </span>{" "}
              on your Dashboard highlights the closest scheduled payments,
              including both debits and credits.
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">
                  Overview of Scheduled Payments:{" "}
                </span>
                Utilize the calendar view to quickly locate scheduled events,
                allowing you to visualize payment timelines and plan
                accordingly.
              </li>
              <li>
                This widget is designed to keep you informed about your payment
                schedule, helping you manage your cash flow effectively!
              </li>
            </ul>
          </div>
        ),
        selector: "#tour1-step8",
        side: "top",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "The Positions Widget",
        content: (
          <div className="text-grey-primary">
            <p className="mb-3">
              <span className="font-semibold">The Positions Widget</span>{" "}
              provides a detailed breakdown of your current positions for every
              Loan Instrument in your portfolio.
            </p>
          </div>
        ),
        selector: "#tour1-step9",
        side: "top",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "The Covenants Tracking Widget",
        content: (
          <div className="text-grey-primary">
            <p className="mb-3">
              <span className="font-semibold">Covenants Tracking Widget</span>{" "}
              Displays the results of Financial Covenants calculations based on
              the latest financial statements provided by the borrower.
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">Regular Updates:</span> Stay
                informed with up-to-date calculations as financial statements
                are submitted, ensuring you have the latest insights into
                compliance.
              </li>
              <li>
                <span className="font-semibold">
                  Custom Covenants Creation:
                </span>{" "}
                Utilize the Formula Builder to create custom covenants and
                metrics that can combine both Financial Data and Loan Data,
                tailored to your specific requirements.
              </li>
              <li>
                <span className="font-semibold">Interactive Reports:</span>{" "}
                Generate custom charts and reports to build and share various
                interactive reports, enhancing your ability to analyze and
                present covenant performance.
              </li>
              <li>
                <span className="font-semibold">Comprehensive Monitoring:</span>{" "}
                This widget is designed to help you effectively monitor
                compliance and gain deeper insights into your borrowers'
                financial health!
              </li>
            </ul>
          </div>
        ),
        selector: "#tour1-step10",
        side: "top",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Information About Scheduled Events",
        content: (
          <div className="text-grey-primary min-w-[400px]">
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">Upcoming Payments Widget:</span>{" "}
                Allows you to quickly access all crucial information about
                scheduled events.
              </li>
              <li>
                <span className="font-semibold">View Transaction Details:</span>{" "}
                Get comprehensive information about each scheduled payment,
                including amounts and due dates.
              </li>
              <li>
                <span className="font-semibold">
                  Access Notices or Invoices:
                </span>{" "}
                Easily view related notice or invoice documents for reference
                and record-keeping.
              </li>
              <li>
                <span className="font-semibold">Switch Bank Accounts:</span>{" "}
                Change your bank account settings to ensure payments are
                received correctly and without delay.
              </li>
              <li>
                <span className="font-semibold">Contact Borrower:</span> Reach
                out to the borrower directly through the platform to discuss any
                details or necessary adjustments regarding the payment.
              </li>
            </ul>
          </div>
        ),
        selector: "#tour1-step11",
        side: "left",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
        nextRoute: "/document/document-notice",
      },
      {
        icon: <></>,
        title: "Document Preview",
        content: (
          <div className="text-grey-primary min-w-[400px]">
            <p className="mb-3">
              When you select to view the notice document, a drawer will open to
              display the document preview.
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">Document Preview:</span> Easily
                review the contents of the notice document within the drawer for
                quick reference.
              </li>
              <li>
                <span className="font-semibold">Download Option:</span> If you
                need a copy for your records, simply click the download button
                to save the PDF file to your device.
              </li>
            </ul>
          </div>
        ),
        selector: "#tour1-step12",
        side: "left",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        prevRoute: defaultDashboardPath,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Transaction Details",
        content: (
          <div className="text-grey-primary min-w-[400px]">
            <p className="mb-3">
              The <span className="font-semibold">Transaction Details</span> tab
              provides a comprehensive list of transactions related to the
              Notice.
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">
                  Detailed Transaction List:
                </span>{" "}
                View all relevant transactions associated with the notice,
                ensuring you have a complete understanding of the financial
                activities.
              </li>
              <li>
                <span className="font-semibold">Key Information:</span> Access
                important details for each transaction, including due dates,
                utilized rates, payment amounts, and any other pertinent
                information.
              </li>
              <li>
                <span className="font-semibold">Comprehensive Overview:</span>{" "}
                This tab is designed to give you a clear overview of the
                transactions linked to the notice, helping you stay organized
                and informed about your financial commitments!
              </li>
            </ul>
          </div>
        ),
        selector: "#tour1-step13",
        side: "left",
        showControls: true,
        showSkip: false,
        nextRoute: defaultDashboardPath,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Borrower Requests",
        content: (
          <div className="text-grey-primary min-w-[400px]">
            <p className="mb-3">
              <span className="font-semibold">
                Borrower Requests for Unscheduled Drawdowns and Principal
                Prepayments
              </span>{" "}
              Borrowers may occasionally request unscheduled drawdowns or
              principal prepayments. The Dashboard provides lenders with the
              ability to efficiently review these requests.
            </p>

            <ul className="list-disc list-inside space-y-3 max-h-60 overflow-y-auto">
              <li>
                <span className="font-semibold">Request Overview:</span> Easily
                access a summary of all pending requests from borrowers for
                unscheduled drawdowns or principal prepayments, ensuring you
                stay informed about their needs.
              </li>
            </ul>
          </div>
        ),
        selector: "#tour1-step14",
        side: "bottom",
        showControls: true,
        showSkip: false,
        prevRoute: "/document/document-notice",
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "View Transaction Request",
        content: (
          <div className="text-grey-primary min-w-[300px]">
            Click <span className={"font-semibold"}>Preview</span> to access
            information
          </div>
        ),
        selector: "#tour1-step15",
        side: "bottom",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
        nextRoute: "/transaction/transaction-request",
      },
      {
        icon: <></>,
        title: "Detailed Request Information",
        content: (
          <div className="text-grey-primary min-w-[400px]">
            <p className="mb-3">
              When reviewing borrower requests for unscheduled drawdowns or
              principal prepayments, you will find detailed information that
              includes:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">Requested Payment Date: </span>{" "}
                The date on which the borrower wishes the funds to be disbursed
                or the prepayment to be applied.
              </li>
              <li>
                <span className="font-semibold">Requested Amount: </span> The
                specific amount that the borrower is requesting for the drawdown
                or prepayment.
              </li>
              <li>
                <span className="font-semibold">Associated Fees: </span> Fees
                calculated automatically based on the Loan Terms, providing
                transparency and clarity regarding any costs associated with the
                request.
              </li>
            </ul>
          </div>
        ),
        selector: "#tour1-step16",
        side: "left",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        prevRoute: defaultDashboardPath,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Detailed Request Information",
        content: (
          <div className="text-grey-primary min-w-[400px]">
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">Requested Rate Option: </span>{" "}
                Information about the rate option the borrower is requesting,
                ensuring you understand the implications for the loan structure.
              </li>
            </ul>
          </div>
        ),
        selector: "#tour1-step17",
        side: "left",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        prevRoute: defaultDashboardPath,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Preferred Bank Account",
        content: (
          <div className="text-grey-primary min-w-[400px]">
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">Preferred Bank Account: </span>{" "}
                Details about the borrower’s preferred bank account for fund
                transfers, streamlining the process for disbursement.
              </li>
            </ul>
          </div>
        ),
        selector: "#tour1-step18",
        side: "left",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Decision Making",
        content: (
          <div className="text-grey-primary">
            <p>
              This feature allows lenders to assess and respond to requests
              promptly, facilitating effective communication and decision-making
              regarding borrower needs.
            </p>
          </div>
        ),
        selector: "#tour1-step19",
        side: "top",
        showControls: true,
        showSkip: false,
        nextRoute: defaultTransactionsPath,
        pointerPadding: 10,
        pointerRadius: 10,
        viewportID: "transactionInnerDrawer",
      },
      {
        icon: <></>,
        title: "Transactions Screen",
        content: (
          <div className="text-grey-primary">
            <p className="mb-3">
              <span className="font-semibold">Transactions Screen:</span>{" "}
              Provides a complete overview of all historical and scheduled
              transactions, enabling you to effectively track their status and
              access detailed information.
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">Comprehensive List:</span> View
                an entire list of both historical and scheduled transactions,
                ensuring you have a complete picture of your financial
                activities.
              </li>
              <li>
                <span className="font-semibold">Status Tracking:</span> Easily
                monitor the status of each transaction, whether it is pending,
                completed, or in progress, helping you stay organized and
                informed.
              </li>
            </ul>
          </div>
        ),
        selector: "#tour1-step20",
        side: "top",
        showControls: true,
        showSkip: false,
        prevRoute: defaultDashboardPath,
        nextRoute: "/transaction/transaction-3",
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Transaction Details",
        content: (
          <div className="text-grey-primary min-w-[400px]">
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">
                  Access Transaction Details:
                </span>{" "}
                Click on any transaction to access detailed information,
                including amounts, dates, associated fees, and any relevant
                documentation.
              </li>
            </ul>
            <p className={"mt-3"}>
              This screen is designed to enhance your transaction management,
              providing you with the tools you need to monitor and review all
              financial activities seamlessly!
            </p>
          </div>
        ),
        selector: "#tour1-step21",
        side: "left",
        showControls: true,
        showSkip: false,
        prevRoute: defaultTransactionsPath,
        nextRoute: defaultInstrumentsPath,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Instruments Screen",
        content: (
          <div className="text-grey-primary">
            <p className="mb-3">
              <span className="font-semibold"> The Instruments Screen:</span>{" "}
              displays a comprehensive list of all Loan instruments in your
              portfolio, making it easy to find and filter specific instruments.
            </p>
          </div>
        ),
        selector: "#tour1-step22",
        side: "top",
        showControls: true,
        showSkip: false,
        prevRoute: defaultTransactionsPath,
        nextRoute: "/instrument/instrument-1",
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Instrument Details",
        content: (
          <div className="text-grey-primary min-w-[400px]">
            <p className="mb-3">
              By selecting a specific Loan instrument from the Instruments
              Screen, you can access the{" "}
              <span className="font-semibold">Instrument Details Drawer</span>,
              where you can view comprehensive information and make adjustments
              as needed.
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">View Instrument Details: </span>{" "}
                Access all relevant information about the selected loan
                instrument, including terms, interest rates, repayment
                schedules, and associated borrower.
              </li>
              <li>
                <span className="font-semibold">Adjust Settings: </span> If
                necessary, you can modify settings related to the loan
                instrument, such as updating interest rates or changing payment
                terms.
              </li>
            </ul>
          </div>
        ),
        selector: "#tour1-step23",
        side: "left",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        prevRoute: defaultInstrumentsPath,
        nextRoute: defaultDocumentsPath,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Documents Screen",
        content: (
          <div className="text-grey-primary min-w-[50vw]">
            <p className="mb-3">
              <span className="font-semibold">The Documents Screen:</span>{" "}
              serves as a comprehensive repository for all Loan documentation,
              providing a centralized location for managing your documents.
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">
                  Complete Document Repository:{" "}
                </span>{" "}
                Quickly find and access any document related to a specific loan,
                transaction, or counterparty, streamlining your workflow and
                enhancing collaboration.
              </li>
              <li>
                <span className="font-semibold">Upload and Share: </span> Easily
                upload new documents or share existing ones with relevant
                parties, ensuring everyone has access to the necessary
                information.
              </li>
            </ul>
            <p className="mt-3">
              This screen is designed to simplify document management, ensuring
              you have all your loan-related documentation organized and readily
              available!
            </p>
          </div>
        ),
        selector: "#tour1-step24",
        side: "top",
        showControls: true,
        showSkip: false,
        prevRoute: defaultInstrumentsPath,
        nextRoute: defaultDashboardBorrowerPath,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Borrower View",
        content: (
          <div className="text-grey-primary min-w-[250px]">
            <p className="mb-3">
              Switching to the{" "}
              <span className="font-semibold">Borrower View</span>
            </p>
          </div>
        ),
        selector: "#tour1-step25",
        side: "bottom",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        prevRoute: defaultDocumentsPath,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Borrower View Upcoming Payments",
        content: (
          <div className="text-grey-primary min-w-[50vw]">
            <p className="mb-3">
              The{" "}
              <span className="font-semibold">Upcoming Payments Widget</span>{" "}
              showcases scheduled payments from the borrower’s perspective.
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">
                  Scheduled Debit Transactions:{" "}
                </span>{" "}
                The widget reflects the interest payment as a scheduled debit
                transaction, clearly indicating the amount due and the payment
                date.
              </li>
              <li>
                <span className="font-semibold">Comprehensive Overview: </span>{" "}
                Borrowers can easily see all upcoming payments, allowing them to
                manage their cash flow effectively and ensure timely payments.
              </li>
              <li>
                <span className="font-semibold">Payment Details: </span> If The
                widget provides essential details about each transaction,
                helping borrowers stay informed about their financial
                obligations.
              </li>
            </ul>
            <p className="mt-3">
              This feature ensures that borrowers have a clear understanding of
              their upcoming payments, facilitating better financial planning
              and management!
            </p>
          </div>
        ),
        selector: "#tour1-step26",
        side: "bottom",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Information About Upcoming Payments",
        content: (
          <div className="text-grey-primary min-w-[400px]">
            <p className="mb-3">
              In the{" "}
              <span className="font-semibold">Upcoming Payments Widget</span>{" "}
              for borrowers, users can quickly access essential features related
              to their scheduled payments:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">
                  Access Transaction Details:
                </span>{" "}
                Borrowers can easily view detailed information about each
                scheduled payment, including amounts, due dates, and any
                associated fees.
              </li>
              <li>
                <span className="font-semibold">View Invoice Document: </span>{" "}
                The widget allows borrowers to access the related invoice
                document for reference, ensuring they have all necessary
                information at hand.
              </li>
              <li>
                <span className="font-semibold">Proceed to Payment: </span>{" "}
                Borrowers can initiate the payment process directly from the
                widget, streamlining the transaction and ensuring timely
                payments.
              </li>
              <li>
                <span className="font-semibold">Contact Lender: </span> If any
                issues or adjustments are needed, borrowers can quickly reach
                out to their lender through the widget to discuss their
                concerns.
              </li>
            </ul>
          </div>
        ),
        selector: "#tour1-step27",
        side: "left",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
        nextRoute: "/document/document-notice",
      },
      {
        icon: <></>,
        title: "Invoice Information",
        content: (
          <div className="text-grey-primary min-w-[400px]">
            <p className="mb-3">
              <span className="font-semibold">Upon clicking View Invoice</span>{" "}
              in the Upcoming Payments Widget, the invoice document addressed to
              the Borrower will be displayed in a drawer.
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">Document Preview:</span> The
                drawer provides a clear preview of the invoice document,
                allowing the borrower to review all relevant information,
                including amounts due, payment terms, and any additional notes.
              </li>
              <li>
                <span className="font-semibold">Download Option: </span> If the
                borrower needs a copy for their records, they can easily
                download the PDF file by clicking the download button, ensuring
                they have access to important documentation.
              </li>
            </ul>
          </div>
        ),
        selector: "#tour1-step28",
        side: "left",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
        prevRoute: defaultDashboardBorrowerPath,
        nextRoute: defaultDashboardBorrowerPath,
      },
      {
        icon: <></>,
        title: "Unscheduled Transactions Actions",
        content: (
          <div className="text-grey-primary min-w-[400px]">
            <p className="mb-3">
              In the Borrower View, users have the ability to initiate
              unscheduled transactions, including:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">Drawdown Requests: </span>{" "}
                Borrowers can submit requests for unscheduled drawdowns,
                allowing them to access additional funds as needed. This feature
                enables flexibility in managing their financial needs.
              </li>
              <li>
                <span className="font-semibold">
                  Principal Prepayment Requests:{" "}
                </span>{" "}
                Borrowers can also initiate requests for principal prepayments,
                allowing them to pay down their loan balance earlier than
                scheduled. This can help reduce interest costs and improve their
                overall financial position.
              </li>
            </ul>
          </div>
        ),
        selector: "#tour1-step29",
        side: "right",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
        nextRoute: "/transaction/drawdown-request",
      },
      {
        icon: <></>,
        title: "Requesting an Unscheduled Transaction",
        content: (
          <div className="text-grey-primary min-w-[400px]">
            <p className="mb-3">
              Initiating an unscheduled transaction is straightforward for
              borrowers:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">Specify Payment Date:</span>
                Borrowers need to enter the desired payment date for the
                transaction.
              </li>
              <li>
                <span className="font-semibold">Enter Amount:</span>
                Specify the amount they wish to request for the drawdown or
                principal prepayment.
              </li>
              <li>
                <span className="font-semibold">
                  Select Rate Option (If Applicable):
                </span>
                Borrowers can choose from the available rate options to tailor
                the transaction according to their needs.
              </li>
              <li>
                <span className="font-semibold">
                  Automatic Population of Attributes:
                </span>
                Remaining attributes will be automatically populated based on
                the associated Loan Terms, ensuring a hassle-free and accurate
                submission process.
              </li>
            </ul>
          </div>
        ),
        selector: "#tour1-step30",
        side: "left",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
        prevRoute: defaultDashboardBorrowerPath,
        nextRoute: defaultDashboardBorrowerPath,
      },
      {
        icon: <></>,
        title: "Unscheduled Transaction Requests Tracking",
        content: (
          <div className="text-grey-primary min-w-[400px]">
            <p className="mb-3">
              Borrowers can easily track the current status of their unscheduled
              transaction requests directly on their Dashboard:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">Status Overview:</span>
                The Dashboard provides a clear overview of all submitted
                requests, allowing borrowers to see whether their requests are
                pending, approved, or declined.
              </li>
              <li>
                <span className="font-semibold">
                  Direct Communication with Lenders:
                </span>
                All requests are communicated directly to the lenders through
                the portal, ensuring a streamlined process and timely updates.
              </li>
              <li>
                <span className="font-semibold">Confirmation Requirement:</span>
                Borrowers will be notified when their requests require lender
                confirmation, allowing them to stay informed about the progress
                and any actions needed.
              </li>
            </ul>
            <p className="mt-3">
              Once an unscheduled transaction is confirmed by the lender, the
              system will automatically recalculate the affected payment
              schedule:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-semibold">Automatic Recalculation:</span>
                The payment schedule will be adjusted to reflect the new
                transaction details, ensuring that all parties have the most
                up-to-date information.
              </li>
              <li>
                <span className="font-semibold">Impact Analysis:</span>
                The recalculated schedule will clearly show how the transaction
                affects the loan, including changes to payment amounts, due
                dates, and overall loan balance.
              </li>
              <li>
                <span className="font-semibold">
                  Visibility for Counterparties:
                </span>
                Both borrowers and lenders can view the updated payment
                schedule, promoting transparency and understanding of the loan's
                new terms.
              </li>
            </ul>
          </div>
        ),
        selector: "#tour1-step31",
        side: "bottom",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Thank You for Exploring DirectLend!",
        content: (
          <div className="text-grey-primary min-w-[40vw]">
            <p className="mb-3">
              Thank you for taking the time to explore the DirectLend Platform!
              We hope this demo has provided you with valuable insights into the
              features and functionalities available for both Borrowers and
              Lenders.
            </p>
            <p className="mb-3">To summarize, you have learned how to:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                Navigate the Dashboard and access key features such as Upcoming
                Payments, Transactions, and Instruments.
              </li>
              <li>
                Manage loan documentation efficiently through the Documents
                Screen.
              </li>
              <li>
                Initiate and track unscheduled transactions, including drawdowns
                and principal prepayments.
              </li>
              <li>
                Understand how transaction confirmations affect the payment
                schedule and loan terms.
              </li>
            </ul>
            <p className="mt-3">
              If you have any questions or would like to discuss how DirectLend
              can meet your specific needs, please don’t hesitate to contact us.
              Our team is here to help you every step of the way! Thank you
              again for your interest in DirectLend, and we look forward to
              connecting with you soon!
            </p>
          </div>
        ),
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
      },
    ],
  },
];
