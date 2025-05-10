import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardDocument from "@/components/molecules/CardDocument";
const documents = [
  {
    id: "doc-1",
    title: "Informe de Progreso Q1",
    author: "Wilmer Soto",
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
    author: "Wilmer Soto",
    uploadDate: "01/07/2023",
    modifiedDate: "01/07/2023",
    size: "0.75",
    variant: "user",
  },
];

interface DocumentTabsProps {
  nameFilter?: string;
}

export default function DocumentTabs() {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="grid w-[400px] grid-cols-2">
        <TabsTrigger value="all">Todos</TabsTrigger>
        <TabsTrigger value="user">Mis documentos</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <div className="flex flex-row items-end gap-x-4 overflow-x-auto">
          {documents.map((document) => (
            <CardDocument
              key={document.id}
              document={document}
              cardVariant={document.variant as "user" | "teacher"}
            />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="user">
        <div className="flex flex-row items-end gap-x-4 overflow-x-auto">
          {documents
            .filter((document) => document.variant === "user")
            .map((document) => (
              <CardDocument
                key={document.id}
                document={document}
                cardVariant={document.variant as "user" | "teacher"}
              />
            ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
