import CardDocument from "@/components/molecules/CardDocument";
import DocumentTabs from "./DocumentTabs";

export default function DocumentView() {
  return (
    <div>
      <h1 className="mb-2 text-base font-semibold sm:text-2xl">
        Documentos del proyecto
      </h1>
      <DocumentTabs></DocumentTabs>
    </div>
  );
}
