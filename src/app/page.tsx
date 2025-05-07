//import Button from "@/components/atoms/button-old";
import { Button } from "@/components/atoms/button";
import NotificationBell from "@/components/atoms/notification-bell";

export default function Home() {
  return (
    <div>
      <NotificationBell />
      <Button variant="outline">Texto de prueba</Button>
    </div>
  );
}
