import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/ds/");
  };

  return (
    <>
      <Header />
      <Main>
        <h1>
          <span>Disconnect or</span> learn more about React{" "}
          <span>just for pleasure :)</span>
        </h1>
        <Button onClick={handleLogout}>Logout</Button>
        <Button to={"/ds/test"}>learning</Button>
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default LoginPage;
