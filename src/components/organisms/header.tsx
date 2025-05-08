import UserHeader from "@/components/organisms/user-header";
import DropdownUser from "../molecules/dropdown-user";

export default function Header() {
  return (
    <div className="flex flex-row w-full h-20 bg-gray-300 border-b border-black text-black pl-3 justify-between flex-wrap">
      <div className="flex items-center justify-center font-bold text-base sm:text-3xl">
        <header>Sistema de gestion de documentos y entrega</header>
      </div>
      <UserHeader />
    </div>
  );
}
