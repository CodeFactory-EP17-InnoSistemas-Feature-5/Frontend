import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardInfo from "@/components/molecules/card-info";
import { Button } from "@/components/ui/button";
import { Download, SquarePen, Trash2, Share2 } from "lucide-react";
import { Share } from "next/font/google";

interface DocumentInfo {
  title: string;
  author: string;
  uploadDate: string;
  modifiedDate: string;
  size: string;
}
interface CardUserProps {
  document: DocumentInfo;
  cardVariant: "user" | "teacher";
}

export default function CardDocument({ document, cardVariant }: CardUserProps) {
  return (
    <Card className="mt-2 flex h-full min-h-[307px] min-w-[396px] flex-none flex-col rounded-sm">
      <CardHeader className="">
        <CardTitle className="text-2xl">{document.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardInfo
          author={document.author}
          uploadDate={document.uploadDate}
          modifiedDate={document.modifiedDate}
          size={document.size}
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
