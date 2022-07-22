import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import api from "./api";
import auth from "./auth";

export function PrivateRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("auth", { headers: auth.token() })
      .then((response) => {})
      .catch((error) => {
        if (error.response.status === 401) {
          auth.logout(() => {
            navigate("/");
          });
        }
      });
    return 0;
  }, [navigate]);

  return auth.token() && auth.type() === "admin" ? (
    children
  ) : (
    <Navigate to="/" />
  );
}
