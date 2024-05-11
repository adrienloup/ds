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
import { DsAlert } from "../library/Alert/Alert";

export default function AlertPage() {
  const [settings, setSettings] = useState<boolean>(false);

  return (
    <>
      <TitleComponent title="Alert Component" />
      <HeaderComponent pages={pages} categories={categories} />
      <MainComponent>
        <ToolBarComponent onClick={() => setSettings(!settings)} />
        <h1>
          Alert <span>Component</span>
        </h1>
        <p>
          Alerts display brief messages for the user without interrupting their
          use of the app. Alerts give users brief and potentially time-sensitive
          information in an unobtrusive manner.
        </p>
        <p>
          The Alert component includes several props for quickly customizing its
          styles to provide immediate visual cues about its contents.
        </p>
        <h2>
          Basic <span>Alert</span>
        </h2>
        <p>
          Alerts give users brief and potentially time-sensitive information in
          an unobtrusive manner.
        </p>
        <p>
          The Material UI Alert component includes several props for quickly
          customizing its styles to provide immediate visual cues about its
          contents.
        </p>
        <StoryCompponent
          demo={
            <DsAlert
              text={"Here is confirmation that your action was successful"}
              status={"success"}
            />
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsAlert</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>text</span>
              ="
              <span style={{ color: "#ffeb3b" }}>
                Here is confirmation that your action was successful
              </span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>status</span>
              ="
              <span style={{ color: "#ffeb3b" }}>success</span>
              "
              <br />
              /&gt;
            </>
          }
          codepen={"WNWyqeK"}
          github={"Alert"}
          copy={
            "<Alert text={'Here is confirmation that your action was successful'} status={'success'} />"
          }
        />
        <h2>
          Status <span>Alert</span>
        </h2>
        <p>
          The severity prop accepts four values representing different states
          success (the default), info, warning, and error with corresponding
          icon and color combinations for each:
        </p>
        <StoryCompponent
          demo={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <DsAlert text={"This is an info Alert"} status={"info"} />
              <DsAlert text={"This is a success Alert"} status={"success"} />
              <DsAlert text={"This is an warning Alert"} status={"warning"} />
              <DsAlert text={"This is an error Alert"} status={"error"} />
            </div>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsAlert</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>text</span>
              ="
              <span style={{ color: "#ffeb3b" }}>This is an info Alert</span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>status</span>
              ="
              <span style={{ color: "#ffeb3b" }}>info</span>
              "
              <br />
              /&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsAlert</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>text</span>
              ="
              <span style={{ color: "#ffeb3b" }}>This is an success Alert</span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>status</span>
              ="
              <span style={{ color: "#ffeb3b" }}>success</span>
              "
              <br />
              /&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsAlert</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>text</span>
              ="
              <span style={{ color: "#ffeb3b" }}>This is an warning Alert</span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>status</span>
              ="
              <span style={{ color: "#ffeb3b" }}>warning</span>
              "
              <br />
              /&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsAlert</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>text</span>
              ="
              <span style={{ color: "#ffeb3b" }}>This is an error Alert</span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>status</span>
              ="
              <span style={{ color: "#ffeb3b" }}>error</span>
              "
              <br />
              /&gt;
            </>
          }
          codepen={"WNWyqeK"}
          github={"Alert"}
          copy={
            "<DsAlert text={'This is an info Alert'} status={'info'} />\n<DsAlert text={'This is an success Alert'} status={'success'} />\n<DsAlert text={'This is an warning Alert'} status={'warning'} />\n<DsAlert text={'This is an error Alert'} status={'error'} />\n"
          }
        />
        <h2>
          Titles <span>Alert</span>
        </h2>
        <p>
          To add a title to an Alert, import the Alert Title component. You can
          nest this component above the message in your Alert for a neatly
          styled and properly aligned title, as shown below:
        </p>
        <StoryCompponent
          demo={
            <>
              <DsAlert
                title={"Success"}
                text={"This is a success Alert with an encouraging title"}
                status={"success"}
              />
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsAlert</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>title</span>
              ="
              <span style={{ color: "#ffeb3b" }}>Success</span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>text</span>
              ="
              <span style={{ color: "#ffeb3b" }}>
                This is a success Alert with an encouraging title
              </span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>status</span>
              ="
              <span style={{ color: "#ffeb3b" }}>success</span>
              "
              <br />
              /&gt;
            </>
          }
          codepen={"WNWyqeK"}
          github={"Alert"}
          copy={
            "<DsAlert text={'Here is confirmation that your action was successful'} status={'success'} />"
          }
        />
        <h2>
          Sizes <span>Alert</span>
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
                <DsAlert text={"Small"} status={"success"} size="small" />
                <DsAlert text={"Medium"} status={"success"} size="medium" />
                <DsAlert text={"Large"} status={"success"} size="large" />
              </div>
            </div>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsAlert</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>text</span>
              ="
              <span style={{ color: "#ffeb3b" }}>Small</span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>status</span>
              ="
              <span style={{ color: "#ffeb3b" }}>success</span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>size</span>
              ="
              <span style={{ color: "#ffeb3b" }}>small</span>
              "
              <br />
              /&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsAlert</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>text</span>
              ="
              <span style={{ color: "#ffeb3b" }}>Medium</span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>status</span>
              ="
              <span style={{ color: "#ffeb3b" }}>success</span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>size</span>
              ="
              <span style={{ color: "#ffeb3b" }}>medium</span>
              "
              <br />
              /&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsAlert</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>text</span>
              ="
              <span style={{ color: "#ffeb3b" }}>Large</span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>status</span>
              ="
              <span style={{ color: "#ffeb3b" }}>success</span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>size</span>
              ="
              <span style={{ color: "#ffeb3b" }}>large</span>
              "
              <br />
              /&gt;
            </>
          }
          codepen={"WNWyqeK"}
          github={"Alert"}
          copy={
            "<DsAlert text='Here is confirmation that your action was successful' status='success' size='small' />\n<DsAlert text='Here is confirmation that your action was successful' status='success' size='medium' />\n<DsAlert text='Here is confirmation that your action was successful' status='success' size='large' />"
          }
        />
        <h2>
          Remove <span>Alert</span>
        </h2>
        <p>
          Here useEffect hook is used for setting a timer to remove the alert if
          timeout prop is greater than 0 and handleRemove() prop is not null.
          Also if handleRemove() is not defined, the dismiss button will not be
          available.
        </p>
        <StoryCompponent
          demo={
            <DsAlert
              text={"Here is confirmation that your action was successful"}
              status={"success"}
              button
              handleRemove={() => {
                alert("Removed");
              }}
            />
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsAlert</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>text</span>
              ="
              <span style={{ color: "#ffeb3b" }}>
                Here is confirmation that your action was successful
              </span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>status</span>
              ="
              <span style={{ color: "#ffeb3b" }}>success</span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>handleRemove</span>
              ="
              <span style={{ color: "#ffeb3b" }}>
                () =&gt; &#123;alert('Removed')&#125;
              </span>
              "
              <br />
              /&gt;
            </>
          }
          codepen={"WNWyqeK"}
          github={"Alert"}
          copy={
            "<DsAlert text={'Here is confirmation that your action was successful'} status={'success'} />"
          }
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
