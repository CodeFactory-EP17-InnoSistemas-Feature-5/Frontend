"use client";

import React, { createContext, useContext, useState } from "react";

interface SelectedProjectProviderProps {
  children: React.ReactNode;
}

interface SelectedProjectId {
  selectedProjectId: string | null;
  setSelectedProjectId: (id: string | null) => void;
}

const SelectedProjectContext = createContext<SelectedProjectId | undefined>(
  undefined,
);

export function useSelectedProject() {
  const context = useContext(SelectedProjectContext);
  if (context === undefined) {
    throw new Error("Error con SelectedProjectContext");
  }
  return context;
}

export function SelectedProjectProvider({
  children,
}: SelectedProjectProviderProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );

  const contextValue: SelectedProjectId = {
    selectedProjectId,
    setSelectedProjectId,
  };

  return (
    <SelectedProjectContext.Provider value={contextValue}>
      {children}
    </SelectedProjectContext.Provider>
  );
}
