import { useTranslation } from "react-i18next";
import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Title } from "../components/Title/Title";
import { Promote } from "../components/Promote/Promote";
import { CardSearchable } from "../components/Card/CardSearchable";
import { Button } from "../components/Button/Button";

function OverviewPage() {
  const { t } = useTranslation();
  useTitle(t("page.overview.document"));

  return (
    <>
      <Header />
      <Main>
        <Title>
          An open-source <span>React component library for pleasure</span>
        </Title>
        <Promote
          head={<h2>Unlock the full power</h2>}
          body={
            <p>
              Asset uploading is a feature. As a PRO member, you can
              drag-and-drop upload files here to use as resources. Images, CSS
              frameworks JavaScript libraries, 3D models, JSON data... anything
              you want! You can even edit them anytime, like any other code.
            </p>
          }
          foot={<Button to={"/ds/"}>Get Started</Button>}
        />
        <CardSearchable />
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default OverviewPage;
