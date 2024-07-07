import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { CardGettingStarted } from "../components/Card/CardGettingStarted";
import { Promote } from "../components/Promote/Promote";
import { Button } from "../components/Button/Button";
import { Table } from "../components/Table/Table";

function HomePage() {
  // console.log("HomePage");
  useTitle("Home page");

  return (
    <>
      <Header />
      <Main>
        <h1>
          A pretty good library{" "}
          <span>of React components for Web application's UI</span>
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
        <h2>
          Get started with DS library{" "}
          <span>today through some of these useful resources</span>
        </h2>
        <CardGettingStarted />
        <h2>
          Released <span>versions</span>
        </h2>
        <p>
          The most recent stable version (✓) is recommended for use in
          production.
        </p>
        {/* <Table>table</Table> */}
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default HomePage;
