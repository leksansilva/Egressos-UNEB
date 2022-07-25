import { createContext } from "react";

export const NotificationContext = createContext({
  message: null,
  type: null,
});
