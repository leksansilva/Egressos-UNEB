import { useState } from "react";
import { NotificationContext } from "./Context";

export function NotificationProvider({ children }) {
  const [notification, setNotification] = useState({
    message: "",
    type: "sucess",
  });

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}
