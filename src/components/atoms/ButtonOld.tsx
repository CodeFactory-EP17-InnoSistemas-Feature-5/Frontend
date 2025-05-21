import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded bg-white px-4 py-2 font-semibold text-black outline-1",
        {
          "hover:bg-blue-700": className === "primary",
          "hover:bg-red-600": className === "danger",
        },
      )}
    >
      {children}
    </button>
  );
}
