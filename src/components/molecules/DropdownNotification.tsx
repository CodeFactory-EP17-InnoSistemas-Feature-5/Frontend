"use client";
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import NotificationBell from "@/components/atoms/NotificationBell";
import { useNotification } from "@/components/contexts/NotificationContext";
import { Check, CircleX } from "lucide-react";
import { Button } from "../ui/button";

export default function DropdownNotification() {
  const { notifications, removeNotification } = useNotification();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="relative mr-10 sm:mr-0"
        >
          <NotificationBell className="min-h-[20px] min-w-[20px]" />
          {notifications.length > 0 && (
            <span className="absolute top-0 right-0 rounded-full bg-red-500 px-1 py-0.5 text-xs text-white">
              {notifications.length}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-[400px] w-56">
        <DropdownMenuLabel className="font-bold">
          Notificaciones
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.length > 0 ? (
          notifications.map((noti) => {
            return (
              <div key={noti.id}>
                <DropdownMenuLabel className="mx-2 flex items-center justify-between p-0">
                  {noti.title}
                  {noti.variant === "success" ? (
                    <Button
                      variant={"ghost"}
                      size={"icon"}
                      onClick={() => removeNotification(noti.id)}
                    >
                      <Check className="max-h-[15px] max-w-[15px]" />
                    </Button>
                  ) : (
                    <Button
                      variant={"ghost"}
                      size={"icon"}
                      onClick={() => removeNotification(noti.id)}
                    >
                      <CircleX className="max-h-[15px] max-w-[15px]" />
                    </Button>
                  )}
                </DropdownMenuLabel>
                <DropdownMenuItem>{noti.description}</DropdownMenuItem>
              </div>
            );
          })
        ) : (
          <DropdownMenuItem className="text-neutral-400">
            No hay notificaciones
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
