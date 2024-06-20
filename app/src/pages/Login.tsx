import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { AuthContext } from "../contexts/Auth";
import { AuthType } from "../models/Auth";
import { useUser } from "../hooks/useUser";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Button } from "../components/Button/Button";

function LoginPage() {
  console.log("LoginPage");
  useTitle("Login Page");

  const { dataAuth } = useContext<AuthType>(AuthContext);
  const navigate = useNavigate();
  const { logout } = useUser();

  const handleLogout = () => {
    logout();
    navigate("/ds/");
  };

  return (
    <>
      <Header />
      <Main>
        {dataAuth.user ? (
          <>
            <h1>
              <span>Disconnect or</span> learn more about React{" "}
              <span>just for pleasure :)</span>
            </h1>
            <Button onClick={handleLogout}>Logout</Button>
            <Button to={"/ds/test"}>learning</Button>
          </>
        ) : (
          <h1>
            <span>The page is not found or it is under construction but</span>{" "}
            don't give up :)
          </h1>
        )}
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default LoginPage;
