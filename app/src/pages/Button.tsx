import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Story } from "../components/Story/Story";
import { DsButton } from "design-system/src/components/Button/Button";
import { DsIcon } from "design-system/src/components/Icon/Icon";

function ButtonPage() {
  console.log("ButtonPage");
  useTitle("Button Page");

  return (
    <>
      <Header />
      <Main>
        <h1>
          Button <span>Component</span>
        </h1>
        <p>
          Buttons allow users to take actions, and make choices, with a single
          tap. Buttons communicate actions that users can take. They are
          typically placed throughout your UI, in places like: Modal windows,
          Forms, Cards, Toolbars.
        </p>
        <p>
          This unstyled version of the component is the ideal choice for heavy
          customization with a smaller bundle size.
        </p>
        <h2>
          Basic <span>Button</span>
        </h2>
        <p>
          The Button comes with three variants: contained (default), and
          outlined.
        </p>
        <Story
          demo={
            <>
              <DsButton>Contained</DsButton>
              <DsButton variant={"outlined"}>Outlined</DsButton>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsButton</span>{" "}
              <span style={{ color: "#00caff" }}>variant</span>
              ="<span style={{ color: "#ffeb3b" }}>contained</span>
              "&gt;Contained&lt;/
              <span style={{ color: "#00dc09" }}>DsButton</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsButton</span>{" "}
              <span style={{ color: "#00caff" }}>variant</span>
              ="<span style={{ color: "#ffeb3b" }}>outlined</span>
              "&gt;Outlined&lt;/
              <span style={{ color: "#00dc09" }}>DsButton</span>&gt;
            </>
          }
          codepen={"qBwmYpM"}
          github={"Button"}
          copy={
            "<DsButton variant='contained'>Contained</DsButton>\n<Button variant='outlined'>Outlined</DsButton>"
          }
        />
        <h2>
          Contained <span>Button</span>
        </h2>
        <p>
          Contained Buttons are high-emphasis, distinguished by their use of
          elevation and fill. They contain actions that are primary to your app.
        </p>
        <Story
          demo={
            <>
              <DsButton>Contained</DsButton>
              <DsButton disabled>Contained</DsButton>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsButton</span>{" "}
              <span style={{ color: "#00caff" }}>variant</span>
              ="<span style={{ color: "#ffeb3b" }}>contained</span>
              "&gt;Contained&lt;/
              <span style={{ color: "#00dc09" }}>DsButton</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsButton</span>{" "}
              <span style={{ color: "#00caff" }}>variant</span>
              ="<span style={{ color: "#ffeb3b" }}>contained</span>"{" "}
              <span style={{ color: "#00caff" }}>disabled</span>
              &gt;Contained&lt;/
              <span style={{ color: "#00dc09" }}>DsButton</span>&gt;
            </>
          }
          codepen={"qBwmYpM"}
          github={"Button"}
          copy={
            "<DsButton variant='contained'>Contained</DsButton>\n<Button variant='contained' disabled>Contained</DsButton>"
          }
        />
        <h2>
          Outlined <span>Button</span>
        </h2>
        <p>
          Outlined Buttons are medium-emphasis Buttons. They contain actions
          that are important but aren't the primary action in an app. Outlined
          Buttons are also a lower emphasis alternative to contained Buttons.
        </p>
        <Story
          demo={
            <>
              <DsButton variant={"outlined"}>Outlined</DsButton>
              <DsButton variant={"outlined"} disabled>
                Outlined
              </DsButton>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsButton</span>{" "}
              <span style={{ color: "#00caff" }}>variant</span>
              ="<span style={{ color: "#ffeb3b" }}>outlined</span>
              "&gt;Outlined&lt;/
              <span style={{ color: "#00dc09" }}>DsButton</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsButton</span>{" "}
              <span style={{ color: "#00caff" }}>variant</span>
              ="<span style={{ color: "#ffeb3b" }}>outlined</span>"{" "}
              <span style={{ color: "#00caff" }}>disabled</span>
              &gt;Outlined&lt;/
              <span style={{ color: "#00dc09" }}>DsButton</span>&gt;
            </>
          }
          codepen={"qBwmYpM"}
          github={"Button"}
          copy={
            "<DsButton variant='outlined'>Outlined</DsButton>\n<Button variant='outlined' disabled>Outlined</DsButton>"
          }
        />
        <h2>
          Sizes <span>Button</span>
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
                <DsButton size={"small"}>Small</DsButton>
                <DsButton>Medium</DsButton>
                <DsButton size={"large"}>Large</DsButton>
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
                <DsButton variant={"outlined"} size={"small"}>
                  Small
                </DsButton>
                <DsButton variant={"outlined"}>Medium</DsButton>
                <DsButton variant={"outlined"} size={"large"}>
                  Large
                </DsButton>
              </div>
            </div>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsButton</span>
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
              <span style={{ color: "#00dc09" }}>DsButton</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsButton</span>
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
              <span style={{ color: "#00dc09" }}>DsButton</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsButton</span>
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
              <span style={{ color: "#00dc09" }}>DsButton</span>&gt;
            </>
          }
          codepen={"qBwmYpM"}
          github={"Button"}
          copy={
            "<DsButton variant='contained' size='small'>Small</DsButton>\n<Button variant='contained' size='medium'>Medium</DsButton>\n<Button variant='contained' size='large'>Large</DsButton>\n<Button variant='outlined' size='small'>Small</DsButton>\n<Button variant='outlined' size='medium'>Medium</DsButton>\n<Button variant='outlined' size='large'>Large</DsButton>"
          }
        />
        <h2>
          Composite <span>Button</span>
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
              <DsButton>
                <DsIcon name={"delete"} />
                Deleted
              </DsButton>
              <DsButton variant={"outlined"}>
                Send
                <DsIcon name={"send"} />
              </DsButton>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsButton</span>&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsIcon</span>{" "}
              <span style={{ color: "#00caff" }}>name</span>
              ="<span style={{ color: "#ffeb3b" }}>delete</span>" /&gt;
              <br />
              {"   "}
              Deleted
              <br />
              &lt;/
              <span style={{ color: "#00dc09" }}>DsButton</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsButton</span>{" "}
              <span style={{ color: "#00caff" }}>variant</span>
              ="<span style={{ color: "#ffeb3b" }}>outlined</span>"&gt;
              <br />
              {"   "}
              Send
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsIcon</span>{" "}
              <span style={{ color: "#00caff" }}>name</span>
              ="<span style={{ color: "#ffeb3b" }}>send</span>" /&gt;
              <br />
              &lt;/
              <span style={{ color: "#00dc09" }}>DsButton</span>&gt;
            </>
          }
          codepen={"qBwmYpM"}
          github={"Button"}
          copy={
            "<DsButton><DsIcon name={'delete'} />Deleted</DsButton>\n<Button variant={'outlined'}>Send<DsIcon name={'send'} /></DsButton>"
          }
        />
        <h2>
          Icon <span>Button</span>
        </h2>
        <p>
          Icon Buttons are commonly found in app bars and toolbars. Icons are
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
              <DsButton>
                <DsIcon name={"shopping_cart"} />
              </DsButton>
              <DsButton variant={"outlined"}>
                <DsIcon name={"schedule"} />
              </DsButton>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsButton</span>&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsIcon</span>{" "}
              <span style={{ color: "#00caff" }}>name</span>
              ="<span style={{ color: "#ffeb3b" }}>shopping_cart</span>" /&gt;
              <br />
              &lt;/
              <span style={{ color: "#00dc09" }}>DsButton</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsButton</span>{" "}
              <span style={{ color: "#00caff" }}>variant</span>
              ="<span style={{ color: "#ffeb3b" }}>outlined</span>"&gt;
              <br />
              {"   "}
              &lt;<span style={{ color: "#00dc09" }}>DsIcon</span>{" "}
              <span style={{ color: "#00caff" }}>name</span>
              ="<span style={{ color: "#ffeb3b" }}>schedule</span>" /&gt;
              <br />
              &lt;/
              <span style={{ color: "#00dc09" }}>DsButton</span>&gt;
            </>
          }
          codepen={"qBwmYpM"}
          github={"Button"}
          copy={
            "<DsButton><DsIcon name={'shopping_cart'} /></DsButton>\n<Button variant={'outlined'}><DsIcon name={'schedule'} /></DsButton>"
          }
        />
        <h2>
          Status <span>Button</span>
        </h2>
        <p>Use status prop to apply theme color palette to component.</p>
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
                <DsButton status={"info"}>Info</DsButton>
                <DsButton status={"success"}>Success</DsButton>
                <DsButton status={"warning"}>Warning</DsButton>
                <DsButton status={"error"}>Error</DsButton>
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
                <DsButton variant={"outlined"} status={"info"}>
                  Info
                </DsButton>
                <DsButton variant={"outlined"} status={"success"}>
                  Success
                </DsButton>
                <DsButton variant={"outlined"} status={"warning"}>
                  Warning
                </DsButton>
                <DsButton variant={"outlined"} status={"error"}>
                  Error
                </DsButton>
              </div>
            </div>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsButton</span>{" "}
              <span style={{ color: "#00caff" }}>status</span>
              ="<span style={{ color: "#ffeb3b" }}>info</span>
              "&gt;Info&lt;/
              <span style={{ color: "#00dc09" }}>DsButton</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsButton</span>{" "}
              <span style={{ color: "#00caff" }}>status</span>
              ="<span style={{ color: "#ffeb3b" }}>success</span>
              "&gt;Success&lt;/
              <span style={{ color: "#00dc09" }}>DsButton</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsButton</span>{" "}
              <span style={{ color: "#00caff" }}>status</span>
              ="<span style={{ color: "#ffeb3b" }}>warning</span>
              "&gt;Warning&lt;/
              <span style={{ color: "#00dc09" }}>DsButton</span>&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsButton</span>{" "}
              <span style={{ color: "#00caff" }}>status</span>
              ="<span style={{ color: "#ffeb3b" }}>error</span>
              "&gt;Error&lt;/
              <span style={{ color: "#00dc09" }}>DsButton</span>&gt;
            </>
          }
          codepen={"qBwmYpM"}
          github={"Button"}
          copy={
            "<DsButton variant='contained' size='small'>Small</DsButton>\n<Button variant='contained' size='medium'>Medium</DsButton>\n<Button variant='contained' size='large'>Large</DsButton>\n<Button variant='outlined' size='small'>Small</DsButton>\n<Button variant='outlined' size='medium'>Medium</DsButton>\n<Button variant='outlined' size='large'>Large</DsButton>"
          }
        />
        <h2>
          More Attributes <span>Button</span>
        </h2>
        <p>
          When a label can't be used, it's necessary to add an attribute
          directly to the input component. In this case, you can apply the
          additional attribute (for example aria-label, aria-labelledby, title)
          via the inputProps prop.
        </p>
        <Story
          demo={
            <DsButton buttonProps={{ "aria-label": "Button A" }}>
              Button
            </DsButton>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsButton</span>{" "}
              <span style={{ color: "#00caff" }}>buttonProps</span>
              =&#123;&#123;
              <br />
              {"   "}
              <span style={{ color: "#ffeb3b" }}>'aria-label': 'Button A'</span>
              <br />
              &#125;&#125;&gt;Button&lt;/
              <span style={{ color: "#00dc09" }}>DsButton</span>&gt;
            </>
          }
          codepen={"qBwmYpM"}
          github={"Button"}
          copy={
            "<DsButton variant='contained' size='small'>Small</DsButton>\n<Button variant='contained' size='medium'>Medium</DsButton>\n<Button variant='contained' size='large'>Large</DsButton>\n<Button variant='outlined' size='small'>Small</DsButton>\n<Button variant='outlined' size='medium'>Medium</DsButton>\n<Button variant='outlined' size='large'>Large</DsButton>"
          }
        />
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default ButtonPage;
