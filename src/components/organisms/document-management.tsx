import { ComboboxProjects } from "@/components/molecules/combobox-projects";
import CardUser from "../molecules/card-user";

export default function DocumentManagement() {
  return (
    <div>
      <h1 className="font-semibold my-5 sm:text-2xl text-base">
        Gestión de Documentos
      </h1>
      <ComboboxProjects></ComboboxProjects>
      <CardUser></CardUser>
    </div>
  );
}
