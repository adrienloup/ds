import { memo } from "react";
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
import { Sticky } from "../components/Sticky/Sticky";
import { Search } from "../components/Search/Search";
import { Separator } from "../components/Separator/Separator";

function HomePage() {
  // console.log("HomePage");
  const { t } = useTranslation();
  useTitle(t("page.home.document"));

  return (
    <>
      <HeaderMemo />
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
        <Sticky>
          <SearchMemo />
        </Sticky>
        <h2>
          <Trans i18nKey="page.home.subtitle1">
            Get started with DS library
            <span>today through some of these useful resources</span>
          </Trans>
        </h2>
        <CardGettingStartedMemo />
        <Separator name="apps_outage" />
        <h2>
          <Trans i18nKey="page.home.subtitle2">
            Released <span>versions</span>
          </Trans>
        </h2>
        <p>
          You can come back to this page and switch the version of the docs
          you're reading at any time.
        </p>
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
              <TableTd>Q3 2024</TableTd>
              <TableTd>v0.2.0</TableTd>
              <TableTd>Released</TableTd>
            </TableTr>
            <TableTr>
              <TableTd>Q3 2024</TableTd>
              <TableTd>v0.1.0</TableTd>
              <TableTd>Released</TableTd>
            </TableTr>
            <TableTr>
              <TableTd>Q2 2024</TableTd>
              <TableTd>v0.0.1</TableTd>
              <TableTd>Released</TableTd>
            </TableTr>
          </TableBody>
        </Table>
        <Separator name="dynamic_form" />
        <h2>
          Versioning <span>strategy</span>
        </h2>
        <p>
          Here you can find the latest unreleased documentation and code. You
          can use it to see what changes are coming and provide better feedback
          to contributors
        </p>
        <p>
          Stability ensures that reusable components and libraries, tutorials,
          tools, and learned practices don't become obsolete unexpectedly.
          Stability is essential for the ecosystem around DS library to thrive.
        </p>
        <p>
          This document contains the practices that are followed to provide you
          with a leading-edge UI library, balanced with stability, ensuring that
          future changes are always introduced predictably.
        </p>
        <Separator name="style" />
        <h2>
          Styled <span>components</span>
        </h2>
        <p>
          DS library and Base UI feature many of the same UI components, but
          Base UI comes without any default styles or styling solutions.
        </p>
        <p>
          DS library is comprehensive in that it comes packaged with default
          styles, and is optimized to work with Emotion (or styled-components).
        </p>
        <p>
          Base UI, by contrast, could be considered the "skeletal" or "headless"
          counterpart to DS library—in fact, future versions of DS library will
          use Base UI components and hooks for its foundational structure.
        </p>
        <Separator name="tips_and_updates" />
        <h2>
          You <span>make this possible</span>
        </h2>
        <p>
          Find out why DS library's tools are trusted by thousands of
          open-source developers and teams around the world.
        </p>
        <p>
          The development of these open-source tools is accelerated by our
          generous sponsors.
        </p>
        <p>
          After much research on React component libraries, we decided to ditch
          our in-house library for DS library, using its powerful customization
          system to implement our Design System.
        </p>
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

const HeaderMemo = memo(Header);
const SearchMemo = memo(Search);
const CardGettingStartedMemo = memo(CardGettingStarted);

export default HomePage;
