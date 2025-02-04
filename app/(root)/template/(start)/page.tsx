"use client";

import { redirect } from "next/navigation";

const LoanTemplatePage = () => {
  const templates = [
    {
      title: "Fixed",
      subtitle: "Fixed Interest Rate",
      description:
        "Pre-configured for loans with a fixed interest rate. Ideal for predictable cash flow scenarios.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none">
          <path
            d="M35.4687 19.0625L39.7656 12.7344C39.9219 12.5 39.9219 12.1875 39.9219 11.9531C39.9219 10.8594 39.1406 10.0781 38.125 10H21.875C20.7812 10 20 10.8594 20 11.875C20 12.1875 20 12.5 20.1562 12.7344L24.5312 19.0625C9.21873 28.4375 9.99998 40.7031 9.99998 42.1875C9.99998 46.5625 13.8281 50 18.5156 50H41.4062C46.0937 50 49.9219 46.5625 49.9219 42.1875C49.9219 40.7031 50.625 28.3594 35.4687 19.0625ZM34.5312 13.75L31.5625 18.125H28.3594L25.3906 13.75H34.5312ZM46.1719 42.1875C46.1719 44.4531 44.0625 46.25 41.4062 46.25H18.5156C15.8594 46.25 13.75 44.4531 13.75 42.1875C13.6719 35.8594 16.25 28.5156 27.1094 21.875H32.8906C43.5937 28.5156 46.25 35.8594 46.1719 42.1875ZM32.2656 34.2969L28.4375 33.2031C27.9687 33.0469 27.7344 32.5781 27.7344 32.1094C27.7344 31.4844 28.125 31.0156 28.6719 31.0156H31.0937C31.4844 31.0156 31.875 31.0938 32.1875 31.3281C32.2656 31.4062 32.4219 31.4062 32.5781 31.4062C32.7344 31.4062 32.8906 31.3281 33.0469 31.25L34.0625 30.3125C34.1406 30.1562 34.2187 30 34.2187 29.8438C34.2187 29.6094 34.1406 29.375 33.9844 29.2969C33.2031 28.75 32.3437 28.3594 31.3281 28.3594V26.9531C31.3281 26.5625 31.0156 26.3281 30.625 26.3281V26.25H29.2969C28.9062 26.25 28.5937 26.5625 28.5937 26.9531V28.3594C26.5625 28.3594 25 30.0781 25 32.1094C25 33.8281 26.0937 35.3125 27.6562 35.7812L31.4844 36.875C31.9531 37.0312 32.1875 37.5 32.1875 37.9688C32.1875 38.5938 31.7969 39.0625 31.25 39.0625H28.8281C28.4375 39.0625 28.0469 38.9844 27.7344 38.75C27.6562 38.6719 27.5 38.6719 27.3437 38.6719C27.1875 38.6719 27.0312 38.75 26.875 38.8281L25.8594 39.7656C25.7812 39.9219 25.7031 40.0781 25.7031 40.2344C25.7031 40.4688 25.7812 40.7031 25.9375 40.7812C26.7187 41.3281 27.5781 41.7188 28.5937 41.7188V43.125C28.5937 43.5156 28.9062 43.75 29.2969 43.75H30.625C31.0156 43.75 31.3281 43.5156 31.3281 43.125V41.7188C33.3594 41.7188 34.9219 40 34.9219 37.9688C35 36.25 33.8281 34.7656 32.2656 34.2969Z"
            fill="#226EC8"
          />
        </svg>
      ),
    },
    {
      title: "Floating",
      subtitle: "Floating Index Rate",
      description:
        "Designed for loans where the interest rate adjusts periodically based on a market benchmark (e.g., LIBOR). Suitable for environments with fluctuating interest rates.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none">
          <path
            d="M19.1406 31.7188C19.6094 32.1875 20.4688 32.1875 20.9375 31.7188L25 27.6562L31.5625 34.2969C32.0312 34.7656 32.8906 34.7656 33.3594 34.2969L41.9531 25.7031L44.2969 27.9688C45.4688 29.2188 47.5 28.3594 47.5 26.6406V18.75C47.5 18.125 46.875 17.5 46.25 17.5H38.3594C36.6406 17.5 35.7812 19.5312 37.0312 20.7031L39.2969 23.0469L32.5 29.9219L25.8594 23.2812C25.3906 22.8125 24.5312 22.8125 24.0625 23.2812L18.2812 29.0625C17.8125 29.5312 17.8125 30.3906 18.2812 30.8594L19.1406 31.7188ZM48.75 41.25H13.75V16.25C13.75 15.625 13.125 15 12.5 15H11.25C10.5469 15 10 15.625 10 16.25V42.5C10 43.9062 11.0938 45 12.5 45H48.75C49.375 45 50 44.4531 50 43.75V42.5C50 41.875 49.375 41.25 48.75 41.25Z"
            fill="#226EC8"
          />
        </svg>
      ),
    },
    {
      title: "Unitranche",
      subtitle: "First & Last out lenders",
      description:
        "Specifically for loans that combine senior debt and subordinated debt into a single tranche. Simplifies the loan structure and documentation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none">
          <path
            d="M49.375 38.75C47.8125 38.75 46.4844 39.375 45.4688 40.3125L39.375 36.7969C39.7656 35.8594 40 34.8438 40 33.75C40 28.9844 36.0156 25 31.25 25C30.5469 25 29.9219 25.1562 29.2969 25.2344L26.7969 19.8438C27.9688 18.8281 28.75 17.3438 28.75 15.7031C28.75 12.5781 26.1719 10.0781 23.125 10.0781C20 10.0781 17.5 12.5781 17.5 15.7031C17.5 18.75 20 21.3281 23.125 21.3281C23.125 21.3281 23.2031 21.25 23.2812 21.25L25.9375 26.875C23.8281 28.4375 22.5 30.9375 22.5 33.75C22.5 38.5938 26.4062 42.5 31.25 42.5C33.5938 42.5 35.7812 41.5625 37.3438 40L43.8281 43.6719C43.75 43.9062 43.75 44.1406 43.75 44.375C43.75 47.5 46.25 50 49.375 50C52.4219 50 55 47.5 55 44.375C55 41.3281 52.4219 38.75 49.375 38.75ZM23.125 17.5C22.0312 17.5 21.25 16.7188 21.25 15.625C21.25 14.6094 22.0312 13.75 23.125 13.75C24.1406 13.75 25 14.6094 25 15.625C25 16.7188 24.1406 17.5 23.125 17.5ZM31.25 38.75C28.4375 38.75 26.25 36.5625 26.25 33.75C26.25 31.0156 28.4375 28.75 31.25 28.75C33.9844 28.75 36.25 31.0156 36.25 33.75C36.25 36.5625 33.9844 38.75 31.25 38.75ZM49.375 46.25C48.2812 46.25 47.5 45.4688 47.5 44.375C47.5 43.3594 48.2812 42.5 49.375 42.5C50.3906 42.5 51.25 43.3594 51.25 44.375C51.25 45.4688 50.3906 46.25 49.375 46.25ZM45.0781 25.8594L43.5938 23.9062L39.8438 26.7188L41.3281 28.6719L45.0781 25.8594ZM50 25C52.7344 25 55 22.8125 55 20C55 17.2656 52.7344 15 50 15C47.1875 15 45 17.2656 45 20C45 22.8125 47.1875 25 50 25ZM16.875 35H20.625V32.5H16.875V35ZM10 28.75C7.1875 28.75 5 31.0156 5 33.75C5 36.5625 7.1875 38.75 10 38.75C12.7344 38.75 15 36.5625 15 33.75C15 31.0156 12.7344 28.75 10 28.75Z"
            fill="#226EC8"
          />
        </svg>
      ),
    },
    {
      title: "Blank Template",
      subtitle: "Create from scratch",
      description:
        "Start from scratch with a completely customizable template. Ideal for unique or complex loan structures not covered by the pre-defined options.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none">
          <path
            d="M43.8281 17.6562L37.3438 11.0938C36.6406 10.3906 35.625 10 34.6875 10H18.75C16.6406 10 15 11.7188 15 13.75V46.25C15 48.3594 16.6406 50 18.75 50H41.25C43.2812 50 45 48.3594 45 46.25V20.3125C45 19.375 44.5312 18.3594 43.8281 17.6562ZM40.9375 20H35V14.0625L40.9375 20ZM18.75 46.25V13.75H31.25V21.875C31.25 22.9688 32.0312 23.75 33.125 23.75H41.25V46.25H18.75Z"
            fill="#226EC8"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="max-w-5xl w-full px-8 py-32 rounded-lg">
        <h1 className="text-[28px] font-semibold text-grey-primary text-center tracking-[0.3px]">
          Pick your first template and start using DirectLend <br /> for a new
          loan:
        </h1>
        <p className="mt-4 text-grey text-center font-semibold">
          We will prepopulate most of the fields to simplify the loan
          onboarding.
        </p>
        <div
          id="tour1-step0"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10"
        >
          {templates.map((template, index) => (
            <button
              key={index}
              onClick={() => redirect(`/template/setup`)}
              className="flex text-left p-6 border border-grey-border rounded-lg hover:shadow-md transition-shadow duration-200 cursor-pointer"
            >
              <div className="flex flex-col">
                <div className={"text-right"}>
                  <div className="inline-flex flex-col mb-4">
                    <div className="w-8 h-8 flex items-center justify-center">
                      {template.icon}
                    </div>
                    <hr className="h-px mt-4 bg-grey-blue border-0 w-[30px]" />
                  </div>
                </div>

                <h3 className="text-subtitle font-semibold text-grey-primary">
                  {template.title}
                </h3>
                <p className="mt-2 text-sm text-grey">{template.subtitle}</p>
                <p className="mt-2 text-sm text-grey-primary">
                  {template.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanTemplatePage;
