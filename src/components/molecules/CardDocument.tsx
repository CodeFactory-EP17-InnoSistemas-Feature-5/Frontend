"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardInfo from "@/components/molecules/CardInfo";
import { Button } from "@/components/ui/button";
import { Download, SquarePen, Share2, FileText, Boxes } from "lucide-react";
import { useMutation } from "@apollo/client";
import { useNotification } from "@/components/contexts/NotificationContext";
import DeleteAlert from "@/components/molecules/DeleteAlert";
import { DELETE_DOCUMENT } from "@/lib/ApolloQueries";
import { Entrega } from "@/lib/Interfaces";

interface CardUserProps {
  entrega: Entrega;
  cardVariant: "student" | "teacher";
  currentUserId: string;
}

export default function CardDocument({
  entrega,
  cardVariant,
  currentUserId,
}: CardUserProps) {
  const { addNotification } = useNotification();

  const [deleteDocument] = useMutation(DELETE_DOCUMENT, {
    refetchQueries: ["GetDocumentos"],
    onCompleted: (data) => {
      if (data.deleteDocumento) {
        addNotification({
          title: "ÉXITO",
          variant: "success",
          description: `Documento "${entrega.documento.nombrearchivo}" eliminado exitosamente.`,
        });
      }
    },
  });

  const handleDelete = async () => {
    try {
      await deleteDocument({ variables: { id: entrega.id } });
    } catch (e) {
      addNotification({
        title: "ERROR",
        variant: "error",
        description: `Error borrando archivo: ${e}`,
      });
    }
  };

  return (
    <Card className="mt-2 flex h-full min-h-[307px] min-w-[396px] flex-none flex-col rounded-sm">
      <CardHeader className="">
        <CardTitle className="text-2xl">
          <div className="flex w-full items-center justify-between">
            {entrega.documento.nombrearchivo}
            {cardVariant === "student" ? (
              <FileText className="min-h-[31px] min-w-[31px]" />
            ) : (
              <Boxes className="min-h-[31px] min-w-[31px] stroke-[1.5]" />
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardInfo
          author={entrega.usuario.nombreusuario}
          uploadDate={entrega.documento.fechasubida}
          modifiedDate={entrega.documento.ultimamodificacion}
          size={entrega.documento.tamanoarchivo}
        ></CardInfo>
      </CardContent>
      <CardFooter className="flex flex-col gap-y-2">
        <div className="flex min-h-10 w-full justify-between">
          {entrega.usuario.id === currentUserId && (
            <>
              <Button
                variant={"outline"}
                className="border-2 border-gray-400 font-semibold"
              >
                <Download />
                Descargar
              </Button>
              <Button
                variant={"outline"}
                className="border-2 border-gray-400 font-semibold"
              >
                <SquarePen />
                Editar
              </Button>
              <Button
                variant={"outline"}
                className="border-2 border-gray-400 font-semibold"
              >
                <Share2 />
                Compartir
              </Button>
            </>
          )}
        </div>
        <div className="flex w-full">
          {entrega.usuario.id === currentUserId ? (
            <DeleteAlert onConfirmDelete={handleDelete}></DeleteAlert>
          ) : (
            <Button
              variant={"outline"}
              className="w-full border-2 border-gray-400"
            >
              <Download />
              Descargar
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
