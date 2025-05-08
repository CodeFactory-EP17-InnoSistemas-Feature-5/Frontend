import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/molecules/dropdown-menu";
import NotificationBell from "@/components/atoms/notification-bell";

export default function DropdownNotification() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <NotificationBell className="mr-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="font-bold">
          Notificaciones
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Notificacion 1</DropdownMenuItem>
        <DropdownMenuItem>Notificacion 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
