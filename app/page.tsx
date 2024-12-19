import { redirect } from "next/navigation";
import { fetchDeals } from "@/app/lib/data";

export default async function RootPage() {
  const deals = await fetchDeals();
  redirect(`/deals/${deals[0].name.toLowerCase()}/lender`);
}
