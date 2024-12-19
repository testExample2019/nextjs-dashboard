import { redirect } from "next/navigation";
import { fetchDeals } from "@/app/lib/data";

export default async function RootPage() {
  redirect(`/template`);
}
