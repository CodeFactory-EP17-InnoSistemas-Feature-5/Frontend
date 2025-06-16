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
    <div className="flex items-center justify-center pr-3">
      <DropdownNotification />
      <p className="mr-15 ml-5 hidden font-medium sm:inline-block">
        Hola, &lt;&lt;{user?.nombreusuario}&gt;&gt;
      </p>
      <DropdownUser />
    </div>
  );
}
