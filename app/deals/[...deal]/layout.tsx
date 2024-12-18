import "@/app/ui/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DealLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
