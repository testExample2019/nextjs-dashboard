import { Tour } from "nextstepjs";

export const steps: Tour[] = [
  {
    tour: "mainTour",
    steps: [
      {
        icon: "👋",
        title: "Welcome",
        content: (
          <p>
            Onboarding never been easier! This is how card looks like without
            selector.
            <br />
            <br />
            You can use buttons or arrow keys to navigate through the tour.
          </p>
        ),
        side: "right",
        showControls: true,
        showSkip: true,
      },
      {
        icon: <>🚀</>,
        title: "Technologies used",
        content: (
          <p>
            NextStep is built with Next.js, TailwindCSS, Framer Motion and Radix
            UI.
          </p>
        ),
        selector: "#tour1-step2",
        side: "top",
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <>🚀</>,
        title: "Technologies used",
        content: (
          <p>
            NextStep is built with Next.js, TailwindCSS, Framer Motion and Radix
            UI.
          </p>
        ),
        selector: "#tour1-step3",
        side: "top",
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <>🚀</>,
        title: "Technologies used",
        content: (
          <p>
            NextStep is built with Next.js, TailwindCSS, Framer Motion and Radix
            UI.
          </p>
        ),
        selector: "#tour1-step4",
        side: "top",
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <>🚀</>,
        title: "Technologies used",
        content: (
          <p>
            NextStep is built with Next.js, TailwindCSS, Framer Motion and Radix
            UI.
          </p>
        ),
        selector: "#tour1-step5",
        side: "top",
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
    ],
  },
];
