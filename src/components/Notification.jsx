import { useContext, useEffect } from "react";
import { NotificationContext } from "../context/Context";

export function Notification() {
  const { notification, setNotification } = useContext(NotificationContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    notification.message && (
      <div
        className={`z-20 fixed left-4 bottom-4  bg-green-400 ${
          notification.type === "warning" && "bg-yellow-300"
        } ${
          notification.type === "danger" && "bg-red-400"
        } p-5 w-56 h-24 break-words delay-1000 transition-opacity to-opac text-white rounded-2xl flex justify-center items-center`}
      >
        {notification.message}
      </div>
    )
  );
}
