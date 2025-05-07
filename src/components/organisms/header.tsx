import NotificationBell from "../atoms/notification-bell";

export default function Header() {
  return (
    <div className="flex flex-row w-full h-20 bg-gray-300 border-b border-black text-black pl-3 justify-between">
      <header className="flex items-center justify-center font-bold text-3xl">
        Sistema de gestion de documentos y entrega
      </header>
      <div className="flex items-center justify-center pr-3">
        <NotificationBell className="" />
        <p className="ml-3 font-medium text-lg">
          Hola, &lt;&lt;Usuario&gt;&gt;
        </p>
      </div>
    </div>
  );
}
