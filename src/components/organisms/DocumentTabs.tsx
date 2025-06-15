"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardDocument from "@/components/molecules/CardDocument";
import { useQuery } from "@apollo/client";
import Loading from "@/app/loading";
import { GET_ENTREGAS, GET_USER } from "@/lib/ApolloQueries";
import { EntregasList, GetUsuario, Proyecto, Usuario } from "@/lib/Interfaces";
import { useMemo } from "react";

interface DocumentTabsProps {
  selectedProject: string;
}

export default function DocumentTabs({ selectedProject }: DocumentTabsProps) {
  const {
    loading: entregasLoading,
    error: entregasError,
    data: entregasData,
  } = useQuery<EntregasList>(GET_ENTREGAS);

  const entregas = entregasData?.findAllEntrega || [];

  const {
    loading: userLoading,
    error: userError,
    data: userData,
  } = useQuery<GetUsuario>(GET_USER, {
    variables: { id: 1 },
  });
  const user = userData?.findUsuarioById;

  const filteredEntregas = useMemo(() => {
    let userEntregas = entregas;

    if (selectedProject) {
      userEntregas = userEntregas.filter(
        (e) => e.proyecto.nombreproyecto === selectedProject,
      );
    }

    if (user) {
      userEntregas = userEntregas.filter((e) => e.usuario.id === user.id);
    }
    return userEntregas;
  }, [entregas, selectedProject, user]);

  if (entregasLoading || userLoading) {
    return <Loading />;
  }

  if (entregasError || userError) {
    return (
      <div className="py-4 text-red-500">
        Error cargando los datos: {entregasError?.message || userError?.message}
      </div>
    );
  }

  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="grid w-[400px] grid-cols-2">
        <TabsTrigger value="all">Todos</TabsTrigger>
        <TabsTrigger value="user">Mis documentos</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <div className="flex flex-row items-end gap-x-4 overflow-x-auto">
          {filteredEntregas.length > 0 ? (
            filteredEntregas.map((entrega) => {
              return (
                <CardDocument
                  key={entrega.id}
                  entrega={entrega}
                  cardVariant={entrega.usuario.rol as "student" | "teacher"}
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
        {/* <div className="flex flex-row items-end gap-x-4 overflow-x-auto">
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
        </div> */}
      </TabsContent>
    </Tabs>
  );
}
