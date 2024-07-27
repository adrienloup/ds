import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { useAuth } from "../hooks/useAuth";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Promote } from "../components/Promote/Promote";
import { Button } from "../components/Button/Button";

function LoginPage() {
  // console.log("LoginPage");
  useTitle("Login");

  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleClick = () => {
    logout();
    navigate("/ds/");
  };

  return (
    <>
      <Header />
      <Main>
        {user.name ? (
          <>
            <h1>
              <span>Disconnect or</span> learn more about React{" "}
              <span>just for pleasure :)</span>
            </h1>
            <Promote
              head={
                <h1>
                  <span>Disconnect or</span> learn more about React{" "}
                  <span>just for pleasure :)</span>
                </h1>
              }
              foot={<Button onClick={handleClick}>Logout</Button>}
            />
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
