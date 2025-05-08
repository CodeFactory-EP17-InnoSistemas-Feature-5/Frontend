import NotificationBell from "@/components/atoms/notification-bell";
import UserCircle from "@/components/atoms/user-circle";
import React from "react";

interface UserHeaderProps {
  children?: React.ReactNode;
}

export default function UserHeader({ children }: UserHeaderProps) {
  return (
    <div className="flex items-center justify-center pr-3">
      <NotificationBell className="" />
      <p className="ml-5 mr-15 font-medium text-base sm:text-lg">
        Hola, &lt;&lt;Usuario&gt;&gt;
      </p>
      {children}
    </div>
  );
}
