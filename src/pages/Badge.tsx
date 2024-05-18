import { useState } from "react";
import { pages } from "../data/pages.json";
import { categories } from "../data/categories.json";
import { HeaderComponent } from "../components/Header/Header";
import { MainComponent } from "../components/Main/Main";
import { SettingsComponent } from "../components/Settings/Settings";
import { FooterComponent } from "../components/Footer/Footer";
import { TitleComponent } from "../components/Title/Title";
import { ScrollToTopComponent } from "../components/ScrollToTop/ScrollToTop";
import { ToolBarComponent } from "../components/ToolBar/ToolBar";
import { StoryCompponent } from "../components/Story/Story";
import { PaginationComponent } from "../components/Pagination/Pagination";
import { DsBadge } from "../library/Badge/Badge";
import { DsIcon } from "../library/Icon/Icon";

export default function BadgePage() {
  const [settings, setSettings] = useState<boolean>(false);

  return (
    <>
      <TitleComponent title="Badge Component" />
      <HeaderComponent pages={pages} categories={categories} />
      <MainComponent>
        <ToolBarComponent onClick={() => setSettings(!settings)} />
        <h1>
          Badge <span>Component</span>
        </h1>
        <p>Badge generates a small badge to the top-right of its child(ren).</p>
        <p>
          Badges are components that draw the user's attention to a part of the
          application's UI. It is used, for example, to highlight new
          notifications.
        </p>
        <h2>
          Basic <span>Badge</span>
        </h2>
        <p>
          Examples of badges containing text, using primary and secondary
          colors. The badge is applied to its children.
        </p>
        <StoryCompponent
          demo={
            <DsBadge value={100}>
              <DsIcon name="email" size="medium" />
            </DsBadge>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsBadge</span>{" "}
              <span style={{ color: "#00caff" }}>value</span>
              ="
              <span style={{ color: "#ffeb3b" }}>100</span>"&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsIcon</span>{" "}
              <span style={{ color: "#00caff" }}>name</span>
              ="
              <span style={{ color: "#ffeb3b" }}>notifications</span>" /&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsBadge</span>&gt;
            </>
          }
          codepen={"WNWyqeK"}
          github={"Badge"}
          copy={"<DSBadge value={110}><Icon name={'delete'} /></DsBadge>"}
        />
        <h2>
          Sizes <span>Badge</span>
        </h2>
        <p>For larger or smaller Badges, use the size prop.</p>
        <StoryCompponent
          demo={
            <>
              <div
                style={{
                  display: "flex",
                  flexFlow: "wrap",
                  alignItems: "center",
                  padding: "0.5rem",
                }}
              >
                <DsBadge value={100} size="small">
                  <DsIcon name="email" size="small" />
                </DsBadge>
              </div>
              <div
                style={{
                  display: "flex",
                  flexFlow: "wrap",
                  alignItems: "center",
                  padding: "0.5rem",
                }}
              >
                <DsBadge value={100} size="medium">
                  <DsIcon name="email" size="medium" />
                </DsBadge>
              </div>
              <div
                style={{
                  display: "flex",
                  flexFlow: "wrap",
                  alignItems: "center",
                  padding: "0.5rem",
                }}
              >
                <DsBadge value={100} size="large">
                  <DsIcon name="email" size="large" />
                </DsBadge>
              </div>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsBadge</span>{" "}
              <span style={{ color: "#00caff" }}>size</span>
              ="
              <span style={{ color: "#ffeb3b" }}>small</span>"&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsIcon</span>{" "}
              <span style={{ color: "#00caff" }}>name</span>
              ="
              <span style={{ color: "#ffeb3b" }}>notifications</span>" /&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsBadge</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsBadge</span>{" "}
              <span style={{ color: "#00caff" }}>size</span>
              ="
              <span style={{ color: "#ffeb3b" }}>medium</span>"&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsIcon</span>{" "}
              <span style={{ color: "#00caff" }}>name</span>
              ="
              <span style={{ color: "#ffeb3b" }}>notifications</span>" /&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsBadge</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsBadge</span>{" "}
              <span style={{ color: "#00caff" }}>size</span>
              ="
              <span style={{ color: "#ffeb3b" }}>large</span>"&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsIcon</span>{" "}
              <span style={{ color: "#00caff" }}>name</span>
              ="
              <span style={{ color: "#ffeb3b" }}>notifications</span>" /&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsBadge</span>&gt;
            </>
          }
          codepen={"WNWyqeK"}
          github={"Badge"}
          copy={"<DSBadge value={110}><Icon name={'delete'} /></DsBadge>"}
        />
        <h2>
          Status <span>Badge</span>
        </h2>
        <p>Use status prop to apply theme color palette to component.</p>
        <StoryCompponent
          demo={
            <>
              <div
                style={{
                  display: "flex",
                  flexFlow: "wrap",
                  alignItems: "center",
                  padding: "0.5rem",
                }}
              >
                <DsBadge value={100} status="info">
                  <DsIcon name="email" size="medium" />
                </DsBadge>
              </div>
              <div
                style={{
                  display: "flex",
                  flexFlow: "wrap",
                  alignItems: "center",
                  padding: "0.5rem",
                }}
              >
                <DsBadge value={100} status="success">
                  <DsIcon name="email" size="medium" />
                </DsBadge>
              </div>
              <div
                style={{
                  display: "flex",
                  flexFlow: "wrap",
                  alignItems: "center",
                  padding: "0.5rem",
                }}
              >
                <DsBadge value={100} status="warning">
                  <DsIcon name="email" size="medium" />
                </DsBadge>
              </div>
              <div
                style={{
                  display: "flex",
                  flexFlow: "wrap",
                  alignItems: "center",
                  padding: "0.5rem",
                }}
              >
                <DsBadge value={100} status="error">
                  <DsIcon name="email" size="medium" />
                </DsBadge>
              </div>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsBadge</span>{" "}
              <span style={{ color: "#00caff" }}>status</span>
              ="
              <span style={{ color: "#ffeb3b" }}>info</span>"&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsIcon</span>{" "}
              <span style={{ color: "#00caff" }}>name</span>
              ="
              <span style={{ color: "#ffeb3b" }}>notifications</span>" /&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsBadge</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsBadge</span>{" "}
              <span style={{ color: "#00caff" }}>status</span>
              ="
              <span style={{ color: "#ffeb3b" }}>success</span>"&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsIcon</span>{" "}
              <span style={{ color: "#00caff" }}>name</span>
              ="
              <span style={{ color: "#ffeb3b" }}>notifications</span>" /&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsBadge</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsBadge</span>{" "}
              <span style={{ color: "#00caff" }}>status</span>
              ="
              <span style={{ color: "#ffeb3b" }}>warning</span>"&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsIcon</span>{" "}
              <span style={{ color: "#00caff" }}>name</span>
              ="
              <span style={{ color: "#ffeb3b" }}>notifications</span>" /&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsBadge</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsBadge</span>{" "}
              <span style={{ color: "#00caff" }}>status</span>
              ="
              <span style={{ color: "#ffeb3b" }}>error</span>"&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsIcon</span>{" "}
              <span style={{ color: "#00caff" }}>name</span>
              ="
              <span style={{ color: "#ffeb3b" }}>notifications</span>" /&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsBadge</span>&gt;
            </>
          }
          codepen={"WNWyqeK"}
          github={"Badge"}
          copy={"<DSBadge value={110}><Icon name={'delete'} /></DsBadge>"}
        />
        <PaginationComponent pages={pages} current="badge" />
      </MainComponent>
      <SettingsComponent
        open={settings}
        onClick={() => {
          setSettings(false);
        }}
      />
      <FooterComponent />
      <ScrollToTopComponent />
    </>
  );
}
