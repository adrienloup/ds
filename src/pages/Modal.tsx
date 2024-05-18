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
import { DsModal } from "../library/Modal/Modal";

export default function TagPage() {
  const [settings, setSettings] = useState<boolean>(false);

  return (
    <>
      <TitleComponent title="Modal Component" />
      <HeaderComponent pages={pages} categories={categories} />
      <MainComponent>
        <ToolBarComponent onClick={() => setSettings(!settings)} />
        <h1>
          Modal <span>Component</span>
        </h1>
        <p>
          The modal component provides a solid foundation for creating dialogs,
          popovers, lightboxes, or whatever else.
        </p>
        <p>
          The component renders its children node in front of a backdrop
          component. The Modal offers important features: Manages modal stacking
          when one-at-a-time just isn't enough. Creates a backdrop, for
          disabling interaction below the modal. It disables scrolling of the
          page content while open. It properly manages focus; moving to the
          modal content, and keeping it there until the modal is closed. Adds
          the appropriate ARIA roles automatically.
        </p>
        <h2>
          Basic <span>Modal</span>
        </h2>
        <p>
          Modals can be nested, for example a select within a dialog, but
          stacking of more than two modals, or any two modals with a backdrop is
          discouraged.
        </p>
        <StoryCompponent
          demo={
            <>
              <DsModal
                onClick={() => {}}
                open={true}
                transition={false}
                maxWidth="32rem"
                style={{
                  position: "absolute",
                  zIndex: "initial",
                }}
              >
                <h3>Title in a modal</h3>
                <p>Text in a modal</p>
              </DsModal>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsModal</span>
              &gt;
              <br />
              {"   "}
              &lt;h3&gt;Title in a modal&lt;/h3&gt;
              <br />
              {"   "}
              &lt;p&gt;Text in a modal&lt;/p&gt;
              <br />
              &lt;/
              <span style={{ color: "#00dc09" }}>DsModal</span>&gt;
            </>
          }
          codepen={"WNWyqeK"}
          github={"Modal"}
          copy={
            "<DsModal><h3>Title in a modal</h3><p>Text in a modal</p></DsModal>"
          }
          css={{
            height: "260px",
          }}
        />
        <h2>
          Performance <span>Modal</span>
        </h2>
        <p>
          The content of modal is unmounted when closed. If you need to make the
          content available to search engines or render expensive component
          trees inside your modal while optimizing for interaction
          responsiveness it might be a good idea to change this default behavior
          by enabling the transition prop.
        </p>
        <StoryCompponent
          demo={
            <>
              <DsModal
                onClick={() => {}}
                open={true}
                transition={false}
                maxWidth="32rem"
                style={{
                  position: "absolute",
                  zIndex: "initial",
                }}
              >
                <h3>Title in a modal</h3>
                <p>Text in a modal</p>
              </DsModal>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsModal</span>{" "}
              <span style={{ color: "#00caff" }}>transition</span>=
              <span style={{ color: "#ffeb3b" }}>&#123;false&#125;</span>
              &gt;
              <br />
              {"   "}
              &lt;h3&gt;Title in a modal&lt;/h3&gt;
              <br />
              {"   "}
              &lt;p&gt;Text in a modal&lt;/p&gt;
              <br />
              &lt;/
              <span style={{ color: "#00dc09" }}>DsModal</span>&gt;
            </>
          }
          codepen={"WNWyqeK"}
          github={"Modal"}
          copy={
            "<DsModal transition={false}><h3>Title in a modal</h3><p>Text in a modal</p></DsModal>"
          }
          css={{
            height: "260px",
          }}
        />
        <h2>
          backdrop <span>Modal</span>
        </h2>
        <p>
          With the 'backdrop' property, the clickable background will not be
          displayed.
        </p>
        <StoryCompponent
          demo={
            <>
              <DsModal
                onClick={() => {}}
                open={true}
                transition={false}
                backdrop={false}
                maxWidth="32rem"
                style={{
                  position: "absolute",
                  zIndex: "initial",
                }}
              >
                <h3>Title in a modal</h3>
                <p>Text in a modal</p>
              </DsModal>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>MDsodal</span>{" "}
              <span style={{ color: "#00caff" }}>backdrop</span>=
              <span style={{ color: "#ffeb3b" }}>&#123;false&#125;</span>
              &gt;
              <br />
              {"   "}
              &lt;h3&gt;Title in a modal&lt;/h3&gt;
              <br />
              {"   "}
              &lt;p&gt;Text in a modal&lt;/p&gt;
              <br />
              &lt;/
              <span style={{ color: "#00dc09" }}>DsModal</span>&gt;
            </>
          }
          codepen={"WNWyqeK"}
          github={"Modal"}
          copy={
            "<DsModal backdrop={false}><h3>Title in a modal</h3><p>Text in a modal</p></DsModal>"
          }
          css={{
            height: "260px",
          }}
        />
        <PaginationComponent pages={pages} current="modal" />
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
