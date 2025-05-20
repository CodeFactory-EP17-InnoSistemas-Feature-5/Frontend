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
        <Button variant={"ghost"} size={"icon"}>
          <NotificationBell className="min-h-[20px] min-w-[20px]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
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
