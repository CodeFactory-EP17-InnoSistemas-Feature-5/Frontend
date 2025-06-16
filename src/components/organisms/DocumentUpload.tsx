import UploadFile from "@/components/molecules/UploadFile";
import Header1 from "../atoms/Header1";

export default function DocumentUpload() {
  return (
    <div className="flex flex-col rounded-md border-1 border-black px-6 pt-2 pb-5 shadow-lg lg:mr-40">
      <div className="flex w-full flex-col gap-2 lg:w-xl">
        <Header1>Subir Documento</Header1>
        <UploadFile />
      </div>
    </div>
  );
}
