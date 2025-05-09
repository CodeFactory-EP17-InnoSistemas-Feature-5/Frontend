import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Car } from "lucide-react";
import CardInfo from "./card-info";
import { Button } from "../ui/button";

interface CardUserProps {
  documentName?: string;
}

export default function CardUser({
  documentName = "Documento",
}: CardUserProps) {
  return (
    <Card className="w-[396px] h-[307px]">
      <CardHeader className="">
        <CardTitle className="text-2xl">{documentName}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardInfo
          author={"Wilmer"}
          uploadDate={"05/05/2025"}
          modifiedDate={"09/05/2025"}
          size={"10"}
        ></CardInfo>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <div className="justify-between gap-5 flex flex-row w-full">
          <Button variant={"outline"} className="border-gray-400 border-2">
            Descargar
          </Button>
          <Button variant={"outline"} className="border-gray-400 border-2">
            Editar
          </Button>
          <Button variant={"outline"} className="border-gray-400 border-2">
            Compartir
          </Button>
        </div>
        <Button variant={"destructive"} className="w-full">
          Eliminar
        </Button>
      </CardFooter>
    </Card>
  );
}
