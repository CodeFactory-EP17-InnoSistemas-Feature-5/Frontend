import UserHeader from "@/components/organisms/user-header";
import DropdownUser from "../molecules/dropdown-user";

export default function Header() {
  return (
    <div className="flex h-22 w-full flex-row flex-wrap justify-between bg-gray-300 pl-3 text-black">
      <div className="flex items-center justify-center text-base font-bold sm:text-3xl">
        <header>Sistema de gestion de documentos y entrega</header>
      </div>
      <UserHeader />
    </div>
  );
}
