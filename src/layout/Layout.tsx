import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import MenuAppBar from "./MenuAppBar";

const Layout = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="layout">
      <MenuAppBar userName={user?.displayName} userEmail={user?.email}></MenuAppBar>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  )
}

export { Layout };