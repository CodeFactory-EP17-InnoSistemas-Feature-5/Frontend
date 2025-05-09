import React from "react";
import DropdownUser from "@/components/molecules/DropdownUser";
import DropdownNotification from "@/components/molecules/DropdownNotification";

export default function UserHeader() {
  return (
    <div className="flex items-center justify-center pr-3">
      <DropdownNotification />
      <p className="mr-15 ml-5 text-base font-medium sm:text-lg">
        Hola, &lt;&lt;Usuario&gt;&gt;
      </p>
      <DropdownUser />
    </div>
  );
}
