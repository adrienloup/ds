import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Promote } from "../components/Promote/Promote";
import { CardSearchable } from "../components/Card/CardSearchable";
import { Button } from "../components/Button/Button";

function OverviewPage() {
  // console.log("OverviewPage");
  useTitle("Overview");

  return (
    <>
      <Header />
      <Main>
        <h1>
          An open-source <span>React component library for pleasure</span>
        </h1>
        <Promote
          head={<h2>Unlock the full power</h2>}
          body={
            <>
              <p>
                Asset uploading is a feature. As a PRO member, you can
                drag-and-drop upload files here to use as resources. Images, CSS
                frameworks JavaScript libraries, 3D models, JSON data...
                anything you want! You can even edit them anytime, like any
                other code.
              </p>
            </>
          }
          foot={<Button to={"/ds/"}>Library</Button>}
        />
        <CardSearchable />
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default OverviewPage;
