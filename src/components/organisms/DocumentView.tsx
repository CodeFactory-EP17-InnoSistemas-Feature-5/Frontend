import DocumentTabs from "./DocumentTabs";

// interface DocumentViewProps {
//   selectedProject: string;
// }

export default function DocumentView() {
  return (
    <div>
      <h1 className="mb-2 text-base font-semibold sm:text-2xl">
        Documentos del proyecto
      </h1>
      {/* selectedProject={selectedProject} cuando se habilite nuevamente en DocumenTabs */}
      <DocumentTabs></DocumentTabs>
    </div>
  );
}
