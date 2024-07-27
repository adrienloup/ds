import { Trans, useTranslation } from "react-i18next";
import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Title } from "../components/Title/Title";
import { CardGettingStarted } from "../components/Card/CardGettingStarted";
import { Promote } from "../components/Promote/Promote";
import { Button } from "../components/Button/Button";
import { Table } from "../components/Table/Table";
import { TableCaption } from "../components/Table/TableCaption";
import { TableHead } from "../components/Table/TableHead";
import { TableBody } from "../components/Table/TableBody";
import { TableTr } from "../components/Table/TableTr";
import { TableTh } from "../components/Table/TableTh";
import { TableTd } from "../components/Table/TableTd";
import { Help } from "../components/Help/Help";

function HomePage() {
  // console.log("HomePage");
  const { t } = useTranslation();
  useTitle(t("page.home.document"));

  return (
    <>
      <Header />
      <Main>
        <Title>
          <Trans i18nKey="page.home.title">
            A pretty good library
            <span>of React components for Web application's UI</span>
          </Trans>
        </Title>
        <Promote
          head={<h2>{t("page.home.promote.title")}</h2>}
          body={<p>{t("page.home.promote.text")}</p>}
          foot={
            <Button to={"/ds/overview"}>{t("page.home.promote.button")}</Button>
          }
        />
        <Help />
        <h2>
          <Trans i18nKey="page.home.subtitle1">
            Get started with DS library
            <span>today through some of these useful resources</span>
          </Trans>
        </h2>
        <CardGettingStarted />
        <h2>
          <Trans i18nKey="page.home.subtitle2">
            Released <span>versions</span>
          </Trans>
        </h2>
        <p>{t("page.home.promote.text")}</p>
        <Table ariaLabel="Release schedule">
          <TableCaption>Release schedule</TableCaption>
          <TableHead>
            <TableTr>
              <TableTh scope="col">Date</TableTh>
              <TableTh scope="col">Version</TableTh>
              <TableTh scope="col">Status</TableTh>
            </TableTr>
          </TableHead>
          <TableBody>
            <TableTr>
              <TableTd>Q4 2024</TableTd>
              <TableTd>v0.3.0 ✓</TableTd>
              <TableTd>Work started</TableTd>
            </TableTr>
            <TableTr>
              <TableTd>Q2 2024</TableTd>
              <TableTd>v0</TableTd>
              <TableTd>Released</TableTd>
            </TableTr>
          </TableBody>
        </Table>
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default HomePage;
