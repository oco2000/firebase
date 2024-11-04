import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Layout = () => {
  const {user, logout, loading} = useContext(AuthContext);

  return(
    <div className = "layout">
      { (user && !loading) ? <button onClick={logout}>Logout</button> : '' }
      <Outlet />
    </div>
  )
}

export { Layout };