import { ComboboxProjects } from "@/components/molecules/combobox-projects";

export default function DocumentManagement() {
  return (
    <div>
      <h1 className="mb-3 text-base font-semibold sm:text-2xl">
        Gestión de Documentos
      </h1>
      <ComboboxProjects></ComboboxProjects>
    </div>
  );
}
