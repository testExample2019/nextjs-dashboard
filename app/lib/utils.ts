import { deals } from "@/app/lib/placeholder-data";

const replaceItemInURL = (url: string, newName: string, type: number) => {
  const parts = url.split("/");
  const position = parts.length - type;
  if (parts[position])
    parts[position] = newName?.toLowerCase().replace(/[^a-z0-9]/g, "");
  return parts.join("/");
};
export const replaceViewItemInURL = (url: string, newName: string) => {
  return replaceItemInURL(url, newName, 1);
};

export const replaceDealItemInURL = (url: string, newName: string) => {
  return replaceItemInURL(url, newName, 2);
};

export const replacePageItemInURL = (url: string, newName: string) => {
  return replaceItemInURL(url, newName, 3);
};

// Function to split camelCase or PascalCase into separate words
export const separateWords = (status: string): string => {
  return status.replace(/([a-z])([A-Z])/g, "$1 $2");
};

export const handleDisplayCorrectDealName = (name: string) => {
  return deals?.find((deal) => deal.slug === name.toLowerCase())?.displayName;
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
};

export const getDefaultPath = (
  page: "dashboard" | "transactions" | "documents" | "instruments",
) => {
  return `/deals/${page}/${deals[0].slug}/lender/`;
};
