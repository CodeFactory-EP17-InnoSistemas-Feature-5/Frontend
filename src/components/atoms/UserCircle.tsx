import { UserIcon } from "@heroicons/react/24/solid";

export default function UserCircle({ className }: { className?: string }) {
  return <UserIcon className={`w-6 ${className}`} />;
}
