import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { Promote } from "../components/Promote/Promote";
import { Button } from "../components/Button/Button";

function OverviewPage() {
  console.log("OverviewPage");

  useTitle("Overview Page");

  return (
    <>
      <Header />
      <Main>
        <h1>
          DS is an open-source <span>React component library</span>
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
              {/* <p>
                  Asset uploading is a feature. As a PRO member, you can
                  drag-and-drop upload files here to use as resources. Images, CSS
                  frameworks JavaScript libraries, 3D models, JSON data...
                  anything you want! You can even edit them anytime, like any
                  other code.
                </p> */}
            </>
          }
          foot={<Button to={"/ds/"}>Collection</Button>}
        />
        <div style={{ height: "2000px" }}></div>
      </Main>
      <Footer />
    </>
  );
}

export default OverviewPage;
