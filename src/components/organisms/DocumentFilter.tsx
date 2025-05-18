import ComboboxProjects from "@/components/molecules/ComboboxProjects";

interface DocumentManagementProps {
  selectedProject: string;
  setSelectedProject: (project: string) => void;
}

export default function DocumentFilter({
  selectedProject,
  setSelectedProject,
}: DocumentManagementProps) {
  return (
    <div>
      <h1 className="mb-3 text-base font-semibold sm:text-2xl">
        Gestión de Documentos
      </h1>
      <ComboboxProjects
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      ></ComboboxProjects>
    </div>
  );
}
