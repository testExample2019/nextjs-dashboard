import "@/app/ui/global.css";
import { NextStepProvider, NextStep } from "nextstepjs";
import { openSans } from "@/app/ui/fonts";
import { Metadata } from "next";
import NavBar from "@/app/ui/nav-bar";
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
        <body className={`${openSans.className} antialiased`}>
          <NextStep steps={steps}>
            <div className="flex flex-col h-screen md:overflow-hidden max-w-screen-2xl m-auto">
              <div className="w-full">
                <NavBar />
              </div>
              <main className={"h-full"}>{children}</main>
            </div>
          </NextStep>
        </body>
      </html>
    </NextStepProvider>
  );
}
