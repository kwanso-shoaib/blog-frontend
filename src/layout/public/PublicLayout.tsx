import { Navigate, Outlet } from "react-router-dom";
import { AuthLayoutWrapper } from "../../styles";

export const PublicLayout = () => {
  return (
    <AuthLayoutWrapper>
      <Outlet />
    </AuthLayoutWrapper>
  );
};
