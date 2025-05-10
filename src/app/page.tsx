//import Button from "@/components/atoms/button-old";
import { Button } from "@/components/ui/button";
import NotificationBell from "@/components/atoms/NotificationBell";
import DocumentManagement from "@/components/organisms/DocumentManagement";
import DocumentUpload from "@/components/organisms/DocumentUpload";
import DocumentView from "@/components/organisms/DocumentView";

export default function Home() {
  return (
    <div className="mr-40 ml-18 flex flex-col gap-y-5">
      <DocumentManagement />
      <DocumentUpload />
      <DocumentView />
    </div>
  );
}
