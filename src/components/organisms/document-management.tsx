import { Button } from "../atoms/button";
import { Input } from "../atoms/input";
import UploadFile from "../molecules/upload-file";

export default function DocumentManagement() {
  return (
    <div className="flex flex-col mx-5 mt-5 px-4 pt-2 pb-5 border rounded-md">
      <div className="w-lg gap-2 flex flex-col">
        <div className="mb-3">
          <h2 className="font-semibold mb-1">Subir Documento</h2>
          <Input placeholder="Ingrese el nombre del documento" />
        </div>
        <UploadFile />
      </div>
    </div>
  );
}
