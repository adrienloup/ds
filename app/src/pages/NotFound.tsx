import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";

function NotFoundPage() {
  console.log("NotFoundPage");
  useTitle("Not Found Page");

  return (
    <>
      <Header />
      <Main>
        <h1>
          <span>The page is not found or it is under construction</span> but
          don't give up :)
        </h1>
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default NotFoundPage;
