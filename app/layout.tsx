import "@/app/ui/global.css";
import { NextStep, NextStepProvider } from "nextstepjs";
import { openSans } from "@/app/ui/fonts";
import { Metadata } from "next";
import { steps } from "./lib/steps";
import { ToastProvider } from "@/app/lib/contexts/toast-context";

export const metadata: Metadata = {
  title: {
    template: "Dashboard",
    default: "Dashboard",
  },
  description: "Dashboard",
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
