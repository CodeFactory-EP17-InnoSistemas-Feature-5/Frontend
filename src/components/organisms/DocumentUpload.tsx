import { Button } from "../ui/button";
import { Input } from "../ui/input";
import UploadFile from "@/components/molecules/UploadFile";
import DocumentName from "@/components/molecules/DocumentName";

export default function DocumentUpload() {
  return (
    <div className="mt-5 flex flex-col rounded-md border-1 border-black px-6 pt-2 pb-5 shadow-lg">
      <div className="flex w-lg flex-col gap-2">
        <div className="mb-3">
          <h1 className="mb-3 text-base font-semibold sm:text-2xl">
            Subir Documento
          </h1>
          <DocumentName />
        </div>
        <UploadFile />
      </div>
    </div>
  );
}
