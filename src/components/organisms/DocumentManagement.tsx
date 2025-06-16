"use client";

import DocumentFilter from "@/components/organisms/DocumentFilter";
import DocumentUpload from "@/components/organisms/DocumentUpload";
import DocumentView from "@/components/organisms/DocumentView";
import React from "react";

export default function DocumentManagement() {
  return (
    <>
      <DocumentFilter />
      <DocumentUpload />
      <DocumentView />
    </>
  );
}
