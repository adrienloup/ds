import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Promote } from "../components/Promote/Promote";
import { PageList1 } from "../components/PageList/PageList1";
import { Button } from "../components/Button/Button";

function HomePage() {
  console.log("HomePage");
  useTitle("Home Page");

  return (
    <>
      <Header />
      <Main>
        <h1>
          A pretty good library{" "}
          <span>of components for Web application's UI</span>
        </h1>
        <Promote
          head={<h2>Unlock the full power</h2>}
          body={
            <>
              <p>
                It includes a comprehensive collection of prebuilt components
                that are ready for use in production right out of the box, and
                features a suite of customization options that make it easy to
                implement your own custom design system on top of our
                components.
              </p>
            </>
          }
          foot={<Button to={"/ds/overview"}>Overview</Button>}
        />
        <PageList1 />
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default HomePage;
