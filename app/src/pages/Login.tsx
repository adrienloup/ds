import { useTitle } from "../hooks/useTitle";
import { useAuth } from "../hooks/useAuth";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Button } from "../components/Button/Button";

function LoginPage() {
  console.log("LoginPage");
  useTitle("Login Page");

  const { login, logout } = useAuth();

  const handleLogin = () => {
    login({
      id: "1",
      name: "Adrien",
    });
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Header />
      <Main>
        <h1>
          Login to <span>your account</span>
        </h1>
        <ul>
          <li>
            <Button onClick={handleLogin}>Login</Button>
          </li>
          <li>
            <Button onClick={handleLogout}>Logout</Button>
          </li>
        </ul>
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default LoginPage;
