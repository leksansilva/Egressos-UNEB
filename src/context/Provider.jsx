import { NotificationContext } from "./Context";

export function Provider({ children }) {
  return (
    <NotificationContext.Provider
      value={{
        message: "oi",
        type: 1,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
