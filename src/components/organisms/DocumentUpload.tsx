import UploadFile from "@/components/molecules/UploadFile";

export default function DocumentUpload() {
  return (
    <div className="mr-40 flex flex-col rounded-md border-1 border-black px-6 pt-2 pb-5 shadow-lg">
      <div className="flex w-lg flex-col gap-2">
        <h1 className="mb-3 text-base font-semibold sm:text-2xl">
          Subir Documento
        </h1>
        <UploadFile />
      </div>
    </div>
  );
}
