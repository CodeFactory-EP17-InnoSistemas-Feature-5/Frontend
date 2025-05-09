//import Button from "@/components/atoms/button-old";
import { Button } from "@/components/ui/button";
import NotificationBell from "@/components/atoms/notification-bell";
import DocumentManagement from "@/components/organisms/document-management";
import DocumentUpload from "@/components/organisms/document-upload";
import DocumentCards from "@/components/organisms/document-view";

export default function Home() {
  return (
    <div className="mr-40 ml-18 flex flex-col gap-y-2">
      <DocumentManagement />
      <DocumentUpload />
      <DocumentCards />
    </div>
  );
}
