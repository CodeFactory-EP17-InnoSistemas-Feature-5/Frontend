import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={clsx(
        "bg-white px-4 rounded outline-1 text-black font-semibold py-2",
        {
          "hover:bg-blue-700": className === "primary",
          "hover:bg-red-600": className === "danger",
        }
      )}
    >
      {children}
    </button>
  );
}
