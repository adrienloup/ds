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
import { DsTextField } from "../library/TextField/TextField";

export default function TextAreaPage() {
  const [settings, setSettings] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  return (
    <>
      <TitleComponent title="TextArea Component" />
      <HeaderComponent pages={pages} categories={categories} />
      <MainComponent>
        <ToolBarComponent onClick={() => setSettings(!settings)} />
        <h1>
          TextArea <span>Component</span>
        </h1>
        <p>
          The TextArea is a resizable input used to prompt the user for a
          parapraph of text, such as the description of an item. This is a use
          case of TextField component. It uses the prop multiline as true to
          transform the TextField into a TextArea component.
        </p>
        <h2>
          Basic <span>TextArea</span>
        </h2>
        <p>
          API reference docs for the React TextField component. Learn about the
          props, CSS, and other APIs of this exported module.
        </p>
        <StoryCompponent
          demo={
            <div style={{ width: "20rem" }}>
              <DsTextField multiline />
            </div>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsTextField</span>{" "}
              <span style={{ color: "#00caff" }}>placeholder</span>="
              <span style={{ color: "#ffeb3b" }}>Placeholder</span>"{" "}
              <span style={{ color: "#00caff" }}>multiline</span> /&gt;
            </>
          }
          codepen={"MWRBwYr"}
          github={"TextField"}
          copy={"<DsTextField placeholder='Placeholder' />"}
        />
        <h2>
          Label and helper text <span>TextArea</span>
        </h2>
        <p>
          label and helperText props can be used to add a label above the
          control and a helper text below it. The label behaves as a standard
          HTML label, clicking on it will focus the control.
        </p>
        <StoryCompponent
          demo={
            <div style={{ width: "20rem" }}>
              <DsTextField multiline label="Label" helperText="Helper text" />
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
              {"   "}
              <span style={{ color: "#00caff" }}>multiline</span>
              <br />
              /&gt;
            </>
          }
          codepen={"MWRBwYr"}
          github={"TextField"}
          copy={"<DsTextField placeholder='Placeholder' />"}
        />
        <h2>
          Max Length <span>TextArea</span>
        </h2>
        <p>
          You can also use the label element or the helperText element to pass
          information about the currently entered text.
        </p>
        <StoryCompponent
          demo={
            <div style={{ width: "20rem" }}>
              <DsTextField
                onChange={(e) => setValue(e.target.value)}
                helperText={`${value.length}/50`}
                max={50}
                multiline
              />
            </div>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsTextField</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>placeholder</span>="
              <span style={{ color: "#ffeb3b" }}>Placeholder</span>"
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>onChange</span>=
              <span style={{ color: "#ffeb3b" }}>
                &#123;(e) = setValue(e.target.value)&#125;
              </span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>helperText</span>=
              <span style={{ color: "#ffeb3b" }}>
                &#123;`$&#123;value.length&#125;/50`&#125;
              </span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>max</span>=
              <span style={{ color: "#ffeb3b" }}>&#123;50&#125;</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>multiline</span>
              <br />
              /&gt;
            </>
          }
          codepen={"MWRBwYr"}
          github={"TextField"}
          copy={"<DsTextField placeholder='Placeholder' />"}
        />
        <h2>
          Statuses <span>TextArea</span>
        </h2>
        <p>
          You can set success, warning and error statuses to the input to
          indicate a status of the control.
        </p>
        <StoryCompponent
          demo={
            <div style={{ width: "20rem" }}>
              <DsTextField status="success" multiline />
              <DsTextField status="warning" multiline />
              <DsTextField status="error" multiline />
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
              {"   "}
              <span style={{ color: "#00caff" }}>multiline</span>
              <br />
              /&gt;
            </>
          }
          codepen={"MWRBwYr"}
          github={"TextField"}
          copy={"<DsTextField placeholder='Placeholder' />"}
        />
        <h2>
          Error handling <span>TextArea</span>
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
              <DsTextField
                label="Label"
                errorMessage="Error message"
                multiline
              />
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
              {"   "}
              <span style={{ color: "#00caff" }}>multiline</span>
              <br />
              /&gt;
            </>
          }
          codepen={"MWRBwYr"}
          github={"TextField"}
          copy={"<DsTextField placeholder='Placeholder' />"}
        />
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
