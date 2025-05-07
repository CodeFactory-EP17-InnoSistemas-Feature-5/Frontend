import NotificationBell from "../atoms/notification-bell";
import UserCircle from "../atoms/user-circle";

export default function UserHeader() {
  return (
    <div className="flex items-center justify-center pr-3">
      <NotificationBell className="" />
      <p className="ml-5 mr-15 font-medium text-lg">
        Hola, &lt;&lt;Usuario&gt;&gt;
      </p>
      <UserCircle className="mr-3" />
    </div>
  );
}
