import { Tour } from "nextstepjs";

export const steps: Tour[] = [
  {
    tour: "mainTour",
    steps: [
      {
        icon: "👋",
        title: "Welcome to PCM!",
        content: (
          <p>
            We’ll handle the heavy lifting by prepopulating most fields,
            ensuring a seamless and efficient loan onboarding experience.
          </p>
        ),
        side: "right",
        showControls: true,
        showSkip: false,
      },
      {
        icon: <></>,
        title: "Get Started with PCM",
        content: (
          <p>
            Pick your first template and start using PCM for a new loan. We will
            prepopulate most of the fields to simplify the loan onboarding
            process, making it faster and easier for you to get started.
          </p>
        ),
        selector: "#tour1-step2",
        side: "bottom",
        showControls: false,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Configure Your Loan Instrument",
        content: (
          <p>
            Fill out the details to set up your loan instrument. Define key
            information such as loan type, amount, issue and maturity dates, and
            borrower and lender details. You can also specify rate and payment
            details to ensure accurate loan terms. Drag and drop documentation
            files to complete the setup effortlessly.
          </p>
        ),
        selector: "#tour1-step3",
        side: "right",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Save and Proceed",
        content: (
          <p>
            Ensure all required fields are filled out accurately before saving.
            Click the save button to confirm your loan setup details and proceed
            to the next step in the onboarding process.
          </p>
        ),
        selector: "#tour1-step4",
        side: "top",
        showControls: false,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Manage Deals for Active Lender",
        content: (
          <div>
            <p>Explore all deal-related information, including:</p>
            <ul>
              <li>
                <b>• Total Commitment:</b> The full loan amount agreed upon.
              </li>
              <li>
                <b>• Funded Amount:</b> The portion of the loan disbursed.
              </li>
              <li>
                <b>• Unfunded Balance:</b> Remaining loan balance yet to be
                disbursed.
              </li>
            </ul>
            <p className={"mt-2"}>
              Review key metrics and take necessary actions to ensure seamless
              deal management.
            </p>
          </div>
        ),
        selector: "#tour1-step5",
        side: "top",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <></>,
        title: "Upcoming Payments",
        content: (
          <p>
            Keep track of all upcoming and overdue payments in one place.
            <br />• <b>Debits/Credits Tab:</b> View pending prepayment fees,
            interest, and principal repayments. <br />{" "}
            <b>• Overdue Payments:</b> Highlighted in red for immediate
            attention. <br /> <b>• Calendar View:</b> Quickly navigate through
            payment dates to plan ahead. <br /> Take necessary actions, such as
            approving payments, to ensure timely processing and maintain smooth
            operations.
          </p>
        ),
        selector: "#tour1-step6",
        side: "top",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
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
            borrower details. <br/>
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
      },
    ],
  },
];
