import { redirect } from "next/navigation";
import { startPagePath } from "@/app/lib/constants";

export default async function RootPage() {
  redirect(startPagePath);
}
