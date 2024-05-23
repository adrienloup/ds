import { useCallback, useState } from "react";
import { useTitle } from "../hooks/useTitle";
import { useFetch } from "../hooks/useFetch";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Promote } from "../components/Promote/Promote";
import { SearchAndFind } from "../components/SearchAndFind/SearchAndFind";

import { Button } from "design-system/src/components/Button/Button";

function HomePage() {
  const [count, setCount] = useState(0);
  const { loading, data } = useFetch("src/data/pages.json");

  console.log("HomePage");

  useTitle("Home Page");

  const handleClick = useCallback(() => {
    console.log("handleClick", count);
  }, []);

  return (
    <>
      <Header />
      <Main>
        <h1>
          A pretty good library{" "}
          <span>of components for Web application's UI</span>
        </h1>
        <Promote
          head={<h2>Unlock the full power</h2>}
          body={
            <>
              <p>
                It includes a comprehensive collection of prebuilt components
                that are ready for use in production right out of the box, and
                features a suite of customization options that make it easy to
                implement your own custom design system on top of our
                components.
              </p>
              {/* <p>
                  Asset uploading is a feature. As a PRO member, you can
                  drag-and-drop upload files here to use as resources. Images, CSS
                  frameworks JavaScript libraries, 3D models, JSON data...
                  anything you want! You can even edit them anytime, like any
                  other code.
                </p> */}
            </>
          }
          foot={
            <button
              onClick={() => {
                handleClick();
              }}
            >
              button
            </button>
          }
        />
        <div>
          <Button />
          <Button />
        </div>

        <div>
          <button
            onClick={() => {
              handleClick();
            }}
          >
            count
          </button>
          <button
            onClick={() => {
              setCount((count) => count + 1);
            }}
          >
            count is {count}
          </button>
        </div>

        {loading && <div style={{ background: "red" }}>Loading...</div>}
        {data && (
          <div>
            <SearchAndFind list={data} />
            {JSON.stringify(data)}
          </div>
        )}
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default HomePage;
