import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function UploadFile() {
  return (
    <>
      <label className="text-sm font-medium">
        Archivo (PDF, DOC, TXT, JPG, PNG, PPTX, ZIP, max. 15MB)
      </label>
      <Input type="file" className="w-1/2" />
      <Button className="w-2/7">Subir documento</Button>
    </>
  );
}
