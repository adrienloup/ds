import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Story } from "../components/Story/Story";
import { Navigation } from "../components/Navigation/Navigation";
import { DsTypography } from "design-system/src/components/Typography/Typography";

function TypographyPage() {
  // console.log("TypographyPage");
  useTitle("React Typography component");

  return (
    <>
      <Header />
      <Main>
        <h1>Typography</h1>
        <p>
          Use typography to present your design and content as clearly and
          efficiently as possible.
        </p>
        <h2>
          Prompt <span>font</span>
        </h2>
        <p>
          DS uses the{" "}
          <a
            href="https://fonts.google.com/specimen/Prompt"
            target="_blank"
            rel="noopen"
          >
            Prompt
          </a>{" "}
          font by default. Add it to your project via Fontsource, or with the
          Google Fonts CDN.
        </p>
        <p>
          To install Prompt through the Google Web Fonts CDN, add the following
          code inside your project's tag:
        </p>
        <Story
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>link</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>rel</span>="
              <span style={{ color: "#ffeb3b" }}>preconnect</span>"
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>href</span>="
              <span style={{ color: "#ffeb3b" }}>
                https://fonts.googleapis.com
              </span>
              " <br />
              &gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>link</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>rel</span>="
              <span style={{ color: "#ffeb3b" }}>preconnect</span>"
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>href</span>="
              <span style={{ color: "#ffeb3b" }}>
                https://fonts.gstatic.com
              </span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>crossorigin</span>
              <br />
              &gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>link</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>href</span>="
              <span style={{ color: "#ffeb3b" }}>
                https://fonts.googleapis.com/css2?family=Prompt:400;700;900;&display=swap
              </span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>rel</span>="
              <span style={{ color: "#ffeb3b" }}>stylesheet</span>
              "
              <br />
              &gt;
            </>
          }
        />
        <h2>
          Prompt <span>CSS classes</span>
        </h2>
        <Story
          code={
            <>
              .<span style={{ color: "#00dc09" }}>prompt-regular</span> &#123;
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>font-family</span>:{" "}
              <span style={{ color: "#ffeb3b" }}>"Prompt", sans-serif</span>;
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>font-weight</span>:{" "}
              <span style={{ color: "#ffeb3b" }}>400</span>;
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>font-style</span>:{" "}
              <span style={{ color: "#ffeb3b" }}>normal</span>;
              <br />
              &#125;
              <br />.<span style={{ color: "#00dc09" }}>
                prompt-regular
              </span>{" "}
              &#123;
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>font-family</span>:{" "}
              <span style={{ color: "#ffeb3b" }}>"Prompt", sans-serif</span>;
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>font-weight</span>:{" "}
              <span style={{ color: "#ffeb3b" }}>700</span>;
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>font-style</span>:{" "}
              <span style={{ color: "#ffeb3b" }}>normal</span>;
              <br />
              &#125;
              <br />.<span style={{ color: "#00dc09" }}>
                prompt-regular
              </span>{" "}
              &#123;
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>font-family</span>:{" "}
              <span style={{ color: "#ffeb3b" }}>"Prompt", sans-serif</span>;
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>font-weight</span>:{" "}
              <span style={{ color: "#ffeb3b" }}>900</span>;
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>font-style</span>:{" "}
              <span style={{ color: "#ffeb3b" }}>normal</span>;
              <br />
              &#125;
            </>
          }
        />
        <h2>
          Usage <span>Typography</span>
        </h2>
        <p>
          The Typography component follows the Material Design typographic scale
          that provides a limited set of type sizes that work well together for
          a consistent layout.
        </p>
        <Story
          demo={
            <div
              style={{
                maxWidth: "40rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <DsTypography variant="h1">h1. Heading</DsTypography>
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <DsTypography variant="h2">h2. Heading</DsTypography>
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <DsTypography variant="h3">h3. Heading</DsTypography>
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <DsTypography variant="h4">h4. Heading</DsTypography>
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <DsTypography variant="h5">h5. Heading</DsTypography>
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <DsTypography variant="h6">h6. Heading</DsTypography>
              </div>
              <div style={{ marginTop: "1.5rem", lineHeight: "1.5" }}>
                <DsTypography variant="body1">
                  body1. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
                  inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem
                  quibusdam.
                </DsTypography>
              </div>
              <div style={{ marginTop: "1.5rem", lineHeight: "1.5" }}>
                <DsTypography variant="body2">
                  body2. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
                  inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem
                  quibusdam.
                </DsTypography>
              </div>
            </div>
          }
          code={<></>}
          codepen={"WNWyqeK"}
          github={"Typography"}
          copy={""}
        />
        <h2>
          Semantic <span>Typography</span>
        </h2>
        <p>
          The Typography component uses the variantMapping prop to associate a
          UI variant with a semantic element. It's important to realize that the
          style of a typography component is independent from the semantic
          underlying element.
        </p>
        <p>
          To change the underlying element for a one-off situation, like
          avoiding two h1 elements in your page, use the tag prop:
        </p>
        <Story
          demo={
            <DsTypography variant="h1" tag="h2">
              h1. Heading
            </DsTypography>
          }
          code={<></>}
          codepen={"WNWyqeK"}
          github={"Typography"}
          copy={""}
        />
        <Navigation prev="badge" next="button" />
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default TypographyPage;
