import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Story } from "../components/Story/Story";
import { Navigation } from "../components/Navigation/Navigation";
import { DsIcon } from "design-system/src/components/Icon/Icon";
import { DsFab } from "design-system/src/components/Fab/Fab";

function FabPage() {
  // console.log("FabPage");
  useTitle("React Fab component");

  return (
    <>
      <Header />
      <Main>
        <h1>
          FAB <span>component</span>
        </h1>
        <p>
          A Floating Action Button (FAB) performs the primary, or most common,
          action on a screen. A floating action button appears in front of all
          screen content, typically as a circular shape with an icon in its
          center. FABs come in two types: regular, and extended.
        </p>
        <h2>
          Basic <span>FAB</span>
        </h2>
        <p>
          Only use a FAB if it is the most suitable way to present a screen's
          primary action. Only one component is recommended per screen to
          represent the most common action.
        </p>
        <Story
          demo={
            <>
              <DsFab>Contained</DsFab>
              <DsFab disabled>Contained</DsFab>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsFab</span>{" "}
              <span style={{ color: "#00caff" }}>variant</span>
              ="<span style={{ color: "#ffeb3b" }}>contained</span>
              "&gt;Contained&lt;/
              <span style={{ color: "#00dc09" }}>DsFab</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsFab</span>{" "}
              <span style={{ color: "#00caff" }}>variant</span>
              ="<span style={{ color: "#ffeb3b" }}>contained</span>"{" "}
              <span style={{ color: "#00caff" }}>disabled</span>
              &gt;Contained&lt;/
              <span style={{ color: "#00dc09" }}>DsFab</span>&gt;
            </>
          }
          codepen={"qBwmYpM"}
          github={"Button"}
          copy={
            "<DsFab variant='contained'>Contained</DsFab>\n<DsFab variant='contained' disabled>Contained</DsFab>"
          }
        />
        <h2>
          Sizes <span>FAB</span>
        </h2>
        <p>For larger or smaller Buttons, use the size prop.</p>
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
                <DsFab size={"small"}>Small</DsFab>
                <DsFab>Medium</DsFab>
                <DsFab size={"large"}>Large</DsFab>
              </div>
            </div>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsFab</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>variant</span>
              ="<span style={{ color: "#ffeb3b" }}>contained</span>"
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>size</span>
              ="<span style={{ color: "#ffeb3b" }}>small</span>
              "
              <br />
              &gt;
              <br />
              {"   "}Small
              <br />
              &lt;/
              <span style={{ color: "#00dc09" }}>DsFab</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsFab</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>variant</span>
              ="<span style={{ color: "#ffeb3b" }}>contained</span>"
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>size</span>
              ="<span style={{ color: "#ffeb3b" }}>medium</span>
              "<br />
              &gt;
              <br />
              {"   "}Medium
              <br />
              &lt;/
              <span style={{ color: "#00dc09" }}>DsFab</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsFab</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>variant</span>
              ="<span style={{ color: "#ffeb3b" }}>contained</span>"
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>size</span>
              ="<span style={{ color: "#ffeb3b" }}>large</span>
              "
              <br />
              &gt;
              <br />
              {"   "}Large
              <br />
              &lt;/
              <span style={{ color: "#00dc09" }}>DsFab</span>&gt;
            </>
          }
          codepen={"qBwmYpM"}
          github={"Button"}
          copy={
            "<DsFab variant='contained' size='small'>Small</DsFab>\n<DsFab variant='contained' size='medium'>Medium</DsFab>\n<DsFab variant='contained' size='large'>Large</DsFab>"
          }
        />
        <h2>
          Composite <span>FAB</span>
        </h2>
        <p>
          Sometimes you might want to have icons for certain Buttons to enhance
          the UX of the application as we recognize logos more easily than plain
          text. For example, if you have a delete button you can label it with a
          dustbin icon.
        </p>
        <Story
          demo={
            <>
              <DsFab>
                <DsIcon name={"delete"} />
                Deleted
              </DsFab>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsFab</span>&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>Icon</span>{" "}
              <span style={{ color: "#00caff" }}>name</span>
              ="<span style={{ color: "#ffeb3b" }}>delete</span>" /&gt;
              <br />
              {"   "}
              Deleted
              <br />
              &lt;/
              <span style={{ color: "#00dc09" }}>DsFab</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsFab</span>{" "}
              <span style={{ color: "#00caff" }}>variant</span>
              ="<span style={{ color: "#ffeb3b" }}>outlined</span>"&gt;
              <br />
              {"   "}
              Send
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>Icon</span>{" "}
              <span style={{ color: "#00caff" }}>name</span>
              ="<span style={{ color: "#ffeb3b" }}>send</span>" /&gt;
              <br />
              &lt;/
              <span style={{ color: "#00dc09" }}>DsFab</span>&gt;
            </>
          }
          codepen={"qBwmYpM"}
          github={"Button"}
          copy={
            "<DsFab><Icon name={'delete'} />Deleted</DsFab>\n<DsFab variant={'outlined'}>Send<Icon name={'send'} /></DsFab>"
          }
        />
        <h2>
          Icon <span>FAB</span>
        </h2>
        <p>
          Icon Buttons are commonly found in app bars and ToolsBars. Icons are
          also appropriate for toggle Buttons that allow a single choice to be
          selected or deselected, such as adding or removing a star to an item.
          Icon Buttons use{" "}
          <a
            href="https://fonts.google.com/icons?selected=Material+Icons:favorite:&icon.set=Material+Icons&icon.style=Filled"
            target="_blank"
            rel="noopener"
          >
            Material Icons
          </a>{" "}
          which are available in five styles and a range of downloadable sizes
          and densities.
        </p>
        <Story
          demo={
            <>
              <DsFab>
                <DsIcon name={"shopping_cart"} />
              </DsFab>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsFab</span>&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsIcon</span>{" "}
              <span style={{ color: "#00caff" }}>name</span>
              ="<span style={{ color: "#ffeb3b" }}>shopping_cart</span>" /&gt;
              <br />
              &lt;/
              <span style={{ color: "#00dc09" }}>DsFab</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsFab</span>{" "}
              <span style={{ color: "#00caff" }}>variant</span>
              ="<span style={{ color: "#ffeb3b" }}>outlined</span>"&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsIcon</span>{" "}
              <span style={{ color: "#00caff" }}>name</span>
              ="<span style={{ color: "#ffeb3b" }}>schedule</span>" /&gt;
              <br />
              &lt;/
              <span style={{ color: "#00dc09" }}>DsFab</span>&gt;
            </>
          }
          codepen={"qBwmYpM"}
          github={"Button"}
          copy={
            "<DsFab><DsIcon name={'shopping_cart'} /></DsFab>\n<DsFab variant={'outlined'}><DsIcon name={'schedule'} /></DsFab>"
          }
        />
        <Navigation prev="button" next="alert" />
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default FabPage;
