import { useState } from "react";
import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Story } from "../components/Story/Story";
import { Navigation } from "../components/Navigation/Navigation";
import { DsPagination } from "design-system/src/components/Pagination/Pagination";

function PaginationPage() {
  // console.log("PaginationPage");
  useTitle("Pagination component");

  const totalItems = 100;
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Header />
      <Main>
        <h1>
          Pagination <span>component</span>
        </h1>
        <p>
          The Pagination component enables the user to select a specific page
          from a range of pages.
        </p>
        <h2>
          Basic <span>pagination</span>
        </h2>
        <Story
          demo={
            <>
              <DsPagination
                ariaLabelBackButton="Page précédente"
                ariaLabelNextButton="Page suivante"
                pageCountLabel={`${
                  itemsPerPage * currentPage - itemsPerPage
                } - ${itemsPerPage * currentPage} sur ${totalItems}`}
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsPagination</span>
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>totalItems</span>
              =&#123;
              <span style={{ color: "#ffeb3b" }}>totalItems</span>&#125;
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>itemsPerPage</span>
              =&#123;
              <span style={{ color: "#ffeb3b" }}>itemsPerPage</span>
              &#125;
              <br />
              {"   "}
              <span style={{ color: "#00caff" }}>currentPage</span>=&#123;
              <span style={{ color: "#ffeb3b" }}>currentPage</span>&#125;
              <br />
              /&gt;
            </>
          }
          codepen={""}
          github={"Pagination"}
          copy={""}
        />
        <h2>
          Sizes <span>Pagination</span>
        </h2>
        <p>For larger or smaller Paginations, use the size prop.</p>
        <Story
          demo={
            <>
              <DsPagination
                size="s"
                ariaLabelBackButton="Page précédente"
                ariaLabelNextButton="Page suivante"
                pageCountLabel={`${
                  itemsPerPage * currentPage - itemsPerPage
                } - ${itemsPerPage * currentPage} sur ${totalItems}`}
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
              <div style={{ marginTop: "2rem" }}>
                <DsPagination
                  size="m"
                  ariaLabelBackButton="Page précédente"
                  ariaLabelNextButton="Page suivante"
                  pageCountLabel={`${
                    itemsPerPage * currentPage - itemsPerPage
                  } - ${itemsPerPage * currentPage} sur ${totalItems}`}
                  totalItems={totalItems}
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsPagination</span>{" "}
              <span style={{ color: "#00caff" }}>size</span>
              ="
              <span style={{ color: "#ffeb3b" }}>s</span>" /&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsPagination</span>{" "}
              <span style={{ color: "#00caff" }}>size</span>
              ="
              <span style={{ color: "#ffeb3b" }}>m</span>" /&gt;
            </>
          }
          codepen={""}
          github={"Pagination"}
          copy={""}
        />
        <h2>
          Variants <span>Pagination</span>
        </h2>
        <p>
          For pagination positioning that can vary from center to space between
          elements, use the prop variant.
        </p>
        <Story
          demo={
            <>
              <DsPagination
                variant="center"
                ariaLabelBackButton="Page précédente"
                ariaLabelNextButton="Page suivante"
                pageCountLabel={`${
                  itemsPerPage * currentPage - itemsPerPage
                } - ${itemsPerPage * currentPage} sur ${totalItems}`}
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
              <div style={{ width: "100%", marginTop: "2rem" }}>
                <DsPagination
                  variant="space-between"
                  ariaLabelBackButton="Page précédente"
                  ariaLabelNextButton="Page suivante"
                  pageCountLabel={`${
                    itemsPerPage * currentPage - itemsPerPage
                  } - ${itemsPerPage * currentPage} sur ${totalItems}`}
                  totalItems={totalItems}
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
            </>
          }
          code={
            <>
              &lt;<span style={{ color: "#00dc09" }}>DsPagination</span>{" "}
              <span style={{ color: "#00caff" }}>variant</span>
              ="
              <span style={{ color: "#ffeb3b" }}>center</span>" /&gt;
              <br />
              &lt;<span style={{ color: "#00dc09" }}>DsPagination</span>{" "}
              <span style={{ color: "#00caff" }}>variant</span>
              ="
              <span style={{ color: "#ffeb3b" }}>space-between</span>" /&gt;
            </>
          }
          codepen={""}
          github={"Pagination"}
          copy={""}
        />
        <Navigation prev="breadcrumbs" next="stepper" />
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default PaginationPage;
