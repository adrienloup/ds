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
import { DsBreadcrumbs } from "../library/Breadcrumbs/Breadcrumbs";

export default function BreadcrumbsPage() {
  const [settings, setSettings] = useState<boolean>(false);

  return (
    <>
      <TitleComponent title="Breadcrumbs Component" />
      <HeaderComponent pages={pages} categories={categories} />
      <MainComponent>
        <ToolBarComponent onClick={() => setSettings(!settings)} />
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
        <StoryCompponent
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
        <StoryCompponent
          demo={
            <>
              <div
                style={{
                  display: "flex",
                  flexFlow: "row wrap",
                  alignItems: "center",
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
            </>
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
        <PaginationComponent pages={pages} current="breadcrumbs" />
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
