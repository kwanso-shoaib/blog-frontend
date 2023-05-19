import { Navigate } from "react-router-dom";
import { UserContext } from "../../context";
import { ProtectedProps } from "../../types";
import { useContext } from "react";

export const Protected = ({ children }: ProtectedProps) => {
  const { isLoggedIn } = useContext(UserContext);
  if (!isLoggedIn) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};
