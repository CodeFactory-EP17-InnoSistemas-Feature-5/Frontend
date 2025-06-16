"use client";
import React from "react";
import DropdownUser from "@/components/molecules/DropdownUser";
import DropdownNotification from "@/components/molecules/DropdownNotification";
import { GetUsuario } from "@/lib/Interfaces";
import { GET_USER } from "@/lib/ApolloQueries";
import { useQuery } from "@apollo/client";

export default function UserHeader() {
  const { data: userData } = useQuery<GetUsuario>(GET_USER);
  const user = userData?.findUsuarioById;
  return (
    <div className="flex items-center pr-3">
      <DropdownNotification />
      <p className="mr-5 ml-5 hidden text-center text-sm font-medium md:inline-block lg:mr-15 lg:text-base">
        Hola, <br /> &lt;&lt;{user?.nombreusuario}&gt;&gt;
      </p>
      <DropdownUser />
    </div>
  );
}
