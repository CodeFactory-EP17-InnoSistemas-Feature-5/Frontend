import UserHeader from "@/components/molecules/user-header";
import DropdownUser from "../molecules/dropdown-user";

export default function Header() {
  return (
    <div className="flex flex-row w-full h-20 bg-gray-300 border-b border-black text-black pl-3 justify-between flex-wrap">
      <header className="flex items-center justify-center font-bold text-base sm:text-3xl">
        Sistema de gestion de documentos y entrega
      </header>
      <UserHeader children={<DropdownUser />} />
    </div>
  );
}
