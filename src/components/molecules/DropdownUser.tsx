import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import UserCircle from "@/components/atoms/UserCircle";

export default function DropdownUser() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <UserCircle className="mr-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="font-bold">Mi cuenta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Configuracion</DropdownMenuItem>
        <DropdownMenuItem>Cerrar sesion</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
