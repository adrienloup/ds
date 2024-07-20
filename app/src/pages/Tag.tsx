import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Story } from "../components/Story/Story";
import { Navigation } from "../components/Navigation/Navigation";
import { DsTag } from "design-system/src/components/Tag/Tag";
import { DsIcon } from "design-system/src/components/Icon/Icon";

function TagPage() {
  // console.log("TagPage");
  useTitle("Tag component");

  return (
    <>
      <Header />
      <Main>
        <h1>
          Tag <span>component</span>
        </h1>
        <p>
          Usage Tag, and it could be closable and customize close button by set
          closeIcon property, will display default close button when closeIcon
          is setting to true. Closable Tag supports onClose events.
        </p>
        <p>
          We preset a series of colorful tag styles for use in different
          situations. You can also set it to a hex color string for custom
          color.
        </p>
        <h2>
          Basic <span>Tag</span>
        </h2>
        <p>
          Usage of basic Tag, and it could be closable and customize close
          button by set closeIcon property, will display default close button
          when closeIcon is setting to true. Closable Tag supports onClose
          events.
        </p>
        <Story
          demo={
            <>
              <DsTag variant="contained">Tag</DsTag>
              <DsTag variant="outlined">Tag</DsTag>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsTag</span>{" "}
              <span style={{ color: "#00caff" }}>variant</span>="
              <span style={{ color: "#ffeb3b" }}>contained</span>
              "&gt;Cyan&lt;/
              <span style={{ color: "#00dc09" }}>DsTag</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsTag</span>{" "}
              <span style={{ color: "#00caff" }}>variant</span>="
              <span style={{ color: "#ffeb3b" }}>outlined</span>
              "&gt;Cyan&lt;/
              <span style={{ color: "#00dc09" }}>DsTag</span>&gt;
            </>
          }
          codepen={"MWRBwYr"}
          github={"Tag"}
          copy={
            "<Tag variant='contained'>Tag</Tag>\n<Tag variant='outlined'>Tag</Tag>"
          }
        />
        <h2>
          Contained <span>Tag</span>
        </h2>
        <p>
          We preset a series of colorful tag styles for use in different
          situations. You can also set it to a hex color string for custom
          color.
        </p>
        <Story
          demo={
            <>
              <DsTag variant="contained" color="cyan">
                Cyan
              </DsTag>
              <DsTag variant="contained" color="magenta">
                Magenta
              </DsTag>
              <DsTag variant="contained" color="blue">
                blue
              </DsTag>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsTag</span>{" "}
              <span style={{ color: "#00caff" }}>variant</span>="
              <span style={{ color: "#ffeb3b" }}>contained</span>"{" "}
              <span style={{ color: "#00caff" }}>color</span>="
              <span style={{ color: "#ffeb3b" }}>cyan</span>"&gt;Cyan&lt;/
              <span style={{ color: "#00dc09" }}>DsTag</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsTag</span>{" "}
              <span style={{ color: "#00caff" }}>variant</span>="
              <span style={{ color: "#ffeb3b" }}>contained</span>"{" "}
              <span style={{ color: "#00caff" }}>color</span>="
              <span style={{ color: "#ffeb3b" }}>magenta</span>"&gt;Magenta&lt;/
              <span style={{ color: "#00dc09" }}>DsTag</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsTag</span>{" "}
              <span style={{ color: "#00caff" }}>variant</span>="
              <span style={{ color: "#ffeb3b" }}>contained</span>"{" "}
              <span style={{ color: "#00caff" }}>color</span>="
              <span style={{ color: "#ffeb3b" }}>blue</span>
              "&gt;blue&lt;/<span style={{ color: "#00dc09" }}>DsTag</span>
              &gt;
            </>
          }
          codepen={"MWRBwYr"}
          github={"Tag"}
          copy={
            "<DsTag color='cyan'>Cyan</DsTag>\n<DsTag color='magenta'>Magenta</DsTag>\n<DsTag color='blue'>blue</DsTag>"
          }
        />
        <h2>
          Outlined <span>Tag</span>
        </h2>
        <p>
          We preset a series of colorful tag styles for use in different
          situations. You can also set it to a hex color string for custom
          color.
        </p>
        <Story
          demo={
            <>
              <DsTag variant="outlined" color="cyan">
                Cyan
              </DsTag>
              <DsTag variant="outlined" color="magenta">
                Magenta
              </DsTag>
              <DsTag variant="outlined" color="blue">
                blue
              </DsTag>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsTag</span>{" "}
              <span style={{ color: "#00caff" }}>variant</span>="
              <span style={{ color: "#ffeb3b" }}>outlined</span>"{" "}
              <span style={{ color: "#00caff" }}>color</span>="
              <span style={{ color: "#ffeb3b" }}>cyan</span>"&gt;Cyan&lt;/
              <span style={{ color: "#00dc09" }}>DsTag</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsTag</span>{" "}
              <span style={{ color: "#00caff" }}>variant</span>="
              <span style={{ color: "#ffeb3b" }}>outlined</span>"{" "}
              <span style={{ color: "#00caff" }}>color</span>="
              <span style={{ color: "#ffeb3b" }}>magenta</span>"&gt;Magenta&lt;/
              <span style={{ color: "#00dc09" }}>DsTag</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsTag</span>{" "}
              <span style={{ color: "#00caff" }}>variant</span>="
              <span style={{ color: "#ffeb3b" }}>outlined</span>"{" "}
              <span style={{ color: "#00caff" }}>color</span>="
              <span style={{ color: "#ffeb3b" }}>blue</span>
              "&gt;blue&lt;/<span style={{ color: "#00dc09" }}>DsTag</span>
              &gt;
            </>
          }
          codepen={"MWRBwYr"}
          github={"Tag"}
          copy={
            "<DsTag color='cyan'>Cyan</DsTag>\n<DsTag color='magenta'>Magenta</DsTag>\n<DsTag color='blue'>blue</DsTag>"
          }
        />
        <h2>
          Sizes <span>Tag</span>
        </h2>
        <p>For larger or smaller tags, use the size prop.</p>
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
                <DsTag size="small" color="cyan">
                  Cyan
                </DsTag>
                <DsTag size="medium" color="cyan">
                  Cyan
                </DsTag>
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
                <DsTag size="small" variant="outlined" color="cyan">
                  Cyan
                </DsTag>
                <DsTag size="medium" variant="outlined" color="cyan">
                  Cyan
                </DsTag>
              </div>
            </div>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsTag</span>{" "}
              <span style={{ color: "#00caff" }}>size</span>="
              <span style={{ color: "#ffeb3b" }}>small</span>"&gt;Cyan&lt;/
              <span style={{ color: "#00dc09" }}>DsTag</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsTag</span>{" "}
              <span style={{ color: "#00caff" }}>size</span>="
              <span style={{ color: "#ffeb3b" }}>medium</span>"&gt;Cyan&lt;/
              <span style={{ color: "#00dc09" }}>DsTag</span>&gt;
            </>
          }
          codepen={"MWRBwYr"}
          github={"Tag"}
          copy={
            "<DsTag size='small'>Cyan</DsTag>\n<DsTag size='medium'>Cyan</DsTag>"
          }
        />
        <h2>
          Composite <span>Tag</span>
        </h2>
        <p>
          Tag components can contain an Icon. This is done by setting the icon
          property or placing an Icon component within the Tag.
        </p>
        <p>
          If you want specific control over the positioning and placement of the
          Icon, then that should be done by placing the Icon component within
          the Tag rather than using the icon property.
        </p>
        <Story
          demo={
            <>
              <DsTag color="blue">
                <DsIcon name="schedule" />
                Waiting
              </DsTag>
              <DsTag color="magenta">
                Stop
                <DsIcon name="block" />
              </DsTag>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsTag</span>{" "}
              <span style={{ color: "#00caff" }}>color</span>="
              <span style={{ color: "#ffeb3b" }}>blue</span>
              "&gt;
              <br />
              {"   "}&lt;<span style={{ color: "#00dc09" }}>DsIcon</span>{" "}
              <span style={{ color: "#00caff" }}>name</span>="
              <span style={{ color: "#ffeb3b" }}>schedule</span>
              "&gt;
              <br />
              {"   "}Waiting
              <br />
              &lt;/
              <span style={{ color: "#00dc09" }}>DsTag</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsTag</span>{" "}
              <span style={{ color: "#00caff" }}>color</span>="
              <span style={{ color: "#ffeb3b" }}>magenta</span>
              "&gt;
              <br />
              {"   "}Stop
              <br />
              {"   "}&lt;<span style={{ color: "#00dc09" }}>DsIcon</span>{" "}
              <span style={{ color: "#00caff" }}>name</span>="
              <span style={{ color: "#ffeb3b" }}>block</span>
              "&gt;
              <br />
              &lt;/
              <span style={{ color: "#00dc09" }}>DsTag</span>&gt;
            </>
          }
          codepen={"MWRBwYr"}
          github={"Tag"}
          copy={
            "<DsTag color='blue'><Icon name='schedule'>Waiting</DsTag>\n<DsTag color='blue'>Stop<Icon name='block'></DsTag>"
          }
        />
        <Navigation prev="progress" next="select" />
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default TagPage;
