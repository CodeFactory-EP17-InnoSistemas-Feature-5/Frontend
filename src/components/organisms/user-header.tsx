import React from "react";
import DropdownUser from "@/components/molecules/dropdown-user";
import DropdownNotification from "@/components/molecules/dropdown-notification";

export default function UserHeader() {
  return (
    <div className="flex items-center justify-center pr-3">
      <DropdownNotification />
      <p className="ml-5 mr-15 font-medium text-base sm:text-lg">
        Hola, &lt;&lt;Usuario&gt;&gt;
      </p>
      <DropdownUser />
    </div>
  );
}
