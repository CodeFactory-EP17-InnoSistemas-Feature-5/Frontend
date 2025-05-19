"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useNotification } from "@/components/contexts/NotificationContext";
import { title } from "process";

const CREATE_DOCUMENT = gql`
  mutation CreateDocumento($documentoInput: DocumentoInput!) {
    createDocumento(documentoInput: $documentoInput) {
      id
      nombrearchivo
      tipodocumento
      urlubicacion
      fechasubida
      ultimamodificacion
    }
  }
`;

export default function UploadFile() {
  const { addNotification } = useNotification();
  const [documentName, setDocumentName] = useState("");
  const [createDocument, { loading, error, data }] = useMutation(
    CREATE_DOCUMENT,
    {
      refetchQueries: ["GetDocumentos"],
    },
  );

  const buttonSave = async () => {
    if (!documentName.trim()) {
      addNotification({
        title: "ERROR",
        variant: "error",
        description: "Nombre del archivo vacio",
      });
      return;
    }
    try {
      await createDocument({
        variables: {
          documentoInput: {
            nombrearchivo: documentName.trim(),
            fechasubida: new Date().toLocaleDateString("es-co"),
            ultimamodificacion: new Date().toLocaleDateString("es-co"),
            tipodocumento: "PDF",
            urlubicacion: "www.urldescarga.com/doc-x",
          },
        },
      });
      addNotification({
        title: "EXITO",
        variant: "success",
        description: `Subida de archivo: ${documentName.trim()} exitosa`,
      });
    } catch (e: any) {
      addNotification({
        title: "ERROR",
        variant: "error",
        description: `Error: ${e.message}`,
      });
    }
  };

  return (
    <>
      <Label className="text-sm font-medium" htmlFor="text">
        Nombre del documento
      </Label>
      <Input
        type="text"
        value={documentName}
        onChange={(e) => setDocumentName(e.target.value)}
        className="mb-3"
        placeholder="Ingrese el nombre del documento"
      />
      <label className="text-sm font-medium">
        Archivo (PDF, DOCX, max. 15MB)
      </label>
      <Input type="file" className="w-1/2" />
      <Button onClick={buttonSave} className="w-2/7">
        Subir documento
      </Button>
    </>
  );
}
