import CardDocument from "@/components/molecules/card-document";
const documents = [
  {
    id: "doc-1", // Added an ID for the key prop when mapping
    title: "Informe de Progreso Q1",
    author: "Ana García",
    uploadDate: "10/05/2023",
    modifiedDate: "15/05/2023",
    size: "1.8",
    variant: "user",
  },
  {
    id: "doc-2",
    title: "Presentación Final del Proyecto IA",
    author: "Carlos López",
    uploadDate: "20/06/2023",
    modifiedDate: "25/06/2023",
    size: "3.5",
    variant: "teacher",
  },
  {
    id: "doc-3",
    title: "Manual de Usuario - V1.0",
    author: "María Rodríguez",
    uploadDate: "01/07/2023",
    modifiedDate: "01/07/2023",
    size: "0.75",
    variant: "user",
  },
];

export default function DocumentView() {
  return (
    <div className="mt-5">
      <h1 className="mb-2 text-base font-semibold sm:text-2xl">
        Documentos del proyecto
      </h1>
      <div className="overflow-x-auto pb-6">
        <div className="flex flex-row items-end gap-x-4">
          {documents.map((document) => (
            <CardDocument
              key={document.id}
              document={document}
              cardVariant={document.variant as "user" | "teacher"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
