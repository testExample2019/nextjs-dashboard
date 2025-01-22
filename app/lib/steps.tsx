import { Tour } from "nextstepjs";
import { defaultDashboardPath } from "@/app/lib/constants";

export const steps: Tour[] = [
  {
    tour: "mainTour",
    steps: [
      {
        icon: "👋",
        title: "Welcome to DirectLend Platform!",
        content: (
          <div className="text-grey-primary">
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
        blockKeyboardControl: true,
      },
      {
        icon: <></>,
        title: "Get Started with DirectLend",
        content: (
          <div className="text-grey-primary">
            <p>
              To kick things off, we will begin with the onboarding process for
              a new Loan. To simplify the Loan creation, we invite you to select
              a template that best fits your needs. By choosing a template, we
              can automatically repopulate many fields in the system, saving you
              time and effort in the process.
            </p>
            <p>Let’s get started by selecting a simple Fixed loan template</p>
          </div>
        ),
        selector: "#tour1-step2",
        side: "bottom",
        showSkip: false,
        showControls: true,
        pointerPadding: 10,
        pointerRadius: 10,
        nextRoute: "/template/setup",
        blockKeyboardControl: true,
      },
      {
        icon: <></>,
        title: "Here is the New Loan Setup Wizard!",
        content: (
          <div className="text-grey-primary">
            <p className="mb-3">
              This intuitive tool is designed to help you efficiently configure
              all the essential details of your loan.
            </p>
            <p className="text-base font-semibold mb-3">
              Here’s what you can do in this wizard:
            </p>
            <ul className="list-disc list-inside space-y-3 max-h-60 overflow-y-auto">
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
        selector: "#tour1-step3",
        side: "right",
        showSkip: false,
        showControls: true,
        prevRoute: "/template",
        pointerPadding: 10,
        pointerRadius: 10,
        blockKeyboardControl: true,
      },
      {
        icon: <></>,
        title: "Preview Transactions Schedule Panel",
        content: (
          <div className="text-grey-primary">
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
            <ul className="list-disc list-inside space-y-3 max-h-60 overflow-y-scroll">
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
        selector: "#tour1-step3-1",
        side: "left",
        showSkip: false,
        showControls: true,
        pointerPadding: 10,
        pointerRadius: 10,
        blockKeyboardControl: true,
      },
      {
        icon: <></>,
        title: "Adjust Annual Rate in Your Loan",
        content: (
          <div className="text-grey-primary">
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
        selector: "#tour1-step3-2",
        side: "top",
        showSkip: false,
        showControls: true,
        pointerPadding: 10,
        pointerRadius: 10,
        blockKeyboardControl: true,
      },
      {
        icon: <></>,
        title: "Advanced mode",
        content: (
          <div className="text-grey-primary">
            If you require more sophisticated controls for your loan setup, you
            can easily switch the wizard to{" "}
            <span className="font-semibold">Advanced Mode</span>.
          </div>
        ),
        selector: "#tour1-step3-3",
        side: "bottom",
        showSkip: false,
        showControls: true,
        pointerPadding: 10,
        pointerRadius: 10,
        blockKeyboardControl: true,
      },
      {
        icon: <></>,
        title: "Advanced mode features",
        content: (
          <div className="text-grey-primary">
            <p className="mb-3">
              This mode provides you with enhanced features and options tailored
              for more complex lending scenarios.
            </p>
            <p className="text-base font-semibold mb-3">
              Here’s what you can access in Advanced Mode:
            </p>
            <ul className="list-disc list-inside space-y-3 max-h-60 overflow-y-auto">
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
        selector: "#tour1-step3-4",
        side: "top",
        showSkip: false,
        showControls: true,
        nextRoute: defaultDashboardPath,
        pointerPadding: 10,
        pointerRadius: 10,
        blockKeyboardControl: true,
      },
      {
        icon: <></>,
        title: "Welcome to the Dashboard!",
        content: (
          <div className="text-grey-primary">
            This central hub provides you with a comprehensive overview of all
            your deals, loans, and related events, allowing you to effortlessly
            track and manage your lending activities.
          </div>
        ),
        selector: "#tour1-step4",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        prevRoute: "/template/setup",
        pointerRadius: 10,
        blockKeyboardControl: true,
      },
      {
        icon: <></>,
        title: "Deals Panel",
        content: (
          <div className="text-grey-primary">
            <p className="mb-3">
              The Deals Panel on your Dashboard provides an efficient way to
              view all your Loan deals and their current positions:
            </p>
            <ul className="list-disc list-inside space-y-3 max-h-60 overflow-y-auto">
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
        selector: "#tour1-step5",
        side: "right",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
        blockKeyboardControl: true,
      },
      {
        icon: <></>,
        title: "The Upcoming Payments Widget",
        content: (
          <div className="text-grey-primary">
            <p className="mb-3">
              <span className="font-semibold">
                The Upcoming Payments Widget
              </span>{" "}
              on your Dashboard highlights the closest scheduled payments,
              including both debits and credits.
            </p>
            <ul className="list-disc list-inside space-y-3 max-h-60 overflow-y-auto">
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
        selector: "#tour1-step5-1",
        side: "top",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
        blockKeyboardControl: true,
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
        selector: "#tour1-step5-2",
        side: "top",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
        blockKeyboardControl: true,
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
            <ul className="list-disc list-inside space-y-3 max-h-60 overflow-y-auto">
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
        selector: "#tour1-step5-3",
        side: "top",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
        blockKeyboardControl: true,
      },
      {
        icon: <></>,
        title: "Information About Scheduled Events",
        content: (
          <div className="text-grey-primary">
            <ul className="list-disc list-inside space-y-3 max-h-60 overflow-y-auto">
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
        selector: "#tour1-step5-4",
        side: "left",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
        blockKeyboardControl: true,
      },
      {
        icon: <></>,
        title: "View Notice",
        content: (
          <div className="text-grey-primary">
            Click <span className={"font-semibold"}>View notice</span> to access
            information
          </div>
        ),
        selector: "#tour1-step5-5",
        side: "top",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
        nextRoute: "/document/document-1",
        blockKeyboardControl: true,
      },
      {
        icon: <></>,
        title: "Document Preview",
        content: (
          <div className="text-grey-primary">
            <p className="mb-3">
              When you select to view the notice document, a drawer will open to
              display the document preview.
            </p>
            <ul className="list-disc list-inside space-y-3 max-h-60 overflow-y-auto">
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
        selector: "#tour1-step5-6",
        side: "left",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        prevRoute: defaultDashboardPath,
        pointerRadius: 10,
        blockKeyboardControl: true,
      },
      {
        icon: <></>,
        title: "Transaction Details",
        content: (
          <div className="text-grey-primary">
            <p className="mb-3">
              The <span className="font-semibold">Transaction Details</span> tab
              provides a comprehensive list of transactions related to the
              Notice.
            </p>
            <ul className="list-disc list-inside space-y-3 max-h-60 overflow-y-auto">
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
        selector: "#tour1-step5-7",
        side: "left",
        showControls: true,
        showSkip: false,
        nextRoute: defaultDashboardPath,
        pointerPadding: 10,
        pointerRadius: 10,
        blockKeyboardControl: true,
      },
      {
        icon: <></>,
        title: "Switch Between Lender and Borrower Views",
        content: (
          <p>
            Easily toggle between Lender and Borrower perspectives to manage
            relevant data:
            <br />
            <b>• Lender View: </b>Focus on loan commitments, funded amounts, and
            borrower details. <br />
            <b>• Borrower View: </b>
            Analyze loan terms, repayment schedules, and payment history.
            <br />
            Use the toggle to seamlessly transition and gain insights tailored
            to your role.
          </p>
        ),
        selector: "#tour1-step7",
        side: "top",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
        blockKeyboardControl: true,
      },
    ],
  },
];
