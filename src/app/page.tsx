import Button from "@/app/components/atoms/button";
import NotificationBell from "@/app/components/atoms/notification-bell";

export default function Home() {
  return (
    <div>
      <NotificationBell />
      <Button className="danger">Texto de prueba</Button>
    </div>
  );
}
