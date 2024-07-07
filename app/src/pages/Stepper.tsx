import { useState } from "react";
import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Story } from "../components/Story/Story";
import { Navigation } from "../components/Navigation/Navigation";
import { DsStepper } from "design-system/src/components/Stepper/Stepper";

function StepperPage() {
  // console.log("StepperPage");
  useTitle("React Stepper component");

  const [activeStepA, setActiveStepA] = useState(1);
  const [activeStepB, setActiveStepB] = useState(1);

  const steps: string[] = ["Fill out your name", "Confirmation", "Done"];

  const updateStepA = (index: number) => setActiveStepA(index);
  const updateStepB = (index: number) => setActiveStepB(index);

  return (
    <>
      <Header />
      <Main>
        <h1>
          Stepper <span>component</span>
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
        <Story
          demo={
            <DsStepper
              steps={steps}
              active={activeStepA}
              update={updateStepA}
            />
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
        <Story
          demo={
            <DsStepper
              prev={"Previous"}
              next={"Next"}
              steps={steps}
              active={activeStepB}
              update={updateStepB}
            />
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
            "<DsStepper steps=\n'['Fill out your name', 'Confirmation', 'Done']\n' prev='Previous' next='Next' />"
          }
        />
        <Navigation prev="pagination" next="tabs" />
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default StepperPage;
