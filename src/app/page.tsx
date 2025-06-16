import DocumentManagement from "@/components/organisms/DocumentManagement";

export default function Home() {
  return (
    <div className="mr-5 ml-5 flex flex-col gap-y-5 sm:mr-10 sm:ml-10 lg:mr-18 lg:ml-18">
      <DocumentManagement />
    </div>
  );
}
