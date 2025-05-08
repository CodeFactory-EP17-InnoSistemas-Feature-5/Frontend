import { ComboboxProjects } from "@/components/molecules/combobox-projects";

export default function DocumentManagement() {
  return (
    <div>
      <h1 className="font-semibold my-5 sm:text-2xl text-base">
        Gestión de Documentos
      </h1>
      <ComboboxProjects></ComboboxProjects>
    </div>
  );
}
