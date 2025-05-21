"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import { useNotification } from "@/components/contexts/NotificationContext";

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
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [createDocument] = useMutation(CREATE_DOCUMENT, {
    refetchQueries: ["GetDocumentos"],
  });
  const MAX_FILE_SIZE_MB = 15;
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

  const clearFileInput = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const buttonSave = async () => {
    if (!documentName.trim()) {
      addNotification({
        title: "ERROR",
        variant: "error",
        description: "Nombre del archivo vacio",
      });
      return;
    }
    if (!selectedFile) {
      addNotification({
        title: "ERROR",
        variant: "error",
        description: "Por favor, seleccione un archivo para subir.",
      });
      return;
    }
    const validFileTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!validFileTypes.includes(selectedFile.type)) {
      addNotification({
        title: "ERROR",
        variant: "error",
        description:
          "Tipo de archivo no permitido. Solo se permiten PDF y DOCX.",
      });
      clearFileInput();
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE_BYTES) {
      addNotification({
        title: "ERROR",
        variant: "error",
        description: `El archivo es demasiado grande. El tamaño máximo permitido es ${MAX_FILE_SIZE_MB}MB.`,
      });
      clearFileInput();
      return;
    }

    try {
      await createDocument({
        variables: {
          documentoInput: {
            nombrearchivo: documentName.trim(),
            fechasubida: new Date().toLocaleDateString("es-co"),
            ultimamodificacion: new Date().toLocaleDateString("es-co"),
            tipodocumento:
              selectedFile.type === "application/pdf" ? "PDF" : "DOCX",
            urlubicacion: "www.urldescarga.com/doc-x",
          },
        },
      });
      addNotification({
        title: "EXITO",
        variant: "success",
        description: `Subida de archivo: ${documentName.trim()} exitosa`,
      });
      setDocumentName("");
      clearFileInput();
    } catch (e) {
      addNotification({
        title: "ERROR",
        variant: "error",
        description: `Error: ${e}`,
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
      <Input
        type="file"
        ref={fileInputRef}
        className="w-1/2"
        accept=".pdf, application/pdf, .docx, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
          } else {
            setSelectedFile(null);
          }
        }}
      />
      <Button onClick={buttonSave} className="w-2/7">
        Subir documento
      </Button>
    </>
  );
}
