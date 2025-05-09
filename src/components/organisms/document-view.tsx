import CardDocument from "@/components/molecules/card-document";

export default function DocumentCards() {
  return (
    <div className="mt-5">
      <h1 className="mb-5 text-base font-semibold sm:text-2xl">
        Documentos del proyecto
      </h1>
      <CardDocument cardVariant="user"></CardDocument>
    </div>
  );
}
