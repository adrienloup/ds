import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Story } from "../components/Story/Story";
import { Navigation } from "../components/Navigation/Navigation";
import { DsBadge } from "design-system/src/components/Badge/Badge";
import { DsIcon } from "design-system/src/components/Icon/Icon";

function BadgePage() {
  // console.log("BadgePage");
  useTitle("React Badge component");

  return (
    <>
      <Header />
      <Main>
        <h1>
          Badge <span>component</span>
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
        <Story
          demo={
            <DsBadge value={10}>
              <DsIcon name="email" />
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
              &lt;/<span style={{ color: "#00dc09" }}>DsBadge</span>&gt;
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
        <Story
          demo={
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                }}
              >
                <DsBadge value={10} size="small">
                  <DsIcon name="email" />
                </DsBadge>
                <DsBadge value={10} size="medium">
                  <DsIcon name="email" />
                </DsBadge>
                <DsBadge value={10} size="large">
                  <DsIcon name="email" />
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
              &lt;/<span style={{ color: "#00dc09" }}>DsBadge</span>&gt;
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
              &lt;/<span style={{ color: "#00dc09" }}>DsBadge</span>&gt;
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
              &lt;/<span style={{ color: "#00dc09" }}>DsBadge</span>&gt;
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
        <Story
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
                  <DsIcon name="email" />
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
                  <DsIcon name="email" />
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
                  <DsIcon name="email" />
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
                  <DsIcon name="email" />
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
              &lt;/<span style={{ color: "#00dc09" }}>DsBadge</span>&gt;
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
              &lt;/<span style={{ color: "#00dc09" }}>DsBadge</span>&gt;
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
              &lt;/<span style={{ color: "#00dc09" }}>DsBadge</span>&gt;
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
              &lt;/<span style={{ color: "#00dc09" }}>DsBadge</span>&gt;
            </>
          }
          codepen={"WNWyqeK"}
          github={"Badge"}
          copy={"<DSBadge value={110}><Icon name={'delete'} /></DsBadge>"}
        />
        <Navigation prev="avatar" next="typography" />
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default BadgePage;
