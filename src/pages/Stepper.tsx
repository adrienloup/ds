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
import { DsStepper } from "../library/Stepper/Stepper";

export default function StepperPage() {
  const [settings, setSettings] = useState<boolean>(false);
  const [activeStepA, setActiveStepA] = useState<number>(1);
  const [activeStepB, setActiveStepB] = useState<number>(1);

  const steps: string[] = ["Fill out your name", "Confirmation", "Done"];

  const updateStepA = (index: number) => setActiveStepA(index);
  const updateStepB = (index: number) => setActiveStepB(index);

  return (
    <>
      <TitleComponent title="Stepper Component" />
      <HeaderComponent pages={pages} categories={categories} />
      <MainComponent>
        <ToolBarComponent onClick={() => setSettings(!settings)} />
        <h1>
          Stepper <span>Component</span>
        </h1>
        <p>
          Steppers convey progress through numbered steps. It provides a
          wizard-like workflow.
        </p>
        <p>
          Steppers display progress through a sequence of logical and numbered
          steps. They may also be used for navigation. Steppers may display a
          transient feedback message after a step is saved.
        </p>
        <h2>
          Basic <span>Stepper</span>
        </h2>
        <p>
          A linear stepper allows the user to complete the steps in sequence.
          The Stepper can be controlled by passing the current step index
          (zero-based) as the activeStep prop.
        </p>
        <p>
          Stepper orientation is set using the orientation prop. This example
          also shows the use of an optional step by placing the optional prop on
          the second Step component. Note that it's up to you to manage when an
          optional step is skipped.
        </p>
        <StoryCompponent
          demo={
            <>
              <DsStepper
                steps={steps}
                active={activeStepA}
                update={updateStepA}
              />
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsStepper</span>{" "}
              <span style={{ color: "#00caff" }}>steps</span>="
              <span style={{ color: "#ffeb3b" }}>
                ['Fill out your name', 'Confirmation', 'Done']
              </span>
              " /&gt;
            </>
          }
          codepen={"jORKjNe"}
          github={"Stepper"}
          copy={
            "<DsStepper steps=\n'['Fill out your name', 'Confirmation', 'Done']\n' />"
          }
        />
        <h2>
          Navigation <span>Stepper</span>
        </h2>
        <StoryCompponent
          demo={
            <>
              <DsStepper
                prev={"Previous"}
                next={"Next"}
                steps={steps}
                active={activeStepB}
                update={updateStepB}
              />
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsStepper</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>steps</span>="
              <span style={{ color: "#ffeb3b" }}>
                ['Fill out your name', 'Confirmation', 'Done']
              </span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>prev</span>="
              <span style={{ color: "#ffeb3b" }}>Previous</span>
              "<br />
              {"   "}
              <span style={{ color: "#00caff" }}>next</span>="
              <span style={{ color: "#ffeb3b" }}>Next</span>
              "
              <br />
              /&gt;
            </>
          }
          codepen={"jORKjNe"}
          github={"Stepper"}
          copy={
            "<Stepper steps=\n'['Fill out your name', 'Confirmation', 'Done']\n' prev='Previous' next='Next' />"
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
