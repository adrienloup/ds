import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Story } from "../components/Story/Story";
import { Navigation } from "../components/Navigation/Navigation";
import { DsAvatar } from "design-system/src/components/Avatar/Avatar";

function AvatarPage() {
  // console.log("AvatarPage");
  useTitle("React Avatar component");

  return (
    <>
      <Header />
      <Main>
        <h1>
          Avatar <span>component</span>
        </h1>
        <p>
          Avatars are found throughout material design with uses in everything
          from tables to dialog menus.
        </p>
        <h2>
          Image <span>Avatar</span>
        </h2>
        <p>
          Image avatars can be created by passing standard img props src to the
          component.
        </p>
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
          Letter <span>Avatar</span>
        </h2>
        <p>
          Avatars containing simple characters can be created by passing a
          string as children.
        </p>
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
          Sizes <span>Button</span>
        </h2>
        <p>For larger or smaller Avatar, use the size prop.</p>
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
