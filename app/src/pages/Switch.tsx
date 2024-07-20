import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Story } from "../components/Story/Story";
import { Navigation } from "../components/Navigation/Navigation";
import { DsSwitch } from "design-system/src/components/Switch/Switch";

function SwitchPage() {
  // console.log("SwitchPage");
  useTitle("React Switch component");

  return (
    <>
      <Header />
      <Main>
        <h1>
          Switch <span>component</span>
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
        <Story
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
        <Story
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
        <Story
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
        <Story
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
        <Navigation prev="select" next="textfield" />
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default SwitchPage;
