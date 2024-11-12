import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, Stack } from "@mui/material";

function Login() {
  const { user, login, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (login()) {
      navigate('/');
    }
  }

  return <Stack alignItems="center" justifyContent="center" sx={{ height: '100%' }}>
    {(!loading && !user) ?
      <Button sx={{ width: '200px' }} onClick={handleLogin}>Login with Google</Button>
      : ''}
  </Stack>
}

export { Login }