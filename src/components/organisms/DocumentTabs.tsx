"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardDocument from "@/components/molecules/CardDocument";
import { useQuery } from "@apollo/client";
import Loading from "@/app/loading";
import { GET_ENTREGAS, GET_USER } from "@/lib/ApolloQueries";
import { EntregasList, GetUsuario } from "@/lib/Interfaces";
import { useMemo } from "react";
import { useSelectedProject } from "@/components/contexts/SelectedProjectContext";

export default function DocumentTabs() {
  const { selectedProjectId } = useSelectedProject();
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
  } = useQuery<GetUsuario>(GET_USER);
  const user = userData?.findUsuarioById;

  const filteredProyectoEntregas = useMemo(() => {
    let proyectoEntregas = entregas;

    if (selectedProjectId) {
      proyectoEntregas = proyectoEntregas.filter(
        (e) => e.proyecto.id === selectedProjectId,
      );
    }
    return proyectoEntregas;
  }, [entregas, selectedProjectId]);

  const filteredUserEntregas = useMemo(() => {
    let userEntregas = filteredProyectoEntregas;

    if (selectedProjectId) {
      userEntregas = userEntregas.filter(
        (e) => e.usuario.nombreusuario === user?.nombreusuario,
      );
    }
    return userEntregas;
  }, [entregas, user]);

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
      <TabsList className="grid w-auto grid-cols-2 lg:w-[400px]">
        <TabsTrigger value="all">Todos</TabsTrigger>
        <TabsTrigger value="user">Mis documentos</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <div className="flex flex-row items-end gap-x-4 overflow-x-auto pb-4">
          {filteredProyectoEntregas.length > 0 ? (
            filteredProyectoEntregas.map((entrega) => {
              return (
                <CardDocument
                  key={entrega.id}
                  entrega={entrega}
                  currentUserId={user?.id || ""}
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
        <div className="flex flex-row items-end gap-x-4 overflow-x-auto pb-4">
          {filteredUserEntregas.length > 0 ? (
            filteredUserEntregas.map((entrega) => {
              return (
                <CardDocument
                  key={entrega.id}
                  entrega={entrega}
                  currentUserId={user?.id || ""}
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
    </Tabs>
  );
}
