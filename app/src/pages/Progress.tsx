import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Story } from "../components/Story/Story";
import { Navigation } from "../components/Navigation/Navigation";
import { DsProgress } from "design-system/src/components/Progress/Progress";

function ProgressPage() {
  // console.log("ProgressPage");
  useTitle("Progress");

  return (
    <>
      <Header />
      <Main>
        <h1>
          Progress <span>Component</span>
        </h1>
        <p>
          Progress, not to be mixed with Loader, is a component used to indicate
          the current advancement state of a process. It must be used to
          represent a process when the advancement state is known with
          precision.
        </p>
        <p>
          If the progress is describing the loading progress of a particular
          region of a page, you should use aria-describedby to point to the
          progress.
        </p>
        <h2>
          Basic <span>Progress</span>
        </h2>
        <p>
          Use the display property to choice the linear or circular progress.
        </p>
        <Story
          demo={
            <>
              <div style={{ width: "50%" }}>
                <DsProgress title="Loading" value={50} />
              </div>
              <div style={{ width: "50%", marginTop: "2rem" }}>
                <DsProgress title="Loading" value={50} display="circular" />
              </div>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsProgress</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>title</span>
              ="
              <span style={{ color: "#ffeb3b" }}>Loading</span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>display</span>
              ="
              <span style={{ color: "#ffeb3b" }}>linear</span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>value</span>
              ="
              <span style={{ color: "#ffeb3b" }}>&#123;50&#125;</span>
              "
              <br />
              /&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsProgress</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>title</span>
              ="
              <span style={{ color: "#ffeb3b" }}>Loading</span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>display</span>
              ="
              <span style={{ color: "#ffeb3b" }}>circular</span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>value</span>
              ="
              <span style={{ color: "#ffeb3b" }}>&#123;50&#125;</span>
              "
              <br />
              /&gt;
            </>
          }
          codepen={"WNWyqeK"}
          github={"Progress"}
          copy={
            "<DsProgress title='Loading' display='linear' value='{50}'/>\n<DsProgress title='Loading' display='circular' value='{50}'/>"
          }
        />
        <h2>
          Linear <span>Progress</span>
        </h2>
        <p>Use the display property to display the linear progress.</p>
        <Story
          demo={
            <>
              <div style={{ width: "50%" }}>
                <DsProgress title="Loading" value={50} />
              </div>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsProgress</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>title</span>
              ="
              <span style={{ color: "#ffeb3b" }}>Loading</span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>display</span>
              ="
              <span style={{ color: "#ffeb3b" }}>linear</span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>value</span>
              ="
              <span style={{ color: "#ffeb3b" }}>&#123;50&#125;</span>
              "
              <br />
              /&gt;
            </>
          }
          codepen={"WNWyqeK"}
          github={"Progress"}
          copy={"<DsProgress title='Loading' display='linear' value='{50}'/>"}
        />
        <h2>
          Circular <span>Progress</span>
        </h2>
        <p>Use the display property to display the circular progress.</p>
        <Story
          demo={
            <>
              <div style={{ width: "50%" }}>
                <DsProgress title="Loading" value={50} display="circular" />
              </div>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsProgress</span>{" "}
              <span style={{ color: "#00caff" }}>display</span>
              ="
              <span style={{ color: "#ffeb3b" }}>circular</span>" /&gt;
            </>
          }
          codepen={"WNWyqeK"}
          github={"Progress"}
          copy={"<DsProgress title='Loading' display='circular' value='{50}'/>"}
        />
        <h2>
          Sizes <span>Progress</span>
        </h2>
        <p>For larger or smaller Progress, use the size prop.</p>
        <Story
          demo={
            <>
              <div style={{ width: "50%" }}>
                <DsProgress title="Loading" value={50} />
              </div>
              <div style={{ width: "50%", marginTop: "1rem" }}>
                <DsProgress title="Loading" value={50} size="large" />
              </div>
              <div style={{ width: "50%", marginTop: "2rem" }}>
                <DsProgress title="Loading" value={50} display="circular" />
              </div>
              <div style={{ width: "50%", marginTop: "1rem" }}>
                <DsProgress
                  title="Loading"
                  value={50}
                  display="circular"
                  size="large"
                />
              </div>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsProgress</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>display</span>
              ="
              <span style={{ color: "#ffeb3b" }}>linear</span>
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
              &lt;<span style={{ color: "#00dc09" }}>DsProgress</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>display</span>
              ="
              <span style={{ color: "#ffeb3b" }}>linear</span>
              "
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>size</span>
              ="
              <span style={{ color: "#ffeb3b" }}>large</span>
              "
              <br />
              /&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsProgress</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>display</span>
              ="
              <span style={{ color: "#ffeb3b" }}>circular</span>
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
              &lt;<span style={{ color: "#00dc09" }}>Progress</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>display</span>
              ="
              <span style={{ color: "#ffeb3b" }}>circular</span>
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
          github={"Progress"}
          copy={
            "<DsProgress title='Loading' display='linear' value='{50}'/>\n<DsProgress title='Loading' display='circular' value='{50}'/>"
          }
        />
        <Navigation prev="alert" next="tag" />
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default ProgressPage;
