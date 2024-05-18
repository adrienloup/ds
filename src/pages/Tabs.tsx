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
import { DsTabPanel } from "../library/Tabs/TabPanel";
import { DsTabList } from "../library/Tabs/TabList";
import { DsTabs } from "../library/Tabs/Tabs";
import { DsTab } from "../library/Tabs/Tab";

export default function TabsPage() {
  const [settings, setSettings] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("tab1Id");

  return (
    <>
      <TitleComponent title="Tabs Component" />
      <HeaderComponent pages={pages} categories={categories} />
      <MainComponent>
        <ToolBarComponent onClick={() => setSettings(!settings)} />
        <h1>
          Tabs <span>Component</span>
        </h1>
        <p>Tabs make it easy to explore and switch between different views.</p>
        <p>
          Tabs organize and allow navigation between groups of content that are
          related and at the same level of hierarchy.
        </p>
        <h2>
          Basic <span>Tabs</span>
        </h2>
        <p>
          Tabs are implemented using a collection of related components. The tab
          element itself. Clicking on a tab displays its corresponding panel.
          The container that houses the tabs. Responsible for handling focus and
          keyboard navigation between tabs.
        </p>
        <StoryCompponent
          demo={
            <DsTabs>
              <DsTabList labelledby="tablist-1">
                <DsTab
                  id={"tab1Id"}
                  controls={"tabpanel1Id"}
                  content={"Maria Theresia"}
                  handleClick={() => setSelected("tab1Id")}
                  selected={selected === "tab1Id"}
                />
                <DsTab
                  id={"tab2Id"}
                  controls={"tabpanel2Id"}
                  content={"Carl Andersen"}
                  handleClick={() => setSelected("tab2Id")}
                  selected={selected === "tab2Id"}
                />
              </DsTabList>
              <DsTabPanel
                id={"tabpanel1Id"}
                labelledby={"tab1Id"}
                selected={selected === "tab1Id"}
                content={
                  <p>
                    Maria Theresia Ahlefeldt (16 January 1755 – 20 December
                    1810) was a Danish, (originally German), composer. She is
                    known as the first female composer in Denmark. Maria
                    Theresia composed music for several ballets, operas, and
                    plays of the royal theatre. She was given good critic as a
                    composer and described as a virkelig Tonekunstnerinde (a
                    True Artist of Music).
                  </p>
                }
              />
              <DsTabPanel
                id={"tabpanel2Id"}
                labelledby={"tab2Id"}
                selected={selected === "tab2Id"}
                content={
                  <>
                    <p>
                      Carl Joachim Andersen (29 April 1847 – 7 May 1909) was a
                      Danish flutist, conductor and composer born in Copenhagen,
                      son of the flutist Christian Joachim Andersen. Both as a
                      virtuoso and as composer of flute music, he is considered
                      one of the best of his time. He was considered to be a
                      tough leader and teacher and demanded as such a lot from
                      his orchestras but through that style he reached a high
                      level.
                    </p>
                  </>
                }
              />
            </DsTabs>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsTabs</span>
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsTabList</span>&gt;
              <br />
              {"      "}
              &lt;<span style={{ color: "#00dc09" }}>DsTab</span>
              <br />
              {"         "}
              <span style={{ color: "#00caff" }}>content</span>
              ="
              <span style={{ color: "#ffeb3b" }}>Maria Theresia</span>
              "
              <br />
              {"      "}
              /&gt;
              <br />
              {"      "}
              &lt;<span style={{ color: "#00dc09" }}>DsTab</span>
              <br />
              {"         "}
              <span style={{ color: "#00caff" }}>content</span>
              ="
              <span style={{ color: "#ffeb3b" }}>Carl Andersen</span>
              "
              <br />
              {"      "}
              /&gt;
              <br />
              {"   "}
              &lt;/<span style={{ color: "#00dc09" }}>DsTabList</span>&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsTabPanel</span>
              <br />
              {"      "}
              <span style={{ color: "#00caff" }}>content</span>
              ="
              <span style={{ color: "#ffeb3b" }}>
                &lt;p&gt; Maria Theresia Ahlefeldt (16 January 1755 – 20
                December 1810) was a Danish, (originally German), composer. She
                is known as the first female composer in Denmark. Maria Theresia
                composed music for several ballets, operas, and plays of the
                royal theatre. She was given good critic as a composer and
                described as a virkelig Tonekunstnerinde (a True Artist of
                Music). &lt;/p&gt;
              </span>
              "
              <br />
              {"   "}
              /&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsTabPanel</span>
              <br />
              {"      "}
              <span style={{ color: "#00caff" }}>content</span>
              ="
              <span style={{ color: "#ffeb3b" }}>
                &lt;p&gt; Carl Joachim Andersen (29 April 1847 – 7 May 1909) was
                a Danish flutist, conductor and composer born in Copenhagen, son
                of the flutist Christian Joachim Andersen. Both as a virtuoso
                and as composer of flute music, he is considered one of the best
                of his time. He was considered to be a tough leader and teacher
                and demanded as such a lot from his orchestras but through that
                style he reached a high level. &lt;/p&gt;
              </span>
              "
              <br />
              {"   "}
              /&gt;
              <br />
              &lt;/<span style={{ color: "#00dc09" }}>DsTabs</span>&gt;
            </>
          }
          codepen={"WNWyqeK"}
          github={"Alert"}
          copy={
            "<Alert text={'Here is confirmation that your action was successful'} status={'success'} />"
          }
        />
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
