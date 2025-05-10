import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardDocument from "@/components/molecules/CardDocument";
import { useMemo } from "react";
const documents = [
  {
    id: "doc-1",
    project: "Inteligencia Artificial",
    title: "Introducción a Redes Neuronales en Visión Artificial",
    author: "Wilmer Soto",
    uploadDate: "10/05/2023",
    modifiedDate: "15/05/2023",
    size: "1.8",
    variant: "user",
  },
  {
    id: "doc-2",
    project: "Inteligencia Artificial",
    title: "Algoritmos de Aprendizaje Profundo",
    author: "Carlos López",
    uploadDate: "20/06/2023",
    modifiedDate: "25/06/2023",
    size: "3.5",
    variant: "teacher",
  },
  {
    id: "doc-3",
    project: "Inteligencia Artificial",
    title: "Procesamiento de Lenguaje Natural: Fundamentos",
    author: "Wilmer Soto",
    uploadDate: "01/07/2023",
    modifiedDate: "01/07/2023",
    size: "0.75",
    variant: "user",
  },
  {
    id: "doc-4",
    project: "Inteligencia Artificial",
    title: "Implementación de Redes Generativas Adversariales",
    author: "Wilmer Soto",
    uploadDate: "05/08/2023",
    modifiedDate: "05/08/2023",
    size: "2.2",
    variant: "user",
  },
  {
    id: "doc-5",
    project: "Inteligencia Artificial",
    title: "Optimización de Hiperparámetros en Modelos de IA",
    author: "Carlos López",
    uploadDate: "15/08/2023",
    modifiedDate: "15/08/2023",
    size: "4.1",
    variant: "teacher",
  },

  {
    id: "doc-6",
    project: "Literatura",
    title: "Análisis de Cuentos de Gabriel García Márquez",
    author: "Wilmer Soto",
    uploadDate: "12/08/2023",
    modifiedDate: "12/08/2023",
    size: "1.2",
    variant: "user",
  },
  {
    id: "doc-7",
    project: "Literatura",
    title: "Teoría de la Trama en Novelas Contemporáneas",
    author: "María Hernández",
    uploadDate: "18/08/2023",
    modifiedDate: "18/08/2023",
    size: "0.9",
    variant: "teacher",
  },
  {
    id: "doc-8",
    project: "Literatura",
    title: "Estudios sobre la Poesía de Federico García Lorca",
    author: "Wilmer Soto",
    uploadDate: "22/08/2023",
    modifiedDate: "22/08/2023",
    size: "1.5",
    variant: "user",
  },
  {
    id: "doc-9",
    project: "Literatura",
    title: "La Evolución del Ensayo Literario",
    author: "Lucía Fernández",
    uploadDate: "28/08/2023",
    modifiedDate: "28/08/2023",
    size: "2.0",
    variant: "teacher",
  },
  {
    id: "doc-10",
    project: "Literatura",
    title: "Narrativa y Simbolismo en la Literatura Moderna",
    author: "Wilmer Soto",
    uploadDate: "30/08/2023",
    modifiedDate: "30/08/2023",
    size: "1.1",
    variant: "user",
  },
];

interface DocumentTabsProps {
  selectedProject: string;
}

export default function DocumentTabs({ selectedProject }: DocumentTabsProps) {
  const filteredDocuments = useMemo(() => {
    return documents.filter((document) => document.project === selectedProject);
  }, [documents, selectedProject]);

  const filteredDocumentsUser = useMemo(() => {
    return filteredDocuments.filter((document) => document.variant === "user");
  }, [filteredDocuments]);

  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="grid w-[400px] grid-cols-2">
        <TabsTrigger value="all">Todos</TabsTrigger>
        <TabsTrigger value="user">Mis documentos</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <div className="flex flex-row items-end gap-x-4 overflow-x-auto">
          {filteredDocuments.length > 0 ? (
            filteredDocuments.map((document) => {
              return (
                <CardDocument
                  key={document.id}
                  document={document}
                  cardVariant={document.variant as "user" | "teacher"}
                />
              );
            })
          ) : (
            <p className="text-muted-foreground text-sm">
              No se encontraron documentos para el proyecto seleccionado.
            </p>
          )}
        </div>
      </TabsContent>
      <TabsContent value="user">
        <div className="flex flex-row items-end gap-x-4 overflow-x-auto">
          {filteredDocumentsUser.length > 0 ? (
            filteredDocumentsUser.map((document) => {
              return (
                <CardDocument
                  key={document.id}
                  document={document}
                  cardVariant={document.variant as "user" | "teacher"}
                />
              );
            })
          ) : (
            <p className="text-muted-foreground text-sm">
              No se encontraron documentos para el proyecto seleccionado.
            </p>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
}
