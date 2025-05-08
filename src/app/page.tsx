//import Button from "@/components/atoms/button-old";
import { Button } from "@/components/atoms/button";
import NotificationBell from "@/components/atoms/notification-bell";
import DocumentManagement from "@/components/organisms/document-management";
import DocumentUpload from "@/components/organisms/document-upload";

export default function Home() {
  return (
    <div className="ml-18 mr-40">
      <DocumentManagement />
      <DocumentUpload />
    </div>
  );
}
