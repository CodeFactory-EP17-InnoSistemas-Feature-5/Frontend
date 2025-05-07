import { Button } from "../atoms/button";
import { Input } from "../atoms/input";
import UploadFile from "../molecules/upload-file";
import DocumentName from "../molecules/document-name";

export default function DocumentManagement() {
  return (
    <div className="flex flex-col mx-5 mt-5 px-6 pt-2 pb-5 border rounded-md">
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
