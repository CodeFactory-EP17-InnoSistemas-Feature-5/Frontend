"use client";

import { createContext, useContext, useState } from "react";
import { v4 } from "uuid";

interface Notification {
  id: string;
  title: string;
  variant: "success" | "error";
  description: string;
}
interface NotificationContext {
  notifications: Notification[];
  addNotification: (options: {
    title: string;
    variant: "success" | "error";
    description: string;
  }) => void;
  removeNotification: (id: string) => void;
}

const NotificationContext = createContext<NotificationContext | undefined>(
  undefined,
);

interface NotificationProviderProps {
  children: React.ReactNode;
}

export const NotificationProvider = ({
  children,
}: NotificationProviderProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (opts: {
    title: string;
    variant: "success" | "error";
    description: string;
  }) => {
    const newNotification: Notification = {
      id: v4(),
      title: opts.title,
      variant: opts.variant,
      description: opts.description,
    };
    setNotifications((prev) => [...prev, newNotification]);
  };

  const removeNotification = (id: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export function useNotification() {
  const notificationContext = useContext(NotificationContext);
  if (!notificationContext) {
    throw new Error("Error con notificationContext");
  }
  return notificationContext;
}
