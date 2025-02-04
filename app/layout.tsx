import { NextStep, NextStepProvider } from "nextstepjs";
import { openSans } from "@/app/ui/fonts";
import { Metadata } from "next";
import { steps } from "./lib/steps";
import { ToastProvider } from "@/app/lib/contexts/toast-context";
import { StepsProvider } from "@/app/lib/contexts/steps-context";
import StepCustomCard from "@/app/ui/components/step-custom-card";
import "@/app/ui/global.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: {
    template: "DirectLend Platform",
    default: "DirectLend Platform",
  },
  description:
    "We’re excited to have you on board. Our platform is designed to cater to both borrowers and lenders, ensuring a seamless experience for all users",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextStepProvider>
      <Head>
        <meta property="og:title" content="DirectLend Platform" />
        <meta
          property="og:description"
          content="We’re excited to have you on board. Our platform is designed to cater to both borrowers and lenders, ensuring a seamless experience for all users"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:site_name" content="DirectLend Platform" />
      </Head>
      <html lang="en">
        <body
          id={"app-body"}
          className={`${openSans.className} antialiased bg-grey-o`}
        >
          <NextStep
            shadowOpacity={"0.4"}
            steps={steps}
            cardComponent={StepCustomCard}
          >
            <StepsProvider>
              <ToastProvider>{children}</ToastProvider>
            </StepsProvider>
          </NextStep>
        </body>
      </html>
    </NextStepProvider>
  );
}
