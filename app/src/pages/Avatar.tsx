import { Trans, useTranslation } from "react-i18next";
import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Title } from "../components/Title/Title";
import { Story } from "../components/Story/Story";
import { Navigation } from "../components/Navigation/Navigation";
import { DsAvatar } from "design-system/src/components/Avatar/Avatar";

function AvatarPage() {
  // console.log("AvatarPage");
  const { t } = useTranslation();

  useTitle(t("page.avatar.document"));

  return (
    <>
      <Header />
      <Main>
        <Title>
          <Trans i18nKey="page.avatar.title">
            Avatar <span>component</span>
          </Trans>
        </Title>
        <p>{t("page.avatar.text1")}</p>
        <h2>
          <Trans i18nKey="page.avatar.subtitle1">
            Image <span>Avatar</span>
          </Trans>
        </h2>
        <p>{t("page.avatar.text2")}</p>
        <Story
          demo={<DsAvatar alt="Jane Doe" src="/ds/Jane_Doe.jpg" />}
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsAvatar</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>alt</span>
              ="<span style={{ color: "#ffeb3b" }}>Jane Doe</span>"
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>src</span>
              ="
              <span style={{ color: "#ffeb3b" }}>/ds/Jane_Doe.jpg</span>
              "
              <br />
              /&gt;
            </>
          }
          codepen={"WNWyqeK"}
          github={"Avatar"}
          copy={"<DsAvatar alt='Jane Doe' src='/ds/Jane_Doe.jpg' />"}
        />
        <h2>
          <Trans i18nKey="page.avatar.subtitle2">
            Letter <span>Avatar</span>
          </Trans>
        </h2>
        <p>{t("page.avatar.text3")}</p>
        <Story
          demo={<DsAvatar>JD</DsAvatar>}
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsAvatar</span>&gt;JD&lt;/
              <span style={{ color: "#00dc09" }}>DsAvatar</span>&gt;
            </>
          }
          codepen={"WNWyqeK"}
          github={"Avatar"}
          copy={""}
        />
        <h2>
          <Trans i18nKey="page.avatar.subtitle3">
            Sizes <span>Avatar</span>
          </Trans>
        </h2>
        <p>{t("page.avatar.text4")}</p>
        <Story
          demo={
            <div>
              <div
                style={{
                  display: "flex",
                  flexFlow: "row wrap",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <DsAvatar alt="Jane Doe" src="/ds/Jane_Doe.jpg" size="small" />
                <DsAvatar alt="Jane Doe" src="/ds/Jane_Doe.jpg" size="medium" />
                <DsAvatar alt="Jane Doe" src="/ds/Jane_Doe.jpg" size="large" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexFlow: "row wrap",
                  alignItems: "center",
                  gap: "1rem",
                  paddingTop: "1rem",
                }}
              >
                <DsAvatar size="small">JD</DsAvatar>
                <DsAvatar size="medium">JD</DsAvatar>
                <DsAvatar size="large">JD</DsAvatar>
              </div>
            </div>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsAvatar</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>alt</span>
              ="<span style={{ color: "#ffeb3b" }}>Jane Doe</span>"
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>src</span>
              ="
              <span style={{ color: "#ffeb3b" }}>/ds/Jane_Doe.jpg</span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>size</span>
              ="
              <span style={{ color: "#ffeb3b" }}>small</span>
              "
              <br />
              /&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsAvatar</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>alt</span>
              ="<span style={{ color: "#ffeb3b" }}>Jane Doe</span>"
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>src</span>
              ="
              <span style={{ color: "#ffeb3b" }}>/ds/Jane_Doe.jpg</span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>size</span>
              ="
              <span style={{ color: "#ffeb3b" }}>medium</span>
              "
              <br />
              /&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsAvatar</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>alt</span>
              ="<span style={{ color: "#ffeb3b" }}>Jane Doe</span>"
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>src</span>
              ="
              <span style={{ color: "#ffeb3b" }}>/ds/Jane_Doe.jpg</span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>size</span>
              ="
              <span style={{ color: "#ffeb3b" }}>large</span>
              "
              <br />
              /&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsAvatar</span>{" "}
              <span style={{ color: "#00caff" }}>size</span>
              ="
              <span style={{ color: "#ffeb3b" }}>small</span>
              "&gt;JD&lt;/
              <span style={{ color: "#00dc09" }}>DsAvatar</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsAvatar</span>{" "}
              <span style={{ color: "#00caff" }}>size</span>
              ="
              <span style={{ color: "#ffeb3b" }}>medium</span>
              "&gt;JD&lt;/
              <span style={{ color: "#00dc09" }}>DsAvatar</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsAvatar</span>{" "}
              <span style={{ color: "#00caff" }}>size</span>
              ="
              <span style={{ color: "#ffeb3b" }}>large</span>
              "&gt;JD&lt;/
              <span style={{ color: "#00dc09" }}>DsAvatar</span>&gt;
            </>
          }
          codepen={"WNWyqeK"}
          github={"Avatar"}
          copy={""}
        />
        <Navigation prev="modal" next="badge" />
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default AvatarPage;
