import "@/app/ui/global.css";
import { NextStep, NextStepProvider } from "nextstepjs";
import { openSans } from "@/app/ui/fonts";
import { Metadata } from "next";
import { steps } from "./lib/steps";
import { ToastProvider } from "@/app/lib/contexts/toast-context";

export const metadata: Metadata = {
  title: {
    template: "DirectLend Platform",
    default: "DirectLend Platform",
  },
  description:
    "We’re excited to have you on board. Our platform is designed to cater to both Borrowers and Lenders, ensuring a seamless experience for all users",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextStepProvider>
      <html lang="en">
        <body className={`${openSans.className} antialiased bg-grey-o`}>
          <NextStep shadowOpacity={"0.1"} steps={steps}>
            <ToastProvider>{children}</ToastProvider>
          </NextStep>
        </body>
      </html>
    </NextStepProvider>
  );
}
