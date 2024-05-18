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
import { DsButton } from "../library/Button/Button";
import { DsIcon } from "../library/Icon/Icon";

export default function ButtonPage() {
  const [settings, setSettings] = useState<boolean>(false);

  return (
    <>
      <TitleComponent title="Button Component" />
      <HeaderComponent pages={pages} categories={categories} />
      <MainComponent>
        <ToolBarComponent onClick={() => setSettings(!settings)} />
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
        <StoryCompponent
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
        <StoryCompponent
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
        <StoryCompponent
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
        <StoryCompponent
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
        <StoryCompponent
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
        <StoryCompponent
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
        <StoryCompponent
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
        <PaginationComponent pages={pages} current="button" />
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
