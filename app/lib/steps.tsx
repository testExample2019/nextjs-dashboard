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
        showSkip: false,
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
        showControls: false,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <>🚀</>,
        title: "Technologies used",
        content: (
          <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquid cupiditate dolore doloremque exercitationem ipsum labore mollitia non numquam odio perferendis quae quaerat quam quisquam quos reprehenderit, tempore totam.
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
        icon: <>🚀</>,
        title: "Technologies used",
        content: (
          <p>
            Deals
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
        showSkip: false,
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
        selector: "#tour1-step6",
        side: "top",
        showControls: true,
        showSkip: false,
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
        selector: "#tour1-step7",
        side: "top",
        showControls: true,
        showSkip: false,
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
        selector: "#tour1-step8",
        side: "top",
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
      },
    ],
  },
];
