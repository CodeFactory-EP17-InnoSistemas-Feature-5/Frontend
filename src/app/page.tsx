"use client";

import DocumentManagement from "@/components/organisms/DocumentManagement";
import DocumentUpload from "@/components/organisms/DocumentUpload";
import DocumentView from "@/components/organisms/DocumentView";
import React from "react";

export default function Home() {
  const [selectedProject, setSelectedProject] = React.useState("");
  return (
    <div className="mr-18 ml-18 flex flex-col gap-y-5">
      <DocumentManagement
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
      <DocumentUpload />
      <DocumentView />
    </div>
  );
}
