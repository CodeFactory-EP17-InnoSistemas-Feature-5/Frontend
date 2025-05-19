import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardInfo from "@/components/molecules/CardInfo";
import { Button } from "@/components/ui/button";
import {
  Download,
  SquarePen,
  Trash2,
  Share2,
  FileText,
  Boxes,
} from "lucide-react";

interface DocumentInfo {
  nombrearchivo: string;
  tipodocumento: string;
  urlubicacion: string;
  fechasubida: string;
  ultimamodificacion: string;
}
interface CardUserProps {
  document: DocumentInfo;
  cardVariant: "user" | "teacher";
}

export default function CardDocument({ document, cardVariant }: CardUserProps) {
  return (
    <Card className="mt-2 flex h-full min-h-[307px] min-w-[396px] flex-none flex-col rounded-sm">
      <CardHeader className="">
        <CardTitle className="text-2xl">
          <div className="flex w-full items-center justify-between">
            {document.nombrearchivo}
            {cardVariant === "user" ? (
              <FileText className="min-h-[31px] min-w-[31px]" />
            ) : (
              <Boxes className="min-h-[31px] min-w-[31px] stroke-[1.5]" />
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardInfo
          author={"Wilmer Soto"}
          uploadDate={document.fechasubida}
          modifiedDate={document.ultimamodificacion}
          size={"1.8"}
        ></CardInfo>
      </CardContent>
      <CardFooter className="flex flex-col gap-y-2">
        <div className="flex min-h-10 w-full justify-between">
          {cardVariant === "user" && (
            <>
              <Button
                variant={"outline"}
                className="border-2 border-gray-400 font-semibold"
              >
                <Download />
                Descargar
              </Button>
              <Button
                variant={"outline"}
                className="border-2 border-gray-400 font-semibold"
              >
                <SquarePen />
                Editar
              </Button>
              <Button
                variant={"outline"}
                className="border-2 border-gray-400 font-semibold"
              >
                <Share2 />
                Compartir
              </Button>
            </>
          )}
        </div>
        <div className="flex w-full">
          {cardVariant === "user" && (
            <Button
              variant={"outline"}
              className="w-full border-2 border-gray-400 font-semibold text-red-500 hover:bg-red-400 hover:text-black"
            >
              <Trash2 />
              Eliminar
            </Button>
          )}
          {cardVariant === "teacher" && (
            <Button
              variant={"outline"}
              className="w-full border-2 border-gray-400"
            >
              <Download />
              Descargar
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
