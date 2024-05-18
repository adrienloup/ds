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
import { DsTextField } from "../library/TextField/TextField";

export default function TextFieldPage() {
  const [settings, setSettings] = useState<boolean>(false);

  return (
    <>
      <TitleComponent title="TextField Component" />
      <HeaderComponent pages={pages} categories={categories} />
      <MainComponent>
        <ToolBarComponent onClick={() => setSettings(!settings)} />
        <h1>
          TextField <span>Component</span>
        </h1>
        <p>
          TextField component is used to prompt the user for a simple text
          value, such as personal information for example. The component is
          built on top of the FormField component. It includes a label, a
          helperText but also an error handling sytem.
        </p>
        <h2>
          Basic <span>TextField</span>
        </h2>
        <p>
          API reference docs for the React TextField component. Learn about the
          props, CSS, and other APIs of this exported module.
        </p>
        <StoryCompponent
          demo={
            <div style={{ width: "20rem" }}>
              <DsTextField />
            </div>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsTextField</span>{" "}
              <span style={{ color: "#00caff" }}>placeholder</span>="
              <span style={{ color: "#ffeb3b" }}>Placeholder</span>" /&gt;
            </>
          }
          codepen={"MWRBwYr"}
          github={"TextField"}
          copy={"<DsTextField placeholder='Placeholder' />"}
        />
        <h2>
          Label and helper text <span>TextField</span>
        </h2>
        <p>
          label and helperText props can be used to add a label above the
          control and a helper text below it. The label behaves as a standard
          HTML label, clicking on it will focus the control.
        </p>
        <StoryCompponent
          demo={
            <div style={{ width: "20rem" }}>
              <DsTextField label="Label" helperText="Helper text" />
            </div>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsTextField</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>label</span>="
              <span style={{ color: "#ffeb3b" }}>Label</span>"
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>placeholder</span>="
              <span style={{ color: "#ffeb3b" }}>Placeholder</span>"
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>helperText</span>="
              <span style={{ color: "#ffeb3b" }}>Helper text</span>"
              <br />
              /&gt;
            </>
          }
          codepen={"MWRBwYr"}
          github={"TextField"}
          copy={"<DsTextField placeholder='Placeholder' />"}
        />
        <h2>
          Prefix and suffix <span>TextField</span>
        </h2>
        <p>
          You might want to integrate icons or text to convey a meaning inside
          of your component. To do so, you can use the both prefix and suffix
          props to add some text or icons.
        </p>
        <StoryCompponent
          demo={
            <div style={{ width: "20rem" }}>
              <DsTextField prefix="person" placeholder="Your name" />
              <DsTextField suffix="euro" placeholder="Price" />
            </div>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsTextField</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>label</span>="
              <span style={{ color: "#ffeb3b" }}>Label</span>"
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>placeholder</span>="
              <span style={{ color: "#ffeb3b" }}>Placeholder</span>"
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>messageError</span>="
              <span style={{ color: "#ffeb3b" }}>Error message</span>"
              <br />
              /&gt;
            </>
          }
          codepen={"MWRBwYr"}
          github={"TextField"}
          copy={"<TextField placeholder='Placeholder' />"}
        />
        <h2>
          Statuses <span>TextField</span>
        </h2>
        <p>
          You can set success, warning and error statuses to the input to
          indicate a status of the control.
        </p>
        <StoryCompponent
          demo={
            <div style={{ width: "20rem" }}>
              <DsTextField status="success" />
              <DsTextField status="warning" />
              <DsTextField status="error" />
            </div>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsTextField</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>label</span>="
              <span style={{ color: "#ffeb3b" }}>Label</span>"
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>placeholder</span>="
              <span style={{ color: "#ffeb3b" }}>Placeholder</span>"
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>messageError</span>="
              <span style={{ color: "#ffeb3b" }}>Error message</span>"
              <br />
              /&gt;
            </>
          }
          codepen={"MWRBwYr"}
          github={"TextField"}
          copy={"<DsTextField placeholder='Placeholder' />"}
        />
        <h2>
          Error handling <span>TextField</span>
        </h2>
        <p>
          You can handle the error state by using both the error prop and the
          errorMessage prop. If the prop errorMessage is provided and is not
          empty, an error message will be displayed at the bottom side and the
          error state will be automatically enabled.
        </p>
        <StoryCompponent
          demo={
            <div style={{ width: "20rem" }}>
              <DsTextField label="Label" errorMessage="Error message" />
            </div>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsTextField</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>label</span>="
              <span style={{ color: "#ffeb3b" }}>Label</span>"
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>placeholder</span>="
              <span style={{ color: "#ffeb3b" }}>Placeholder</span>"
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>messageError</span>="
              <span style={{ color: "#ffeb3b" }}>Error message</span>"
              <br />
              /&gt;
            </>
          }
          codepen={"MWRBwYr"}
          github={"TextField"}
          copy={"<DsTextField placeholder='Placeholder' />"}
        />
        <PaginationComponent pages={pages} current="textfield" />
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
