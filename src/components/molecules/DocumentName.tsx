import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DocumentName() {
  return (
    <div>
      <Label className="text-sm font-medium" htmlFor="">
        Nombre del documento
      </Label>
      <Input id="file_input" placeholder="Ingrese el nombre del documento" />
    </div>
  );
}
