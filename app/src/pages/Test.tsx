import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Tests } from "../components/Tests/Tests";

function TestPage() {
  console.log("TestPage");
  useTitle("Test Page");

  return (
    <>
      <Header />
      <Main>
        <h1>
          <span>Try the code below it will help you progress</span> in React
        </h1>
        <Tests />
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default TestPage;
