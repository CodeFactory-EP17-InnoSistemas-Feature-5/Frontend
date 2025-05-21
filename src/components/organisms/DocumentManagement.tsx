"use client";

import DocumentFilter from "@/components/organisms/DocumentFilter";
import DocumentUpload from "@/components/organisms/DocumentUpload";
import DocumentView from "@/components/organisms/DocumentView";
import React from "react";

export default function DocumentManagement() {
  const [selectedProject, setSelectedProject] = React.useState("");
  return (
    <>
      <DocumentFilter
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
      <DocumentUpload />
      <DocumentView />
    </>
  );
}
