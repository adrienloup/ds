import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Story } from "../components/Story/Story";
import { Navigation } from "../components/Navigation/Navigation";
import { DsBreadcrumbs } from "design-system/src/components/Breadcrumbs/Breadcrumbs";

function BreadcrumbsPage() {
  console.log("BreadcrumbsPage");
  useTitle("Breadcrumbs Page");

  return (
    <>
      <Header />
      <Main>
        <h1>
          Breadcrumbs <span>Component</span>
        </h1>
        <p>
          The Breadcrumbs component allows the user to locate the current page
          inside an application flow. The links that make the bread crumbs allow
          the user to navigate inside of the app.
        </p>
        <h2>
          Basic <span>Breadcrumbs</span>
        </h2>
        <p>
          The breadcrumbs is a list of links that help visualize a page's
          location within a site's hierarchical structure, it allows navigation
          up to any of the ancestors.
        </p>
        <Story
          demo={
            <DsBreadcrumbs
              list={[
                { title: "Home" },
                { title: "Shopping Cart" },
                { title: "Payment" },
                { title: "Confirmation", current: true },
              ]}
            />
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsBreadcrumbs</span>{" "}
              <span style={{ color: "#00caff" }}>list</span>
              ="
              <span style={{ color: "#ffeb3b" }}>
                &#123;[
                <br />
                {"   "}
                &#123;title: 'Home', path: '/'&#125;,
                <br />
                {"   "}
                &#123;title: 'Shopping Cart', path: '/cart'&#125;
                <br />
                {"   "}
                &#123;title: 'Payment', path: '/cart/payment'&#125;
                <br />
                {"   "}
                &#123;title: 'Confirmation', path: '/cart/payment/confirmation',
                current: true&#125;
                <br />
                ]&#125;
              </span>
              " /&gt;
            </>
          }
          codepen={"qBwmYpM"}
          github={"Breadcrumbs"}
          copy={
            "<DsBreadcrumbs list='{[{title: 'Home', path: '/'},{title: 'Shopping Cart', path: '/cart'}{title: 'Payment', path: '/cart/payment'}{title: 'Confirmation', path: '/cart/payment/confirmation'}]}' />"
          }
        />
        <h2>
          Sizes <span>Breadcrumbs</span>
        </h2>
        <p>For larger or smaller Breadcrumbs, use the size prop.</p>
        <Story
          demo={
            <div
              style={{
                display: "flex",
                flexFlow: "row wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <DsBreadcrumbs
                list={[
                  { title: "Home" },
                  { title: "Shopping Cart" },
                  { title: "Payment" },
                  { title: "Confirmation", current: true },
                ]}
                size="small"
              />
              <DsBreadcrumbs
                list={[
                  { title: "Home" },
                  { title: "Shopping Cart" },
                  { title: "Payment" },
                  { title: "Confirmation", current: true },
                ]}
                size="medium"
              />
            </div>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsBreadcrumbs</span>{" "}
              <span style={{ color: "#00caff" }}>size</span>="
              <span style={{ color: "#ffeb3b" }}>small</span>" /&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsBreadcrumbs</span>{" "}
              <span style={{ color: "#00caff" }}>size</span>="
              <span style={{ color: "#ffeb3b" }}>medium</span>" /&gt;
            </>
          }
          codepen={"qBwmYpM"}
          github={"Breadcrumbs"}
          copy={
            "<DsBreadcrumbs list='{[{title: 'Home', path: '/'},{title: 'Shopping Cart', path: '/cart'}{title: 'Payment', path: '/cart/payment'}{title: 'Confirmation', path: '/cart/payment/confirmation'}]}' />"
          }
        />
        <Navigation prev="textfield" next="stepper" />
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default BreadcrumbsPage;
