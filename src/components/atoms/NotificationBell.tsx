import { Bell } from "lucide-react";
export default function NotificationBell({
  className,
}: {
  className?: string;
}) {
  return <Bell className={`${className}`} />;
}
