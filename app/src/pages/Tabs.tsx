import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Story } from "../components/Story/Story";
import { Navigation } from "../components/Navigation/Navigation";
import { DsTabs } from "design-system/src/components/Tabs/Tabs";
import { DsTabPanel } from "design-system/src/components/Tabs/TabPanel";

function TabsPage() {
  // console.log("TabsPage");
  useTitle("Tabs component");

  return (
    <>
      <Header />
      <Main>
        <h1>
          Tabs <span>component</span>
        </h1>
        <p>
          Tabs make it easy to explore and switch between different views. Tabs
          organize and allow navigation between groups of content that are
          related and at the same level of hierarchy.
        </p>
        <h2>
          Basic <span>Tabs</span>
        </h2>
        <p>
          Tabs are implemented using a collection of related components: the tab
          element itself. Clicking on a tab displays its corresponding panel.
          The container that houses the tabs. Responsible for handling focus and
          keyboard navigation between tabs.
        </p>
        <Story
          demo={
            <DsTabs>
              <DsTabPanel title="Tab 1">Content of Tab 1</DsTabPanel>
              <DsTabPanel title="Tab 2">Content of Tab 2</DsTabPanel>
              <DsTabPanel title="Tab 3">Content of Tab 3</DsTabPanel>
            </DsTabs>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsTabs</span>&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsTabPanel</span>{" "}
              <span style={{ color: "#00caff" }}>title</span>
              ="
              <span style={{ color: "#ffeb3b" }}>Tab 1</span>"&gt;
              <br />
              {"      "}
              Content of Tab 1
              <br />
              {"   "}
              &lt;/<span style={{ color: "#00dc09" }}>DsTabPanel</span>&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsTabPanel</span>{" "}
              <span style={{ color: "#00caff" }}>title</span>
              ="
              <span style={{ color: "#ffeb3b" }}>Tab 2</span>"&gt;
              <br />
              {"      "}
              Content of Tab 2
              <br />
              {"   "}
              &lt;/<span style={{ color: "#00dc09" }}>DsTabPanel</span>&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsTabPanel</span>{" "}
              <span style={{ color: "#00caff" }}>title</span>
              ="
              <span style={{ color: "#ffeb3b" }}>Tab 3</span>"&gt;
              <br />
              {"      "}
              Content of Tab 3
              <br />
              {"   "}
              &lt;/<span style={{ color: "#00dc09" }}>DsTabPanel</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsTabs</span>&gt;
            </>
          }
          codepen={"WNWyqeK"}
          github={"Tabs"}
          copy={
            "<DsTabs> <DsTabPanel title='Tab 1'> Content of Tab 1 </DsTabPanel> <DsTabPanel title='Tab 2'> Content of Tab 2 </DsTabPanel> <DsTabPanel title='Tab 3'> Content of Tab 3 </DsTabPanel> <DsTabs>"
          }
        />
        <h2>
          Sizes <span>Tabs</span>
        </h2>
        <p>For larger or smaller Tabs, use the size prop.</p>
        <Story
          demo={
            <div>
              <div>
                <DsTabs size="small">
                  <DsTabPanel title="Tab 1">Content of Tab 1</DsTabPanel>
                  <DsTabPanel title="Tab 2">Content of Tab 2</DsTabPanel>
                  <DsTabPanel title="Tab 3">Content of Tab 3</DsTabPanel>
                </DsTabs>
              </div>
              <div
                style={{
                  paddingTop: "2rem",
                }}
              >
                <DsTabs>
                  <DsTabPanel title="Tab 1">Content of Tab 1</DsTabPanel>
                  <DsTabPanel title="Tab 2">Content of Tab 2</DsTabPanel>
                  <DsTabPanel title="Tab 3">Content of Tab 3</DsTabPanel>
                </DsTabs>
              </div>
            </div>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsTabs</span>{" "}
              <span style={{ color: "#00caff" }}>size</span>
              ="
              <span style={{ color: "#ffeb3b" }}>small</span>"&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsTabPanel</span>{" "}
              <span style={{ color: "#00caff" }}>title</span>
              ="
              <span style={{ color: "#ffeb3b" }}>Tab 1</span>"&gt;
              <br />
              {"      "}
              Content of Tab 1
              <br />
              {"   "}
              &lt;/<span style={{ color: "#00dc09" }}>DsTabPanel</span>&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsTabPanel</span>{" "}
              <span style={{ color: "#00caff" }}>title</span>
              ="
              <span style={{ color: "#ffeb3b" }}>Tab 2</span>"&gt;
              <br />
              {"      "}
              Content of Tab 2
              <br />
              {"   "}
              &lt;/<span style={{ color: "#00dc09" }}>DsTabPanel</span>&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsTabPanel</span>{" "}
              <span style={{ color: "#00caff" }}>title</span>
              ="
              <span style={{ color: "#ffeb3b" }}>Tab 3</span>"&gt;
              <br />
              {"      "}
              Content of Tab 3
              <br />
              {"   "}
              &lt;/<span style={{ color: "#00dc09" }}>DsTabPanel</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsTabs</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsTabs</span>{" "}
              <span style={{ color: "#00caff" }}>size</span>
              ="
              <span style={{ color: "#ffeb3b" }}>medium</span>"&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsTabPanel</span>{" "}
              <span style={{ color: "#00caff" }}>title</span>
              ="
              <span style={{ color: "#ffeb3b" }}>Tab 1</span>"&gt;
              <br />
              {"      "}
              Content of Tab 1
              <br />
              {"   "}
              &lt;/<span style={{ color: "#00dc09" }}>DsTabPanel</span>&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsTabPanel</span>{" "}
              <span style={{ color: "#00caff" }}>title</span>
              ="
              <span style={{ color: "#ffeb3b" }}>Tab 2</span>"&gt;
              <br />
              {"      "}
              Content of Tab 2
              <br />
              {"   "}
              &lt;/<span style={{ color: "#00dc09" }}>DsTabPanel</span>&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsTabPanel</span>{" "}
              <span style={{ color: "#00caff" }}>title</span>
              ="
              <span style={{ color: "#ffeb3b" }}>Tab 3</span>"&gt;
              <br />
              {"      "}
              Content of Tab 3
              <br />
              {"   "}
              &lt;/<span style={{ color: "#00dc09" }}>DsTabPanel</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsTabs</span>&gt;
            </>
          }
          codepen={"WNWyqeK"}
          github={"Tabs"}
          copy={
            "<DsTabs> <DsTabPanel title='Tab 1'> Content of Tab 1 </DsTabPanel> <DsTabPanel title='Tab 2'> Content of Tab 2 </DsTabPanel> <DsTabPanel title='Tab 3'> Content of Tab 3 </DsTabPanel> <DsTabs>"
          }
        />
        <Navigation prev="stepper" next="modal" />
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default TabsPage;
