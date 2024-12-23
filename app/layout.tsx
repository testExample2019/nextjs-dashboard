import "@/app/ui/global.css";
import { NextStepProvider, NextStep } from "nextstepjs";
import { openSans } from "@/app/ui/fonts";
import { Metadata } from "next";
import { steps } from "./lib/steps";

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
          <NextStep steps={steps}>{children}</NextStep>
        </body>
      </html>
    </NextStepProvider>
  );
}
