import React from "react";

export default function Header1({ children }: { children?: React.ReactNode }) {
  return <h1 className="mb-3 text-xl font-semibold sm:text-2xl">{children}</h1>;
}
