import { Button } from "../atoms/button";
import { Input } from "../atoms/input";
import UploadFile from "@/components/molecules/upload-file";
import DocumentName from "@/components/molecules/document-name";

export default function DocumentUpload() {
  return (
    <div className="flex flex-col mt-5 px-6 pt-2 pb-5 border-1 border-black shadow-lg rounded-md">
      <div className="w-lg gap-2 flex flex-col">
        <div className="mb-3">
          <h1 className="font-semibold mb-3 sm:text-2xl text-base">
            Subir Documento
          </h1>
          <DocumentName />
        </div>
        <UploadFile />
      </div>
    </div>
  );
}
