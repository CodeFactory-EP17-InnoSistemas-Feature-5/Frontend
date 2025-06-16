import Header1 from "@/components/atoms/Header1";
import DocumentTabs from "@/components/organisms/DocumentTabs";

export default function DocumentView() {
  return (
    <div className="">
      <Header1>Documentos del proyecto</Header1>
      <DocumentTabs></DocumentTabs>
    </div>
  );
}
