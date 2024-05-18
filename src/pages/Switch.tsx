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
import { DsSwitch } from "../library/Switch/Switch";

export default function SwitchPage() {
  const [settings, setSettings] = useState<boolean>(false);

  return (
    <>
      <TitleComponent title="Switch Component" />
      <HeaderComponent pages={pages} categories={categories} />
      <MainComponent>
        <ToolBarComponent onClick={() => setSettings(!settings)} />
        <h1>
          Switch <span>Component</span>
        </h1>
        <p>Switches toggle the state of a single setting on or off.</p>
        <p>
          Switches are the preferred way to adjust settings on mobile. The
          option that the switch controls, as well as the state it's in, should
          be made clear from the corresponding inline label.
        </p>
        <h2>
          Basic <span>Switch</span>
        </h2>
        <p>
          Component Switch allow users to toggle between two or more content
          sections within the same space on screen. Only one content section is
          shown at a time. Create Switch components for each section in the
          Switch.
        </p>
        <StoryCompponent
          demo={<DsSwitch label="Label" />}
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsSwitch</span>{" "}
              <span style={{ color: "#00caff" }}>label</span>="
              <span style={{ color: "#ffeb3b" }}>Label</span>" /&gt;
            </>
          }
          codepen={"jORKjNe"}
          github={"Switch"}
          copy={"<DsSwitch label='Label' />"}
        />
        <h2>
          Disabled <span>Switch</span>
        </h2>
        <p>Specify whether the Switch should be disabled with disabled prop.</p>
        <StoryCompponent
          demo={<DsSwitch label="Disabled" disabled />}
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsSwitch</span>{" "}
              <span style={{ color: "#00caff" }}>label</span>="
              <span style={{ color: "#ffeb3b" }}>Disabled</span>"{" "}
              <span style={{ color: "#00caff" }}>disabled</span> /&gt;
            </>
          }
          codepen={"jORKjNe"}
          github={"Switch"}
          copy={"<DsSwitch label='Disabled' disabled />"}
        />
        <h2>
          Sizes <span>Switch</span>
        </h2>
        <p>For larger or smaller Switch, use the size prop.</p>
        <StoryCompponent
          demo={
            <>
              <DsSwitch label="Label" size="small" />
              <DsSwitch label="Label" size="medium" />
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsSwitch</span>{" "}
              <span style={{ color: "#00caff" }}>label</span>="
              <span style={{ color: "#ffeb3b" }}>Label</span>"{" "}
              <span style={{ color: "#00caff" }}>size</span>="
              <span style={{ color: "#ffeb3b" }}>small</span>" /&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsSwitch</span>{" "}
              <span style={{ color: "#00caff" }}>label</span>="
              <span style={{ color: "#ffeb3b" }}>Label</span>"{" "}
              <span style={{ color: "#00caff" }}>size</span>="
              <span style={{ color: "#ffeb3b" }}>medium</span>" /&gt;
            </>
          }
          codepen={"jORKjNe"}
          github={"Switch"}
          copy={
            "<DsSwitch label='Label' size='small' />\n<DsSwitch label='Label' size='medium' />"
          }
        />
        <h2>
          Default Checked <span>Switch</span>
        </h2>
        <StoryCompponent
          demo={<DsSwitch label="Default Checked" checked />}
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsSwitch</span>{" "}
              <span style={{ color: "#00caff" }}>label</span>="
              <span style={{ color: "#ffeb3b" }}>Label</span>"{" "}
              <span style={{ color: "#00caff" }}>checked</span> /&gt;
            </>
          }
          codepen={"jORKjNe"}
          github={"Switch"}
          copy={"<DsSwitch label='Label' checked />"}
        />
        <PaginationComponent pages={pages} current="switch" />
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
