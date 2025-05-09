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
  cardVariant: "user" | "teacher";
}

export default function CardDocument({
  documentName = "Documento",
  cardVariant,
}: CardUserProps) {
  return (
    <Card className="mt-2 h-[307px] w-[396px] rounded-sm">
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
      <CardFooter className="flex flex-col gap-y-2">
        <div className="flex min-h-10 w-full justify-between">
          {cardVariant === "user" && (
            <>
              <Button variant={"outline"} className="border-2 border-gray-400">
                Descargar
              </Button>
              <Button variant={"outline"} className="border-2 border-gray-400">
                Editar
              </Button>
              <Button variant={"outline"} className="border-2 border-gray-400">
                Compartir
              </Button>
            </>
          )}
        </div>
        <div className="flex w-full">
          {cardVariant === "user" && (
            <Button variant={"destructive"} className="w-full">
              Eliminar
            </Button>
          )}
          {cardVariant === "teacher" && (
            <Button
              variant={"outline"}
              className="w-full border-2 border-gray-400"
            >
              Descargar
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
