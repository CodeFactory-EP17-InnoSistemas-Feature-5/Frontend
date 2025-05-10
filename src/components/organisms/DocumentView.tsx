import DocumentTabs from "./DocumentTabs";

interface DocumentViewProps {
  selectedProject: string;
}

export default function DocumentView({ selectedProject }: DocumentViewProps) {
  return (
    <div>
      <h1 className="mb-2 text-base font-semibold sm:text-2xl">
        Documentos del proyecto
      </h1>
      <DocumentTabs selectedProject={selectedProject}></DocumentTabs>
    </div>
  );
}
