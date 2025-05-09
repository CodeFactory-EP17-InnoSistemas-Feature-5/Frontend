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
