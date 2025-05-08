import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/molecules/dropdown-menu";

export default function DropdownProject() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center justify-center w-full h-full p-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Proyectos
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="font-bold">Proyectos</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Proyecto 1</DropdownMenuItem>
        <DropdownMenuItem>Proyecto 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
