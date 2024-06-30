import { useTitle } from "../hooks/useTitle";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { ExampleList } from "../components/Example/ExampleList";
import { Promote } from "../components/Promote/Promote";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Button } from "../components/Button/Button";
import { Main } from "../components/Main/Main";

function UsagePage() {
  // console.log("UsagePage");
  useTitle("Usage");

  return (
    <>
      <Header />
      <Main>
        <h1>
          Learn the basics <span>of working with React component library</span>
        </h1>
        <Promote
          head={<h2>Learn the basics of working</h2>}
          body={
            <>
              <p>
                After installation, you can import any DS librairy component and
                start playing around. For example, try changing the variant on
                the Button to outlined to see how the style changes. Since DS
                librairy components are built to function in isolation, they
                don't require any kind of globally scoped styles. For a better
                user experience and developer experience, we recommend adding
                the following globals to your app.
              </p>
            </>
          }
          foot={<Button to={"/ds/"}>Library</Button>}
        />
        <h2>
          <span>The following integration examples are available of</span> the
          GitHub repository
        </h2>
        <ExampleList />
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default UsagePage;
