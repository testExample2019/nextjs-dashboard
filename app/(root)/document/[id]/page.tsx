import React from "react";
import { fetchDocumentById } from "@/app/lib/data";
import DocumentView from "@/app/ui/deals/documents/document-view";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const document = await fetchDocumentById(id);
  return <DocumentView document={document} />;
};

export default Page;
