import { Button } from "../atoms/button";
import { Input } from "../atoms/input";

export default function UploadFile() {
  return (
    <>
      <label className="text-sm font-semibold">
        Archivo (PDF, DOC, TXT, JPG, PNG, PPTX, ZIP, max. 15MB)
      </label>
      <Input type="file" className="w-1/2" />
      <Button className="w-2/6">Subir documento</Button>
    </>
  );
}
