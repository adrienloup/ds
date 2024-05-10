import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const { user, login, logout } = useAuth();

  const handleLogin = () => {
    login({
      id: 1,
      name: "Adrien",
    });
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div style={{ color: "white" }}>
      <h1>Login</h1>
      {user ? JSON.stringify(user) : "no"}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <Link to={"/ds/"}>home page</Link>
    </div>
  );
}
