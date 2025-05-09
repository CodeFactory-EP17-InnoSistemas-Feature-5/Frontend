import { BellIcon } from "@heroicons/react/24/outline";
export default function NotificationBell({
  className,
}: {
  className?: string;
}) {
  return <BellIcon className={`w-6 ${className}`} />;
}
