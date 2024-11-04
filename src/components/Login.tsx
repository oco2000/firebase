import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const {user, login, loading} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (login()) {
      navigate('/');
    }
  }

  return <>
    { (!loading && !user) ? <button onClick={handleLogin}>Login with Google</button> : '' }
  </>
}

export { Login }